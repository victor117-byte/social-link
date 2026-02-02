import { Avatar, AvatarImage } from "@/components/ui/avatar";
import avatarPng from "@/../public/lovable-uploads/3dae546f-a277-4c6b-9c19-35cb10966ba5.png";
import { LinkCard } from "@/components/LinkCard";
import { useEffect } from "react";
import { Hexagon, MessageCircle, Mail, Rocket } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    document.title = "@Victor.10001 - Portafolio Profesional";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold text-lg text-foreground">
            @Victor.10001
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-2xl">
          {/* Profile Section */}
          <section className="text-center mb-16">
            <div className="animate-scale-in delay-100 mb-8">
              <div className="relative inline-block">
                <Avatar className="h-32 w-32 border-4 border-border/20 shadow-xl mx-auto animate-float">
                  <AvatarImage 
                    src={avatarPng}
                    alt="Víctor Hernández - Perfil profesional"
                    className="object-cover"
                  />
                </Avatar>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-30"></div>
              </div>
            </div>
            
            <div className="animate-slide-up delay-200 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                  Víctor Hernández
                </h1>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted/50 border border-border/30">
                  <span className="text-sm font-medium text-muted-foreground">
                    victor117.berrios@gmail.com
                  </span>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
                Desarrollador creativo y profesional, apasionado por la tecnología y la innovación.
              </p>
            </div>
          </section>

          {/* Featured Project */}
          <section className="mb-12 animate-slide-up delay-250">
            <a
              href="https://adquion.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border border-border/50 p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Proyecto Destacado</span>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Adquion</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Plataforma SaaS de automatización fiscal inteligente para contadores. Integraciones con SAT, scraping automático de documentos, notificaciones por WhatsApp y reportes en tiempo real.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:translate-x-2 transition-transform duration-300">
                  <span>Conocer más</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </section>

          {/* Links Section */}
          <section className="space-y-4 mb-16">
            <LinkCard 
              title="Portafolio" 
              description="Explora mis trabajos y proyectos creativos"
              link="#"
              icon={<Hexagon className="w-6 h-6" />}
              delay={300}
            />
            <LinkCard 
              title="The Grid Newsletter" 
              description="Suscríbete a mi boletín para recibir contenido exclusivo"
              link="https://cooperative-search-501.notion.site/The-Grid-Newsletter-28f191735b578086be20cb4aed0c25aa"
              icon={<Mail className="w-6 h-6" />}
              delay={350}
            />
            <LinkCard 
              title="Contacto" 
              description="¡Conectemos! Abierto a nuevas colaboraciones."
              link="#"
              icon={<MessageCircle className="w-6 h-6" />}
              delay={400}
            />
          </section>

          {/* Footer */}
          <footer className="text-center animate-slide-up delay-500">
            <div className="inline-flex items-center px-6 py-3 rounded-xl bg-card border border-border/50 shadow-sm">
              <p className="text-sm text-muted-foreground">
                © 2025 Víctor Hernández · Todos los derechos reservados
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
