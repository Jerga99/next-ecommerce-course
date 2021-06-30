


const useAddItem = () => {

  return (input: any) => {
    return {
      output: JSON.stringify(input) + "_MODIFIED"
    }
  }
}

export default useAddItem
