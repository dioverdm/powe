import React, { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const servers = [
    { name: "Peak Clan", members: "344,399 miembros", verified: true },
    { name: "El Sotano", members: "332,668 miembros", verified: true },
    { name: "La Casa De Noelmys", members: "311,280 miembros", verified: true },
    { name: "GermanClan", members: "275,432 miembros", verified: true },
    { name: "AURONERS", members: "250,123 miembros", verified: true }
  ];

  return (
    <div className="min-h-screen bg-[#101017] text-white font-sans">
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="relative inline-block mb-8">
            <img src="https://placehold.co/200x200" alt="Pogo Avatar" className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-[#4F4CE5] shadow-lg" />
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] p-3 rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-transparent bg-clip-text">
            El bot favorito de Discord
          </h1>
          <p className="text-lg md:text-xl text-[#9b9d9f] max-w-2xl mx-auto mb-8">
            Anime, economía, juegos, utilidades y mucho más
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] rounded-lg text-white hover:opacity-90 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
              Añadir a el bot
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 border border-[#9b9d9f] rounded-lg hover:border-[#4F4CE5] hover:text-[#4F4CE5] transition-all">
              <img src="https://placehold.co/20x20" style={{width: '20px'}} alt="Gear" />
              Gestionar servidores
            </button>
          </div>
          
          <div className="mb-12">
            <p className="text-[#9fa3b8] mb-4">Con la confianza de <span className="bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-transparent bg-clip-text font-medium">más de 200 servidores</span></p>
            <div className="flex flex-wrap justify-center gap-4">
              {[...Array(5)].map((_, i) => (
                <img key={i} src="https://placehold.co/50x50" alt={`Server ${i+1}`} className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover transform hover:scale-110 transition-transform" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Embed Card Section */}
      <section className="px-4 py-12 bg-[#1a1a1f]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2b2d31] rounded-xl p-6 mb-8 border border-[rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://placehold.co/40x40" alt="Pogo OS" className="w-10 h-10 rounded-full" />
              <span className="font-semibold">Pogo OS</span>
              <span className="bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-white text-xs px-2 py-0.5 rounded">App</span>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 mb-4">
              <p>¡Bienvenid@ al servidor!</p>
              <p className="mt-2 text-sm">
                Espero que disfrutes tu estancia, <span className="bg-[rgba(79,76,229,0.2)] text-[#4F4CE5] font-medium px-1 rounded">@Custom</span>. ¡Ya somos 1,000 miembros!
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Bienvenidas</h2>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-4 text-center">
            Pogo OS puede personalizar mensajes de bienvenidas, despedidas y también agradecimientos por mejorar el servidor.
          </p>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-4 text-center">
            Puedes personalizar los mensajes con múltiples variables para que puedas crear mensajes únicos y bonitos.
          </p>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-8 text-center">
            Con Pogo OS en tu servidor, ¡todos se sentirán bienvenidos!
          </p>
          
          <div className="flex justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-[rgba(79,76,229,0.2)] text-white rounded-lg hover:bg-[rgba(79,76,229,0.3)] transition-colors">
              Aprende más sobre las Bienvenidas
            </button>
          </div>
        </div>
      </section>

      {/* Roleplay Section */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#03030A] rounded-xl p-6 mb-8 border border-[rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://placehold.co/40x40" alt="Pogo OS" className="w-10 h-10 rounded-full" />
              <span className="font-semibold">Pogo OS</span>
              <span className="bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-white text-xs px-2 py-0.5 rounded">App</span>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 mb-4">
              <p><span className="bg-[rgba(79,76,229,0.2)] text-[#4F4CE5] font-medium px-1 rounded">@Swee</span> abrazo a <span className="bg-[rgba(79,76,229,0.2)] text-[#4F4CE5] font-medium px-1 rounded">@Nwee</span> 💕</p>
              <div className="relative mt-4 rounded-lg overflow-hidden">
                <img src="https://placehold.co/600x300" alt="Anime hug gif" className="w-full h-40 object-cover" />
                <div className="absolute top-3 right-3 text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-sm text-[#9b9d9f] mt-2">Abrazos recibidos: 42</div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Roleplay</h2>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-4 text-center">
            Con más de 100 comandos y 10,000 gifs que van desde abrazos, caricias, mordidas entre otros, Pogo OS es el bot con más variedad de comandos de roleplay.
          </p>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-4 text-center">
            Pogo OS cuenta con contadores para que puedes ver cuántas veces has recibido abrazos, besos, caricias y más.
          </p>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-8 text-center">
            Los gifs han sido seleccionados meticulosamente para garantizar la mejor experiencia.
          </p>
          
          <div className="flex justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-white rounded-lg hover:opacity-90 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              Aprende más sobre Roleplay
            </button>
          </div>
        </div>
      </section>

      {/* Ranking Section */}
      <section className="px-4 py-12 bg-[#1a1a1f]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#03030A] rounded-xl p-6 mb-8 border border-[rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <img src="https://placehold.co/20x20" style={{width: '20px'}} alt="Crown" />
                <span className="bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-transparent bg-clip-text font-semibold">Ranking global</span>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { rank: "👑", user: "Custom", points: "1,234,567" },
                { rank: "🏆", user: "Jesús", points: "987,654" },
                { rank: "🥉", user: "Rogert", points: "567,890" },
                { rank: "#4", user: "Adobe", points: "345,678" },
                { rank: "#5", user: "DJWasa", points: "123,456" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-[rgba(255,255,255,0.05)] rounded-lg">
                  <span className={`${item.rank === "👑" ? "text-yellow-400" : item.rank === "🏆" ? "text-blue-400" : item.rank === "🥉" ? "text-amber-400" : "text-[#9b9d9f]"}`}>{item.rank}</span>
                  <span className="bg-[rgba(79,76,229,0.2)] text-[#4F4CE5] px-2 py-0.5 rounded">{item.user}</span>
                  <span>{item.points}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Economy Section */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Economía</h2>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-4 text-center">
            Pogo OS cuenta con un completo sistema de economía global que fomenta la interacción entre los miembros del servidor.
          </p>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-4 text-center">
            Niveles, balances, mascotas, clubs, matrimonios y mucho más. La economía de Pogo OS es muy completa y divertida.
          </p>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-4 text-center">
            Cada dos meses se activan eventos globales en los que tienes la oportunidad de ganar items exclusivos.
          </p>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-8 text-center">
            Escala por los leaderboards y llega a la cima de la economía global.
          </p>
          
          <div className="flex justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-white rounded-lg hover:opacity-90 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              Aprende más sobre Economía
            </button>
          </div>
        </div>
      </section>

      {/* Server Protection Section */}
      <section className="px-4 py-12 bg-[#1a1a1f]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2b2d31] rounded-xl p-6 mb-8 border border-[rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://placehold.co/40x40" alt="Pogo OS" className="w-10 h-10 rounded-full" />
              <span className="font-semibold">Pogo OS</span>
              <span className="bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-white text-xs px-2 py-0.5 rounded">App</span>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 mb-4">
              <p>Nuevo episodio disponible</p>
              <p className="mt-2 text-sm text-[#4F4CE5]">Buddy Daddies</p>
              <p className="mt-1 text-sm">Episodio 8 - Nothing seek, nothing find</p>
              <button className="mt-3 px-4 py-2 bg-[rgba(79,76,229,0.2)] text-[#4F4CE5] rounded-lg hover:bg-[rgba(79,76,229,0.3)] transition-colors">
                Ver episodio
              </button>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4">
              <p>Protección del servidor</p>
              <p className="mt-2 text-sm">Anti-spam activado. El servidor está protegido contra links de invitación no autorizados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Utilities Section */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Utilidades</h2>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-4 text-center">
            Pogo OS puede realizar tareas automáticas y de entretenimiento para tu servidor.
          </p>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-4 text-center">
            ¿Estás ansioso/a por el siguiente episodio de tu anime favorito? Pogo OS puede avisarte cuando salga.
          </p>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-8 text-center">
            Auto publicación de waifus, notificaciones de animes, protección del servidor, entre otros. Pogo OS puede hacerlo todo.
          </p>
          
          <div className="flex justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-white rounded-lg hover:opacity-90 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              Aprende más sobre Utilidades
            </button>
          </div>
        </div>
      </section>

      {/* All-in-One Bot Section */}
      <section className="px-4 py-12 bg-[#1a1a1f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-transparent bg-clip-text">
              Un bot todo en uno
            </h2>
            <p className="text-[#9fa3b8] text-lg">Pogo OS lo hace todo</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "https://placehold.co/24x24", title: "Anime", description: "Accede a una gran biblioteca de información sobre anime, personajes y recomendaciones." },
              { icon: "https://placehold.co/24x24", title: "Roleplay", description: "Interacciones sociales creativas con comandos de acción y expresiones emocionales." },
              { icon: "https://placehold.co/24x24", title: "Economía", description: "Sistema económico completo con monedas, tiendas y elementos coleccionables." }
            ].map((feature, index) => (
              <div key={index} className="bg-[#1a1a1f] p-6 rounded-xl hover:shadow-lg hover:shadow-[#4F4CE5]/20 transition-shadow border border-[rgba(255,255,255,0.05)]">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[rgba(79,76,229,0.2)] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[#9b9d9f]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Servers Section with Marquee */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-transparent bg-clip-text">
              Gracias por confiar en Pogo OS
            </h2>
            <p className="text-[#9b9d9f] text-lg">Son <span className="bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-transparent bg-clip-text font-medium">3.9 millones</span> los servidores que usan a nuestra bot cada día</p>
          </div>
          
          <div className="overflow-hidden whitespace-nowrap py-4">
            <div className="animate-marquee flex gap-6">
              {servers.concat(servers).map((server, index) => (
                <div key={index} className="inline-flex items-center gap-4 bg-[#1a1a1f] px-6 py-4 rounded-xl border border-[rgba(255,255,255,0.05)] min-w-[300px] hover:shadow-lg hover:shadow-[#4F4CE5]/10 transition-shadow">
                  <img src="https://placehold.co/40x40" alt={server.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="flex items-center gap-2">
                      {server.verified && <img src="https://placehold.co/16x16" style={{width: '16px'}} alt="Verified" />}
                      <span className="font-medium">{server.name}</span>
                    </div>
                    <span className="text-sm text-[#9b9d9f]">{server.members}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chat Preview Section */}
      <section className="px-4 py-12 bg-[#1a1a1f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Conoce a tu nuevo amigo</h2>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-8 text-center">
            Pogo OS, ahora con inteligencia artificial
          </p>
          
          <div className="max-w-md mx-auto bg-[#03030A] rounded-xl p-6 border border-[rgba(255,255,255,0.05)]">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <img src="https://placehold.co/40x40" alt="Pogo OS" className="w-10 h-10 rounded-full" />
                <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-3 max-w-xs">
                  <p>¡Hola! Soy Pogo OS :3</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <img src="https://placehold.co/40x40" alt="Pogo OS" className="w-10 h-10 rounded-full" />
                <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-3 max-w-xs">
                  <p>¿Cómo puedo ayudarte hoy? ✨</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">A diferencia de otros bots, Pogo OS es:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "https://placehold.co/32x32", title: "Tierno y amigable", description: "Diseñado para ser adorable y cercano en cada interacción" },
              { icon: "https://placehold.co/32x32", title: "Adaptativo e inteligente", description: "Se adapta a cada servidor y aprende de las interacciones" },
              { icon: "https://placehold.co/32x32", title: "Tu compañero perfecto", description: "Programado para hacer tu servidor más divertido y organizado" }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#03030A] p-6 rounded-xl border border-[rgba(255,255,255,0.05)]">
                <div className="flex flex-col items-center text-center">
                  <img src={benefit.icon} alt={benefit.title} className="w-8 h-8 mb-4" />
                  <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-transparent bg-clip-text">{benefit.title}</h4>
                  <p className="text-[#9b9d9f]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Generated Images Section */}
      <section className="px-4 py-12 bg-[#1a1a1f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[rgba(79,76,229,0.1)] text-[#4F4CE5] px-4 py-1 rounded-full mb-4">
              <img src="https://placehold.co/20x20" style={{width: '20px'}} alt="AI" />
              Generación de imágenes
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-transparent bg-clip-text">
              Creado con Pogo OS
            </h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square">
                <img src="https://placehold.co/600x600" alt={`Generated image ${i+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-white rounded-lg hover:opacity-90 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Convierte tus sueños en realidad
            </button>
          </div>
        </div>
      </section>

      {/* Wiki Section */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Tutoriales y guías</h2>
          <p className="text-[#9b9d9f] max-w-2xl mx-auto mb-8 text-center">
            Todo lo que necesitas saber está disponible en su Wiki oficial
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#03030A] p-6 rounded-xl border border-[rgba(255,255,255,0.05)]">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#4F4CE5" strokeWidth="2" className="mb-4">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Documentación extensa</h3>
              <p className="text-[#9b9d9f]">Más de 600 comandos documentados en detalle</p>
            </div>
            
            <div className="bg-[#03030A] p-6 rounded-xl border border-[rgba(255,255,255,0.05)]">
              <img src="https://placehold.co/32x32" alt="Keyboard" className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fácil de navegar</h3>
              <p className="text-[#9b9d9f]">Busca rápidamente lo que necesitas con nuestra función de búsqueda</p>
            </div>
            
            <div className="bg-[#03030A] p-6 rounded-xl border border-[rgba(255,255,255,0.05)]">
              <img src="https://placehold.co/32x32" alt="Users" className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Impulsado por la Comunidad</h3>
              <p className="text-[#9b9d9f]">Actualizaciones regulares por nuestro equipo de voluntarios</p>
            </div>
            
            <div className="md:col-span-2 lg:col-span-3 flex justify-center">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB] text-white rounded-lg hover:opacity-90 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                Ir a la wiki
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 bg-gradient-to-r from-[#4F4CE5] to-[#8482FB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Comenzamos nuestra historia?</h2>
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4F4CE5] rounded-lg hover:bg-opacity-90 transition-colors shadow-lg hover:shadow-[#4F4CE5]/30">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Añadir a el bot
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-[#1a1a1f]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="https://placehold.co/40x40" alt="Logo" className="w-8 h-8" />
              <span className="font-bold text-xl">Pogo OS</span>
            </div>
            <p className="text-[#9b9d9f]">El bot más versátil para tu servidor de Discord</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">Precios</a></li>
              <li><a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">Soporte</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">Wiki</a></li>
              <li><a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">Documentación</a></li>
              <li><a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">Descargas</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">Términos de servicio</a></li>
              <li><a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">Licencias</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#9b9d9f] text-sm">&copy; 2025 Pogo OS. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" className="text-[#9b9d9f] hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}