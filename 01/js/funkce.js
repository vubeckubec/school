function randomRGB() {
    var rgb = '';
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    rgb = 'rgb('+r+','+g+','+b+')';
    return rgb;
}

console.log(randomRGB());