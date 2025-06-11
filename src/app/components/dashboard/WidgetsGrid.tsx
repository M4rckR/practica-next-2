"use client"
import { useAppSelector } from "@/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCafeOutline } from "react-icons/io5"


export const WidgetsGrid = () => {

  const count = useAppSelector(state => state.counter.count)

  return (
    <div className="flex gap-2 flex-wrap mt-4">
        <SimpleWidget  
            title="Contador"
            subtitle="Subtitulo"
            label={count.toString()}
            icon={<IoCafeOutline size={50} />}
            href="/dashboard/counter"
        />
    </div>
  )
}
