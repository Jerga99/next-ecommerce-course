
import type { InferGetStaticPropsType } from "next"
import getAllproducts from "@framework/product/get-all-products"

export async function getStaticProps() {
  const products = await getAllproducts()

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div>
      { JSON.stringify(products) }
    </div>
  )
}
