

interface Person {
  kind: "business" | "academic" | "otherType"
  name: string
  age: number
}

interface BusinessPerson extends Person {
  kind: "business"
  salary: number
}

interface AcademicPerson extends Person {
  kind: "academic"
  publications: string[]
}

interface Person {
  prop1: string
  prop2: number
}

type Human = BusinessPerson | AcademicPerson | { kind: "otherType", special: string}

type RaceCar = {
  name: string
  maxSpeed: 200
  team: string
}

type CityCar = {
  name: string
  space: string
  maxSpeed: 100
}

type SUVCar = {
  name: string
  maxSpeed: 150
  isCarbonFree: boolean
}

type Car = RaceCar | CityCar | SUVCar


export default function play() {

  const car: RaceCar = {
    name: "Race Car",
    maxSpeed: 200,
    team: "ferari"
  }

  const person: Person = {
    prop1: "",
    prop2: 2,
    name: "",
    kind: "academic",
    age: 23
  }

  function printInfo(someObject: {[key: string]: unknown}) {

    if (typeof someObject.age === "string") {
      someObject.age.toUpperCase()
    }
  }

  printInfo({
    age: 23,
    isMarried: true,
    name: "Filip"
  })

  function logPersonInfo(human: Human) {
    if (human.kind === "academic") {
      console.log(human)
    } else if (human.kind === "business") {
      console.log(human)
    } else if (human.kind === "otherType") {
      console.log(human)
    } else {
      console.log(human)
    }
  }

  function logCarInfo(car: Car) {
    switch(car.maxSpeed) {
      case 200:
        console.log(car.team)
        break;
      case 100:
        console.log(car)
        break;
      case 150:
        console.log(car.isCarbonFree)
        break;
      default:
        const _never: never = car
        return _never
    }
  }
}
