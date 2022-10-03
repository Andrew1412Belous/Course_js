//EX1

var letters = []
var str = 'Backend As A Service'

function firstLetterOfWords(str, arr) {
    var res = str.split(' ')

    for (var i = 0; i < res.length; i++) {
        arr[i] = res[i][0]
    }

    return arr.join('')
}

console.log(firstLetterOfWords(str, letters));

//EX2

function checkValue(x) {
    if (typeof x === 'number' && !isNaN(x)) {
        return new Date().toLocaleString()
    } else return 'Неверный тип данных'
}

console.log(checkValue(1));

//EX3

var str = '<IMG SRC="images/hack.png"onerror="document.write ( String.fromCharCode ( 88, 83, 83) )"/>'
console.log(str.split("<").join("&lt;").split('>').join('&gt;'));
