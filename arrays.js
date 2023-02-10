var fruits = ["Banana", "Orange", "Apple", "Mango"];

function pf(){
    console.log(fruits)
}
pf()

console.log(fruits.join(" "))

fruits.push("Pinapple","Kiwi")
pf()

console.log(fruits.pop())

pf()

fruits.shift()

pf()

fruits.unshift('Banana','Graphes')

pf()

fruits[1] = 'Dark Graphes'

pf()

fruits2 = ['Pear','Cherry','Blueberry']

fruits = fruits.concat(fruits2)

pf()

fruits.splice(4,2)

pf()

fruits.splice(4,0,"Mango","Pinapple")

pf()

console.log(fruits.slice(3))
console.log(fruits.slice(1,3))