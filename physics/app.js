(() => {
    const canvas = document.querySelector(`canvas`);
    const context = canvas.getContext(`2d`);
    let w, h;
    let centerY, centerX;
    let position = vector.create(100, 100);
    let velocity = vector.create(0,0)

    velocity.setLength(3);
    velocity.setAngle(Math.PI / 6)

    function init() {
        w = canvas.width = innerWidth * 2;
        h = canvas.height = innerHeight * 2;

        centerY = h / 2;
        centerX = w / 2;
    }
    init();

    window.addEventListener(`resize`, init);


    function update() {
        context.clearRect(0,0,w,h)

        position.addTo(velocity)

        context.beginPath()
        context.arc(position.getX(), position.getY(), 10, 0, Math.PI * 2, false)
        context.fill();

        requestAnimationFrame(update)
    }
    update();

})();
