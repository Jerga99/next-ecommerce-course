
import { ReactNode, FC } from "react"
import Ticker from "react-ticker"
import s from "./Marquee.module.css"
import cn from "classnames"

interface Props {
  children: ReactNode[]
  variant?: "primary" | "secondary"
}

const Marquee: FC<Props> = ({children, variant = "primary"}) => {
  const rootClassName = cn(
    s.root,
    {
      [s.secondary]: variant === "secondary"
    }
  )

  return (
    <div className={rootClassName}>
      <Ticker offset={80}>
        { () =>
          <div className={s.container}>
            {children}
          </div>
        }
      </Ticker>
    </div>
  )
}

export default Marquee
