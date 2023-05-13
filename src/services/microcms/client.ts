import { createClient } from 'microcms-js-sdk'; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN as string,
  apiKey: process.env.API_KEY as string,
});