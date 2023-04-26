import { useState } from 'react';

type CounterProps = {
  initial: number;
  min: number;
  max: number;
  onInc?: () => void;
  onDec?: () => void;
};

const Counter = ({ initial, min, max, onDec, onInc }: CounterProps) => {
  const [value, setValue] = useState(initial);
  const inc = () => setValue((value) => Math.min(value + 1, max));
  const dec = () => setValue((value) => Math.max(value - 1, min));

  const isMin = value === min;
  const isMax = value === max;

  const increment = () => {
    inc();
    onInc?.();
  };

  const decrement = () => {
    dec();
    onDec?.();
  };

  return (
    <div className="btn-group flex items-center justify-center">
      <button
        className="btn btn-outline btn-primary btn-sm btn-circle -mr-2"
        onClick={decrement}
        disabled={isMin}>
        -
      </button>
      <span className="indicator bg-primary text-primary-content btn-circle btn-md z-10 grid place-content-center transition-all duration-300">
        {value}
      </span>
      <button
        className="btn btn-outline btn-primary btn-sm btn-circle -ml-2"
        onClick={increment}
        disabled={isMax}>
        +
      </button>
    </div>
  );
};

export default Counter;
