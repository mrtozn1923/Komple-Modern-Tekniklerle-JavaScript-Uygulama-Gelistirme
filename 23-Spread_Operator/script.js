const colors = ["red", "green", "blue", "orange", "purple"];
// console.log(colors[0], colors[1], colors[2]);
// console.log(...colors);

//destructing
// const [r, g, b] = colors;
// console.log(r, g, b);

//spread ile atama
// const [r, ...colors2] = colors;
// console.log(r);
// console.log(colors2);

//fonksiyon parametre aktarımı
const getColors = function(c1, c2, c3) {
    console.log(c1, c2, c3);
}

getColors(colors[0], colors[1], colors[2]);
getColors(...colors);