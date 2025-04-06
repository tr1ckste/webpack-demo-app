import map from 'lodash/map'

export const multiplyArray =
  (arr: Array<number>, multiplier: number): Array<number> =>
  map(arr, (x: number): number => x * multiplier)
