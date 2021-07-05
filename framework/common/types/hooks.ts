import { ApiFetcher, ApiFetcherOptions } from "./api"

export interface ApiHooks {
  cart: {
    useAddItem: MutationHook
    useCart: any
  }
}

export type MutationHookContext<Input, Output> = {
  fetch: (input: Input) => Promise<Output>
}

export type HookFetcherContext<Input, Output> = {
  input: Input
  fetch: ApiFetcher<Output>
  options: ApiFetcherOptions
}

export type HookFetcherOptions = {
  query: string
}

export type HookFetcherFn<Input, Output, Data> =
  (context: HookFetcherContext<Input, Output>) => Promise<Data>

export type HookDescriptor = {
  fetcherInput: any
  fetcherOutput: any
  data: any
}

export type MutationHook<H extends HookDescriptor = any> = {
  fetcherOptions: HookFetcherOptions
  fetcher: HookFetcherFn<
    H["fetcherInput"],
    H["fetcherOutput"],
    H["data"]
  >
  useHook(
    context: MutationHookContext<H["fetcherInput"], H["data"]>
  ): () => (input: H["fetcherInput"]) => Promise<H["data"]>
}
