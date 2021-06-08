
interface Person {
  name: string
  age: number
}

// interface PersonLoggerFn {
//   (name: string, age: number): string
// }

type PersonLoggerFn = (name: string, age: number) => string


export default function play() {
  const name: string = "Filip"
  const age: number = 30

  const person: Person = {
    name: "John",
    age: 34
  }


  const logPersonInfo: PersonLoggerFn = (personName: string, personAge: number): string => {
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

  const log = logPersonInfo(name, age)
  logPersonInfo2(person)
}
