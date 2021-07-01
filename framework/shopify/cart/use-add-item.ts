

import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"

export default useAddItem


export const handler: MutationHook = {
  fetcher: async ({fetch, input}) => {
    const response = await fetch({
      url: "http://localhost:4000/graphql",
      query: `query { hello }`
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
