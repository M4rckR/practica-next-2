import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5";
import { SiderbarMenuItem } from "./SiderbarMenuItem";

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subTitle: 'Visualize your data',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subTitle: 'Contador Client Side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subTitle: 'Generacion estática',
  },
]

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 left-0 overflow-y-scroll w-[400px]"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          <span>
            Dash
          </span>
            <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              src="https://media.licdn.com/dms/image/v2/D4E03AQGxAogquwZDbw/profile-displayphoto-shrink_800_800/B4EZS8j1QeHMAg-/0/1738330300776?e=1751500800&v=beta&t=WXDZB1E3RgFIKrAAN3kOUsPz6PBUHnX42jMenXtkeLw"
              alt="imagen"
              width={128}
              height={128}
              className="rounded-full w-8 h-8"
              priority
            />

          </span>
          <span className="text-sm md:text-base font-bold">Marcos Romero</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6 space-y-2">

          {menuItems.map((item) => (
            <SiderbarMenuItem
              key={item.path} 
              {...item}
            />
          ))}

      </div>
    </div>
  );
};
