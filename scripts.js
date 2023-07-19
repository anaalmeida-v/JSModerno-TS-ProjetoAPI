/*
//aula 1 - var, let e const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}
console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(b)
}

console.log(a)

let i = 100

for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)

function logName() {
    const name = 'Matheus'
    console.log(name)
}

const name = 'Pedro'

logName()

console.log(name)

//aula 2 - Arrow functions
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => {
    return a + b
}

const arrowsum = (a, b) => a + b


console.log(sum(5, 5))
console.log(arrowSum(5, 5))
console.log(arrowsum(5, 5))

const greeting = (name) => {
    if (name) {
        return "Olá " + name + "!"
    } else {
        return "Olá !"
    }
}

console.log(greeting("Matheus"))
console.log(greeting())

const testeArrow = () => console.log("testou!")

testeArrow()

const user = {
    name: "Theo",
    sayUserName() {//causou excesso de código, por não funcionar o this originalmente
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log("Username: " + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    }
}

//user.sayUserName()
//user.sayUserNameArrow()//com a arrow function this é o elemento pai de fato


//aula 3 - filter
const arr = [1, 2, 3, 4, 5]
console.log(arr)

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})//filter não mudou array original, apenas condição de if

console.log(highNumbers)

const users = [
    { name: "Ana", available: true },
    { name: "Pedro", available: false },
    { name: "João", available: false },
    { name: "Marcos", available: true }
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

*/
//aula 4 - map
const products = [
    { name: "Camisa", price: 10.99, category: "Roupas" },
    { name: "Chaleira elétrica", price: 49.99, category: "Eletro" },
    { name: "Fogão", price: 400, category: "Eletro" },
    { name: "Calça jeans", price: 50.99, category: "Roupas" },
]

products.map((product) => {
    if (product.category === "Roupas") {
        product.onSale = true
    }
})
console.log(products)

//aula 5 - template literals
const userName = 'Matheus'
const age = 30
console.log(`O nome do usuário é: ${userName} e ele tem ${age} anos.`)
console.log("O nome do usuário é: " + userName + "e ele tem " + age + " anos.")

//aula 6 - destructuring
const fruits = ["Maçã", "Laranja", "Mamão"]

const [f1, f2, f3] = fruits
console.log(f1, f2)
console.log(f3)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const { name: productName, price, category: productCategory, color } = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`)