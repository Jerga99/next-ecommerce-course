import { NextApiRequest, NextApiResponse } from "next";
import { SHOPIFY_CHECKOUT_URL_COOKIE } from "@framework/const"

export default function checkout(req: NextApiRequest, res: NextApiResponse) {

  const { cookies } = req
  const checkoutUrl = cookies[SHOPIFY_CHECKOUT_URL_COOKIE]

  if (checkoutUrl) {
    res.redirect(checkoutUrl)
  } else {
    res.redirect("/")
  }
}
