

import { FC } from "react"
import s from "./Layout.module.css"
import { Footer, Navbar } from "@components/common"
import { Sidebar } from "@components/ui"
import { CartSidebar } from "@components/cart"
import { useUI } from "@components/ui/context"

const Layout: FC = ({children}) => {
  const ui = useUI()
  console.log(ui)

  return (
    <div className={s.root}>
      <Navbar />
      <Sidebar>
        <CartSidebar />
      </Sidebar>
      <main className="fit">
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default Layout
