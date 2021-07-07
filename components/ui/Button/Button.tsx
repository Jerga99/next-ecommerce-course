
import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import s from "./Button.module.css"
import cn from "classnames"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  isLoading?: boolean
}

const Button: FC<Props> = ({
  children,
  className,
  isLoading = false,
  ...rest
}) => {

  const rootClassName = cn(
    s.root,
    className,
    {
      [s.loading]: isLoading
    }
  )

  return (
    <button
      className={rootClassName}
      type="button"
      {...rest}
    >
      {children}
      { isLoading && <div>Loading...</div>}
    </button>
  )
}

export default Button
