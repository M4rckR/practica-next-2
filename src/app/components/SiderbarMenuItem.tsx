"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

type SiderbarMenuItemProps = {
    path: string;
    icon: JSX.Element;
    title: string;
    subTitle: string;
}

export const SiderbarMenuItem = ({path, icon, title, subTitle}: SiderbarMenuItemProps) => {

    const pathname = usePathname();
    const isActive = pathname === path;

    
  return (

    <Link   
    href={path}
    className={`w-full px-2 inline-flex space-x-2 items-center border-b rounded-xl border-slate-700 py-3  hover:bg-white/5 transition ease-linear duration-150 ${isActive ? 'bg-blue-800' : 'bg-white/5'}`
}
  >
    <div>
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-lg font-bold leading-5 text-white">
        {title}
      </span>
      <span className="text-sm text-white/50 hidden md:block">
        {subTitle}
      </span>
    </div>
  </Link>
  )
}
