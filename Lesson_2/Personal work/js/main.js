//Ex 1
var group = [
    {
      name: "Ivan",
      lastName: "Ivanov",
      age: 20,
      notebook: false,
    },
    {
      name: "Roma",
      lastName: "Kuzmenko",
      age: 21,
      notebook: true,
    },
    {
      name: "Veronika",
      lastName: "Abrosimova",
      age: 19,
      notebook: true,
    },
]

function getStudentsList ( arrayOfStudents ) {
    var res = []
    var str = ''

    for (var student of arrayOfStudents) {
        for (var key in student) {
            str += `${key}: ${student[key]}, `;
        }
        
        res.push(str.slice(0, str.length-2))
        str = ''
    }

    return res
}

console.log(getStudentsList(group));

//Ex2

function addNewStudent (name, lastName, age, notebook) {
    //Монжо добавить несколько проверок на тип данных (через новый обьект)
    return group.push({name: name, lastName: lastName, age: age, notebook: notebook})
}

addNewStudent('Andrey', 'Belous', 19, true)
console.log(getStudentsList(group));

//EX3   

function fixString (str) {
    var newStr = ''

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 1103 && str.charCodeAt(i) > 1040) {
            newStr += str[i]
        }

        //Добавление пробелов 
        // Если последний элемент НОВОЙ строки не пробел то добавляем
        if (str.charCodeAt(i) === 32 && newStr[newStr.length - 1] != ' ') {
            newStr += str[i]
        }
    }

    return newStr.trim()
}

console.log(fixString("Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"));

//EX4

var numbers = [1, 3, -2, 12, 9, 19, 0, -5]

function sortArray (arr) {

    var counter = arr.length - 1
    var label = true
    var temp = 0
    var i = 0

    while (label) {

        while (i < counter) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                label = true
            }
            i++
        }

        i = 0
        counter -= 1
        
        if (counter === 0) label = false
    }

    return arr.join(', ')
}

console.log(sortArray(numbers));

//EX5

var lastNames = ['Belous', 'Ivanov', 'Krotov', 'Shevchenko', 'Pidorasov']
var names = ['Andrey', 'Ivan', 'Oleg', 'Taras']
var newArray = []

function mergeArrays(arr1, arr2, newArr) {

    if (arr1.length == arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            newArr[i] = `${arr1[i]} ${arr2[i]}`
        }
    }

    return newArr
}

console.log(mergeArrays(names, lastNames, newArray));