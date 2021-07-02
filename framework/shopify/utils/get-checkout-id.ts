
import Cookies from "js-cookie"
import { SHOPIFY_CHECKOUT_ID_COOKIE } from "../const"

const getCheckoutId = () =>
  Cookies.get(SHOPIFY_CHECKOUT_ID_COOKIE)

export default getCheckoutId
