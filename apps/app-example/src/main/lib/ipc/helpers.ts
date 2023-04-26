import { ipcMain, ipcRenderer } from 'electron';
import {
  ActionCallback,
  IpcEvent,
  PayloadForEvent,
  ReturnForEvent,
} from 'shared';

// Main proccess

const onIpc = <T extends IpcEvent>(type: T, callback: ActionCallback<T>) => {
  ipcMain.on(type, async (event, data: PayloadForEvent<T>) => {
    const result = await callback(data);
    event.returnValue = result;
  });
};

const onHandle = <T extends IpcEvent>(type: T, callback: ActionCallback<T>) => {
  ipcMain.handle(type, async (_, data: PayloadForEvent<T>) => {
    const result = await callback(data);
    return result;
  });
};

// Renderer proccess

const ipcInvoke = <T extends IpcEvent>(
  type: T,
  data?: PayloadForEvent<T>,
): Promise<ReturnForEvent<T>> => {
  return new Promise((resolve) => {
    const result = ipcRenderer.invoke(type, data);
    resolve(result);
  });
};

const ipcSend = <T extends IpcEvent>(
  type: T,
  data?: PayloadForEvent<T>,
): ReturnForEvent<T> => {
  return ipcRenderer.sendSync(type, data);
};

const onIpcRenderer = <T extends IpcEvent>(
  type: T,
  callback: (data: PayloadForEvent<T>) => ReturnForEvent<T>,
) => {
  ipcRenderer.on(type, (event, data: PayloadForEvent<T>) => {
    const result = callback(data);
    event.returnValue = result;
  });
};

const removeAllListeners = <T extends IpcEvent>(event: T) => {
  ipcRenderer.removeAllListeners(event);
};

export {
  ipcInvoke,
  ipcSend,
  onHandle,
  onIpc,
  onIpcRenderer,
  removeAllListeners,
};
