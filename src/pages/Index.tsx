
import { Avatar } from "@/components/ui/avatar";
import { LinkCard } from "@/components/LinkCard";
import { useEffect } from "react";
import { Hexagon, Zap, MessageCircle, CirclePlay, FolderGit2 } from "lucide-react";

const Index = () => {
  // Actualizar el título de la página
  useEffect(() => {
    document.title = "@tunombre - Enlaces";
    
    // Agregar fuente Orbitron de Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center px-4 py-12 md:py-16">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Perfil */}
        <div className="flex flex-col items-center mb-10 animate-fade-in">
          <div className="border border-cyan-500/30 p-1 rounded-full shadow-[0_0_5px_rgba(0,195,255,0.2)]">
            <Avatar className="h-24 w-24 border-[2px] border-cyan-500/40 bg-[#080D16]">
              <img 
                src="/lovable-uploads/47269266-23a9-4687-884a-aaad7c2e3281.png" 
                alt="Foto de perfil" 
                className="h-full w-full object-cover"
              />
            </Avatar>
          </div>
          <h1 className="mt-5 text-3xl font-bold text-cyan-400">@tunombre</h1>
          <div className="mt-2 px-4 py-1 rounded-full border border-cyan-500/20 bg-[#080D16]/80">
            <p className="text-cyan-400/80 text-sm tracking-wide">MGMT: tunombre@ejemplo.com</p>
          </div>
        </div>

        {/* Enlaces */}
        <div className="w-full space-y-4 mb-10">
          <LinkCard 
            title="Podcast" 
            description="Escucha mis episodios sobre tecnología y creatividad"
            link="#"
            icon={<CirclePlay className="w-6 h-6" />}
            delay={100}
          />
          <LinkCard 
            title="Experimentos" 
            description="Proyectos creativos y pruebas de concepto"
            link="#"
            icon={<Hexagon className="w-6 h-6" />}
            delay={200}
          />
          <LinkCard 
            title="Contacto" 
            description="Hablemos sobre colaboraciones y oportunidades"
            link="#"
            icon={<MessageCircle className="w-6 h-6" />}
            delay={300}
          />
          <LinkCard 
            title="Proyectos" 
            description="Conoce mis trabajos más destacados"
            link="#"
            icon={<FolderGit2 className="w-6 h-6" />}
            delay={400}
          />
        </div>

        {/* Más contenido */}
        <div className="mt-8 w-full animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-center mb-4 text-cyan-400 uppercase text-sm tracking-[4px]">Más contenido</h2>
          <div className="w-full">
            <LinkCard 
              title="Mi último video en YouTube"
              link="#"
              showImage={true}
              imageUrl="/lovable-uploads/47269266-23a9-4687-884a-aaad7c2e3281.png"
              delay={500}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-cyan-500/50 text-sm text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="border border-cyan-500/20 inline-block px-4 py-2 bg-[#080D16]/50 rounded-lg">
            © 2025 @tunombre - Todos los derechos reservados
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
