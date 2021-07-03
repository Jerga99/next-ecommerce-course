
import { ApiConfig } from "@common/types/api"
import { SHOPIFY_CHECKOUT_ID_COOKIE } from "@framework/const"
import { fetchApi } from "../utils"

class Config {
  private config: ApiConfig

  constructor(config: ApiConfig) {
    this.config = config
  }

  getConfig(): ApiConfig {
    return this.config
  }
}

const configWrapper = new Config({
  fetch: fetchApi,
  checkoutCookie: SHOPIFY_CHECKOUT_ID_COOKIE
})

export function getConfig() {
  return configWrapper.getConfig()
}





