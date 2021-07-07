

import { MutationHook } from "@common/types/hooks"
import {
  useHook,
  useMutationHook
} from "@common/utils/use-hook"

export type UseUpdateItem<
  H extends MutationHook = MutationHook<any>
> = ReturnType<H["useHook"]>

const useUpdateItem: UseUpdateItem = () => {
  const hook = useHook((hooks) => {
    return hooks.cart.useUpdateItem
  })

  return useMutationHook({...hook})()
}

export default useUpdateItem
