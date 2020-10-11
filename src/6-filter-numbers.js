export const filterNumbers = (array, largerThan) => {
  const isLargerThan = (number) => number <= largerThan
  return array.filter(isLargerThan)
}

//return array.filter(item => item <= largerThan)