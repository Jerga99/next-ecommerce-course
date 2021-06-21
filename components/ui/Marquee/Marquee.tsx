
import { ReactNode, FC } from "react"
import Ticker from "react-ticker"
import s from "./Marquee.module.css"

interface Props {
  children: ReactNode[]
}

const Marquee: FC<Props> = ({children}) => {


  return (
    <div className={s.root}>
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
