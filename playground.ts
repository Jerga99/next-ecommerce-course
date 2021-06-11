
interface Person {
  name: string
}

type CustomArray<T> = {
  [index: number]: T
}


export default function play() {

  const items: CustomArray<string> = ["1", "2", "3"]
  const items2: CustomArray<number> = [1,2,3]


}
