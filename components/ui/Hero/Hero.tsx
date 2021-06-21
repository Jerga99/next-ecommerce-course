
import { FC } from "react"
import s from "./Hero.module.css"
import Link from "next/link"

interface Props {
  headline: string
  description: string
}


const Hero: FC<Props> = ({headline, description}) => {
  return (
    <div className="bg-black">
      <div className={s.root}>
        <h2 className={s.headline}>
          {headline}
        </h2>
        <div>
          <p className={s.description}>
            {description}
          </p>
          <Link href="/">
            <a className={s.link}>
              Read it here
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;
