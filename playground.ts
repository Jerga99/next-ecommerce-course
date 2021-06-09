

interface Person {
  name: string
  age: number
}

interface BusinessPerson extends Person {
  salary: number
}

interface AcademicPerson extends Person {
  publications: string[]
}




export default function play() {
  const person: AcademicPerson = {
    name: "filip",
    age: 23,
    publications: ["1", "2"]
  }

  const person2: BusinessPerson = {
    name: "filip",
    age: 23,
    salary: 1000
  }

  function logPerson(person: Person) {}


  logPerson(person2)
}
