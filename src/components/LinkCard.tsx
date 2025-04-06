
import { ArrowRight, MoreVertical } from "lucide-react";
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
}

export function LinkCard({ 
  title, 
  description, 
  link, 
  showImage = false,
  imageUrl,
  icon,
  delay = 0
}: LinkCardProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <a
      href={link}
      className={cn(
        "group w-full flex items-center justify-between tron-card p-4 transition-all duration-300",
        "opacity-0 animate-slide-in",
        isPressed ? "scale-[0.98] brightness-110" : ""
      )}
      target="_blank"
      rel="noopener noreferrer"
      style={{ animationDelay: `${delay}ms` }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      <div className="flex items-center gap-4 flex-1">
        {icon && (
          <div className="tron-icon text-2xl flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-cyan-500/30 bg-[#080D16]">
            {icon}
          </div>
        )}
        {showImage && imageUrl && !icon && (
          <div className="w-12 h-12 rounded overflow-hidden shrink-0 border border-cyan-500/50 tron-glow">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-medium tron-text text-lg">{title}</h3>
          {description && (
            <p className="text-sm text-gray-400 group-hover:text-cyan-300/80 transition-colors">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <div 
          className={cn(
            "opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-0 group-hover:translate-x-1",
            "transition-all duration-300"
          )}
        >
          <ArrowRight size={20} className="tron-text" />
        </div>
        <button 
          className="text-gray-500 hover:text-cyan-400 p-1 rounded-full hover:bg-cyan-900/20 ml-2"
          onClick={(e) => {
            e.preventDefault();
            // Aquí se podría implementar un menú de opciones
          }}
        >
          <MoreVertical size={16} />
        </button>
      </div>
    </a>
  );
}
