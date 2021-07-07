

import {
  useHook,
  useMutationHook
} from "@common/utils/use-hook"

const useRemoveItem = () => {
  const hook = useHook((hooks) => {
    return hooks.cart.useRemoveItem
  })

  return useMutationHook({...hook})()
}

export default useRemoveItem
