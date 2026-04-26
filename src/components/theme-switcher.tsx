'use client';

import { useTheme } from '@/context/theme-context';
import { themes, type ThemeName } from '@/lib/themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';
import { Suspense } from 'react';

function ThemeSwitcherContent() {
  try {
    const { theme, setTheme } = useTheme();

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-foreground hover:bg-muted/50"
          >
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline text-sm">Theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as ThemeName)}>
            {(Object.keys(themes) as ThemeName[]).map((themeName) => (
              <DropdownMenuRadioItem key={themeName} value={themeName}>
                <div className="flex items-center gap-2 w-full">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: themes[themeName].colors.primary }}
                  />
                  {themes[themeName].label}
                </div>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } catch {
    // Render nothing if theme context is not available
    return null;
  }
}

export function ThemeSwitcher() {
  return (
    <Suspense fallback={null}>
      <ThemeSwitcherContent />
    </Suspense>
  );
}
