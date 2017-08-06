// @flow
import Item from "../../items/Item";

// immutable Items state
export type ItemsState = {
  +[positionLiteral: string]: Item
};

export const initialState: ItemsState = {};
