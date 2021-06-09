

export default function play() {
  const random = Math.random() > 0.5 ? "hello" : [1,2]

  if (typeof random === "string") {
    const upper = random.toUpperCase()
  } else {
    console.log(random)
  }

  console.log(random.length)

}
