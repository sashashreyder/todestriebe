import React, { useEffect, useRef } from 'react';

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Устанавливаем размеры canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Массив звезд
    const stars: Array<{
      x: number;
      y: number;
      speed: number;
      size: number;
    }> = [];

    // Создаем звезды
    const createStars = () => {
      stars.length = 0;
      const numStars = Math.floor((canvas.width * canvas.height) / 8000); // Редкие звезды
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 0.5 + 0.1, // Медленное движение
          size: Math.random() * 1.5 + 0.5 // Маленькие звезды
        });
      }
    };

    createStars();

    // Анимация
    const animate = () => {
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Рисуем звезду как золотую точку
        ctx.fillStyle = '#bfa14a';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Двигаем звезду вверх
        star.y -= star.speed;

        // Если звезда ушла за верхний край, перемещаем вниз
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#0a0a0a' }}
    />
  );
};

export default Starfield;
