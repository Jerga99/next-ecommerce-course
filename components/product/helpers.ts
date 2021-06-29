import { Product } from "@common/types/product";


type AvailableChoices = "color" | "size" | string

export type Choices = {
  [P in AvailableChoices]: string
}


export function getVariant(product: Product, choices: Choices) {

  const variant = product.variants.find((variant) => {
    const isMatchingChoice = variant.options.every(variantOption => {
      const optionName = variantOption.displayName.toLocaleLowerCase()
      if (optionName in choices) {
        if (choices[optionName] === variantOption.values[0].label) {
          return true
        }
      }

      return false
    })

    return isMatchingChoice
  })

  return variant
}
