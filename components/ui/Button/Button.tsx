
import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import { LoadingDots } from "@components/ui"
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
      { isLoading &&
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      }
    </button>
  )
}

export default Button
