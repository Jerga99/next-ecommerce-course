
import { FC } from "react"
import s from "./Swatch.module.css"
import { Check } from '@components/icons'

interface Props {
  color?: string
  label?: string
  variant?: "size" | "color" | string
  onClick: () => void
}


const Swatch: FC<Props> = ({
  color, label, variant,
  ...rest
}) => {

  label = label?.toLowerCase()
  variant = variant?.toLocaleLowerCase()

  return (
    <button
      style={color ? {backgroundColor: color} : {}}
      className={s.root}
      {...rest}
    >
      {/* <span>
        <Check />
      </span> */}
      { variant === "size" ? label : null }
    </button>
  )
}


export default Swatch
