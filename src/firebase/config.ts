export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ?? null,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN ?? null,
  projectId: import.meta.env.VITE_PROJECT_ID ?? null,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET ?? null,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID ?? null,
  appId: import.meta.env.VITE_APP_ID ?? null,
};