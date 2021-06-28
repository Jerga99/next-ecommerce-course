
import { FC } from "react"

interface Props {
  color?: string
  label?: string
}


const Swatch: FC<Props> = ({color, label}) => {

  label = label?.toLowerCase()

  return (
    <>
      { color &&  <>Color: {color}</> }
      Label: {label} {` , `}
    </>
  )
}


export default Swatch
