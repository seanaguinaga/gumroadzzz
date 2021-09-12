CREATE TABLE "public"."product" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text, PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
