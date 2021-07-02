
import { useHook } from "../utils/use-hook"
import { ApiHooks } from "@common/types/hooks"

const useCart = () => {
  const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart)

  return hook.useHook({
    fetch: hook.fetcher
  })
}

export default useCart
