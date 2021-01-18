(() => {
    /* умножение векторов

    |5|   |2|
    | | * | | = 5 * 2 + 2 * 4 = 10 + 8 = 18
    |2|   |4|

     */

    const canvas = document.querySelector(`canvas`);
    const context = canvas.getContext(`2d`);

    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const p0 = {
        x: 200,
        y: 400
    }
    const p1 = {
        x: 250,
        y: 200
    }
    const p2 = {
        x: 350,
        y: 150
    }

    function vec(p0, p1) {
        return {
            x: p1.x - p0.x,
            y: p1.y - p0.y,
        }
    }

    function dotProduct(v0, v1) {
        return v0.x * v1.x + v0.y * v1.y
    }

    function mag(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y)
    }

    function normalize(v) {
        var m = mag(v);
        return {
            x: v.x / m,
            y: v.y / m
        }
    }

    // dp = |A| * |B| * cos(a)
    function angleBetween(v0, v1) {
        let dp = dotProduct(v0, v1);
        let mag0 = mag(v0);
        let mag1 = mag(v1);
        return Math.acos(dp / mag0 / mag1)
    }


    function draw() {
        context.clearRect(0,0,w,h)
        drawPoint(p0)
        drawPoint(p1)
        drawPoint(p2)
        drawLines();

        let v0 = vec(p1, p0)
        let v1 = vec(p2, p0)
        let dp = dotProduct(normalize(v0), normalize(v1))
        let angle = angleBetween(v0, v1)
        angle = Math.round(angle * 180 / Math.PI)

        context.font = '30px Sans-serif'
        context.fillText(angle, 30, 30)
        context.fillText(dp, 30, 90)
    }
    draw();

    function drawPoint(p) {
        context.beginPath()
        context.arc(p.x, p.y, 10, 0, Math.PI * 2)
        context.stroke();
    }

    function drawLines() {
        context.beginPath();
        context.lineTo(p1.x, p1.y)
        context.lineTo(p0.x, p0.y)
        context.lineTo(p2.x, p2.y)

        context.stroke();
    }

    canvas.addEventListener('mousedown', onMouseDown);
    let dragPoint;

    function onMouseDown(e){
        dragPoint = findDragPoint(e.clientX, e.clientY);
        if(dragPoint) {
            dragPoint.x = e.clientX
            dragPoint.y = e.clientY
            draw();

            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('mouseup', onMouseUp)
        }
    }

    function onMouseMove(e) {
        dragPoint.x = e.clientX
        dragPoint.y = e.clientY
        draw();
    }
    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
    }

    function findDragPoint(x, y) {
        if (hitTest(p0, x, y)) return p0
        if (hitTest(p1, x, y)) return p1
        if (hitTest(p2, x, y)) return p2

        return null
    }

    function hitTest(p, x, y) {
        let dx = p.x - x;
        let dy = p.y - y;

        return Math.sqrt(dx * dx + dy * dy) <= 10
    }

})();
