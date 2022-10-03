//EX 1

const jsonString = '[{"title":"France","ref":"https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"},{"title":"Sunset","ref":"https://ichef.bbci.co.uk/news/976/cpsprodpb/146EB/production/_120519638_chloe_munday_photo.jpg"},{"title":"Water","ref":"https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"}]'

const images = JSON.parse(jsonString)

images.forEach(image => {
    const box = document.body
        .appendChild(document.createElement('div'))

    box.style = `
        width: 300px;
        border-radius: 4px;
        border: solid 1px #777;
        margin: 24px;
        padding: 16px 32px;
    `

    box.title = box
        .appendChild(document.createElement('h5'))
    box.innerHTML = image.title
    box.title.style = `
        font-size: 16px;
        font-family: Arial;
        margin: 0 auto;
        text-align: center;
    `

    box.image = box
        .appendChild(document.createElement('img'))
    box.image.src = image.ref
    box.image.style = `
        display: block;
        margin: 10px auto auto 0;
        width: 240px;
    `
})

//EX 2

// var messages = [
//     "backspace",
//     "enter",
//     "shift",
//     "control",
//     "delete",
//     "space",
//     "subtract"
// ]

// messages.getKey = () => {
//     var key = new Date().toLocaleString().split(", ")[1]
//     return log [ key ] ? log [ key + "[2]" ] ? key + "[3]" : key + "[2]" : key
// }

// var log = {}

// var sendMessage = message => new Promise (
//     resolve => setTimeout (
//         () => resolve ( message ),
//         Math.random () * 10000
//     )
// )

// messages.forEach(message => {
//     sendMessage(message)
//         .then (
//             () => Object.assign(log, { [`${messages.getKey()}`]: message})
//         )
// })

//EX3

var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

messages.getKey = () => new Date().toLocaleString().split(", ")[1]

var log = {}

var sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 10000
    )
)

var sendAll = () => {
    var index = 0

    function recursive () {
        sendMessage(messages[index])
            .then (
                () => {
                    Object.assign(log, { [`${messages.getKey()}`]: messages[index] }) 
                    
                    index++ < messages.length - 1 && recursive()
                }   
            )
    }
    recursive ()
}

sendAll()

