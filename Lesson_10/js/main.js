//EX 1

const messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

const log = {}

getKey = () => {
    let key = new Date().toLocaleString().split(", ")[1]
    return log[key] ? key + "[2]" : key
}

const sendMessage = (message, callback) =>
    setTimeout(() => callback(message), Math.random() * 10000)

function handler (message) {
    Object.assign(log, {
        [`${getKey()}`]: message
    })
}

messages.forEach (
    message => sendMessage(message, handler)
)

//EX 2

// function User ( name ) {
//     this.name = name
//     var presence = false
//     Object.defineProperty(this, 'presense', {
//         get: () => {
//              !this.presence && console.log(`${this.name} is absent`)
//         },
//         set: (newValue) => {
//             this.presence = newValue
//             this.presence && console.log(`${this.name} is present`)
//         }
//     })
// }

// let user = new User ( "Ivan" )
// console.info ( user.presence )

// user.presence = "+"
// console.info ( user.presence )


//EX 3

function User (name = "user",
               email = "user$gmail.com",
               photoURL = User.getAvatar()) {
    this.name = name
    this.email = email
    this. photoURL = User.getAvatar()
}

User.avatars = [
     "https://pre00.deviantart.net/50f9/th/pre/i/2011/217/e/8/pikachu_2_by_nostalgiaattack-d45jd3i.png",
     "https://cdn.diversityavatars.com/wp-content/uploads/2018/01/Vector-Smart-Object-5.png",
     "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png",
     "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
     "https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
     "http://www.iconarchive.com/download/i51043/hopstarter/halloween-avatars/Gomez.ico",
     "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png",
     "https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
]

User.admin = {
    photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
    name: "admin"
}

User.getAvatar = function () {
    this.avatars.shift()
}

User.prototype.messageBox = (function () {
    const box = document.createElement ( 'div' )
        document.body.appendChild ( box )
    
    box.style = `
        width: 400px;
        height: 300px;
        overflow: auto;
        border: 1px solid #ddd;
        padding: 16px;
        background-color: #000;
    `
    
    box.picture = box.appendChild (document.createElement ('img'))
    box.picture.style.width = "100px"
    
    box.name = box.appendChild (document.createElement ('span'))
    box.name.style = "font-weight: bold; color: #777; padding-left:16px;"
    
    box.message = box.appendChild (document.createElement('textarea'))
    box.message.placeholder = "Сообщение"
    box.message.oninput = function (event) {
            event.target.parentNode.querySelector ('img').src = User.admin.photoURL
            event.target.parentNode.querySelector ('span').innerHTML = User.admin.name
    }
    box.message.style = "width: 100%; height: 100%;"
    return box
})()

User.prototype.read = function ( text ) {
        this.messageBox.picture.src = this.photoURL
        this.messageBox.name.innerHTML = this.name
        this.messageBox.message.value = text
}

User.prototype.write = function () {
        this.messageBox.picture.src = this.photoURL
        this.messageBox.name.innerHTML = this.name
        this.info = this.messageBox.message.value
        console.log ( `${this.name} прочитал сообщение:\n${this.info}` )
        this.messageBox.message.value = "OK"
}

var users = [
    new User ( "Иван" ),
    new User ( 'Alex', "alex@gmail.com" ),
    new User ( 'Bob', "bob777@gmail.com" ),
    new User ( 'Dima', "dima888@gmail.com" ),
    new User ( 'Fima', "fima999@gmail.com" )
]

var k = 1
users.forEach (
    function ( user ) {
        setTimeout (
            function () {
                user.write ( `Hello, I'm ${user.name}` )
            }, 3000 * k++
        )
    }
)

