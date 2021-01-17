(() => {
    const canvas = document.querySelector(`canvas`);
    const context = canvas.getContext(`2d`);
    let w, h;
    let arrowY, arrowX;
    let dx, dy,
        angle = 0;


    function init() {
        w = canvas.width = innerWidth * 2;
        h = canvas.height = innerHeight * 2;

        arrowY = h / 2;
        arrowX = w / 2;
    }
    init();

    window.addEventListener(`resize`, init);


    function render() {
        context.clearRect(0,0,w,h)

        context.save();
        context.translate(arrowX, arrowY)
        context.rotate(angle)

        context.beginPath()
        context.moveTo(20,0)
        context.lineTo(-20,0)
        context.moveTo(20,0)
        context.lineTo(10,-10)
        context.moveTo(20,0)
        context.lineTo(10,10)
        context.stroke()

        context.restore();
        requestAnimationFrame(render)
    }

    render();

    document.body.addEventListener('mousemove',  (e) => {
        dx = e.clientX - arrowX;
        dy = e.clientY - arrowY;

        angle = Math.atan2(dy, dx)
    })


})();
