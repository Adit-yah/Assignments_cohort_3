import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="flex justify-center my-8">
      <div className="w-32 h-32 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
        <h1 className="text-5xl font-bold text-white">{count}</h1>
      </div>
    </div>
  );
};

export default Counter;