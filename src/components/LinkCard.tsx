import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface LinkCardProps {
  title: string;
  description?: string;
  link: string;
  showImage?: boolean;
  imageUrl?: string;
  icon?: React.ReactNode;
  delay?: number;
  theme?: "default" | "alternate";
}

export function LinkCard({ 
  title, 
  description, 
  link, 
  showImage = false,
  imageUrl,
  icon,
  delay = 0,
  theme = "default"
}: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={link}
      className={cn(
        "group professional-card elegant-shadow-hover",
        "animate-slide-up w-full flex items-center justify-between",
        "hover:border-primary/20 transition-all duration-300"
      )}
      target="_blank"
      rel="noopener noreferrer"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-6 flex-1">
        {icon && (
          <div className={cn(
            "flex-shrink-0 w-12 h-12 flex items-center justify-center",
            "rounded-xl bg-gradient-to-br from-primary/10 to-accent/10",
            "border border-border/50 text-foreground/80",
            "group-hover:text-foreground group-hover:border-primary/30",
            "transition-all duration-300"
          )}>
            {icon}
          </div>
        )}
        {showImage && imageUrl && !icon && (
          <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-border/50">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <h3 className={cn(
            "font-semibold text-lg text-foreground mb-1",
            "group-hover:text-primary transition-colors duration-300"
          )}>
            {title}
          </h3>
          {description && (
            <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
              {description}
            </p>
          )}
        </div>
      </div>
      
      <div className={cn(
        "flex items-center justify-center w-8 h-8",
        "rounded-lg bg-muted/50 text-muted-foreground",
        "group-hover:bg-primary group-hover:text-primary-foreground",
        "transition-all duration-300",
        isHovered ? "translate-x-1 -translate-y-1" : ""
      )}>
        <ArrowUpRight size={16} />
      </div>
    </a>
  );
}