import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-card hover:bg-accent transition-all duration-300 hover:scale-110 neon-glow"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} text-foreground group-hover:text-accent-foreground`} />
      <Moon className={`absolute h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} text-foreground group-hover:text-accent-foreground`} />
    </button>
  );
}
