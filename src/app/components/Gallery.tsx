import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1662594110036-2f0e20c60021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwc3ByYXklMjBwYWludGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzAyNTE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Pintura Profissional",
    category: "Pintura",
  },
  {
    image:
      "https://images.unsplash.com/photo-1759580827787-2eed5f9eb87c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjByZXBhaXIlMjBnYXJhZ2V8ZW58MXx8fHwxNzcwMjUxNDI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Carros de Luxo",
    category: "Especializado",
  },
  {
    image:
      "https://images.unsplash.com/photo-1765603712436-fd067ff74f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZXN0b3JhdGlvbiUyMHBvbGlzaGluZ3xlbnwxfHx8fDE3NzAyNTE0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Polimento e Restauração",
    category: "Polimento",
  },
  {
    image:
      "https://images.unsplash.com/photo-1769779394782-514b9f0b2ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwd29ya3Nob3AlMjBtZWNoYW5pYyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzAyNTE0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Oficina Moderna",
    category: "Instalações",
  },
  {
    image:
      "https://images.unsplash.com/photo-1610092708835-af669294f3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwYm9keSUyMHNob3AlMjBjYXIlMjBwYWludGluZ3xlbnwxfHx8fDE3NzAyNTE0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Reparos Especializados",
    category: "Funilaria",
  },
  {
    image:
      "https://images.unsplash.com/photo-1662594110036-2f0e20c60021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwc3ByYXklMjBwYWludGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzAyNTE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Acabamento Perfeito",
    category: "Pintura",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Galeria de Trabalhos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns dos nossos trabalhos realizados com excelência e
            dedicação
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gray-300 text-sm font-semibold mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}