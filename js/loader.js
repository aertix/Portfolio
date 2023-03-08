const position = ['upLeft', 'upRight', 'downLeft', 'downRight']
let swic = 0;
const dots = document.querySelectorAll('.dot')

setInterval(moveDots, 1200)
function moveDots() {
    dots.forEach(dot => {
        let rand = Math.floor(Math.random() * 4);
        dot.classList.add(position[rand]);
        setTimeout(() => {
            let top = getComputedStyle(dot).top
            let left = getComputedStyle(dot).left
            dot.style.top = top;
            dot.style.left = left;
            dot.classList.remove(position[rand]);

        }, 1000)
    });
}




