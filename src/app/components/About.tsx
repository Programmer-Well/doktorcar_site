import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Anos de Experiência",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Clientes Satisfeitos",
  },
  {
    icon: Clock,
    value: "48h",
    label: "Prazo Médio",
  },
  {
    icon: ThumbsUp,
    value: "100%",
    label: "Garantia de Qualidade",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre a Doktor Car
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Fundada em 2011, a Doktor Car se tornou referência em funilaria
                e pintura automotiva na região. Com uma equipe altamente
                qualificada e equipamentos de última geração, garantimos
                resultados excepcionais em cada serviço.
              </p>
              <p>
                Nossa missão é devolver ao seu veículo a aparência original,
                utilizando técnicas modernas e materiais de primeira qualidade.
                Cada projeto é tratado com atenção especial, desde pequenos
                reparos até restaurações completas.
              </p>
              <p>
                Trabalhamos com todas as marcas e modelos, oferecendo garantia
                em todos os nossos serviços. Nossa cabine de pintura climatizada
                e os equipamentos de última geração asseguram um acabamento
                impecável.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Tecnologia de Ponta
                  </h4>
                  <p className="text-gray-600">
                    Equipamentos modernos para garantir precisão e qualidade
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Profissionais Certificados
                  </h4>
                  <p className="text-gray-600">
                    Equipe treinada e especializada em diversas técnicas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Garantia Total</h4>
                  <p className="text-gray-600">
                    Todos os serviços com garantia de qualidade e durabilidade
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-black" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-black text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Por que escolher a Doktor Car?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Atendimento personalizado e consultivo</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Orçamento transparente e sem surpresas</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Materiais de primeira linha</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Acompanhamento em tempo real</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}