
import { ArrowRight, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkCardProps {
  title: string;
  description?: string;
  link: string;
  showImage?: boolean;
  imageUrl?: string;
}

export function LinkCard({ 
  title, 
  description, 
  link, 
  showImage = false,
  imageUrl 
}: LinkCardProps) {
  return (
    <a
      href={link}
      className={cn(
        "group w-full flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 rounded-lg p-4 transition-all duration-300",
        "border border-zinc-800 hover:border-zinc-700"
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-3 flex-1">
        {showImage && imageUrl && (
          <div className="w-12 h-12 rounded overflow-hidden shrink-0">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-medium">{title}</h3>
          {description && <p className="text-sm text-gray-400">{description}</p>}
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight size={16} className="text-gray-400" />
        </div>
        <button 
          className="text-gray-500 hover:text-gray-300 p-1 rounded-full hover:bg-zinc-700"
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
