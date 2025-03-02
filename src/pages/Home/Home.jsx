import { useEffect, useRef, 
} from "react";
import "./Home.css";

export default function Home() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [],
      FPS = 60,
      numStars = 150,
      mouse = { x: 0, y: 0 };

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
    }

    // Distance function
    function distance(point1, point2) {
      return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
    }

    // Draw function
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let s of stars) {
        ctx.fillStyle = "#87CEEB";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
      }

      ctx.beginPath();
      for (let i = 0; i < stars.length; i++) {
        let starI = stars[i];
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);

        for (let j = 0; j < stars.length; j++) {
          let starII = stars[j];
         if (distance(starI, starII) < 150) ctx.lineTo(starII.x, starII.y);
        }
       }
      ctx.lineWidth = 0.4;
      ctx.strokeStyle = "#4169E1";
      ctx.stroke();
    }

    // Update function
    function update() {
      for (let s of stars) {
        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
    }

    // Animation loop
    function tick() {
      draw();
      update();
      requestAnimationFrame(tick);
    }

    // Mouse move event
    canvas.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Start animation
    tick();

    // Cleanup function
    return () => {
      canvas.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div className="sample">
      <div className="home-container">
      {/* Background Animation */}
        <canvas ref={canvasRef} className="canvas-bg" />

        {/* Transparent div overlay */}
        <div className="overlay">
          <p className="first">Hello I am <span>Sairaj</span></p>
          <ul className="second">
            Hi! I am  <span>Tech Enthusiast</span>
          </ul>
        </div>

      
      </div>
    </div>
  );
}

