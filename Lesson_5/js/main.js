const insertDash = string => string.toUpperCase().split(' ').join('-')
console.log(insertDash("some HTML JavaScript PHP"))

const cursiveLetter = string => string.charAt(0).toUpperCase() + string.slice(1)
console.log(cursiveLetter("some hTML javaScript pHP"))

function capitalize (string) {

    var res = string.split(' ').map(item => {
        return item[0].toUpperCase() + item.slice(1)
    })

    return res.join(' ')
}

var text = 'some TEXT for test functions'

console.log(capitalize(text))

function changeRegister (string) {
    return string.split('').map(item => {
        return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase() 
    }).join('')
}

console.log(changeRegister(text))

function initCap (string) {
    return string.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join('')
}

console.log(initCap(text))

function initSnake (string) {
    return string.toLowerCase().split(' ').join('_')
}

console.log(initSnake(text))

function alphabetize (string) {
    return string.split('').sort().join('')
}

console.log(alphabetize('Ukraine'))

function isUpperCase (str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
}

console.log(isUpperCase('Hello', 2))

const arrayClone = arr => arr.slice(0)

var arr = [1, [0 ,1], 3, 4]
var newArr = arrayClone(arr)
console.log(newArr)

function colonOdd (num) {
    return num.toString().split('').map((item, index, arr) => {
        return arr[index] % 2 === 1 && arr[index + 1] % 2 == 1 ? item += ':' : item 
    }).join('')
}

console.log(colonOdd(55639217))

function sumTwoArray (arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, item) => {
        return acc + item
    }, 0)
}

console.log(sumTwoArray([1, 2, 3, 4, 5], [4, 5, 6]))

function filterFalse (arr) {
    return arr.filter(item => !!item)
}

console.log(filterFalse([NaN, 0, 77, false, -17, '',undefined, 99, null]))

var litmir = [ 
    { author: 'Хэленка', title: 'Улетела сказка'},
    { author: 'Коул Кресли', title: 'Восстание Аркан'},
    { author: 'Райчел Мид', title: 'Золотая лилия'}
]

function compareArr (arr) {
    return arr.map(item => item.title).sort().join(', ')
}

console.log(compareArr(litmir))

function removeItem (arr, num) {
    return arr.filter(item => item !== num)
}

console.log(removeItem([3, 5, 7, 8, 5], 5))

function getItemsLength (arr) {
    return arr.map(item => item.length)
}

console.log(getItemsLength(['some', 'asdsadsa', 'dsadb', 'dewqed']))

function firstChar (str) {
    return str.split(' ').map(item => item[0]).join('').toUpperCase()
}

console.log(firstChar('js is a lang for create web-site'))

function polidrom (str) {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}

console.log(polidrom('abba'))

function fizzBuzz (num) {
    for (var i = 1; i <= num; i++) {
        i % 3 === 0
        ? console.log('fizz')
        : i % 5 === 0
            ? console.log('buzz')
            : console.log(i) 
    }
}

fizzBuzz(5)

function fibonachi (num) {
    var res = [0, 1]

    for (var i = 2; i <= num; i++) {
        var prevNum1 = res[i - 1]
        var prevNum2 = res[i - 2]
        res.push(prevNum1 + prevNum2)
    }

    return res[num]
}

console.log(fibonachi(8))

function fillArr (arraySize, value) {
    return arraySize > 0 ? new Array(arraySize).fill(value) : null
}

console.log(fillArr(5, '*'))

function fromPairs (arr) {
    return arr.reduce((acc, value) => {
        if (Array.isArray(value)) acc[value[0]] = value[1] 
        return acc
    }, {})
}

console.log(fromPairs([['a', 1], ['b', 2]]))

let arr = [10, 5, false, true],
    mass = [5, 1, 4]

arr.valueOf = function () {
    let res = 0
    while (arr.length) res += arr.pop()
    return res
}

mass.valueOf = function () {
    return this[0]
}

console.log(arr + mass)



