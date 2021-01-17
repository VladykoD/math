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



    let radius = 300,
        angle = 0,
        speed = 0.01,
        numObjects = 20,
        slice = Math.PI * 2 / numObjects,
        x,
        y;

    for(let i = 0; i < numObjects; i += 1) {
        angle = i * slice

        x = centerX + Math.cos(angle) * radius
        y = centerY + Math.sin(angle) * radius

        context.beginPath();
        context.arc(x, y , 10, 0 , Math.PI * 2, false)
        context.fillStyle = '#19456b'
        context.fill()
    }


})();
