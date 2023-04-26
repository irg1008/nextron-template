enum IpcEvent {
  EXAMPLE_EVENT = 'example-event',
}

type IpcAction = {
  type: IpcEvent.EXAMPLE_EVENT;
  payload: string;
  returnType: string;
};

type ActionForEvent<T extends IpcEvent> = Extract<IpcAction, { type: T }>;
type PayloadForEvent<T extends IpcEvent> = ActionForEvent<T>['payload'];
type ReturnForEvent<T extends IpcEvent> = ActionForEvent<T>['returnType'];

type ActionCallback<T extends IpcEvent> = (
  data: PayloadForEvent<T>,
) => Promise<ReturnForEvent<T>>;

export { IpcEvent };
export type { ActionCallback, IpcAction, PayloadForEvent, ReturnForEvent };
