import Link from "next/link";
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
                                <a href="https://discord.gg/SqS7zQgAdP" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
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
                                <Link href="https://discord.gg/SqS7zQgAdP">
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
