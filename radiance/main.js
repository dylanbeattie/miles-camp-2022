import { Renderer, Camera, Scene, Vector, Color } from './modules/renderer.js';
import { Sphere } from './modules/shapes/sphere.js';

let canvas = document.getElementById('my-canvas');
let ctx = canvas.getContext('2d');
let renderer = new Renderer(canvas.width, canvas.height);

function paintPixel(x, y, color) {  
  ctx.fillStyle = color.html;
  ctx.fillRect(x, y, 1, 1);
}

let camera = new Camera(new Vector(0, 2, -5), new Vector(0, 1, 0), 16/4, 9/4);
let background = new Color(10,10,50);
let shapes = [
  new Sphere(new Vector(-4,0,4), 1, Color.Magenta),
  new Sphere(new Vector(-2,0,2), 1, Color.Blue),
  new Sphere(Vector.O, 1, Color.Red),
  new Sphere(new Vector(2,0,2), 1, Color.Green),
  new Sphere(new Vector(4,0,4), 1, Color.Yellow)

]
let scene = new Scene(camera, background, shapes);
renderer.render(scene, paintPixel);
