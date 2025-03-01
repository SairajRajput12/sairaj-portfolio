import { useEffect } from 'react';
import './Home.css';
import { gsap } from 'gsap';

export default function Home1() {
    useEffect(() => {
        let width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

        function initHeader() {
            width = window.innerWidth;
            height = window.innerHeight;
            target = { x: width / 2, y: height / 2 };

            largeHeader = document.getElementById('large-header');
            largeHeader.style.height = `${height}px`;

            canvas = document.getElementById('demo-canvas');
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');

            points = [];
            for (let x = 0; x < width; x += width / 15) {
                for (let y = 0; y < height; y += height / 15) {
                    let px = x + Math.random() * width / 15;
                    let py = y + Math.random() * height / 15;
                    points.push({ x: px, originX: px, y: py, originY: py });
                }
            }

            points.forEach(p1 => {
                p1.closest = points
                    .filter(p2 => p1 !== p2)
                    .sort((a, b) => getDistance(p1, a) - getDistance(p1, b))
                    .slice(0, 7);  // Increased closest points for larger cursor effect

                p1.circle = new Circle(p1, 3 + Math.random() * 3, 'rgba(255,255,255,0.5)');
            });
        }

        function addListeners() {
            if (!('ontouchstart' in window)){ 
                window.addEventListener('mousemove', mouseMove);
            }
            else{
                window.addEventListener('touchmove', touchMove);
            }

            window.addEventListener('scroll', scrollCheck);
            window.addEventListener('resize', resize);
        }

        function touchMove(e) {
            if (e.touches.length > 0) {
                target.x = e.touches[0].clientX;
                target.y = e.touches[0].clientY;
            }
        }


        function mouseMove(e) {
            target.x = e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            target.y = e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        function scrollCheck() {
            animateHeader = document.body.scrollTop <= height;
        }

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            largeHeader.style.height = `${height}px`;
            canvas.width = width;
            canvas.height = height;
        }

        function initAnimation() {
            animate();
            points.forEach(shiftPoint);
        }

        function animate() {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                points.forEach(p => {
                    let dist = getDistance(target, p);
                    p.active = dist < 8000 ? 0.5 : dist < 30000 ? 0.2 : dist < 50000 ? 0.05 : 0;  // Increased range
                    p.circle.active = p.active * 2;
                    drawLines(p);
                    p.circle.draw();
                });
            }
            requestAnimationFrame(animate);
        }

        function shiftPoint(p) {
            gsap.to(p, {
                duration: 1 + Math.random(),
                x: p.originX - 50 + Math.random() * 100,
                y: p.originY - 50 + Math.random() * 100,
                ease: 'power1.inOut',
                onComplete: () => shiftPoint(p)
            });
        }

        function drawLines(p) {
            if (!p.active) return;
            ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
            ctx.beginPath();
            p.closest.forEach(c => {
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(c.x, c.y);
            });
            ctx.stroke();
        }

        function Circle(pos, rad, color) {
            this.pos = pos;
            this.radius = rad;
            this.color = color;
            this.draw = function () {
                if (!this.active) return;
                ctx.fillStyle = `rgba(156,217,249,${this.active})`;
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
                ctx.fill();
            };
        }

        function getDistance(p1, p2) {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }

        initHeader();
        initAnimation();
        addListeners();
    }, []);

    return (
        <div id="large-header" className="large-header">
            <canvas id="demo-canvas"></canvas>
            <div className="text-container">
                <p className="main-title">I am <span className="thin">Sairaj</span></p>
                <p className="main-title">I am <span className="thin">Tech Enthusiast</span></p>
            </div>
        </div>
    );
}
