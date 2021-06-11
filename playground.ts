

interface Person {
  name: string
  age: number
}

class Logger<T> {
  log(items: Array<T>, callback: (i: T) => void) {
    items.forEach((item) => {
      callback(item)
    })
  }
}

export default function play() {

  const logger = new Logger<string>()

  const cars = ["audi", "skoda", "citroen"]
  logger.log(cars, (car) => {
    console.log(car)
  })

  const logger2 = new Logger<number>()

  const numbers = [1,2,3,4]
  logger2.log(numbers, (num) => {
    console.log(num)
  })

  const logger3 = new Logger<Person>()

  const persons = [{name: "filip", age: 30}, {name: "john", age: 25}]
  logger3.log(persons, (num) => {
    console.log(num)
  })

}
