import React from 'react';
import Image from 'next/image';
import { IoLogoReact, IoBarChart  } from "react-icons/io5";
import { SidebarMenuItem } from './SidebarMenuItem';

const MenuItems = [
    { path: '/dashboard/dashboard', icon: <IoBarChart  />, title: 'Dashboard', subTitle: 'Estadisticas' },
     { path: '/dashboard/counter', icon: <IoLogoReact />, title: 'Counter', subTitle: 'Contador del Cliente' }, 
];         
export const Sidebar = () => {
    return (
                <div id="menu" 
                style={{width:'400px'}}
                className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">
                    <div id="logo" className="my-4 px-6">
                        <h1 className="text-lg md:text-2xl font-bold text-white">
                            <IoLogoReact className="inline text-blue-500" />Dash<span className="text-blue-500">8</span>.
                        </h1>
                        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
                    </div>
                    <div id="profile" className="px-6 py-10">
                        <p className="text-slate-500">Welcome back,</p>
                        <a href="#" className="inline-flex space-x-2 items-center">
                            <span>
                                <Image className="rounded-full w-8 h-8" 
                                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib" 
                                    alt="User Avatar"
                                    width={50}
                                    height={50}
                                />
                             </span>
                            <span className="text-sm md:text-base font-bold">
                                Romel Guaregua
                            </span>
                            </a>
                    </div>

                    <div id="nav" className="w-full px-6">
                        {
                          MenuItems.map(({ path, icon, title, subTitle }) => (
                                <SidebarMenuItem 
                                    key={title}
                                    path={path}
                                    icon={icon}
                                    title={title}
                                    subTitle={subTitle}
                                />
                            ))
                        }
                    </div>
                </div>
        )
}