window.onload = function() {
    let canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        rect = {
            x: 100,
            y: 100,
            width: 300,
            height: 200,
        };

    document.body.addEventListener("mousemove", function(e) {
        context.clearRect(0,0,width,height)

        if(utils.pointInRect(e.clientX, e.clientY, rect)) {
            context.fillStyle = "#f66";
        }
        else {
            context.fillStyle = "#999";
        }

        context.fillRect(rect.x, rect.y, rect.width, rect.height)
    })


};
