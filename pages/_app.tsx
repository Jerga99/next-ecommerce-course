
import "@assets/main.css"
import { AppProps } from "next/app"
import { FC } from "react"
import { UIProvider, useUI } from "@components/ui/context"

const Noop: FC = ({children}) => <>{children}</>

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC}}) {
  const Layout = Component.Layout ?? Noop
  const ui = useUI()

  console.log(ui)

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}

export default MyApp
