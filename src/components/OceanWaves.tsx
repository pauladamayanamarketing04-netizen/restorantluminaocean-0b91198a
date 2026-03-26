import { useEffect, useRef } from "react";

const OceanWaves = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const drawWave = (
      yOffset: number,
      amplitude: number,
      frequency: number,
      speed: number,
      color: string,
      alpha: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x <= canvas.width; x += 2) {
        const y =
          yOffset +
          Math.sin(x * frequency + time * speed) * amplitude +
          Math.sin(x * frequency * 0.5 + time * speed * 1.3) * amplitude * 0.5;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fillStyle = color.replace(")", `, ${alpha})`).replace("rgb", "rgba");
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      drawWave(canvas.height * 0.75, 20, 0.003, 0.8, "rgb(10, 47, 47)", 0.15);
      drawWave(canvas.height * 0.8, 15, 0.004, 1.0, "rgb(26, 71, 42)", 0.12);
      drawWave(canvas.height * 0.85, 12, 0.005, 1.2, "rgb(10, 47, 47)", 0.1);
      drawWave(canvas.height * 0.9, 8, 0.006, 1.5, "rgb(26, 71, 42)", 0.08);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1]"
    />
  );
};

export default OceanWaves;
