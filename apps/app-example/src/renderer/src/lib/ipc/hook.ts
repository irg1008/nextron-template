import { useEffect } from 'react';
import { IpcEvent, PayloadForEvent, ReturnForEvent } from 'shared';
import useSWR from 'swr';

type UseCachedIpcOptions<T extends IpcEvent> = {
  data?: PayloadForEvent<T>;
  fallbackData?: ReturnForEvent<T>;
  suspense?: boolean;
  onChange?: (data: ReturnForEvent<T>) => void;
};

const useCachedIpc = <T extends IpcEvent>(
  key: string,
  event: T,
  { data, fallbackData, onChange }: UseCachedIpcOptions<T> = {},
) => {
  const {
    data: dataResult,
    mutate,
    isLoading,
    isValidating,
  } = useSWR(key, () => api.ipcInvoke(event, data), {
    suspense: true,
    fallbackData,
  });

  useEffect(() => {
    dataResult && onChange?.(dataResult);
  }, [dataResult, onChange]);

  useEffect(() => {
    return () => {
      api.removeAllListeners(event);
    };
  });

  return [dataResult, mutate, isValidating, isLoading] as const;
};

export { useCachedIpc };
