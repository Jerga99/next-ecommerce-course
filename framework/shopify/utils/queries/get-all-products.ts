
const productConnection = `
  pageInfo {
    hasNextPage
    hasPreviousPage
  }
  edges {
    node {
      id
      title
      vendor
      handle
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 1) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            originalSrc
            altText
            width
            height
          }
        }
      }
    }
  }
`

const getAllProductsQuery = `
  query getAllProducts($first: Int = 250) {
    products(first: $first) {
      ${productConnection}
    }
  }
`

export default getAllProductsQuery
