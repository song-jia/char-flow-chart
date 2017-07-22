// @flow

type canvas = {
  width: number,
  height: number,
  units: unit[]
};

type unit = {
  type: string
};

// example
const dash = {
  type: "dash",
  attributes: {
    position: { x: 0, y: 0 }
  }
};

const text = {
  type: "text",
  attributes: {
    start: { x: 0, y: 0 },
    end: { x: 10, y: 10 }
  }
};

const line = {
  type: "line",
  attributes: {
    start: { x: 0, y: 0 },
    end: { x: 10, y: 10 }
  }
};

const rectangle = {
  type: "rectangle",
  attributes: {
    start: { x: 0, y: 0 },
    end: { x: 10, y: 10 }
  }
};
