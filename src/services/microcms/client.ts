import { createClient } from 'microcms-js-sdk'; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "tanblog", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "eBRQvyWrWkz7nfLR6OugZgwTYko7wJPvYnWU",
 // retry: true // Retry attempts up to a maximum of two times.
});