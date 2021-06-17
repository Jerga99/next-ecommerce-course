
import type { InferGetStaticPropsType } from "next"
import getAllproducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllproducts(config)

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
    <div className="root">
      { JSON.stringify(products) }
    </div>
  )
}

Home.Layout = Layout
