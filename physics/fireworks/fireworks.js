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

    window.addEventListener(`resize`, () => {
        init();
        rerun();
    });

    let particles = [];
    const numParticles = 100;

    function fillObject() {
        for (let i = 0; i < numParticles; i++) {
            particles.push(particle.create(centerX, centerY, Math.random() * 4 + 1, Math.random() * Math.PI * 2))
        }
    }
    fillObject();

    function rerun() {
        particles.length = 0;
        fillObject();
    }

    function update() {
        //context.clearRect(0,0,w,h)
        context.fillStyle = 'rgba(2,37,52,.2)'
        context.fillRect(0,0,w,h)
        context.fill();


        for (let i = 0; i < numParticles; i++) {
            let p = particles[i]
            p.update()

            context.beginPath()
            context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false)
            context.fillStyle = p.color;
            context.fill();
        }

        requestAnimationFrame(update)
    }
    update();


    const btn = document.querySelector('.btn')
    btn.addEventListener('click', rerun);
})();
