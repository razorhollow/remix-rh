import { createHoneypot } from 'remix-utils/honeypot/server';

export const honeypot = createHoneypot({
    randomizeNamePerRequest: true,
}); 