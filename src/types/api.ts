import { APOD } from "./APOD.ts";

export interface APODResponse {
  apod: APOD;
  rateLimit: string;
  rateLimitRemaining: string;
}
