(() => {

    /*
        закон гука
        деформация, возникающая в упругом теле
        (пружине, стержне, консоли, балке и т. д.),
        пропорциональна приложенной к этому телу силе

        f = k * x
        f = force
        k = stiffness (жесткость пружины)
        x = distance

    */


    const canvas = document.querySelector(`canvas`);
    const context = canvas.getContext(`2d`);

    let width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        springPoint = vector.create(width / 2, height / 2),
        weight = particle.create(Math.random() * width,
            Math.random() * height, 50, Math.random() * Math.PI * 2),
        k = 0.01 + Math.random() * .5;

    weight.radius = 20
    weight.friction = 0.5 + Math.random() * .5

    document.body.addEventListener('mousemove', function (e) {
        springPoint.setX(e.clientX)
        springPoint.setY(e.clientY)
    })

    function update() {
        context.clearRect(0,0,width,height)

        let distance = springPoint.subtract(weight.position),
            springForce = distance.multiply(k)

        weight.velocity.addTo(springForce)
        weight.update()

        context.beginPath()
        context.arc(weight.position.getX(), weight.position.getY(),
            weight.radius, 0, Math.PI * 2, false)
        context.fill();

        context.beginPath()
        context.arc(springPoint.getX(), springPoint.getY(),
            4, 0, Math.PI * 2, false)
        context.fill();

        context.beginPath();
        context.moveTo(weight.position.getX(), weight.position.getY())
        context.lineTo(springPoint.getX(), springPoint.getY())
        context.stroke()

        requestAnimationFrame(update)
    }
    update()
})();
