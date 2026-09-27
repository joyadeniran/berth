export const CONTACT_EMAIL = "holla@berth.agency";

// FormSubmit relays form posts to CONTACT_EMAIL — no backend, API key or
// account. The very first submission triggers a one-time "Activate Form"
// email to that inbox; every submission after activation is delivered.
export const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
