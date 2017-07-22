// @flow
type State = {
  +width: number,
  +height: number,
  +items: Array<mixed>
};

type Action = {};

const initState = {
  width: 400,
  height: 300,
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
  return state;
}

export default canvas;
