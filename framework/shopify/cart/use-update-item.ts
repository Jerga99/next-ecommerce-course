
import { useUpdateItem } from "@common/cart"

export default useUpdateItem

export const handler = {
  fetcherOptions: {
    query: "query { hello }"
  },
  async fetcher({
    input: item,
    options,
    fetch
  }: any) {
    const { data } = await fetch({
      ...options,
      lineItems: [
        {
          id: item.id,
          variantId: item.variantId,
          quantity: item.quantity ?? 1
        }
      ]
    })

    return data  + "__modified"
  },
  useHook: ({ fetch }: any) => () => {
    return async (input: any) => {
      const data = await fetch(input)
      return data
    }
  }
}
