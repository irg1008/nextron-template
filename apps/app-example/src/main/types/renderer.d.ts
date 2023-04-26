import { api as apiContext } from '../preload';

declare global {
  interface Window {
    api: typeof apiContext;
  }

  const api: typeof apiContext;
}

export {};
