
interface Person {
  name: string
}

export default function play() {


  function logger(...args: any[]) {
    return "hello world"
  }

  const kindaLogger: typeof logger = (name: string, age: number) => "Hi Guys!"


  const person = {
    name: "Filip",
    age: 30
  }

  const person2: typeof person = {
    name: "John",
    age: 35
  }



  kindaLogger("", 20)


}
