// @flow
type State = {
  +width: number,
  +height: number,
  +items: Array<mixed>
};

type Action = {
  type: string
};

const initState = {
  width: 600,
  height: 600,
  items: [
    {
      type: "textBox",
      props: {
        position: { x: 10, y: 10 },
        text: "dash"
      }
    },
    {
      type: "dash",
      props: {
        position: { x: 60, y: 10 }
      }
    },
    {
      type: "textBox",
      props: {
        position: { x: 10, y: 30 },
        text: "cross"
      }
    },
    {
      type: "cross",
      props: {
        position: { x: 60, y: 30 }
      }
    }
  ]
};

function canvas(state: State = initState, action: Action) {
  switch (action.type) {
    case "UPDATE_ITEMS":
      // TODO: need implement update items into state.
      break;
    default:
      return state;
  }
}

export default canvas;
