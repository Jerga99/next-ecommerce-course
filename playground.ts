

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

type RaceCar = {
  name: string
  maxSpeed: number
}

type CityCar = {
  name: string
  space: string
}

type Car = RaceCar | CityCar


export default function play() {

  function logCarInfo(car: Car) {
    console.log(car.name)
  }
}
