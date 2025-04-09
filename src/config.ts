import dotenv from 'dotenv';
dotenv.config({ path: 'api-key.env' });

export const API_KEY_WEATHER = process.env.API_KEY_WEATHER || '';
export const API_KEY_JOKE = process.env.API_KEY_JOKE || '';

