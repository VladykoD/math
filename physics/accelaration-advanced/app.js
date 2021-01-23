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


    let ship = particle.create(centerX, centerY, 0, 0),
        thrust = vector.create(0,0),
        angle = 0,
        turningLeft = false,
        turningRight = false,
        thrusting = false;

    ship.friction = 0.99;


    document.body.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
            case 38: //up
                thrusting = true
                break;
            case 37: //left
                turningLeft = true
                break
            case 39: //left
                turningRight = true
                break

            default:
                break
        }
    })
    document.body.addEventListener('keyup', function (e) {
        switch (e.keyCode) {
            case 38: //up
                thrusting = false
                break;
            case 37: //left
                turningLeft = false
                break
            case 39: //left
                turningRight = false
                break

            default:
                break
        }
    })

    function update() {
        context.clearRect(0,0,w,h);

        if (turningLeft) {
            angle -= 0.05
        }
        if (turningRight) {
            angle += 0.05
        }

        thrust.setAngle(angle)

        if(thrusting) {
            thrust.setLength(0.1)
        } else {
            thrust.setLength(0)
        }

        ship.accelerate(thrust)
        ship.update()

        context.save()
        context.translate(ship.position.getX(), ship.position.getY())
        context.rotate(angle)

        context.beginPath()
        context.moveTo(60,0)
        context.lineTo(-60,-28)
        context.lineTo(-60,28)
        context.lineTo(60,0)

        if(thrusting) {
            context.moveTo(-60,0)
            context.lineTo(-88, 0)
        }

        context.stroke();

        context.restore()


        if(ship.position.getX() > w) {
            ship.position.setX(0)
        }
        if(ship.position.getX() < 0) {
            ship.position.setX(w)
        }
        if(ship.position.getY() > h) {
            ship.position.setY(0)
        }
        if(ship.position.getY() < 0) {
            ship.position.setY(h)
        }

        requestAnimationFrame(update)
    }
    update();


})();
