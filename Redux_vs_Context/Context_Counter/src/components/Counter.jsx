import { useCounter } from "../context/CounterContext";

const Counter = () => {
  const { count } = useCounter();

  return (
    <div className="flex justify-center my-8">
      <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
        <h1 className="text-5xl font-bold text-white">
          {count}
        </h1>
      </div>
    </div>
  );
};

export default Counter;