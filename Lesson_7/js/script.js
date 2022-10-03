const animations = [
    'pulse',
    'tada',
    'jello',
    'bounce',
    'swing',
    'flash',
    'rubberBand',
    'hinge',
    'backInDown', 
    'backOutDown',
    'fadeIn',
    'fadeOut',
    'flip',
    'lightSpeedInRight',
    'rotateIn',
    'zoomIn',
]

const tags = document.body.querySelectorAll('div, p, img')
const btns = document.querySelectorAll('btn')

function randomColor() {
    return `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
}

function clickHandler (event) {
    event.stopPropagation()

    event.target.parentNode.style = `
            background-color: ${randomColor()};
        `

    event.target.style = `
        width: 300px;
        height: 300px;
        border: solid 2px #000;
        border-radius: 4px;
        text-align: center
        animation: bounce;
        margin: 50px 100px 100px 0;
        transition: 0.6s all;
    `

    let ind = animations
    .filter(animation => event.target.classList
        .contains(animation))
            .join('')

    event.target.classList.remove(ind)
    event.target.classList.add(animations[Math.round(
        Math.random() * (animations.length - 1))])

    event.target.innerText = `I'm ${event.target.tagName}`
}

function mouseEnterHandler (event) {
    event.target.style = `
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: #000;
        text-align: center;
        color: #fff;
        margin: 50px;
        transition: 0.6s all;
    `
}

function mouseLeaveHandler (event) {
    event.target.style = `
        width: 100px;
        height: 100px;
        border-radius: 25%;
        background: #000;
        text-align: center;
        color: #fff;
        margin: 50px;
        transition: 0.6s all;
    `

    event.target.innerText = `Touch me`
}

tags.forEach((tag, index) => {
    tag.classList.add(animations[Math.round(
        Math.random() * (animations.length - 1)
    )])

    tag.addEventListener('mouseover', mouseEnterHandler)
    tag.addEventListener('mouseleave', mouseLeaveHandler)
    tag.addEventListener('click', clickHandler)
})