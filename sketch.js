let cx, cy, dia;
let secD, minD, hrD;
const colors = ["white", "red", "green", "blue", "yellow", "orange"];
function setup() {
  createCanvas(windowWidth, windowHeight);
  cx = width / 2;
  cy = height / 2;
  dia = height * 0.95;
  secD = dia * 0.4;
  minD = dia * 0.25;
  hrD = dia * 0.1;
  textAlign(CENTER, CENTER);
  shuffle(colors, true);
}
function draw() {
  background(0);
  noStroke();
  render();
}
function createTime(timeMap, diaTime, time, size, txtSize) {
  fill(colors[time % colors.length]);
  circle(cx + diaTime * cos(timeMap), cy + diaTime * sin(timeMap), dia * size);
  fill(0);
  textSize(dia * txtSize * 10);
  text(int(time),cx + diaTime * cos(timeMap),cy + diaTime * sin(timeMap) + dia * txtSize);
}
function render() {
  let hr = hour();
  let min = minute();
  let sec = second();
  let secMap = map(sec, 0, 60, 0, TAU) - PI / 2;
  let minMap = map(min, 0, 60, 0, TAU) - PI / 2;
  let hrMap = map(hr, 0, 60, 0, TAU) - PI / 2;
  for (let i = 0; i < 60; i++) {
    let a = (TAU / 60) * i;
    let x = cx + cos(a) * secD;
    let y = cy + sin(a) * secD;
    let ps = dia * 0.003;
    fill(colors[i % colors.length]);
    if (i % 5 === 0) ps = dia * 0.01;
    circle(x, y, ps);
  }
  createTime(hrMap, hrD, hr % 12, 0.3, 0.03);
  createTime(minMap, minD, min, 0.2, 0.01);
  createTime(secMap, secD, sec, 0.08, 0.005);
}
