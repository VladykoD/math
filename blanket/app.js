(() => {
    const canvas = document.querySelector(`canvas`);
    const context = canvas.getContext(`2d`);

    let width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;



    function update() {
        context.clearRect(0,0,width,height)

        requestAnimationFrame(update)
    }
    update()
})();
