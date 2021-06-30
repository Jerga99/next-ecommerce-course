
import { ReactNode } from "react"

import {
  ApiProvider as CoreApiProvider,
  useApiProvider as useCoreApiProvider
} from "@common"

import { getConfig } from "./api/config"
const config = getConfig()


interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[]
}

export const ApiProvider = ({children}: ShopifyApiProviderProps) => {

  return (
    <CoreApiProvider config={{...config, testKey: "testValue"}}>
      {children}
    </CoreApiProvider>
  )
}

export const useApiProvider = () => useCoreApiProvider()
