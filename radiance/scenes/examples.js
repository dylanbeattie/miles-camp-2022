import { Camera, Scene, Vector, Color } from '../modules/renderer.js';
import { Sphere } from '../modules/shapes/sphere.js';
import { Plane } from '../modules/shapes/plane.js';
import { Box } from '../modules/shapes/box.js';
import { Light } from '../modules/light.js';
import { Appearance } from '../modules/appearance.js';
import { Finish } from '../modules/finish.js';

export function EmptySky() {
    let camera = new Camera(new Vector(-4, 1, -5), new Vector(0, 1, 0));
    let background = new Color(120, 150, 255);
    return new Scene(camera, background);
}

export function MilesCamp() {
    let camera = new Camera(new Vector(4, 4, -5), new Vector(0, 1, 0), 16/4, 9/4);
    let background = new Color(10,10,50);
    let shiny = new Finish({shiny: 0.8});
    let shapes = [
        new Plane(Vector.Y, 0, new Appearance(Color.White)),
        new Sphere(new Vector(-4,1,4), 1, new Appearance(Color.Magenta, shiny)),
        new Sphere(new Vector(-2,1,2), 1, new Appearance(Color.Blue, shiny)),
        new Box(new Vector(-1,0,-1), new Vector(1,2,1), new Appearance(Color.Red)),
        new Sphere(new Vector(3,1,0), 1, new Appearance(Color.Green, shiny)),
        new Sphere(new Vector(4,1,4), 1, new Appearance(Color.Yellow, shiny))
    ];
    let lights = [
        new Light(new Vector(-20,20,-10), Color.White),
    ]
    let scene = new Scene(camera, background, shapes, lights);
    return scene;
}

export function MilesCamp2() {
    let camera = new Camera(new Vector(0, 2, -5), new Vector(0, 1, 0), 16/4, 9/4);
    let background = new Color(10,10,50);
    let shapes = [
    new Sphere(new Vector(-4,0,4), 1, new Appearance(Color.White)),
    new Sphere(new Vector(-2,0,2), 1, new Appearance(Color.Red)),
    new Sphere(Vector.O, 1, new Appearance(Color.Green)),
    new Sphere(new Vector(2,0,2), 1, new Appearance(Color.Blue)),
    new Sphere(new Vector(4,0,4), 1, new Appearance(Color.White))
    ];

    let lights = [
        new Light(new Vector(10,10,-10), Color.Red.scale(0.5)),
        new Light(new Vector(-10,10,-10), Color.Green.scale(0.2)),
        new Light(new Vector(0,-10,-10), Color.White)
    ];

    let scene = new Scene(camera, background, shapes, lights);
    return scene;
}

export function ColoredSpheres() {
    let camera = new Camera(new Vector(0, 1, -3), Vector.O);
    let background = Color.Black;
    let shapes = [
        new Sphere(Vector.O, 1, new Appearance(Color.White)),
        new Sphere(new Vector(2, 0, 2), 1, new Appearance(Color.Green)),
        new Sphere(new Vector(4, 0, 4), 1, new Appearance(Color.Blue)),
        new Sphere(new Vector(-2, 0, 2), 1, new Appearance(Color.Red)),
        new Sphere(new Vector(-4, 0, 4), 1, new Appearance(Color.Yellow)),
    ];
    let lights = [ new Light(new Vector(5, 10, -5), Color.White) ]; 
    return new Scene(camera, background, shapes, lights);
}