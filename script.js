let box = document.getElementsByClassName("box");
let boxes = Array.from(box);

function randomColorGenerator() {
  let color1 = Math.ceil(0 + Math.random()*255);
  let color2 = Math.ceil(0 + Math.random()*255);
  let color3 = Math.ceil(0 + Math.random()*255);
  // To generate Math.random() value between two numbers a and b-->
  // a + r(b-a)
  // a = lower limit(0); b = upper limit(255); r = Math.random()

  return `rgb(${color1}, ${color2}, ${color3})`
}

// randomColorGenerator();
boxes.forEach(e => {
  e.style.backgroundColor = randomColorGenerator();
})
// rgb(240, 10, 50);