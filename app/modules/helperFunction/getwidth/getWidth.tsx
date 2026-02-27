import { useEffect, useState } from "react";

export default function useWindowWidth() {
  // Valor por defecto de 1024 para SSR (desktop-first)
  const [width, setWidth] = useState<number>(1024);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}
