let canvas = document.getElementById('my-canvas');
let context = canvas.getContext('2d');

function callback(x,y,color) {
  context.fillStyle = color;
  context.fillRect(x,y,1,1);
}

function Pastels(x,y) {
  return `rgb(${x},${y},100)`
}
function makeChessboard(size, color1, color2) {
  return (x,y) => {
      const xOdd = (x % (2 * size) < size);
      const yOdd = (y % (2 * size) < size);
      return (xOdd != yOdd ? color1 : color2);
  }
}

let shader = makeChessboard(50, 'red', 'blue');
for(var x = 0; x < canvas.clientWidth; x++) {
  for(var y = 0; y < canvas.clientHeight; y++) {
    let color = shader(x,y);
    callback(x,y,color);
  }
}