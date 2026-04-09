import { type NeonQueryFunction, neon } from "@neondatabase/serverless";
import { connection } from "next/server";

let _sql: NeonQueryFunction<false, false> | undefined;

export async function getDb() {
  await connection();
  if (!_sql) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    _sql = neon(url);
  }
  return _sql;
}
