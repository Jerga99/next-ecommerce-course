import { ReactNode, FC } from "react";


interface Props {
  children: ReactNode | ReactNode[]
}


const Container: FC<Props> = ({children}) => {

  return (
    <div
      style={{maxWidth: "1920px"}}
      className="px-6 mx-auto"
    >
      {children}
    </div>
  )
}

export default Container;
