
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#2D1B14] text-white py-20 border-t border-[#C5A059]/20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h3 className="text-2xl font-serif text-[#C5A059] mb-6 tracking-tighter">LOS PRÍNCIPES</h3>
          <p className="text-sm font-light text-white/60 leading-relaxed mb-8">
            Desde Siempre en Córdoba. Artesanía churrera y excelencia chocolatera en el Barrio de Fátima.
          </p>
          <div className="flex space-x-4">
            <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.419.419-.818.679-1.381.896-.422.164-1.056.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.419-.679-.818-.896-1.381-.164-.422-.36-1.056-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.556-.791.306-1.459.717-2.126 1.384-.666.667-1.077 1.335-1.383 2.126-.297.763-.499 1.634-.556 2.911-.058 1.28-.071 1.688-.071 4.947s.013 3.667.071 4.947c.057 1.277.259 2.148.556 2.911.306.791.717 1.459 1.383 2.126.667.666 1.335 1.077 2.126 1.383.763.297 1.634.499 2.911.556 1.28.058 1.688.071 4.947.071s3.667-.013 4.947-.071c1.277-.057 2.148-.259 2.911-.556.791-.306 1.459-.717 2.126-1.383.667-.667 1.077-1.335 1.383-2.126.297-.763.499-1.634.556-2.911.058-1.28.071-1.688.071-4.947s-.013-3.667-.071-4.947c-.057-1.277-.259-2.148-.556-2.911-.306-.791-.717-1.459-1.383-2.126-.667-.666-1.335-1.077-2.126-1.383-.763-.297-1.634-.499-2.911-.556-1.28-.058-1.688-.071-4.947-.071z" /></svg>
            </a>
            <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.783h-2.954v-3.429h2.954v-2.527c0-2.925 1.787-4.52 4.396-4.52 1.248 0 2.322.092 2.633.133v3.056l-1.81.001c-1.419 0-1.694.675-1.694 1.664v2.173h3.384l-.441 3.429h-2.943v8.783h6.135c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z" /></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-6">Ubicación</h4>
          <p className="text-sm text-white/80 font-light mb-2">{BUSINESS_INFO.address}</p>
          <p className="text-sm text-white/80 font-light mb-6">{BUSINESS_INFO.city}</p>
          <a
            href="https://maps.google.com/?q=Avenida+Virgen+de+Fátima+47+Córdoba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#C5A059] underline tracking-widest hover:text-white transition-colors"
          >
            VER EN GOOGLE MAPS
          </a>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-6">Contacto</h4>
          <p className="text-sm text-white/80 font-light mb-2">{BUSINESS_INFO.phone}</p>
          <p className="text-sm text-white/80 font-light mb-6">{BUSINESS_INFO.email}</p>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-2">Horario</h4>
          <p className="text-xs text-white/60 font-light">{BUSINESS_INFO.hours}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-6">Newsletter Gourmet</h4>
          <p className="text-xs text-white/60 font-light mb-4">Recibe nuestras ofertas especiales y novedades del obrador.</p>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Tu email"
              className="bg-white/5 border border-white/10 rounded-none px-4 py-2 text-xs focus:outline-none focus:border-[#C5A059]"
            />
            <button className="bg-[#C5A059] text-[#2D1B14] py-2 text-xs font-bold uppercase tracking-widest">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/40 tracking-[0.2em] uppercase">
          &copy; {new Date().getFullYear()} {BUSINESS_INFO.company_name}. Diseñado para la excelencia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
