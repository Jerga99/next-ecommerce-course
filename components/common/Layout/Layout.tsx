

import { FC } from "react"
import s from "./Layout.module.css"

const Layout: FC = ({children}) => {
  return (
    <>
      <main className={s.root}>
        { children }
      </main>
    </>
  )
}

export default Layout
