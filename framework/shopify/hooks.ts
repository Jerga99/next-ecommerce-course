

import { handler as useAddItem } from "./cart/use-add-item"
import { handler as useCart } from "./cart/use-cart"

export const shopifyHooks = {
  cart: {
    useAddItem,
    useCart
  }
}
