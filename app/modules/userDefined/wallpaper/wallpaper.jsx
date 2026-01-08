'use client'
import { MeshGradient } from '@paper-design/shaders-react';
import { useTheme } from "next-themes";





export default function Wallpaper() {

  const { theme: themeFromHook } = useTheme();
  const theme = themeFromHook || 'dark';
  console.log("Value of theme:", theme);

  const darkColorsBase = ["#000000", "#1A1A1A", "#333333", "#121212"]; // Varied Grays for Liquid Depth
  const darkColorsOverlay = ["#121212", "#581c87", "#2D2D2D", "#7e22ce"]; // Purple accents remain

  const lightColorsBase = ["#ffffff", "#f3f4f6", "#e5e7eb", "#d1d5db"]; // Principal: Light Grays
  const lightColorsOverlay = ["#e5e7eb", "#8b5cf6", "#f3f4f6", "#7c3aed"]; // Secondary: Grays with Violet accents

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

      {/* Overlay wireframe layer */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60"
        colors={overlayColors}
        distortion={1}
        speed={0.2}
        wireframe="true"
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
}