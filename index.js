// b) Given an array of person objects with name and age properties, create a new array containing only the names of the people.

let persons = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
]


let names = persons.map(person => {
    let arr = []
    arr.push(person.name)
    return arr
})

console.log(names)

// c) Convert strings to uppercase:

let array3 = ['apple', 'banana', 'cherry']
let resultArr = array3.map(ele => {
    return ele.toUpperCase()
})
console.log(resultArr)

// Reduce:
// a) Calculate the sum of all numbers:

let array4 = [1, 2, 3, 4, 5]
let resultArr1 = array4.reduce(sum)
function sum(a, b) {
    return a + b
}
console.log(resultArr1)

// b) Calculate the average age of people:
// Sample input: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]

let input = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
let result1 = input.reduce(((a, b) => a + b.age), 0)
let avg = result1 / input.length
console.log(avg)

// cancatenate
let inputStr = ['Hello', ' ', 'world', '!']
let result11 = inputStr.reduce(((a, b) => a + b))
console.log(result11)

// Filter:
// a) Filter out even numbers:
// Sample input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected output: [1, 3, 5, 7, 9]

let sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filterArr = sample.filter(ele => ele%2 === 1 || ele % 2 !== 0)
console.log(filterArr)

// b) Filter out people below 18 years old:
// Sample input: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 16 }, { name: 'Charlie', age: 20 }]

let input4 =  [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 16 }, { name: 'Charlie', age: 20 }]
let result12 = input4.filter(ele => ele.age > 18)
console.log(result12)

// c) Filter out strings containing the letter 'a':

const strings = ['apple', 'banana', 'cherry', 'kiwi', 'orange'];
let filtered = strings.filter(ele => !ele.includes('a'))
console.log(filtered)

