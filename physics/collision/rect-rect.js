window.onload = function() {
    let canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        rect0 = {
            x: 100,
            y: 100,
            width: 300,
            height: 200,
        },
        rect1 = {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
        };

    document.body.addEventListener("mousemove", function(e) {
        rect1.x = e.clientX - rect1.width / 2;
        rect1.y = e.clientY - rect1.height / 2;
        context.clearRect(0,0,width,height)


        if(utils.rectIntersect(rect0, rect1)) {
            context.fillStyle = "#f66";
        }
        else {
            context.fillStyle = "#999";
        }

        context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height)
        context.fillRect(rect1.x, rect1.y, rect1.width, rect1.height)
    })
};
