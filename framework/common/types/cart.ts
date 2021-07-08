import {
  ProductOption,
  ProductVariant
} from "./product";


interface Discount {
  value: number
}

export interface LineItem {
  id: string
  variantId: string
  productId: string
  name: string
  path: string
  quantity: number
  discounts: Discount[]
  options?: ProductOption[]
  variant: Partial<ProductVariant>
}

export interface Cart {
  id: string
  createdAt: string
  completedAt: string
  currency: { code: string }
  taxesIncluded: boolean
  // taxes, discounts exluded
  lineItemsSubtotalPrice: number
  // taxes, discounts included
  totalPrice: number
  lineItems: any[]
  discounts: Discount[]
}
