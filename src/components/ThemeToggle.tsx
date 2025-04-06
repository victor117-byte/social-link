
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isAres = theme === "ares";

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2 fixed top-4 right-4 bg-[#0C1421]/90 backdrop-blur-sm border border-cyan-500/20 p-2 rounded-lg z-50">
      <span className={`text-sm ${isAres ? 'text-red-400' : 'text-cyan-400'}`}>
        {isAres ? 'Ares' : 'Legacy'}
      </span>
      <Switch
        checked={isAres}
        onCheckedChange={toggleTheme}
        className={isAres ? 'bg-red-500 data-[state=checked]:bg-red-500 border-red-400' : 'bg-cyan-500 data-[state=checked]:bg-cyan-500 border-cyan-400'}
      />
      {isAres ? (
        <Sun className="h-4 w-4 text-red-400" />
      ) : (
        <Moon className="h-4 w-4 text-cyan-400" />
      )}
    </div>
  );
}
