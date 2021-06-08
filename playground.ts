

// TS recommend to use Interfaces over Types when possible



// Describe data structures in more natural way
// Describing objects
// Shipment, Orders,
interface Person {
  name: string
  age: number
}

// type aliases
// to describe function types

// type Person = {
//   name: string
//   age: number
// }

type Data = string



export default function play() {
  const name: Data = "Filip"
  const age: number = 30

  const person: Person = {
    name: "John",
    age: 34
  }

  function logPersonInfo(personName: string, personAge: number) {
    // const info = "Name: " + personName + ", age: " + personAge
    const info = `Name: ${personName}, age: ${personAge}`
    console.log(info)
    return info
  }

  function logPersonInfo2(person: Person) {
    // const info = "Name: " + personName + ", age: " + personAge
    const info = `Name: ${person.name}, age: ${person.age}`
    console.log(info)
    return info
  }

  logPersonInfo(name, age)
  logPersonInfo2(person)
}
