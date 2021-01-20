// https://codepen.io/Vladasha/pen/KKgEXod?editors=1010

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



    let p = particle.create(100, h, 10, -Math.PI / 2),
        accel = vector.create(0.1, 0.1)

    function update() {
        context.clearRect(0,0,w,h)

        p.accelarate(accel);

        p.update()

        context.beginPath()
        context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false)
        context.fillStyle = p.color;
        context.fill();


        requestAnimationFrame(update)
    }
    update();

})();
