import { useState } from "react";
import type { ReactNode } from "react";

type DivCarouselProps = {
  children: ReactNode;
};

function DivCarousel({ children }: DivCarouselProps) {
  const items = Array.isArray(children) ? children : [children];
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  // porcentaje de la barra
  const progress = ((index + 1) / items.length) * 100;

  return (
    <div style={{ width: "100%" }} className="pb-4">
      {/* CONTENEDOR CLICK */}
      <div
        onClick={handleClick}
        style={{
          cursor: "pointer",
          width: "100%",
        }}
      >
        {items[index]}
      </div>

      {/* BARRA DE PROGRESO */}
      <div
        style={{
          marginTop: 10,
          width: "100%",
          height: 6,
          backgroundColor: "#e0e0e0",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#4f46e5",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

export default DivCarousel;
