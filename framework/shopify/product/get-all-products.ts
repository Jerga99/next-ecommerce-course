
import fetchApi from "../utils/fetch-api"

import getAllProductQuery from "../utils/queries/get-all-products"

const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchApi({query: getAllProductQuery})
  return products.data
}

export default getAllProducts
