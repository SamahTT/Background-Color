var palette = ['navy', 'red', 'purple', 'green', 'pink', 'brown', 'orange'];
var index = 0;

document.querySelector("#submit").addEventListener("click", () => {
    index = (index+1) % palette.length;
    document.body.style.backgroundColor = palette[index];
});