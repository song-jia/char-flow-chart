// get size of text that rendered in specified font.
// size and font are optional, they are default to body's size and font when not set.
export function getTextSize(text, size, font) {
  let parentEle = document.createElement('span');
  let width = 0;
  let height = 0;
  parentEle.style.fontFamily = font;
  parentEle.style.fontSize = size + 'px';
  parentEle.style.left = -1000;
  parentEle.innerHTML = text;
  document.body.appendChild(parentEle);
  width = parentEle.offsetWidth;
  height = parentEle.offsetHeight;
  document.body.removeChild(parentEle);
  return {
    width: width,
    height: height
  };
}

export default {
  getTextSize
};
