"use client"
import { useState } from "react";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

export const CartCounter = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
      }

      const handleDecrement = () => {
        setCount(count - 1);
      }

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex gap-4">
        <button className="cursor-pointer" onClick={handleIncrement}>
          <IoMdAddCircle size={40} />
        </button>
        <button className="cursor-pointer" onClick={handleDecrement}>
          <IoMdRemoveCircle size={40} />
        </button>
      </div>
    </>
  );
};
