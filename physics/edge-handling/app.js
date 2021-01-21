(() => {
    const canvas = document.querySelector(`canvas`);
    const context = canvas.getContext(`2d`);
    let w, h;
    let centerY, centerX;

    function init() {
        w = canvas.width = innerWidth * 2;
        h = canvas.height = innerHeight * 2;

        centerY = h / 2;
        centerX = w / 2;
    }
    init();

    window.addEventListener(`resize`, init);

    let p = particle.create(centerX, centerY, 3, Math.random() * Math.PI * 2, 0.1);
    p.radius = 100;
    p.bounce = -0.4;

    function update() {
        context.clearRect(0, 0, w, h);

        p.update();

        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
        context.fill();

        if(p.position.getX() + p.radius > w) {
            p.position.setX(w - p.radius);
            p.velocity.setX(p.velocity.getX() * p.bounce);
        }
        if(p.position.getX() - p.radius < 0) {
            p.position.setX(p.radius);
            p.velocity.setX(p.velocity.getX() * p.bounce);
        }
        if(p.position.getY() + p.radius > h) {
            p.position.setY(h - p.radius);
            p.velocity.setY(p.velocity.getY() * p.bounce);
        }
        if(p.position.getY() - p.radius < 0) {
            p.position.setY(p.radius);
            p.velocity.setY(p.velocity.getY() * p.bounce);
        }

        requestAnimationFrame(update);
    }
    update()
})();
