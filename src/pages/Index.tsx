import { Avatar } from "@/components/ui/avatar";
import { LinkCard } from "@/components/LinkCard";
import { useEffect } from "react";
import { Hexagon, Zap, MessageCircle, CirclePlay, FolderGit2 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const { theme } = useTheme();
  const isAres = theme === "ares";
  
  // Actualizar el título de la página
  useEffect(() => {
    document.title = "@Victor.10001";
    
    // Agregar fuente Orbitron de Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Dynamic theme classes
  const accentColor = isAres ? "red" : "cyan";
  const bgColor = isAres ? "[#1B0A0A]" : "[#080D16]";
  const cardBgColor = isAres ? "[#1D0F0F]" : "[#0C1421]";
  const shadowColor = isAres ? "rgba(255,0,0,0.2)" : "rgba(0,195,255,0.2)";

  return (
    <div className={`min-h-screen bg-transparent text-white flex flex-col items-center px-4 py-12 md:py-16`}
         style={{
           backgroundImage: `
             linear-gradient(0deg, rgba(10, 15, 27, 0.9) 0%, rgba(10, 15, 27, 0.95) 100%),
             repeating-linear-gradient(to right, rgba(${isAres ? "255, 0, 0" : "0, 195, 255"}, 0.05) 0px, rgba(${isAres ? "255, 0, 0" : "0, 195, 255"}, 0.05) 1px, transparent 1px, transparent 50px),
             repeating-linear-gradient(to bottom, rgba(${isAres ? "255, 0, 0" : "0, 195, 255"}, 0.05) 0px, rgba(${isAres ? "255, 0, 0" : "0, 195, 255"}, 0.05) 1px, transparent 1px, transparent 50px)
           `
         }}
    >
      <ThemeToggle />
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Perfil */}
        <div className="flex flex-col items-center mb-10 animate-fade-in">
          <div className={`border border-${accentColor}-500/30 p-1 rounded-full shadow-[0_0_5px_${shadowColor}]`}>
            <Avatar className={`h-24 w-24 border-[2px] border-${accentColor}-500/40 bg-${bgColor}`}>
              <img 
                src="/lovable-uploads/3dae546f-a277-4c6b-9c19-35cb10966ba5.png" 
                alt="Foto de perfil" 
                className="h-full w-full object-cover object-center"
              />
            </Avatar>
          </div>
          <h1 className={`mt-5 text-3xl font-bold text-${accentColor}-400`}>@Victor.10001</h1>
          <div className={`mt-2 px-4 py-1 rounded-full border border-${accentColor}-500/20 bg-${bgColor}/80`}>
            <p className={`text-${accentColor}-400/80 text-sm tracking-wide`}>MGMT: victor117.berrios@gmail.com</p>
          </div>
        </div>

        {/* Enlaces */}
        <div className="w-full space-y-4 mb-10">
          <LinkCard 
            title="Podcast" 
            description="Escucha mis episodios sobre temas random"
            link="#"
            icon={<CirclePlay className="w-6 h-6" />}
            delay={100}
            theme={theme}
          />
          <LinkCard 
            title="Proyectos Profesionales" 
            description="Desarrollo de proyectos innovadores y soluciones tecnológicas"
            link="#"
            icon={<Hexagon className="w-6 h-6" />}
            delay={200}
            theme={theme}
          />
          <LinkCard 
            title="Contacto" 
            description="Hablemos sobre colaboraciones y oportunidades!!!"
            link="#"
            icon={<MessageCircle className="w-6 h-6" />}
            delay={300}
            theme={theme}
          />
        </div>

        {/* Más contenido
        <div className="mt-8 w-full animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h2 className={`text-center mb-4 text-${accentColor}-400 uppercase text-sm tracking-[4px]`}>Más contenido</h2>
          <div className="w-full">
            <LinkCard 
              title="Mi último video en YouTube"
              link="#"
              showImage={true}
              imageUrl="/lovable-uploads/3dae546f-a277-4c6b-9c19-35cb10966ba5.png"
              delay={500}
              theme={theme}
            />
          </div>
        </div> */}

        {/* Footer */}
        <footer className={`mt-12 text-${accentColor}-500/50 text-sm text-center animate-fade-in`} style={{ animationDelay: "0.6s" }}>
          <div className={`border border-${accentColor}-500/20 inline-block px-4 py-2 bg-${bgColor}/50 rounded-lg`}>
            © 2025 @Victor Hernandez - Todos los derechos reservados
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
