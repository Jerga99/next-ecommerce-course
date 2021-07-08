import { NextApiRequest, NextApiResponse } from "next";
import { SHOPIFY_CHECKOUT_URL_COOKIE, SHOPIFY_CHECKOUT_ID_COOKIE } from "@framework/const"

export default function checkout(req: NextApiRequest, res: NextApiResponse) {

  const { cookies } = req
  const checkoutUrl = cookies[SHOPIFY_CHECKOUT_URL_COOKIE]

  if (checkoutUrl) {
    // res.setHeader('Set-Cookie', `${SHOPIFY_CHECKOUT_ID_COOKIE}=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`);
    res.redirect(checkoutUrl)
  } else {
    res.redirect("/")
  }
}
