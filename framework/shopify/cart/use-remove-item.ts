
import useRemoveItem from "@common/cart/use-remove-item"

export default useRemoveItem

export const handler = {
  fetcherOptions: {
    query: "query { hello }"
  },
  async fetcher({
    input,
    options,
    fetch
  }: any) {
    const { data } = await fetch({
      ...options
    })
    return data + "_modified!!!!"
  },
  useHook: ({fetch}: any) => () => {
    return async (input: any) => {
      const data = await fetch(input)
      return data
    }
  }
}
