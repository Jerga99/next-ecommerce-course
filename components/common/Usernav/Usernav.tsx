import { FC } from "react"
import s from "./Usernav.module.css"
import Link from "next/link"

const Usernav: FC = () => {

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          Cart
        </li>
        <li className={s.item}>
          <Link href="/">
            <a>
              Wishlist
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Usernav
