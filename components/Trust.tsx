
import React from 'react';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../constants.tsx';

const Trust: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="trust" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-dark mb-8">
              {t.trust.title}
            </h2>
            <ul className="space-y-6">
              {t.trust.points.map((point, index) => (
                <li key={index} className="flex items-center gap-4 text-lg text-gray-700">
                  <div className="bg-green-100 text-green-600 p-1.5 rounded-full shrink-0"><CheckCircle size={24} /></div>
                  <span className="font-semibold">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-center gap-6">
              <div className="bg-brand-dark p-4 rounded-2xl text-brand-light"><ShieldCheck size={40} /></div>
              <div>
                <p className="text-xl font-bold text-brand-dark">{t.trust.badgeTitle}</p>
                <p className="text-gray-600">{t.trust.badgeDesc}</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img src="https://i.imgur.com/9DO24IP.jpeg" alt="Surf" className="rounded-3xl w-full h-full object-cover aspect-square shadow-lg" />
            <img src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=600" alt="Surf" className="rounded-3xl w-full h-full object-cover aspect-square mt-8 shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
