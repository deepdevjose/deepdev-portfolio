'use client'
import { MeshGradient } from '@paper-design/shaders-react';
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';

export default function Wallpaper() {
  const { theme: themeFromHook } = useTheme();
  const theme = themeFromHook || 'dark';
  const [shouldUseShaders, setShouldUseShaders] = useState(true);

  useEffect(() => {
    // Detectar dispositivos de bajo rendimiento
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = window.innerWidth < 1024;
    
    // Desactivar shaders en móvil o si el usuario prefiere movimiento reducido
    if (mediaQuery.matches || isMobile) {
      setShouldUseShaders(false);
    }

    const handleChange = () => {
      setShouldUseShaders(!mediaQuery.matches && window.innerWidth >= 1024);
    };

    mediaQuery.addEventListener("change", handleChange);
    window.addEventListener("resize", handleChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  console.log("Value of theme:", theme);

  const darkColorsBase = ["#000000", "#1A1A1A", "#333333", "#121212"]; 
  const darkColorsOverlay = ["#121212", "#581c87", "#2D2D2D", "#7e22ce"];

  const lightColorsBase = ["#ffffff", "#f3f4f6", "#e5e7eb", "#d1d5db"];
  const lightColorsOverlay = ["#e5e7eb", "#8b5cf6", "#f3f4f6", "#7c3aed"];

  // Fallback estático para móviles (sin shaders)
  if (!shouldUseShaders) {
    return (
      <div 
        className="absolute inset-0 m-3 overflow-hidden rounded-[29px]"
        style={{
          background: theme === "dark" 
            ? "linear-gradient(135deg, #121212 0%, #1A1A1A 50%, #581c87 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f3f4f6 50%, #8b5cf6 100%)",
        }}
      />
    );
  }

  const baseColors = theme === "light" ? lightColorsBase : darkColorsBase;
  const overlayColors = theme === "light" ? lightColorsOverlay : darkColorsOverlay;

  return (
    <div className="absolute inset-0  m-3  overflow-hidden rounded-[29px]">
      {/* Base gradient layer */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={baseColors}
        distortion={0.5}
        speed={0.3}
        style={{ backgroundColor: theme === "dark" ? "#121212" : "#e0e0e0" }}
      />

      {/* Overlay wireframe layer - Reducida opacidad para menos intensidad */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        colors={overlayColors}
        distortion={1}
        speed={0.2}
        wireframe="true"
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
}