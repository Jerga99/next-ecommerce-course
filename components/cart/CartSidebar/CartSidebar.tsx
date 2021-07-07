import { FC } from 'react'
import { Bag, Cross } from '@components/icons'
import cn from "classnames"
import { useUI } from '@components/ui/context'
import useCart from '@framework/cart/use-cart'
import { LineItem } from '@common/types/cart'
import CartItem from '../CartItem'
import { Button } from '@components/ui'

const CartSidebar: FC = () => {
  const { closeSidebar} = useUI()
  const { data, isEmpty } = useCart()

  const rootClass = cn(
    "h-full flex flex-col",
    {"bg-secondary text-secondary": isEmpty}
  )

  return (
    <div className={rootClass}>
      <header className="px-4 pt-6 pb-4 sm:px-6">
        <div className="flex items-start justify-between space-x-3">
          <div className="h-7 flex items-center">
            <button
              onClick={closeSidebar}
              className="hover:text-gray-500 transition ease-in-out duration-150"
            >
              <Cross className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {isEmpty ? (
        <div className="flex-1 px-4 flex flex-col justify-center items-center">
          <span className="border border-dashed border-primary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-secondary text-secondary">
            <Bag className="absolute" />
          </span>
          <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
            Your cart is empty
          </h2>
          <p className="text-accents-3 px-10 text-center pt-2">
            Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
          </p>
        </div>
      ) :
      <>
        <div className="px-4 sm:px-6 flex-1">
          <h2
            className="pt-1 pb-4 text-2xl leading-7 font-bold text-base tracking-wide inline-block">
            My Cart
          </h2>
          <ul className="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-accents-3 border-t border-accents-3">
            { data?.lineItems.map((item: LineItem) =>
              <CartItem
                key={item.id}
                item={item}
                currencyCode={data.currency.code}
              />
            )}
          </ul>
        </div>
        <div className="flex-shrink-0 px-4  py-5 sm:px-6">
          <div className="border-t border-accents-3">
            <ul className="py-3">
            <li className="flex justify-between py-1">
                <span>Subtotal</span>
                <span>{data?.lineItemsSubtotalPrice} {data?.currency.code}</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Estimated Shipping</span>
                <span className="font-bold tracking-wide">FREE</span>
              </li>
            </ul>
            <div className="flex justify-between border-t border-accents-3 py-3 font-bold mb-10">
              <span>Total</span>
              <span>{data?.totalPrice} {data?.currency.code}</span>
            </div>
          </div>
          <Button
            Component="a"
            href="/api/checkout"
          >
            Proceed to Checkout
          </Button>
        </div>
      </>
      }
    </div>
  )
}

export default CartSidebar
