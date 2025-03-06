document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.body.prepend(canvas);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = [];
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speed: Math.random() * 2 + 0.5,
        });
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = "#fff";
            ctx.fill();
        });
    }

    function moveStars() {
        stars.forEach(star => {
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        });
    }

    function animate() {
        drawStars();
        moveStars();
        requestAnimationFrame(animate);
    }

    animate();
});
