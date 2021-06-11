
interface Person {
  name: string
}

type ReturnType<T> = T extends () => infer R ? R : unknown

export default function play() {


  function logger() {
    return true
  }

  const loggerReturn: ReturnType<typeof logger> = true

}
