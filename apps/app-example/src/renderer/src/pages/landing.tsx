import Counter from 'components/ui/counter/index';
import { useCachedIpc } from 'lib/ipc/hook';
import { IpcEvent } from 'lib/ipc/index';

const Landing = () => {
  const [response] = useCachedIpc('key', IpcEvent.EXAMPLE_EVENT, {
    data: 'hello',
    fallbackData: "hello didn't work",
  });

  return (
    <div className="bg-base-100 grid h-screen w-full place-content-center gap-8">
      <span>
        Main process said: <strong className="text-lg">{response}</strong>
      </span>

      <h2 className="text-center">And here you have a counter just for you</h2>
      <span className="scale-[2]">
        <Counter initial={0} min={-10} max={10} />
      </span>
    </div>
  );
};

export default Landing;
