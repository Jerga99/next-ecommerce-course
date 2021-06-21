import { ReactNode, FC } from "react";


interface Props {
  children: ReactNode | ReactNode[]
  el?: any
}


const Container: FC<Props> = ({children, el: Component = "div"}) => {

  return (
    <Component className="px-6 mx-auto max-w-8xl">
      {children}
    </Component>
  )
}

export default Container;
