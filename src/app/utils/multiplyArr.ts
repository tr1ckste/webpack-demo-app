import { memoizedMultiplyArray } from "./common";

export default () => {
  console.log(memoizedMultiplyArray([ 1, 2, 3 ], 3));
}
