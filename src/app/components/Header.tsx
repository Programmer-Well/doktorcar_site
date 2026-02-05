import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black">Doktor Car</h1>
            <span className="ml-2 text-sm text-gray-600 hidden sm:block">
              Funilaria & Pintura
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-700 hover:text-black transition-colors py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-700 hover:text-black transition-colors py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left text-gray-700 hover:text-black transition-colors py-2"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 hover:text-black transition-colors py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}