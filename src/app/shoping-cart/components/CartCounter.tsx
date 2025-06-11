"use client"
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounter, subtractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";


type CartCounterProps = {
  initialCount: number
}

type CounterResponse = {
  method: string
  count: number
}

const getApiCounter = async ():Promise<CounterResponse> => {
  const data = await fetch('/api/counter')
    .then(res => res.json())
  return data
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CartCounter = ({ initialCount }: CartCounterProps) => {

  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(initCounter(initialCount))
  // }, [dispatch, initialCount])


  useEffect(() => {
    getApiCounter()
    .then(({count}) =>  dispatch(initCounter(count)))
  },[dispatch] )
  

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex gap-4">
        <button className="cursor-pointer" 
              // onClick={handleIncrement}
              onClick={() => dispatch(addOne())}
              >
          <IoMdAddCircle size={40} />
        </button>
        <button className="cursor-pointer" 
            // onClick={handleDecrement}
            onClick={() => dispatch(subtractOne())}
            >
          <IoMdRemoveCircle size={40} />
        </button>
      </div>
    </>
  );
};
