import { ApiFetcher, ApiFetcherOptions } from "./api"

export type MutationHookContext = {
  fetch: (input: any) => any
}

export type FetcherHookContext = {
  input?: any
  fetch: ApiFetcher
  options: ApiFetcherOptions
}

export type MutationHook = {
  fetcherOptions: ApiFetcherOptions
  fetcher: (context: FetcherHookContext) => any
  useHook(
    context: MutationHookContext
  ): (input: any) => any
}
