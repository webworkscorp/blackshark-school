
import React from 'react';
import { useLanguage } from '../constants.tsx';

const Services: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-32 bg-brand-gray border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-xl">
            <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-6">{t.services.tag}</h4>
            <h2 className="text-5xl font-display font-bold text-brand-dark">{t.services.title}</h2>
          </div>
          <p className="text-gray-400 font-light text-lg max-w-sm">
            {t.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {t.services.pricing.map((item, idx) => (
            <div key={idx} className="bg-brand-dark p-10 flex justify-between items-center group hover:bg-brand-accent transition-all duration-500">
              <div>
                <p className="text-brand-light text-xs font-bold uppercase tracking-[0.2em] mb-2">{item.tag}</p>
                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tighter">{item.duration}</h3>
              </div>
              <div className="text-right">
                <span className="text-4xl font-display font-black text-brand-light">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-10 mb-20 border border-gray-100 flex flex-wrap justify-center gap-12">
          {t.services.inclusions.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="bg-brand-gray p-3 text-brand-teal">{item.icon}</div>
              <span className="text-sm font-bold text-brand-dark uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.services.items.map((service, index) => (
            <div key={index} className="bg-white p-10 border border-transparent hover:border-brand-teal/30 transition-all duration-500 group relative overflow-hidden">
              <div className="text-brand-dark bg-brand-gray p-5 w-fit group-hover:bg-brand-dark group-hover:text-white transition-colors duration-500 mb-8">{service.icon}</div>
              <h3 className="text-lg font-bold text-brand-dark mb-4 uppercase tracking-tighter">{service.name}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
