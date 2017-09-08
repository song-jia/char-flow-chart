// @flow
// get font metrics of monospace fonts.
type fontMetric = {
  accent: number,
  descent: number,
  height: number,
  width: number
};

export function getMetric(fontName: string, fontSize: number): fontMetric {
  let text = document.createElement("span");
  text.style.fontFamily = fontName;
  text.style.fontSize = fontSize + "px";
  const testText = "ABCjgq|";
  text.innerHTML = testText;

  let block = document.createElement("div");
  block.style.display = "inline-block";
  block.style.width = "1px";
  block.style.height = "0px";

  let div = document.createElement("div");
  div.appendChild(text);
  div.appendChild(block);

  // this test div must be visible otherwise offsetLeft/offsetTop will return 0
  // but still let's try to avoid any potential glitches in various browsers
  // by making it's height 0px, and overflow hidden
  div.style.height = "0px";
  div.style.overflow = "hidden";

  // I tried without adding it to body - won't work. So we gotta do this one.
  document.body && document.body.appendChild(div);

  block.style.verticalAlign = "baseline";
  let bp = objOff(block);
  let tp = objOff(text);
  let accent: number = bp[1] - tp[1];
  block.style.verticalAlign = "bottom";
  bp = objOff(block);
  tp = objOff(text);
  let height: number = bp[1] - tp[1];
  let descent: number = height - accent;
  let width: number = text.offsetWidth / testText.length;
  // now take it off :-)
  document.body && document.body.removeChild(div);

  // return text accent, descent and total height
  return { accent, height, descent, width };
}

function objOff(obj): number[] {
  let currleft: number = 0;
  let currtop: number = 0;
  if (obj.offsetParent) {
    do {
      currleft += obj.offsetLeft;
      currtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
  } else {
    currleft += obj.offsetLeft;
    currtop += obj.offsetTop;
  }
  return [currleft, currtop];
}
