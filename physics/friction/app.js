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

    let p = particle.create(w/2, h/2, 10, Math.random() * Math.PI * 2)
    p.radius = 10;
    let friction = 0.97

    function update() {
        context.clearRect(0,0,w,h)

        p.velocity.multiplyBy(friction)
        p.update();

        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2)
        context.fill();

        requestAnimationFrame(update)
    }
    update()
})();
