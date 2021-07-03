
import { useHook, useSWRHook } from "../utils/use-hook"
import { ApiHooks } from "@common/types/hooks"
import Cookies from "js-cookie"
import { useApiProvider } from "@common"

const useCart = () => {
  const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart)
  const { checkoutCookie } = useApiProvider()

  const fetcherWrapper: typeof hook.fetcher = (context) => {
    context.input.checkoutId = Cookies.get(checkoutCookie)
    return hook.fetcher(context)
  }


  return useSWRHook({...hook, fetcher: fetcherWrapper})
}

export default useCart
