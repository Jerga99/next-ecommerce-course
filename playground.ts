

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

type Car = RaceCar | CityCar


export default function play() {

  const car: RaceCar = {
    name: "Race Car",
    maxSpeed: 200,
    team: "ferari"
  }

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
      default:
        console.log(car)
    }
  }
}
