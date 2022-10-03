// function factorial ( n, result ) {
//     while ( n > 1 )
//        return factorial ( n - 1, n * ( !result ? 1 : result ) )
//     return result
//  }

// function factorial ( n, result ) {
//     return n < 2 ? !result ? 1 : result :
//         factorial ( n- 1, n * ( !result ? 1 : result ) )
//  }

// function factorial ( n, result = 1 ) {
//     result *= n--
//     return n < 2 ? result : factorial ( n, result )
//  }

// function factorial ( num, result ) {
//     result = ( !result ? 1 : res ) * num--
//     return num < 2 ? result : factorial ( num, result )
//  }

console.log(((((((a, b, c, d) => a + b + c + d).bind(null, 5)).bind(null, 4)).bind(null, 1)).bind(null, 10))())

function recurse (args, func) {
    if (!func) func = recurse
    if (args.length > 1) {
        recurse(func.bind(null, args.shift()), args)
    } else return Array.from(arguments).reduce((res, item) => res + item, 0)
}


console.log(recurse(1))

const data = [5, 10, 'Shopping', 20, 'Homework'];
const newArr = data.map(item  => {
    return typeof(item) === 'number'
        ? item * 2
        : typeof(item) === 'string'
            ? item = `${item} - done`
            : null
}) 

console.log(newArr)

const lines = 5
let result = ''

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++){
        result += ' '
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*'
    }
    result += '\n'
}

console.log(result)

function factorial (number) {
    return number >= 1 ? number * factorial(number - 1) : 1 
}

console.log(factorial(5))

function deepCount (array) {
    return array.reduce((res, item) => res + (Array.isArray(item) ? deepCount(item) : 0), array.length)
}

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms (arr) {
    return films.filter(film => film.rating >= 8)
}

console.log(showGoodFilms(films))

function showListOfFilms (arr) {
    return arr.reduce((res, film) => `${typeof(res) === 'object' ? res.name : res}, ${film.name}`)
}

console.log(showListOfFilms(films))

function setFilmsIds (arr) {
    return arr.map((film, i) => {
        film.id = i
        return film
    })
}

const tranformedArray = setFilmsIds(films);
const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
]

const getPositiveIncomeAmount = data => data
    .reduce((sum, item) => item.amount > 0 ? sum += item.amount : sum, 0)

console.log(getPositiveIncomeAmount(funds))

const getTotalIncomeAmount = data => data
    .some(item => item.amount < 0)
        ? data.reduce((res, item) => res += item.amount, 0)
        : getPositiveIncomeAmount(data)

console.log(getTotalIncomeAmount(funds))

function fibonachi (num) {
    return num < 0 ? 0 : num === 1
        ? 1
        : fibonachi(num - 1) + fibonachi(num -2) 
}

console.log(fibonachi(10))

digital_root = arg => arg.toString().length === 1 ? arg :
    digital_root (arg.toString().split('')
        .reduce((res, item) => res += Number(item), 0))
        
console.log(digital_root(157894))

//EX!

// var tags = [
//     {
//             name: "div",
//             text: "I'm div"
//     },
//     {
//             name: "h1", 
//             text: "I'm h1"
//     },
//     {
//             name: "p", 
//             text: "I'm p"
//     },
// ]

// const classes = [`container`, 'header', 'text']
// const style = document.head.appendChild(document.createElement('style'))

// style.innerHTML = `
//     .container {
//         border: solid 3px #587;
//         width: 100px;
//         height: 100px;
//         border-radius:50%;
//     }
//     .title {
//          font-family: Arial;
//          color: #789;
//          font-size: 20px;
//     }
//     .text {
//         font-family: monospace, Arial;
//         color: #555;
//         font-size: 16px;
//     }
// `

// tags.forEach(function (tag, index) {
//     let elem = document.body.appendChild(document.createElement(tag.name))
//     elem.className = classes[index]
// })

//EX2

// const tags = [
//     {
//         name: 'div',
//         text: "I'm div",
//         attrs: {
//             className: 'container',
//             onclick: function (event) {
//                 console.info(event.target)
//             }
//         }
//     },
//     {
//         name: 'h1',
//         text: "I'm header",
//         attrs: {
//             className: 'header',
//             onclick: function (event) {
//                 console.info(event.target)
//             }
//         }
//     },
//     {
//         name: 'p',
//         text: "I'm paragraph",
//         attrs: {
//             className: 'paragraph',
//             onmouseover: function (event) {
//                 console.info(event.target)
//                 event.target.style.width = `200px`
//                 event.target.style['border-radius'] = `80%`
//             }
//         }
//     }
// ]

// const style = document.head.appendChild(document.createElement('style'))

// style.innerHTML = `
//     .container {
//         width: 100px;
//         height: 100px;
//         color: #fff;
//         background-color: #000
//     }
//     .header {
//         width: 200px;
//         height: 200px;
//         color: #770;
//         background-color: #000
//     }
//     .paragraph {
//         width: 300px;
//         height: 300px;
//         color: red;
//         background-color: #000
//     }
// `

// for (tag of tags) {
//     const elem = document.body.appendChild(document.createElement(tag.name))
//     if (tag.text) elem.innerHTML = tag.text
//     for (attr in tag.attrs) {
//         elem[attr] = tag.attrs[attr]
//     }
// }

//EX3

const tags = [
    {
        name: 'div',
        text: "I'm div",

    },
    {
        name: 'h1',
        text: "I'm header",

    },
    {
        name: 'p',
        text: "I'm paragraph",

    }
]
for (tag of tags) {
    const elem = document.body.appendChild(document.createElement(tag.name))
    if (tag.text) elem.innerHTML = tag.text
}

const style = document.head.appendChild(document.createElement('style'))

style.innerHTML = `
    .redBack {
    background-color: red!important;
    }
`
document.body.childNodes.forEach(item => {
    if (item.tagName !== 'SCRIPT') item.classList.add('redBack')
})

