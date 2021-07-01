

import { useAddItem } from "@common/cart"

export default useAddItem


export const handler = {
  fetcher: (input: any) => {
    return JSON.stringify(input) + "_MODIFIED"
  },
  useHook: ({fetch}: any) => {
    return (input: any) => {
      const response = fetch(input)
      return {
        output: response
      }
    }
  }
}
