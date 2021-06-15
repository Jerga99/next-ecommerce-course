
import fetchApi from "../utils/fetch-api"

import getAllProductQuery from "../utils/queries/get-all-products"
import { ProductConnection } from "../schema"

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({query: getAllProductQuery})

  // normalize and return new data!

  return data.products
}

export default getAllProducts
