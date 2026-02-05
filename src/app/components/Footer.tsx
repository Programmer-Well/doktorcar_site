import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-300 mb-4">
              Doktor Car
            </h3>
            <p className="text-gray-400 mb-4">
              Especialistas em funilaria e pintura automotiva há mais de 15
              anos.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gray-200 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gray-200 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("gallery")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gray-200 transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gray-200 transition-colors"
                >
                  Sobre
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Funilaria Completa</li>
              <li>Pintura Automotiva</li>
              <li>Polimento e Cristalização</li>
              <li>Proteção de Pintura</li>
              <li>Restauração de Veículos</li>
              <li>Laudo e Vistoria</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Phone size={20} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p>(11) 99999-9999</p>
                  <p>(11) 3333-3333</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={20} className="flex-shrink-0 mt-0.5" />
                <p>contato@doktorcar.com.br</p>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <p>
                  Rua dos Automóveis, 1234
                  <br />
                  São Paulo/SP
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Doktor Car Funilaria e Pintura.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}