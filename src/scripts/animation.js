

var dots = [];
for(var i = 0; i < 10; i++) {
    var dot = document.createElement('dot');
    dots[i] = dot;
}
const background = document.getElementById('background');
console.log(dots);
console.log(background);
for(var i = 0; i < 10; i++) {
    dots[i].setAttribute('class', 'dot');
    dots[i].setAttribute('id', 'dot' + i);
    console.log(dots[i]);
    background.appendChild(dots[i]);
}