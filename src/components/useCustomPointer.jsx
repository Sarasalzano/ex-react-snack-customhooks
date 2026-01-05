import { useEffect, useState } from "react";

export default function useCustomPointer(pointer) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        left: mousePosition.x,
        top: mousePosition.y,
        pointerEvents: "none",
      }}
    >
      {pointer}
    </div>
  );
}
