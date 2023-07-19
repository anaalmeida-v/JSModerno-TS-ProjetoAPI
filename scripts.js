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
user.sayUserName()
user.sayUserNameArrow()//com a arrow function this é o elemento pai de fato