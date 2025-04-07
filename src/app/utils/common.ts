import { map, memoize } from 'lodash-es'

const multiplyArray =
  (arr: Array<number>, multiplier: number): Array<number> =>
  map(arr, (x: number): number => x * multiplier)


export const memoizedMultiplyArray = memoize(multiplyArray)