import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ES');
  const [isScrolling, setIsScrolling] = useState(false);

  // Servidores para el carrusel horizontal
  const servers = [
    { name: "Peak Clan", members: "344,399 miembros" },
    { name: "El Sotano", members: "332,668 miembros" },
    { name: "La Casa De Noelmys", members: "311,280 miembros" },
    { name: "Anime Lovers", members: "250,000 miembros" },
    { name: "Gamers United", members: "200,000 miembros" }
  ];

  // Carrusel automático de servidores
  useEffect(() => {
    let interval;
    if (isScrolling) {
      interval = setInterval(() => {
        const container = document.querySelector('.server-marquee-container');
        if (container) {
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += 1;
          }
        }
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isScrolling]);

  // Manejadores de estado del menú
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const handleDropdownClick = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleLanguageToggle = () => setLanguageMenuOpen(!languageMenuOpen);

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    setLanguageMenuOpen(false);
  };

  return (
    <>
      {/* Estilos globales */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .marquee-content {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 20s linear infinite;
        }

        .hover-scale:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 12px;
        }

        .gradient-text {
          background: linear-gradient(45deg, #4F4CE5, #8482FB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .neon-border {
          position: relative;
        }

        .neon-border::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #4F4CE5, #8482FB, #4F4CE5);
          background-size: 400% 400%;
          animation: neonGlow 5s ease-in-out infinite;
          z-index: -1;
          border-radius: 12px;
        }

        @keyframes neonGlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      {/* Navbar */}
      <nav className="header fixed w-full top-0 z-50 bg-[#101017]/70 backdrop-blur-lg shadow-lg border-b border-purple-500/20">
        <div className="header-container max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="header-left flex items-center space-x-6">
            <Image src="/img/logo.jpg" alt="Logo" width={50} height={50} className="logo h-8 w-auto" />
            
            <div className="hidden md:flex space-x-8 nav-items">
              <a href="#" className="nav-link hover:text-[#4F4CE5] transition duration-300">Comandos</a>
              
              <div className="relative group">
                <button 
                  onClick={() => handleDropdownClick('modulos')}
                  className="flex items-center gap-1 focus:outline-none"
                >
                  Módulos
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:rotate-180">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                {activeDropdown === 'modulos' && (
                  <div className="absolute left-0 mt-2 w-40 glass-effect shadow-xl z-10 opacity-100 transform translate-y-0 transition-all duration-300">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#2a2a30]/70 rounded">Módulo 1</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#2a2a30]/70 rounded">Módulo 2</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#2a2a30]/70 rounded">Módulo 3</a>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button 
                  onClick={() => handleDropdownClick('recursos')}
                  className="flex items-center gap-1 focus:outline-none"
                >
                  Recursos
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:rotate-180">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                {activeDropdown === 'recursos' && (
                  <div className="absolute left-0 mt-2 w-40 glass-effect shadow-xl z-10 opacity-100 transform translate-y-0 transition-all duration-300">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#2a2a30]/70 rounded">Recurso 1</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#2a2a30]/70 rounded">Recurso 2</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-[#2a2a30]/70 rounded">Recurso 3</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="header-right flex items-center space-x-3">
            {/* Idioma */}
            <div className="relative group">
              <button 
                onClick={handleLanguageToggle}
                className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-[#2a2a30]/70 transition duration-300"
              >
                <img src="https://placehold.co/20x15" alt="ES" className="w-5 h-auto" />
                {currentLang}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:rotate-180">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 glass-effect shadow-xl z-10 opacity-100 transform translate-y-0 transition-all duration-300">
                  <button 
                    onClick={() => changeLanguage('ES')} 
                    className="flex items-center px-4 py-2 text-sm hover:bg-[#2a2a30]/70 rounded w-full text-left"
                  >
                    <img src="https://placehold.co/20x15" alt="Español" className="w-5 h-auto mr-2" />
                    Español
                  </button>
                  <button 
                    onClick={() => changeLanguage('EN')} 
                    className="flex items-center px-4 py-2 text-sm hover:bg-[#2a2a30]/70 rounded w-full text-left"
                  >
                    <img src="https://placehold.co/20x15" alt="English" className="w-5 h-auto mr-2" />
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Botón de corona */}
            <button className="p-1 rounded-md bg-transparent hover:bg-yellow-400/20 transition duration-300">
              <img src="https://placehold.co/20x20" alt="Crown" className="w-5 h-5" />
            </button>

            {/* Menú móvil */}
            <label className="burger-3 lg:hidden cursor-pointer">
              <input 
                type="checkbox" 
                checked={mobileMenuOpen} 
                onChange={toggleMobileMenu}
                className="sr-only"
              />
              <svg viewBox="0 0 32 32" className="w-6 h-6">
                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>

            {/* User Avatar - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-2 cursor-pointer">
              <Image src="/img/default.jpg" alt="Avatar" width={30} height={30} className="w-8 h-8 rounded-full" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Login Button - Guest */}
            <a href="#" className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] px-4 py-2 rounded-md hover:shadow-lg hover:shadow-[#4F4CE5]/30 transition duration-300">
              <i className="fa-brands fa-discord"></i> LOGIN
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-effect p-4 animate-fadeIn">
            <div className="space-y-3">
              <a href="#" className="block py-2 px-4 rounded hover:bg-[#2a2a30]/70">Comandos</a>
              
              {/* Módulos - Mobile */}
              <div className="border-t border-[#2a2a30] pt-3">
                <button 
                  onClick={() => handleDropdownClick('modulos_mobile')}
                  className="flex justify-between items-center w-full text-left py-2 px-4 rounded hover:bg-[#2a2a30]/70"
                >
                  Módulos
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className={`transition-transform duration-300 ${activeDropdown === 'modulos_mobile' ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                {activeDropdown === 'modulos_mobile' && (
                  <div className="ml-4 space-y-2 mt-2">
                    <a href="#" className="block py-2 px-4 rounded hover:bg-[#2a2a30]/70">Módulo 1</a>
                    <a href="#" className="block py-2 px-4 rounded hover:bg-[#2a2a30]/70">Módulo 2</a>
                    <a href="#" className="block py-2 px-4 rounded hover:bg-[#2a2a30]/70">Módulo 3</a>
                  </div>
                )}
              </div>

              {/* Recursos - Mobile */}
              <div className="border-t border-[#2a2a30] pt-3">
                <button 
                  onClick={() => handleDropdownClick('recursos_mobile')}
                  className="flex justify-between items-center w-full text-left py-2 px-4 rounded hover:bg-[#2a2a30]/70"
                >
                  Recursos
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className={`transition-transform duration-300 ${activeDropdown === 'recursos_mobile' ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                {activeDropdown === 'recursos_mobile' && (
                  <div className="ml-4 space-y-2 mt-2">
                    <a href="#" className="block py-2 px-4 rounded hover:bg-[#2a2a30]/70">Recurso 1</a>
                    <a href="#" className="block py-2 px-4 rounded hover:bg-[#2a2a30]/70">Recurso 2</a>
                    <a href="#" className="block py-2 px-4 rounded hover:bg-[#2a2a30]/70">Recurso 3</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="py-20 mb-30 max-w-3xl mx-auto fade-in-up">
        <div className="flex w-full justify-center">
          <div className="profile-container mx-auto max-w-md text-center">
            <div className="profile-image relative inline-block mb-6">
              <Image src="/img/logo.jpg" alt="Pogo Avatar" width={200} height={200} className="avatar w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#4F4CE5] shadow-lg" />
              <div className="heart-icon absolute top-2 right-2 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] rounded-full p-2 flex items-center justify-center w-8 h-8">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>
            
            <h1 className="text-4xl font-extrabold gradient-text">
              Pogo OS
            </h1>
            <p className="text-white text-opacity-50 text-center mt-5 max-w-md mx-auto">
              Con casi todas las funciones que pueda imaginar, además de personal dedicado y un equipo de soporte activo, Pogo OS es el complemento perfecto para cualquier servidor Discord.
            </p>
            
            <div className="button-group flex flex-col sm:flex-row justify-center gap-x-4 mt-10">
              <Link href={"https://discord.com/oauth2/authorize?client_id=814494780251045928"}>
                <a className="flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white">
                  Invítame
                </a>
              </Link>
              <div className="py-10"></div>
              <Link href={"https://top.gg/bot/814494780251045928/vote"}>
                <a className="px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white">
                  Votar
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* ¿Por qué Pogo OS? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24 max-w-6xl mx-auto px-5">
          <div className="col-span-4">
            <h2 className="text-white text-4xl font-bold">¿Porqué Pogo OS?</h2>
            <p className="text-white text-md font-medium text-gray-500/75 mt-2">
              Pogo OS te ofrece múltiples funciones totalmente gratis y con un 99,99% de estabilidad en todos sus servicios.
            </p>
            <a href="https://discord.com/oauth2/authorize?client_id=814494780251045928" className="mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white">
              <i className="fab fa-discord mr-2" />Invítame
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="text-white">
              <p className="text-xl font-semibold mt-5">
                <i className="fa fa-cogs text-2xl text-amber-500 mr-2" /> Optimizado
              </p>
              <p className="text-gray-500 line-clamp-4">Mis desarrolladores se han enfocado en que mi sistema sea óptimo y fluido, por lo que es poco probable fallas en mis servicios.</p>
            </div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5">
                <i className="fa fa-universal-access text-2xl text-amber-500 mr-2" /> Universal
              </p>
              <p className="text-gray-500 line-clamp-4">Soy un bot con múltiples características que serán de gran utilidad para tu servidor.</p>
            </div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5">
                <i className="fa fa-shield text-2xl text-amber-500 mr-2" /> Seguro
              </p>
              <p className="text-gray-500 line-clamp-4">Con Pogo OS puedes estar tranquilo ya que es una de las aplicaciones de Discord mas seguras y capaz de evitar el spam en tus comunidades.</p>
            </div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5">
                <i className="fa fa-ticket text-2xl text-amber-500 mr-2" /> Soporte
              </p>
              <p className="text-gray-500 line-clamp-4">Mi equipo de soporte siempre están atentos a atender cualquier duda o problema de mis usuarios, solo debes unirte a mi comunidad, pedir ayuda y serás atendido.</p>
            </div>
          </div>
        </div>

              {/* Sección de Imagen de ejemplo */}
      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
        <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
          <img src="/img/20240620_231320.jpg" alt="Pogo OS" width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
          <h2 className="text-3xl text-white font-semibold">¿Estás Listo?</h2>
          <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Si estas listo para empezar a usar a Pogo OS entonces no esperes más e invítalo.</p>
        </div>
        <img src="/img/20240620_231320.jpg" alt="Pogo OS" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" width="600" height="600" />
      </div>
    </div> {/* Este es el cierre que faltaba */}
  </>
);
}