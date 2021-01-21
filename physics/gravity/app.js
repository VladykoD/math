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


    let sun = particle.create(centerX, centerY, 0, 0)
    let planet = particle.create(centerX + 200, centerY, 10, -Math.PI / 2)

    sun.mass = 20000;

    function update() {
        context.clearRect(0,0,w,h)

        planet.gravitateTo(sun)
        planet.update();

        context.beginPath()
        context.fillStyle = '#ffff00';
        context.arc(sun.position.getX(), sun.position.getY(), 20, 0, Math.PI * 2, false)
        context.fill()

        context.beginPath()
        context.fillStyle = '#0000ff';
        context.arc(planet.position.getX(), planet.position.getY(), 5, 0, Math.PI * 2, false)
        context.fill()

        requestAnimationFrame(update)
    }
    update()



})();
