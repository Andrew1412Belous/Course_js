//EX 1

function typeMessage (message, velocity) {

    let container = document.body.appendChild (
            document.createElement ( "h3" )
        )

    container.style = `color: magenta;`
    container.id = "demo"
        
    message.split('')
        .map((char, ind) => {
            setTimeout(() => {
                container.innerText += char
            }, 1000 * ind * velocity)
        })
}

typeMessage(`Welcome to the hell`, 1)

//EX 2

var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                for (let user of users)
                    if (user.name === userName)
                        user.present = present
            },
            showPresent () {
                for (let user of users)
                    user.present !== false && console.log(user.name)
            },
            showAbsent () {
                for (let user of users)
                    console.log(user.name)
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()

users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )

users.showPresent()

//EX 3

let changeClass = (classname, styleString) => (
    document.getElementsByTagName('style')
 ).length > 0 ? console.log("found")
     : document.head.appendChild(
         document.createElement("style")
     ).textContent = `.${classname} {${styleString}}`


//