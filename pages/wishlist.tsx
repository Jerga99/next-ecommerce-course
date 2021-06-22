
import { Heart } from '@components/icons'
import { Layout } from '@components/common'
import { Container } from '@components/ui'

export default function Wishlist() {
  const isEmpty = true

  return (
    <Container>
      <div className="mt-3 mb-20">
        <div className="group flex flex-col">
          {isEmpty ? (
            <div className="flex-1 px-12 py-24 flex flex-col justify-center items-center ">
              <span className="border border-dashed border-secondary flex items-center justify-center w-16 h-16 bg-primary p-12 rounded-lg text-primary">
                <Heart className="absolute" />
              </span>
              <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
                Your wishlist is empty
              </h2>
              <p className="text-accents-6 px-10 text-center pt-2">
                Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
              </p>
            </div>
          ) : (
            <h1>Wishlist cards...</h1>
          )}
        </div>
      </div>
    </Container>
  )
}

Wishlist.Layout = Layout
