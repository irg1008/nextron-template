import { contextBridge } from 'electron';
import { randomUUID } from 'node:crypto';
import { ipcInvoke, removeAllListeners } from './lib/ipc/helpers';

// Create global api object and expose it to client.
export const api = {
  randomUUID: () => randomUUID(),
  ipcInvoke,
  removeAllListeners,
};

contextBridge.exposeInMainWorld('api', api);
