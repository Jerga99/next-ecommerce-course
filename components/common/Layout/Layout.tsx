

import { FC } from "react"
import s from "./Layout.module.css"
import { Footer, Navbar } from "@components/common"

const Layout: FC = ({children}) => {
  return (
    <div className={s.root}>
      <Navbar />
      <main className="fit">
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default Layout
