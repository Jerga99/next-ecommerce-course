

import { ApiConfig } from "@common/types/api";


const getProduct = async (config: ApiConfig): Promise<any> => {

  return {
    product: {
      name: "MY super product",
      slug: "my-super-product"
    }
  }
}

export default getProduct
