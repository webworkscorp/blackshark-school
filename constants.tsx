
import React from 'react';
import { 
  Users, 
  Target, 
  Award, 
  BookOpen,
  Waves,
  Truck,
  Apple
} from 'lucide-react';

export const BRAND = {
  name: "Blackshack Surf School CR",
  location: "Puerto Viejo, Limón – Costa Rica",
  whatsapp: "https://wa.me/50671069930",
  whatsappNumber: "+506 7106 9930",
  facebook: "Blackshack Surf School",
  facebookUrl: "https://www.facebook.com/share/1AVTfrWCW2/?mibextid=wwXIfr",
  instagram: "@blackshack_surf_school.cr",
  instagramUrl: "https://instagram.com/blackshack_surf_school.cr"
};

export const TRANSLATIONS = {
  es: {
    nav: [
      { label: 'Nosotros', href: '#about' },
      { label: 'Clases y Precios', href: '#services' },
      { label: 'Cómo funciona', href: '#process' },
      { label: 'Reservar', href: '#booking' },
    ],
    hero: {
      title: "BIENVENIDO A VIVIR EL",
      titleAccent: "REGALO DEL SURF.",
      description: "Únete a nosotros y descubre la emoción de surfear en el Caribe costarricense con instructores locales y un ambiente seguro y profesional.",
      cta: "RESERVAR CLASE"
    },
    about: {
      tag: "Nuestra Historia",
      title: "Pasión local por el surf en Puerto Viejo.",
      description: "Somos surfistas locales que amamos lo que hacemos. Nuestra meta es que aprendas a surfear de forma divertida, segura y sin complicaciones. No importa tu edad o nivel, aquí te acompañamos paso a paso.",
      stats: [
        { value: "12+", label: "Años surfeando" },
        { value: "100%", label: "Comprometidos" }
      ],
      features: [
        { title: "Pura Vida", desc: "Disfrutamos cada clase como si fuera la primera. El buen ambiente es prioridad." },
        { title: "Seguridad", desc: "Conocemos las corrientes y el mar local para que solo te preocupes de disfrutar." }
      ]
    },
    services: {
      tag: "Nuestras Clases",
      title: "Planes y Precios",
      description: "Todo lo que necesitas para surfear está incluido. Solo trae tu protector solar y ganas de aprender.",
      pricing: [
        { duration: "Sesión de 1h 30min", price: "$55", tag: "Opción Recomendada" },
        { duration: "Sesión de 2h", price: "$60", tag: "Más popular" }
      ],
      inclusions: [
        { label: "Tabla y Licra", icon: <Waves size={18} /> },
        { label: "Transporte local", icon: <Truck size={18} /> },
        { label: "Frutas de temporada", icon: <Apple size={18} /> }
      ],
      items: [
        {
          name: "Principiantes",
          description: "Ideal para tu primera vez. Aprende lo básico, seguridad en el agua y ponte de pie en tu primera clase.",
          icon: <BookOpen className="w-8 h-8" />
        },
        {
          name: "Intermedios",
          description: "Mejora tu técnica, aprende a leer mejor las olas y gana confianza en olas más grandes.",
          icon: <Target className="w-8 h-8" />
        },
        {
          name: "Grupos y Amigos",
          description: "Ven con tus amigos o familia. Una experiencia divertida y segura para compartir en el mar.",
          icon: <Users className="w-8 h-8" />
        },
        {
          name: "Clase Privada",
          description: "Atención exclusiva 1 a 1 para avanzar mucho más rápido y con total dedicación.",
          icon: <Award className="w-8 h-8" />
        }
      ]
    },
    process: {
      steps: [
        { step: "01", title: "Reserva", text: "Escríbenos por WhatsApp para elegir el mejor día y hora según el mar." },
        { step: "02", title: "Encuentro", text: "Te recogemos o nos vemos en el spot con todo el equipo listo para ti." },
        { step: "03", title: "Al Agua", text: "Explicación rápida en la arena y vamos directo al mar a surfear." },
        { step: "04", title: "Disfruta", text: "Surfea tus olas y llévate una experiencia increíble de Puerto Viejo." }
      ]
    },
    trust: {
      title: "Por qué elegir Blackshack",
      points: [
        "Instructores locales que conocen bien el mar",
        "Equipo de buena calidad siempre incluido",
        "Ambiente relajado y seguro para todos",
        "Buscamos la mejor playa según el día",
        "Atención amable y personalizada"
      ],
      badgeTitle: "Seguridad Garantizada",
      badgeDesc: "Protocolos de seguridad certificados para todas las edades."
    },
    booking: {
      tag: "Reserva tu sesión",
      title: "¿Surfeamos hoy?",
      labelName: "Nombre",
      labelLevel: "Nivel",
      labelDetails: "Detalles breves",
      placeholderName: "Escribe tu nombre",
      placeholderDetails: "Cuéntanos cuántos son...",
      levels: ["Principiante", "Intermedio", "Avanzado"],
      cta: "ENVIAR RESERVA",
      successTitle: "¡Casi listo!",
      successDesc: "Hemos preparado tu mensaje. Revisa tu WhatsApp y presiona 'Enviar'.",
      back: "VOLVER AL FORMULARIO"
    },
    footer: {
      desc: "Vive tu primera ola en Puerto Viejo con una experiencia real, segura y guiada por surfistas locales.",
      contact: "Contacto"
    }
  },
  en: {
    nav: [
      { label: 'About', href: '#about' },
      { label: 'Classes & Rates', href: '#services' },
      { label: 'How it works', href: '#process' },
      { label: 'Book now', href: '#booking' },
    ],
    hero: {
      title: "WELCOME TO THE",
      titleAccent: "GIFT OF SURFING.",
      description: "Join us and discover the thrill of surfing in the Costa Rican Caribbean with local instructors in a safe and professional environment.",
      cta: "BOOK A LESSON"
    },
    about: {
      tag: "Our Story",
      title: "Local passion for surfing in Puerto Viejo.",
      description: "We are local surfers who love what we do. Our goal is for you to learn to surf in a fun, safe, and hassle-free way. No matter your age or level, we're with you every step of the way.",
      stats: [
        { value: "12+", label: "Years surfing" },
        { value: "100%", label: "Committed" }
      ],
      features: [
        { title: "Pura Vida", desc: "We enjoy every class like it's the first. A great atmosphere is our priority." },
        { title: "Safety", desc: "We know the local currents and sea so you only have to worry about enjoying yourself." }
      ]
    },
    services: {
      tag: "Our Lessons",
      title: "Plans & Pricing",
      description: "Everything you need to surf is included. Just bring your sunscreen and willingness to learn.",
      pricing: [
        { duration: "1h 30min Session", price: "$55", tag: "Recommended Option" },
        { duration: "2h Session", price: "$60", tag: "Most popular" }
      ],
      inclusions: [
        { label: "Board & Lycra", icon: <Waves size={18} /> },
        { label: "Local Transport", icon: <Truck size={18} /> },
        { label: "Seasonal Fruits", icon: <Apple size={18} /> }
      ],
      items: [
        {
          name: "Beginners",
          description: "Ideal for your first time. Learn the basics, water safety, and stand up on your very first lesson.",
          icon: <BookOpen className="w-8 h-8" />
        },
        {
          name: "Intermediates",
          description: "Improve your technique, learn to read waves better, and gain confidence in larger swells.",
          icon: <Target className="w-8 h-8" />
        },
        {
          name: "Groups & Friends",
          description: "Come with friends or family. A fun and safe experience to share in the sea.",
          icon: <Users className="w-8 h-8" />
        },
        {
          name: "Private Lesson",
          description: "Exclusive 1-on-1 attention to advance much faster with total dedication.",
          icon: <Award className="w-8 h-8" />
        }
      ]
    },
    process: {
      steps: [
        { step: "01", title: "Booking", text: "Write to us on WhatsApp to choose the best day and time according to the sea." },
        { step: "02", title: "Meetup", text: "We pick you up or meet at the spot with all the equipment ready for you." },
        { step: "03", title: "To the Water", text: "Quick briefing on the sand and then straight into the sea to surf." },
        { step: "04", title: "Enjoy", text: "Surf your waves and take home an incredible Puerto Viejo experience." }
      ]
    },
    trust: {
      title: "Why choose Blackshack",
      points: [
        "Local instructors who know the sea well",
        "High-quality equipment always included",
        "Relaxed and safe environment for everyone",
        "We find the best beach based on the day",
        "Friendly and personalized attention"
      ],
      badgeTitle: "Guaranteed Safety",
      badgeDesc: "Certified safety protocols for all ages."
    },
    booking: {
      tag: "Book your session",
      title: "Shall we surf today?",
      labelName: "Name",
      labelLevel: "Level",
      labelDetails: "Short details",
      placeholderName: "Enter your name",
      placeholderDetails: "Tell us how many people...",
      levels: ["Beginner", "Intermediate", "Advanced"],
      cta: "SEND BOOKING",
      successTitle: "Almost ready!",
      successDesc: "We've prepared your message. Check your WhatsApp and press 'Send'.",
      back: "BACK TO FORM"
    },
    footer: {
      desc: "Experience your first wave in Puerto Viejo with a real, safe experience guided by local surfers.",
      contact: "Contact"
    }
  }
};
