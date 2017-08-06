// @flow
import type { ItemsState } from "../store/state/Items";
import { initialState } from "../store/state/Items";
import Item from "../items/Item";

type Action = {
  type: string,
  items: Item[]
};

function itemsReducer(
  items: ItemsState = initialState,
  action: Action
): ItemsState {
  switch (action.type) {
    case "UPDATE_ITEMS":
      return addItems(items, action.items);
    default:
      return items;
  }
}

function addItems(state: ItemsState, items: Item[]) {
  let newItems = {};
  items.forEach((item: Item) => {
    newItems[item.position.literal()] = item;
  });
  return Object.assign({}, state, newItems);
}

export default itemsReducer;
