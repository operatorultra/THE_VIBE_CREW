import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B_8Yv5Jo.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_Bzb0pHYA.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/home/Development/Projects/psyche_daily/THE_VIBE_CREW/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/assessment","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/assessment\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"assessment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/assessment.ts","pathname":"/api/assessment","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=document.getElementById(\"assessment-form\"),a=document.getElementById(\"assessment-status\");if(n){const o=n.querySelector(\"input[name='email']\"),i=n.querySelector(\"input[name='phone']\");let r=\"submit\";const u=n.querySelectorAll(\"button[type='submit'][data-intent]\");u.forEach(t=>{t.addEventListener(\"click\",()=>{r=t.dataset.intent||\"submit\"})});const g=t=>{u.forEach(e=>{e.disabled=t,e.style.opacity=t?\"0.7\":\"1\",e.style.cursor=t?\"not-allowed\":\"pointer\"})},c=()=>{const t=o&&o.value.trim().length>0,e=i&&i.value.trim().length>0,l=t||e?\"\":\"Provide at least one contact method: email or phone.\";return o&&o.setCustomValidity(l),i&&i.setCustomValidity(l),t||e};o&&o.addEventListener(\"input\",c),i&&i.addEventListener(\"input\",c),n.addEventListener(\"submit\",t=>{t.preventDefault();const e=c(),l=n.reportValidity();if(!e||!l)return;const s=new FormData(n),p=(s.get(\"name\")||\"\").toString().trim(),h=(s.get(\"landingPage\")||\"\").toString().trim(),f=(s.get(\"email\")||\"\").toString().trim(),y=(s.get(\"phone\")||\"\").toString().trim(),b=(s.get(\"concept\")||\"\").toString().trim(),S=(s.get(\"links\")||\"\").toString().trim(),k={name:p,landingPage:h,email:f,phone:y,concept:b,links:S,submitIntent:r};a&&(a.textContent=\"Submitting your application...\"),g(!0),fetch(\"/api/assessment\",{method:\"POST\",headers:{\"content-type\":\"application/json\"},body:JSON.stringify(k)}).then(async m=>{const d=await m.json().catch(()=>null);if(!m.ok||!d?.ok){const E=d?.error||\"Submission failed. Please try again or email hello@thevibecrew.dev.\";throw new Error(E)}a&&(a.textContent=r===\"submit-book\"?\"Application submitted. Redirecting to call booking...\":\"Application submitted. Check your email for confirmation.\"),n.reset(),c(),r===\"submit-book\"&&d.bookingUrl&&(window.location.href=d.bookingUrl)}).catch(m=>{a&&(a.textContent=m.message)}).finally(()=>{g(!1)})})}\n"}],"styles":[{"type":"inline","content":":root{color-scheme:light;--bg: #f7efe2;--text: #191919;--muted: #4d4d4d;--line: #191919;--accent: #ffd958;--surface: #ffffff;--shadow: 6px 6px 0 #191919;--radius: 18px}[data-astro-cid-og6np6hy],[data-astro-cid-og6np6hy]:before,[data-astro-cid-og6np6hy]:after{box-sizing:border-box}html,body{margin:0;padding:0;background:var(--bg);color:var(--text);font-family:Inter,Avenir Next,Helvetica Neue,Arial,sans-serif;line-height:1.5}.page[data-astro-cid-og6np6hy]{max-width:860px;margin:0 auto;padding:1.2rem 1rem 4rem}.nav[data-astro-cid-og6np6hy]{display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:1.6rem;padding:.7rem .9rem;border:2px solid var(--line);background:var(--surface);border-radius:999px;box-shadow:3px 3px 0 var(--line)}.logo[data-astro-cid-og6np6hy]{display:inline-flex;align-items:center;gap:.6rem;font-weight:800;letter-spacing:-.02em}.logo-mark[data-astro-cid-og6np6hy]{width:28px;height:28px;border-radius:50%;border:2px solid var(--line);background:var(--accent)}.nav-link[data-astro-cid-og6np6hy]{text-decoration:none;border:2px solid var(--line);padding:.4rem .85rem;border-radius:999px;background:var(--surface);font-weight:700}.wrap[data-astro-cid-og6np6hy]{padding:1.25rem;border:2px solid var(--line);border-radius:var(--radius);background:#fff;box-shadow:var(--shadow);display:grid;gap:1rem}h1[data-astro-cid-og6np6hy],h2[data-astro-cid-og6np6hy],h3[data-astro-cid-og6np6hy]{margin:0;line-height:1.1;letter-spacing:-.03em}h1[data-astro-cid-og6np6hy]{font-size:clamp(1.7rem,4.2vw,2.7rem)}.lead[data-astro-cid-og6np6hy]{margin:0;color:var(--muted);max-width:60ch}.apply-form[data-astro-cid-og6np6hy]{display:grid;gap:.95rem}.form-grid[data-astro-cid-og6np6hy]{display:grid;grid-template-columns:repeat(12,1fr);gap:.8rem}.field[data-astro-cid-og6np6hy]{grid-column:span 12;display:grid;gap:.35rem}.field[data-astro-cid-og6np6hy] span[data-astro-cid-og6np6hy]{font-weight:700;font-size:.95rem}.field[data-astro-cid-og6np6hy] input[data-astro-cid-og6np6hy],.field[data-astro-cid-og6np6hy] textarea[data-astro-cid-og6np6hy]{width:100%;border:2px solid var(--line);border-radius:10px;background:#fff;color:var(--text);padding:.65rem .75rem;font:inherit}.field[data-astro-cid-og6np6hy] input[data-astro-cid-og6np6hy]:focus,.field[data-astro-cid-og6np6hy] textarea[data-astro-cid-og6np6hy]:focus{outline:3px solid #19191933;outline-offset:1px}.field[data-astro-cid-og6np6hy] textarea[data-astro-cid-og6np6hy]{min-height:120px;resize:vertical}.form-help[data-astro-cid-og6np6hy]{margin:0;font-size:.92rem;color:var(--muted)}.form-actions[data-astro-cid-og6np6hy]{display:flex;flex-wrap:wrap;gap:.7rem}.btn[data-astro-cid-og6np6hy]{display:inline-flex;align-items:center;justify-content:center;padding:.74rem 1rem;border-radius:14px;font-weight:700;text-decoration:none;border:2px solid var(--line);background:#fff;cursor:pointer;font:inherit}.btn-primary[data-astro-cid-og6np6hy]{background:var(--text);color:#fff}.form-status[data-astro-cid-og6np6hy]{margin:.15rem 0 0;font-size:.94rem;font-weight:600}@media (min-width: 760px){.field[data-astro-cid-og6np6hy].span-6{grid-column:span 6}}\n"}],"routeData":{"route":"/apply","isIndex":false,"type":"page","pattern":"^\\/apply\\/?$","segments":[[{"content":"apply","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/apply.astro","pathname":"/apply","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DLVP75Ny.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/home/Development/Projects/psyche_daily/THE_VIBE_CREW/src/pages/apply.astro",{"propagation":"none","containsHead":true}],["/Users/home/Development/Projects/psyche_daily/THE_VIBE_CREW/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/assessment@_@ts":"pages/api/assessment.astro.mjs","\u0000@astro-page:src/pages/apply@_@astro":"pages/apply.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/home/Development/Projects/psyche_daily/THE_VIBE_CREW/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_Ovt_tjaC.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BFo9NtOk.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DLVP75Ny.css","/favicon.ico","/favicon.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"KpPYR5wV4wVRollrjDguViYpxvK/+3zz10mnznidRKg=","experimentalEnvGetSecretEnabled":false});

export { manifest };
