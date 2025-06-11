
import { Metadata } from "next";
import { CartCounter } from "@/app/shoping-cart/components/CartCounter";
export const metadata:Metadata = {
  title: 'Counter',
  description: 'Counter Client Side',
}

const CounterPage = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold">Counter</h1>
        <CartCounter initialCount={10} />
    </div>
  )
}

export default CounterPage
