import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { email, formattedPhone, phone } from '../../assets/strings';
import { SocialLinks, QuickLinks } from '../footer';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { translations } = useLanguage();
  const t = translations.footer;
  const t_links = translations.navigation;

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8">
        {/* Conteúdo principal do footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Sobre */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-100 mb-4">Ian Torres</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              {t.about}
            </p>
            <SocialLinks />
          </div>

          {/* Coluna 2 - Links rápidos */}
          <QuickLinks />

          {/* Coluna 3 - Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-100 mb-4">{t.contact}</h3>
            <div className="space-y-2">
              <p className="text-slate-400">
                <span className="font-medium">{t.email}</span><br />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors duration-200">
                  {email}
                </a>
              </p>
              <p className="text-slate-400">
                <span className="font-medium">{t.whatsapp}</span><br />
                <a href={`https://wa.me/${phone}`} className="hover:text-white transition-colors duration-200">
                  {formattedPhone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Linha de copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            {t.copyright.replace('{year}', currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 