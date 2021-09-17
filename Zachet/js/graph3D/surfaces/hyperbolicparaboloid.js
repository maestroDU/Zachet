Surfaces.prototype.hyperbolicparaboloid = (count = 10) => {
    let p = 2;
    let q = 2;
    let color = "#000000";
    const points = [];
    const edges = [];
    const polygones = [];

    const LEFT = -10;
    const RIGHT = 10
    const step = (RIGHT - LEFT) / count;
    //точки 
    for (let x = LEFT; x < RIGHT; x += step) {
        for (let y = LEFT; y < RIGHT; y += step) {
            points.push(new Point(
                x,
                (x ** 2 / p - y ** 2 / q) / 2,
                y,
            ));
        }
    }
    for (let i = 0; i < points.length; i++) {
        if (points[i + 1] && (i + 1) % count !== 0) {
            edges.push(new Edge(i, i + 1));
        }
        if (points[i + count]) {
            edges.push(new Edge(i, i + count));

        }
    }

    for (let i = 0; i < points.length; i++) {
        if (points[i + 1 + count] && (i + 1) % count !== 0) {
            polygones.push(new Polygon([
                i,
                i + 1,
                i + 1 + count,
                i + count
            ], color));
        }
    }
    let c = 0;
    let clrs = [{r:38, g:218, b:235}, {r:235, g:70, b:38},{r:235, g:103, b:38},{r:235, g:125, b:38},{r:235, g:140, b:38},
        {r:235, g:160, b:38},{r:235, g:180, b:38},{r:235, g:200, b:38},{r:235, g:220, b:38},{r:235, g:240, b:38}];
    clr = clrs[0];
    let b = 1;
    for(let i = 0; i < polygones.length; i++){
        if(c < count - 1){
            polygones[i].color = clr;
        } else {
            c = 0;
            clr = {r: clr.r, g: clr.g - 17, b: clr.b};
            b++;
        }
        c++;
    }
    for(let i = count - 1; i < polygones.length; i+=count-1){
        polygones[i].color = polygones[i+1].color;
    }

    
    return new Subject(points, edges, polygones);
}