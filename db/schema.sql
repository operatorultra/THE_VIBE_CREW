CREATE TABLE IF NOT EXISTS assessment_applications (
	id BIGSERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	landing_page TEXT,
	email TEXT,
	phone TEXT,
	concept TEXT NOT NULL,
	links TEXT,
	submit_intent TEXT NOT NULL CHECK (submit_intent IN ('submit', 'submit-book')),
	user_agent TEXT,
	status TEXT NOT NULL DEFAULT 'new',
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	CONSTRAINT assessment_has_contact CHECK (email IS NOT NULL OR phone IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS idx_assessment_applications_created_at
	ON assessment_applications (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_assessment_applications_status
	ON assessment_applications (status);
