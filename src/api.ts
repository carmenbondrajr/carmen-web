import { APOD } from "./types/APOD.ts";
import { APODResponse } from "./types/api.ts";

const nasaApiKey = import.meta.env.VITE_NASA_API_KEY;
const apodURL = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`;

export const getAPOD = async (): Promise<APODResponse> => {
  const response = await fetch(apodURL);
  const result: APOD = await response.json();
  return {
    apod: result,
    rateLimit: response.headers.get("X-RateLimit-Limit") || "?",
    rateLimitRemaining: response.headers.get("X-RateLimit-Remaining") || "?",
  };
};
