

import { FC } from "react"
import s from "./Layout.module.css"

const Layout: FC = ({children}) => {
  return (
    <div className={s.root}>
      <main
        style={{color: "var(--primary)"}}
        className="fit">
        { children }
      </main>
    </div>
  )
}

export default Layout
