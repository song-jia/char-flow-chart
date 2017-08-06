// @flow
// flow types here
import type Item from "./items/Item";

// actions
export type Action = ActionUpdateItems;
export type ActionUpdateItems = { type: "UPDATE_ITEMS", items: Item[] };
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

// state
export type ItemsState = {
  +[positionLiteral: string]: Item
};
export type State = {
  items: ItemsState
};
