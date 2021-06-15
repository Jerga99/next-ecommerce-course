
type FetchParams = {
  query: string
}

const fetchApi = async ({query}: FetchParams) => {
  const url = "http://localhost:4000/graphql"

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query
    })
  })

  const { data, errors} = await res.json()
  // ?? is checking if left hand expression is null or undefined -> if it is go with right expression
  // || is checking if left hand expression is null, undefined, "", 0, false
  if (errors) {
    throw new Error(errors[0].message ?? errors.message)
  }

  return { data }
}

export default fetchApi
