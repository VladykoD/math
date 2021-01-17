(() => {
    const canvas = document.querySelector(`canvas`);
    const context = canvas.getContext(`2d`);
    let w, h


    function init() {
        w = canvas.width = innerWidth * 2;
        h = canvas.height = innerHeight * 2;
    }
    init();

    function loop() {
        canvas.width |= 0; // context.clearRect(0,0,canvas.width, canvas.height)
        requestAnimationFrame(loop);
    }
    //loop();

    window.addEventListener(`resize`, init);

    function sin() {
        context.translate(0, h / 2)
        //reverse context.scale(1, -1)

        for (let angle = 0; angle < Math.PI * 2; angle += .01) {
            let x = angle * 200,
                y = Math.sin(angle) * 200;

            context.fillRect(x,y,5,5);
        }
    }
    sin();

})();
