import Link from "next/link";
import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';

const MobileNavbar = ({ open, setOpen, NavItems, dropdowns, toggleDropdown }) => {
    const router = useRouter();
    
    return (
        <>
            <div onClick={() => setOpen(false)} className={`${open ? '' : 'hidden'} w-full h-full z-50 fixed overflow-none top-0 backdrop-blur-sm lg:hidden`} />
            <div className={`transform ${open ? '' : 'translate-x-full'} transition-all duration-300 bg-black bg-opacity-90 text-white w-80 fixed rounded-l-xl z-60 right-0 top-0 h-full lg:translate-x-full`}>
                <div className="relative w-full h-full">
                    <div className="flex justify-between border-b border-white/20 items-center px-5 py-4">
                        <div className="flex items-center">
                            <img width="32" className="rounded-full icon-glow" src="/img/logo.png" />
                            <p className="font-extrabold ml-1 text-2xl">Pogo OS</p>
                        </div>
                        <button onClick={() => setOpen(!open)}>
                            <i className="cursor-pointer fa fa-times text-xl mr-2" />
                        </button>
                    </div>

                    {/* Menú móvil con dropdowns */}
                    <div className="p-4">
                        <Link href="/comandos">
                            <div className="my-2 cursor-pointer p-4 opacity-75 hover:opacity-100 hover:underline transition-all duration-150 block">
                                Comandos
                            </div>
                        </Link>

                        {/* Módulos */}
                        <div className="my-2">
                            <div 
                                onClick={() => toggleDropdown('modules')}
                                className="flex justify-between items-center p-4 cursor-pointer opacity-75 hover:opacity-100"
                            >
                                <span>Módulos</span>
                                <i className={`fa fa-chevron-${dropdowns.modules ? 'up' : 'down'}`} />
                            </div>
                            {dropdowns.modules && (
                                <div className="ml-4">
                                    <Link href="#">
                                        <div className="p-3 opacity-75 hover:opacity-100">Módulo 1</div>
                                    </Link>
                                    <Link href="#">
                                        <div className="p-3 opacity-75 hover:opacity-100">Módulo 2</div>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Resto de tus NavItems */}
                        {NavItems.filter(a => a.link).map((item, itemIndex) => (
                            <Link href={item.href} key={itemIndex}>
                                <div className={`${router.asPath === item.href ? 'bg-white bg-opacity-5' : ''} my-2 cursor-pointer p-4 opacity-75 hover:opacity-100 hover:underline transition-all duration-150 block`}>
                                    <i className={`${router.asPath === item.href ? item.activeIcon : item.icon} mr-2`} />{item.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const Header = ({ $, NavItems }) => {
    // Estado existente
    const [open, setOpen] = useState(false);
    const [colors, setColors] = useState(false);
    const [isDiscovered, setIsDiscovered] = useState(false);
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    // Nuevo estado para dropdowns
    const [dropdowns, setDropdowns] = useState({
        modules: false,
        resources: false,
        language: false,
        user: false
    });

    const toggleDropdown = (key) => {
        setDropdowns(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    // ... (resto de tu código existente: ChangeColor, colorsThemes, etc.)

    return (
        <>
            <header>
                <div className="max-w-7xl px-5 mx-auto py-5 flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        {/* Logo y nombre */}
                        <div className="flex items-center space-x-3">
                            <img src="/img/logo.png" 
                                className="rounded-full"
                                width="48" height="48"
                            />
                            <p className="invisible md:visible text-xl text-white font-semibold">
                                <a href="/"><span className="text-amber-400">Pogo </span>OS</a>
                            </p>
                        </div>

                        {/* Navbar desktop con nuevos dropdowns */}
                        <ul className="hidden lg:flex items-center space-x-4">
                            <li>
                                <Link href="/comandos">
                                    <a className="border-b-2 border-black/0 text-white/75 hover:text-white transition-all duration-200 font-medium pb-3">
                                        Comandos
                                    </a>
                                </Link>
                            </li>

                            <li className="relative">
                                <button 
                                    onClick={() => toggleDropdown('modules')}
                                    className="flex items-center gap-1 border-b-2 border-black/0 text-white/75 hover:text-white transition-all duration-200 font-medium pb-3"
                                >
                                    Módulos
                                    <i className={`fa fa-chevron-${dropdowns.modules ? 'up' : 'down'} text-sm`} />
                                </button>
                                {dropdowns.modules && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg z-50 py-2">
                                        <Link href="#">
                                            <a className="block px-4 py-2 hover:bg-white/10">Módulo 1</a>
                                        </Link>
                                        <Link href="#">
                                            <a className="block px-4 py-2 hover:bg-white/10">Módulo 2</a>
                                        </Link>
                                    </div>
                                )}
                            </li>

                            {/* Resto de tus NavItems */}
                            {NavItems.filter(a => !a.link).map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <a target="_blank" href={item.href}>
                                        <div className="border-b-2 border-black/0 text-white/75 hover:text-white transition-all duration-200 font-medium">
                                            {item.name}
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex items-center space-x-2 relative">
                        <Link href="https://discord.com/oauth2/authorize?client_id=814494780251045928">
                            <a className="w-auto flex items-center justify-center shadow-lg gap-x-2 shadow-amber-600/20 rounded-xl py-2.5 font-medium px-7 bg-gradient-to-tl from-amber-500 to-amber-700 text-white hover:opacity-80 transition duration-200">
                               Invitar
                            </a>
                        </Link>

                        {/* ... (resto de tus botones existentes) ... */}

                        <button
                            onClick={() => setOpen(!open)}
                            className="bg-transparent py-2 px-3 text-white rounded-md text-center lg:hidden hover:bg-amber-400 hover:bg-opacity-20"
                        >
                            <i className={`fa ${open ? 'fa-times' : 'fa-bars'} text-lg`} />
                        </button>
                    </div>
                </div>
            </header>

            <MobileNavbar 
                open={open} 
                setOpen={setOpen} 
                NavItems={NavItems} 
                dropdowns={dropdowns}
                toggleDropdown={toggleDropdown}
            />
        </>
    );
};

export default Header;