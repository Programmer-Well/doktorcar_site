import { Phone, Mail, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1610092708835-af669294f3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwYm9keSUyMHNob3AlMjBjYXIlMjBwYWludGluZ3xlbnwxfHx8fDE3NzAyNTE0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Oficina de funilaria e pintura"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Recuperação Completa do Seu Veículo
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl">
            Especialistas em funilaria e pintura automotiva com mais de 15 anos
            de experiência. Devolvemos a beleza original do seu carro com
            qualidade e garantia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={scrollToContact}
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 text-lg font-semibold shadow-lg"
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </button>
            <a
              href="tel:+5511999999999"
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-lg font-semibold shadow-lg"
            >
              <Phone size={20} />
              (11) 99999-9999
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-gray-300 mb-2">15+</div>
              <div className="text-white">Anos de Experiência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-gray-300 mb-2">5000+</div>
              <div className="text-white">Veículos Atendidos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-gray-300 mb-2">100%</div>
              <div className="text-white">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}