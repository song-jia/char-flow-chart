// @flow
import Item from "../../items/Item";
import GridPosition from "../../base/GridPosition";

// immutable Items state
export type ItemsState = {
  +[positionLiteral: string]: Item
};

export const initialState: ItemsState = {};
