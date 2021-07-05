

import { useAddItem } from "@common/cart"
import { Cart } from "@common/types/cart"
import { MutationHook } from "@common/types/hooks"
import { getCheckoutId } from "@framework/utils"
import { checkoutLineItemsAddMutation } from "@framework/utils/mutations"

export default useAddItem

export type AddItemHook = {
  fetcherInput: {
    variantId: string
    quantity: number
  }
  data: Cart
}


export const handler: MutationHook = {
  fetcherOptions: {
    query: checkoutLineItemsAddMutation
  },
  fetcher: async ({fetch, options, input}) => {

    const variables = {
      checkoutId: getCheckoutId(),
      lineItems: [
        {
         variantId: input.variantId,
         quantity: 1
        }
      ]
    }

    const response = await fetch({
       ...options,
       variables
    })

    return response
  },
  useHook: ({fetch}) => {
    return async (input: any) => {
      const response = await fetch(input)
      return {
        output: response
      }
    }
  }
}
