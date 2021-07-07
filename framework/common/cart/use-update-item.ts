

import {
  useHook,
  useMutationHook
} from "@common/utils/use-hook"

const useUpdateItem = () => {
  const hook = useHook((hooks) => {
    return hooks.cart.useUpdateItem
  })

  return useMutationHook({...hook})()
}

export default useUpdateItem
