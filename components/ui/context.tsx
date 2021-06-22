
import { createContext, FC, useContext } from "react"


const UIContext = createContext<{[key: string]: string}>({
  uiState: "defaultState"
})

export const UIProvider: FC = ({children}) => {
  return (
    <UIContext.Provider value={{uiState: "someState"}}>
      {children}
    </UIContext.Provider>
  )
}

export const useUI = () => {
  const context = useContext(UIContext)
  return context
}
