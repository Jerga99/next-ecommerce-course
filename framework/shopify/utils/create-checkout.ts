import { ApiFetcher } from "@common/types/api"
import { checkoutCreateMutation } from "./mutations"



const createCheckout = async (
  fetch: ApiFetcher
): Promise<any> => {
  debugger
  const { data } = await fetch({
    query: checkoutCreateMutation
  })
  debugger

  return data
}


export default createCheckout
