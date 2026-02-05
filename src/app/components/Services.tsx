import { Wrench, Paintbrush, Shield, Sparkles, Car, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Funilaria Completa",
    description:
      "Reparos de amassados, batidas e deformações na lataria com técnicas modernas e equipamentos de ponta.",
    features: [
      "Remoção de amassados",
      "Substituição de peças",
      "Alinhamento de estrutura",
      "Soldas e reparos metálicos",
    ],
  },
  {
    icon: Paintbrush,
    title: "Pintura Automotiva",
    description:
      "Pintura de alta qualidade com cabine especializada, garantindo acabamento perfeito e durabilidade.",
    features: [
      "Pintura completa ou parcial",
      "Retoque de arranhões",
      "Preparação de superfície",
      "Secagem em estufa",
    ],
  },
  {
    icon: Sparkles,
    title: "Polimento e Cristalização",
    description:
      "Tratamentos que restauram o brilho original da pintura e protegem contra intempéries.",
    features: [
      "Polimento técnico",
      "Cristalização de pintura",
      "Remoção de manchas",
      "Proteção UV",
    ],
  },
  {
    icon: Shield,
    title: "Proteção de Pintura",
    description:
      "Aplicação de películas e revestimentos que protegem a pintura do seu veículo.",
    features: [
      "PPF (Paint Protection Film)",
      "Vitrificação",
      "Cera de carnaúba",
      "Selantes automotivos",
    ],
  },
  {
    icon: Car,
    title: "Restauração de Veículos",
    description:
      "Restauração completa de veículos antigos e clássicos com atenção aos detalhes originais.",
    features: [
      "Restauração de lataria",
      "Pintura original",
      "Recuperação de cromados",
      "Conservação de patrimônio",
    ],
  },
  {
    icon: CheckCircle,
    title: "Laudo e Vistoria",
    description:
      "Inspeção técnica completa para identificar problemas e avaliar o estado geral do veículo.",
    features: [
      "Vistoria pré-compra",
      "Laudo técnico",
      "Avaliação de danos",
      "Orçamento detalhado",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de funilaria e pintura
            para manter seu veículo sempre impecável
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-black" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <CheckCircle
                        size={20}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}