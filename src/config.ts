// src/config.ts

// Ensure the .env variable is defined
if (!process.env.REACT_APP_API_BASE_URL) {
  throw new Error("Missing REACT_APP_API_BASE_URL in .env");
}

// Export the base URL
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL!;

