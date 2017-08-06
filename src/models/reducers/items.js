// @flow
import GridPosition from "../base/GridPosition";
import Items from "../store/state/Items";
import Item from "../items/Item";

type Action = {
  type: string,
  items: Item[]
};

const initState: Items = new Items();

function itemsReducer(items: Items = initState, action: Action): Items {
  switch (action.type) {
    case "UPDATE_ITEMS":
      return items.add(action.items);
    default:
      return items;
  }
}

export default itemsReducer;
