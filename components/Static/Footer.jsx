import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>

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
</>
    );
};