import { WidgetsGrid } from "@/app/components"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Seo Title: Admin Dashboard",
}

export default function page() {
  return (
    <div className="text-black p-2">
      <h1 className="text-4xl mt-2">Dashboard</h1>
      <p className="text-xl">Informacion general</p>

      <WidgetsGrid />
    </div>
  )
}
