
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../constants.tsx';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[95vh] flex flex-col bg-brand-dark overflow-hidden pt-48 pb-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=1920"
          alt="Blackshack Professional Surf Academy"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-auto">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight mb-10 tracking-tighter">
            {t.hero.title} <br/>
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>{t.hero.titleAccent}</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <a
                href="#booking"
                className="group inline-flex items-center justify-center gap-3 bg-white text-brand-dark px-10 py-5 font-bold hover:bg-brand-light transition-all text-xs tracking-[0.2em]"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
