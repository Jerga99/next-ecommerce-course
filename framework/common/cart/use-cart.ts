
import { useHook, useSWRHook } from "../utils/use-hook"
import { ApiHooks } from "@common/types/hooks"

const useCart = () => {
  const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart)

  return useSWRHook({...hook})
}

export default useCart
