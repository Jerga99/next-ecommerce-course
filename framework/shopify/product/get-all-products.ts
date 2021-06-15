
import fetchApi from "../utils/fetch-api"
import getAllProductQuery from "../utils/queries/get-all-products"
import { normalizeProduct } from "../utils/normalize"
import { ProductConnection } from "../schema"
import { Product } from "../../common/types/product"

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({query: getAllProductQuery})

  const products = data.products.edges.map(({ node: product }) =>
    normalizeProduct(product)
  ) ?? []

  return products
}

export default getAllProducts
