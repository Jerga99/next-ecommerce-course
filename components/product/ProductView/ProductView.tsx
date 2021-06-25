
import cn from 'classnames'
import { FC } from 'react'
import s from './ProductView.module.css'
import { Container } from '@components/ui'
import Image from "next/image"
import { Product } from '@common/types/product'

interface Props {
  product: Product
}

const ProductView: FC<Props> = ({ product }) => {

  return (
    <Container>
      <div className={cn(s.root, 'fit')}>
        <div className={cn(s.productDisplay, 'fit')}>
          <div className={s.nameBox}>
            <h1 className={s.name}>Product Name</h1>
            <div className={s.price}>
              50
              {` `}
              $
            </div>
          </div>
          <div className={s.imageContainer}>
            <Image
              className={s.img}
              src={"/product-image-placeholder.svg"}
              alt={'Product Image'}
              width={1050}
              height={1050}
              quality="85"
            />
          </div>
        </div>
        <div className={s.sidebar}>
          <section>
            <div className="pb-4">
              <h2 className="uppercase font-medium">Color</h2>
              <div className="flex flex-row py-4">
                Variant Options Here!
              </div>
            </div>
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              Product description...
            </div>
          </section>
          <div>
            <button
              onClick={() => {}}
              aria-label="Add to Cart"
              className={s.button}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView
