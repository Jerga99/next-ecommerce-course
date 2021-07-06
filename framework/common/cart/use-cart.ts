
import { useHook, useSWRHook } from "../utils/use-hook"
import { ApiHooks, SWRHook } from "@common/types/hooks"
import Cookies from "js-cookie"
import { useApiProvider } from "@common"

export type UseCart<
  H extends SWRHook = SWRHook<any>
> = ReturnType<H["useHook"]>

const useCart: UseCart = () => {
  const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart)
  const { checkoutCookie } = useApiProvider()

  const fetcherWrapper: typeof hook.fetcher = (context: any) => {
    context.input.checkoutId = Cookies.get(checkoutCookie)
    return hook.fetcher(context)
  }


  return useSWRHook({...hook, fetcher: fetcherWrapper})()
}

export default useCart
