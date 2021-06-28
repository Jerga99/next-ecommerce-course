
import { FC, ReactNode } from "react"
import s from "./Button.module.css"

interface Props {
  children: ReactNode | ReactNode[]
}

const Button: FC<Props> = ({children}) => {


  return (
    <button
      className={s.root}
      type="button">
      {children}
    </button>
  )
}

export default Button
