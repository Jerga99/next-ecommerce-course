
import getAllProductQuery from "../utils/queries/get-all-products"

type FetchParams = {
  query: string
}

const fetchApi = async ({query}: FetchParams) => {
  const url = "http://localhost:4000/graphql"

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query
    })
  })

  const data = await res.json()
  return { data }
}


const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchApi({query: getAllProductQuery})
  return products.data
}

export default getAllProducts
