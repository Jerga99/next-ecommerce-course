import { ApiFetcher } from "./api"

export type MutationHookContext = {
  fetch: (input: any) => any
}

export type FetcherHookContext = {
  input: any
  fetch: ApiFetcher
}

export type MutationHook = {
  fetcher: (context: FetcherHookContext) => any,
  useHook(
    context: MutationHookContext
  ): (input: any) => any
}
