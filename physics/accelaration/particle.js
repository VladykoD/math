let particle = {
    position: null,
    velocity: null,

    create: function (x, y, speed, direction) {
        var obj = Object.create(this);

        obj.position = vector.create(x, y)
        obj.velocity = vector.create(0,0)
        obj.velocity.setLength(speed)
        obj.velocity.setAngle(direction)
        obj.color = `hsl(${Math.random() * 220 - 200 | 0}, 80%, 60%)`

        return obj
    },

    update: function() {
        this.position.addTo(this.velocity)
    },

    accelarate: function (accel){
        this.velocity.addTo(accel)
    }

}
