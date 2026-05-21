#!/usr/bin/env bash
# Resolve LinkedIn provider_id per slug via Unipile, merge into campaign_leads.linkedin_profile_meta,
# then start a LinkedIn chat with the same message per lead.
set -euo pipefail

: "${UNIPILE_API_KEY:?export UNIPILE_API_KEY}"
: "${UNIPILE_ACCOUNT_ID:?export UNIPILE_ACCOUNT_ID}"
: "${SUPABASE_URL:?export SUPABASE_URL (e.g. https://xxxx.supabase.co)}"
: "${SUPABASE_SERVICE_ROLE_KEY:?export SUPABASE_SERVICE_ROLE_KEY}"

UNIPILE_URL="${UNIPILE_URL:-https://api28.unipile.com:15888}"

# Generic message (edit or export MESSAGE=... before running)
MESSAGE="${MESSAGE:-Thanks for connecting! I've been chatting with startup founders about how they validate new ideas, and I'm curious how you approach it. When you're testing something new, do you usually ship something quickly, talk to customers first, or launch an ad campaign to see what sticks?

Would you mind sharing what's worked best for you so far?}"

# slug|campaign_lead_id (exclude Fabian)
PAIRS=(
  "miguel-bacelar-627b4011|447a8613-f6ee-4a3d-b6d1-0c07fcdac5ce"
  "dr-javad-vaseghi-8176a580|60781c18-efe3-416c-bd6d-afc8322830e7"
  "ahlem-meddeb-b99ab13b8|90149ba5-ca99-4d61-81de-d41a61199fab"
  "lilybergmann|09fdc2cb-3722-4009-a9e2-0c01e8d1a67b"
  "basploeg|a5c3a124-0cb7-4442-9f8f-fec4cb3ab1a5"
  "simtue|58c5b6e9-6e78-459d-a0c8-04b1ac7b6f93"
)

HDR=( -H "apikey: ${SUPABASE_SERVICE_ROLE_KEY}" -H "Authorization: Bearer ${SUPABASE_SERVICE_ROLE_KEY}" )

for entry in "${PAIRS[@]}"; do
  slug="${entry%%|*}"
  clid="${entry#*|}"
  echo "=== ${slug} (${clid}) ==="

  # 1) Unipile: resolve provider_id
  prof_json="$(curl -sS -G "${UNIPILE_URL}/api/v1/users/${slug}" \
    -H "X-API-KEY: ${UNIPILE_API_KEY}" \
    -H "accept: application/json" \
    --data-urlencode "account_id=${UNIPILE_ACCOUNT_ID}")"

  pid="$(echo "$prof_json" | jq -r '.provider_id // empty')"
  if [[ -z "$pid" ]]; then
    echo "ERROR: no provider_id for slug=${slug}" >&2
    echo "$prof_json" | jq . >&2 || echo "$prof_json" >&2
    exit 1
  fi
  echo "provider_id=${pid}"

  # 2) Supabase: read current linkedin_profile_meta, merge provider_id, PATCH
  current="$(curl -sS "${SUPABASE_URL}/rest/v1/campaign_leads?id=eq.${clid}&select=linkedin_profile_meta" "${HDR[@]}")"
  merged="$(echo "$current" | jq --arg p "$pid" '.[0].linkedin_profile_meta // {} | if type == "object" then . else {} end | . + {provider_id: $p}')"

  curl -sS -X PATCH "${SUPABASE_URL}/rest/v1/campaign_leads?id=eq.${clid}" \
    "${HDR[@]}" \
    -H "Content-Type: application/json" \
    -H "Prefer: return=minimal" \
    -d "{\"linkedin_profile_meta\":${merged}}" >/dev/null
  echo "Supabase updated campaign_lead_id=${clid}"

  # 3) Unipile: start chat (one attendee)
  chat_json="$(curl -sS --request POST "${UNIPILE_URL}/api/v1/chats" \
    -H "X-API-KEY: ${UNIPILE_API_KEY}" \
    -H "accept: application/json" \
    --form "account_id=${UNIPILE_ACCOUNT_ID}" \
    --form "attendees_ids=${pid}" \
    --form "text=${MESSAGE}")"

  echo "$chat_json" | jq .
  cid="$(echo "$chat_json" | jq -r '.chat_id // .id // empty')"
  if [[ -z "$cid" ]]; then
    echo "ERROR: start chat failed for ${slug}" >&2
    exit 1
  fi

  # 4) Optional: persist Unipile chat_id on the lead (same as execution_worker)
  esc_cid="$(echo "$cid" | jq -Rs 'sub("\\n$";"")')"
  curl -sS -X PATCH "${SUPABASE_URL}/rest/v1/campaign_leads?id=eq.${clid}" \
    "${HDR[@]}" \
    -H "Content-Type: application/json" \
    -H "Prefer: return=minimal" \
    -d "{\"unipile_chat_id\":${esc_cid}}" >/dev/null
  echo "Stored unipile_chat_id on campaign_lead_id=${clid}"
  echo
done

echo "Done."
