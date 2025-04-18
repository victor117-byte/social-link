
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
  const [isPressed, setIsPressed] = useState(false);
  const isAlternate = theme === "alternate";
  
  const accentColor = isAlternate ? "red" : "cyan";
  const bgColor = isAlternate ? "[#1D0F0F]" : "[#0C1421]";
  const darkBgColor = isAlternate ? "[#180808]" : "[#080D16]";
  
  return (
    <a
      href={link}
      className={cn(
        "group w-full flex items-center justify-between p-4 transition-all duration-300",
        "opacity-0 animate-slide-in rounded-lg",
        `bg-${bgColor}/90 backdrop-blur-sm border border-${accentColor}-500/20 hover:border-${accentColor}-500/40`,
        `hover:shadow-[0_0_10px_rgba(${isAlternate ? "255,0,0" : "0,195,255"},0.2)] hover:translate-y-[-2px]`,
        isPressed ? "scale-[0.98]" : ""
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
          <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-${accentColor}-500/20 bg-${darkBgColor} text-${accentColor}-400`}>
            {icon}
          </div>
        )}
        {showImage && imageUrl && !icon && (
          <div className={`w-12 h-12 rounded overflow-hidden shrink-0 border border-${accentColor}-500/20`}>
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1">
          <h3 className={`font-medium text-lg text-${accentColor}-400`}>{title}</h3>
          {description && (
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <div 
          className={`text-${accentColor}-400 opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1`}
        >
          <ArrowRight size={20} />
        </div>
        <button 
          className={`text-gray-500 hover:text-${accentColor}-400 p-1 rounded-full hover:bg-${accentColor}-900/20 ml-2`}
          onClick={(e) => {
            e.preventDefault();
            // Options menu could be implemented here
          }}
        >
          <MoreVertical size={16} />
        </button>
      </div>
    </a>
  );
}
