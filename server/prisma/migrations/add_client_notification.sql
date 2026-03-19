CREATE TABLE IF NOT EXISTS "client_notification" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "client_id" UUID NOT NULL REFERENCES "client"("id") ON DELETE CASCADE,
  "title" VARCHAR(255) NOT NULL,
  "message" TEXT NOT NULL,
  "importance" VARCHAR(20) NOT NULL DEFAULT 'MEDIUM',
  "reference_type" VARCHAR(100),
  "reference_id" VARCHAR(255),
  "is_read" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "client_notification_client_id_idx" ON "client_notification"("client_id");
CREATE INDEX IF NOT EXISTS "client_notification_client_id_is_read_idx" ON "client_notification"("client_id", "is_read");
