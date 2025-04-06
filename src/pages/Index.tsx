
import { Avatar } from "@/components/ui/avatar";
import { LinkCard } from "@/components/LinkCard";
import { useEffect } from "react";

const Index = () => {
  // Actualizar el título de la página
  useEffect(() => {
    document.title = "@tunombre - Enlaces";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8 md:py-12">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Perfil */}
        <div className="flex flex-col items-center mb-8">
          <Avatar className="h-24 w-24 border-2 border-gray-700">
            <img 
              src="/lovable-uploads/47269266-23a9-4687-884a-aaad7c2e3281.png" 
              alt="Foto de perfil" 
              className="h-full w-full object-cover"
            />
          </Avatar>
          <h1 className="mt-4 text-2xl font-bold">@tunombre</h1>
          <p className="mt-1 text-gray-400 text-sm">MGMT: tunombre@ejemplo.com</p>
        </div>

        {/* Enlaces */}
        <div className="w-full space-y-4">
          <LinkCard 
            title="Podcast" 
            description="Escucha mis episodios sobre tecnología y creatividad"
            link="#"
          />
          <LinkCard 
            title="Experimentos" 
            description="Proyectos creativos y pruebas de concepto"
            link="#"
          />
          <LinkCard 
            title="Contacto" 
            description="Hablemos sobre colaboraciones y oportunidades"
            link="#"
          />
          <LinkCard 
            title="Proyectos" 
            description="Conoce mis trabajos más destacados"
            link="#"
          />
        </div>

        {/* Más contenido */}
        <div className="mt-12 w-full">
          <h2 className="text-center mb-4 text-gray-400">Más contenido</h2>
          <div className="w-full">
            <LinkCard 
              title="Mi último video en YouTube"
              link="#"
              showImage={true}
              imageUrl="/lovable-uploads/47269266-23a9-4687-884a-aaad7c2e3281.png"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-gray-500 text-sm text-center">
          © 2025 @tunombre - Todos los derechos reservados
        </footer>
      </div>
    </div>
  );
};

export default Index;
