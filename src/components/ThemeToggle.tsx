import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-3">
      <div className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-xl",
        "bg-card/80 backdrop-blur-sm border border-border/50",
        "transition-all duration-300 hover:border-border"
      )}>
        <Sun className={cn(
          "h-4 w-4 transition-colors",
          !isDark ? "text-primary" : "text-muted-foreground"
        )} />
        
        <Switch
          checked={isDark}
          onCheckedChange={toggleTheme}
          className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted"
          aria-label="Cambiar tema"
        />
        
        <Moon className={cn(
          "h-4 w-4 transition-colors",
          isDark ? "text-primary" : "text-muted-foreground"
        )} />
      </div>
    </div>
  );
}