let particle = {
    position: null,
    velocity: null,

    create: function (x, y, speed, direction, grav) {
        var obj = Object.create(this);

        obj.position = vector.create(x, y)
        obj.velocity = vector.create(0,0)
        obj.velocity.setLength(speed)
        obj.velocity.setAngle(direction)
        obj.gravity = vector.create(0, grav || 0)
        obj.color = `hsl(${Math.random() * 50 | 0}, 80%, 60%)`

        return obj
    },

    update: function() {
        this.velocity.addTo(this.gravity)
        this.position.addTo(this.velocity)
    },

    accelerate: function (accel) {
        this.velocity.addTo(accel)
    }

}
