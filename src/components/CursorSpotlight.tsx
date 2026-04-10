import { useEffect, useRef, useState } from "react";

const CursorSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${mousePos.x}px`;
        spotlightRef.current.style.top = `${mousePos.y}px`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed rounded-full -translate-x-1/2 -translate-y-1/2 z-40"
      style={{
        width: "800px",
        height: "800px",
        background: "radial-gradient(circle, rgba(100, 255, 218, 0.15) 0%, rgba(100, 255, 218, 0.05) 40%, transparent 70%)",
        filter: "blur(100px)",
        left: "0px",
        top: "0px",
        willChange: "transform",
      }}
    />
  );
};

export default CursorSpotlight;
