

export type ApiFetcherOptions = {
  query: string
  variables?: Variables
}

export type Variables = {[key: string]: string | undefined}

export type ApiFetcherResults<T> = {
  data: T
}

export interface ApiConfig {
  fetch: ApiFetcher
}

export interface ApiHooks {
  cart: {
    useAddItem: any
  }
}

export type ApiFetcher<T = any> = (
  options: ApiFetcherOptions
) => Promise<ApiFetcherResults<T>>

export interface ApiProviderContext {
  hooks: ApiHooks
  fetcher: ApiFetcher
}
