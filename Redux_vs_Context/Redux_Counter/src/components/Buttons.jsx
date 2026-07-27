import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../features/counter/counterSlice";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3 justify-center">
      <button
        onClick={() => dispatch(increment())}
        className="px-5 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition"
      >
        Increment
      </button>

      <button
        onClick={() => dispatch(decrement())}
        className="px-5 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch(reset())}
        className="px-5 py-3 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600 transition"
      >
        Reset
      </button>
    </div>
  );
};

export default Buttons;