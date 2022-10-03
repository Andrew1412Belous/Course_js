//EX 1

let timer = document.body.appendChild(document.createElement('div'))
let counter = 0

timer = Object.assign(timer, {
    style: `
        width: 150px;
        height: 150px;
        background-color: #ddd;
        color: #000;
        border: solid 2px #ff0;
        text-align: center;
        font-size: 20px;
        padding: 20px;
        font-familly: sans-serif;
    `
})

function updateTime () {
    setTimeout(function () {
        timer.innerText = new Date().toLocaleString()
    }, 1000 * counter)

    counter++ < 100 && updateTime()
}

updateTime()

//EX 2

var typeMessage = ( function ( velocity ) {
    var container = document.body.appendChild (
            document.createElement ( "h3" )
        )

    container.style = `color: magenta;`
    container.id = "demo"

    var index = 0
    
    return function ( message ) {
         message.split('')
            .map((char, ind) => {
                setTimeout(() => {
                    container.innerText += char
                }, 1000 * ind * velocity)
            })
    }
})( 1 )

typeMessage ( `Welcome to the hell` )

//EX 3

function User ( name ) {
    this.name = name
    this.id = this.counter()
}

User.prototype.count = 0

User.prototype.counter = function () {
    User.prototype.count++
    return User.prototype.count
}

var users = [
    new User ( "Семен" ),
    new User ( "Антон" ),
    new User ( "Демьян" ),
    new User ( "Василий" )
]