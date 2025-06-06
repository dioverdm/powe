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
{/*import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-10">
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="/img/logo.png" className="rounded-full w-12" />
                                <p className="font-semibold text-xl text-white">Pogo OS</p>
                            </div>
                            <Menu as="div" className="relative mt-3 inline-block text-left">
                                <div>
                                    <Menu.Button className="flex z-1 items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <img
                                            src={`https://flagcdn.com/w80/es.png`}
                                            width="24"
                                            height="18"
                                            className="mr-2 h-4 rounded-sm"
                                        />
                                        Español
                                        <ChevronDownIcon
                                            className="w-5 h-5 ml-2 -mr-1 transform rotate-180 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
<div className="py-1"></div>
<a href="https://top.gg/bot/814494780251045928">
  <img src={"https://top.gg/api/widget/upvotes/814494780251045928.svg"}/>
</a>
                                </div>
                            </Menu>
                        
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Enlaces</p>
                            <div>
                                <Link href="https://top.gg/bot/814494780251045928/vote">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Votar
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <a href="https://discord.gg/KsmhWnz33G" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Servidor de Soporte
                                </a>
                            </div>
                            <div>
                                <a href="https://discord.com/oauth2/authorize?client_id=814494780251045928" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Invítame
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Redes Sociales</p>
                            <div>
                                <Link href="https://discord.gg/KsmhWnz33G">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-discord`} /> Disocrd 
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://github.com/pogo-os">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-github`} /> GitHub 
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://youtube.com/@pogoos">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-youtube`} /> YouTube 
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://instagram.com/pogo_os">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-instagram`} /> Instagram
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://tiktok.com/@pogo_os">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-tiktok`} /> TikTok 
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://x.com/@pogo_os">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-x-twitter`} /> X 
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Importante</p>
                            <div>
                                <Link href="/tos">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Terminos de Servicios
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="/privacy">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Políticas de Privacidad
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; Pogo OS
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
/*}