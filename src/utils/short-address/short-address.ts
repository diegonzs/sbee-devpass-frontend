const shortAddress = (
  address: string,
  startSlice: number,
  endSlice: number,
) => {
  return `${address.slice(0, startSlice)}...${address.slice(-endSlice)}`
}

export default shortAddress
