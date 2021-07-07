import {
  ApiFetcherOptions,
  ApiFetcherResults
} from "@common/types/api"
import { API_URL, STOREFRONT_TOKEN } from "@framework/const"

const fetchApi = async <T>({
  query,
  variables }: ApiFetcherOptions
): Promise<ApiFetcherResults<T>> => {
  const res = await fetch(API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN!
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
  const { data, errors} = await res.json()
  // ?? is checking if left hand expression is null or undefined -> if it is go with right expression
  // || is checking if left hand expression is null, undefined, "", 0, false
  if (errors) {
    throw new Error(errors[0].message ?? errors.message)
  }

  return { data }
}

export default fetchApi
