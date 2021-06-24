
import type { InferGetStaticPropsType } from "next"
import { getAllProducts } from "@framework/product"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

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
    <>
      <Grid>
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
      )}
      </Grid>
      <Hero
       headline="Cookies, ice cream and muffin"
       description="Marshmallow tart jelly icing cotton candy tootsie roll cotton candy candy canes. Cake liquorice sesame snaps. Cupcake cake cheesecake pie marshmallow lollipop soufflé marshmallow dessert. Cheesecake jujubes halvah chupa chups lollipop tootsie roll. Jelly-o tiramisu jelly toffee cake croissant lemon drops pudding. Donut sesame snaps gummi bears toffee. Sesame snaps jelly-o oat cake chocolate marzipan cake lollipop. Gingerbread cheesecake jujubes fruitcake cake. Tiramisu cotton candy marzipan candy canes oat cake pudding bonbon."
      />
      <Marquee>
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            variant="slim"
            product={product}
          />
        )}
      </Marquee>
      <Grid layout="B">
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
      )}
      </Grid>
      <Marquee variant="secondary">
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            variant="slim"
            product={product}
          />
        )}
      </Marquee>
    </>
  )
}

Home.Layout = Layout
