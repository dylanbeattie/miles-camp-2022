import { THRESHOLD } from './settings.js';

export class Shape {

    constructor(color) {
        this.color = color ?? Color.Grey;
    }

    intersect = () => { throw("Classes which extend Shape must implement the intersect method."); }

    closestDistanceAlongRay = (ray) => {
        let distances = this.intersect(ray).filter(d => d > THRESHOLD);
        let shortedDistance = Math.min.apply(Math, distances);
        return shortedDistance;
    }
}