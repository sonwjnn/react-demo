import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  // increment,
  // incrementByAmount,
  incrementAsync,
} from "../state/features/counter-slice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="mx-auto">
      <h2 className="font-bold text-2xl p-8 text-center">{count}</h2>
      <div className="flex gap-x-4">
        <button
          className="p-4 text-white bg-rose-500 rounded-md "
          onClick={() => dispatch(incrementAsync(10))}
        >
          Increment (10)
        </button>
        <button
          className="p-4 text-white bg-green-500 rounded-md "
          onClick={() => dispatch(decrement())}
        >
          Decrement (1)
        </button>
      </div>
    </div>
  );
};
