
interface Person {
  name: string
  age: number
  grades: number[]
}

type PersonKey = keyof Person

export default function play() {

  const personKey: keyof Person = "grades"

}
