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
            {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#101017]/80 border-b border-[rgba(255,255,255,0.05)]">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="https://placehold.co/40x40" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-[#4F4CE5] transition-colors">Comandos</a>
              <div className="relative group">
                <button 
                  onClick={() => toggleDropdown('modules')}
                  className="flex items-center gap-1 hover:text-[#4F4CE5] transition-colors"
                >
                  Módulos
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:rotate-180">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                {dropdowns.modules && (
                  <div className="absolute mt-2 w-40 bg-[#1a1a1f] rounded-lg shadow-xl border border-[rgba(255,255,255,0.05)] p-2 animate-fadeIn">
                    <a href="#" className="block px-4 py-2 hover:bg-[#2a2a30] rounded-lg">Módulo 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-[#2a2a30] rounded-lg">Módulo 2</a>
                    <a href="#" className="block px-4 py-2 hover:bg-[#2a2a30] rounded-lg">Módulo 3</a>
                  </div>
                )}
              </div>
              <div className="relative group">
                <button 
                  onClick={() => toggleDropdown('resources')}
                  className="flex items-center gap-1 hover:text-[#4F4CE5] transition-colors"
                >
                  Recursos
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:rotate-180">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                {dropdowns.resources && (
                  <div className="absolute mt-2 w-40 bg-[#1a1a1f] rounded-lg shadow-xl border border-[rgba(255,255,255,0.05)] p-2 animate-fadeIn">
                    <a href="#" className="block px-4 py-2 hover:bg-[#2a2a30] rounded-lg">Recurso 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-[#2a2a30] rounded-lg">Recurso 2</a>
                    <a href="#" className="block px-4 py-2 hover:bg-[#2a2a30] rounded-lg">Recurso 3</a>
                  </div>
                )}
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('language')}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] transition-colors"
              >
                <img src="https://placehold.co/20x20" style={{width: '20px', height: 'auto'}} alt="ES" />
                ES
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:rotate-180">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              {dropdowns.language && (
                <div className="absolute right-0 mt-2 w-40 bg-[#1a1a1f] rounded-lg shadow-xl border border-[rgba(255,255,255,0.05)] p-2 animate-fadeIn z-50">
                  <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-[#2a2a30] rounded-lg">
                    <img src="https://placehold.co/20x20" style={{width: '20px'}} alt="ES" /> Español
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-[#2a2a30] rounded-lg">
                    <img src="https://placehold.co/20x20" style={{width: '20px'}} alt="EN" /> English
                  </a>
                </div>
              )}
            </div>
            
            <button className="p-2 rounded-lg bg-[rgba(255,198,0,0.1)] hover:bg-[rgba(255,198,0,0.2)] transition-colors">
              <img src="https://placehold.co/20x20" style={{width: '20px', height: '20px'}} alt="Crown" />
            </button>
            
            <label className="burger-3 cursor-pointer md:hidden">
              <input type="checkbox" checked={mobileMenuOpen} onChange={() => setMobileMenuOpen(!mobileMenuOpen)} />
              <svg viewBox="0 0 32 32" className="w-6 h-6">
                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
            
            <div className="relative group hidden md:block">
              <button 
                onClick={() => toggleDropdown('user')}
                className="flex items-center gap-1 hover:text-[#4F4CE5] transition-colors"
              >
                <img src="https://placehold.co/30x30" alt="Avatar" className="w-7 h-7 rounded-full object-cover" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:rotate-180">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              {dropdowns.user && (
                <div className="absolute right-0 mt-2 w-40 bg-[#1a1a1f] rounded-lg shadow-xl border border-[rgba(255,255,255,0.05)] p-2 animate-fadeIn z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-[#2a2a30] rounded-lg">Perfil</a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#2a2a30] rounded-lg">Configuración</a>
                  <div className="border-t border-[rgba(255,255,255,0.05)] my-1"></div>
                  <a href="#" className="block px-4 py-2 hover:bg-[#2a2a30] rounded-lg">Cerrar sesión</a>
                </div>
              )}
            </div>
            
            <a href="#" className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              <i className="fab fa-discord"></i> LOGIN
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1f] px-4 pb-4 animate-slideDown">
            <nav className="flex flex-col gap-3 pt-2">
              <a href="#" className="py-2 hover:text-[#4F4CE5] transition-colors">Comandos</a>
              
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => toggleDropdown('modules')}
                  className="flex justify-between items-center py-2 hover:text-[#4F4CE5] transition-colors"
                >
                  <span>Módulos</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={`transition-transform duration-300 ${dropdowns.modules ? 'rotate-180' : ''}`}>
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                {dropdowns.modules && (
                  <div className="pl-4 flex flex-col gap-2">
                    <a href="#" className="hover:text-[#4F4CE5] transition-colors">Módulo 1</a>
                    <a href="#" className="hover:text-[#4F4CE5] transition-colors">Módulo 2</a>
                    <a href="#" className="hover:text-[#4F4CE5] transition-colors">Módulo 3</a>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => toggleDropdown('resources')}
                  className="flex justify-between items-center py-2 hover:text-[#4F4CE5] transition-colors"
                >
                  <span>Recursos</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={`transition-transform duration-300 ${dropdowns.resources ? 'rotate-180' : ''}`}>
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                {dropdowns.resources && (
                  <div className="pl-4 flex flex-col gap-2">
                    <a href="#" className="hover:text-[#4F4CE5] transition-colors">Recurso 1</a>
                    <a href="#" className="hover:text-[#4F4CE5] transition-colors">Recurso 2</a>
                    <a href="#" className="hover:text-[#4F4CE5] transition-colors">Recurso 3</a>
                  </div>
                )}
              </div>
              
              <a href="#" className="py-2 hover:text-[#4F4CE5] transition-colors">Login</a>
            </nav>
          </div>
        )}
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