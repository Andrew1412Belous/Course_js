//Ex2
var n = 0,
    i = 0,
    sum = 0

while (n < 10) {
    if (i%5 == 0) {
        i += 5
        sum += i
        console.log(i);   
    } else {
        console.log('Числа не кратные 5');
        return
    }
    n++
}

console.log(sum);


//Ex3
var numbers = [ 254, 115, 78, 25, 91, 45, 37 ]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        console.log(numbers[i]);
    }
}

