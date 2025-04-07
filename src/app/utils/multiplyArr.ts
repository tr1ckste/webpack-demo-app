import { memoizedMultiplyArray } from "./common";

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];


export default () => {
  const result = Object.groupBy(inventory, ({ quantity }) =>
    quantity < 6 ? "restock" : "sufficient",
  );

  console.log(result)
  console.log(memoizedMultiplyArray([ 1, 2, 3 ], 3));
}
