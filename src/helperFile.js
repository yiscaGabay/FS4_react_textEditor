// to put in another file
export const englishCapital = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P','br', 'A',
  'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','br', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  
export const englishLower = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','br', 'a',
  's', 'd', 'f', 'g', 'h', 'j', 'k', 'l','br', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

export const hebrew = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ','br', 'ש', 'ד', 'ג', 'כ',
  'ע', 'י', 'ח', 'ל', 'ך', 'ף','br', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'];

export const specialChars = [',', '.', '!', '?', '@', '/', "'"];

export const emoji = ['😂', '😊', '🤣', '❤️', '😍', '😒', '👌', '😘','💕', '😁', '👍', '🙌', '🎶', '😢', '😜', '😉'];

export const basicStyle = {
  fontSize: '14px',
  color: 'black',
  fontFamily: 'Arial'
}

export let numbers = Array.from({ length: 10 }, (value, index) => index);


//////////////////// helper functions ///////////////////
export function lowerAll(element){
    let fontS = element.textStyle.fontSize.slice(0, -2);
    if (fontS > 5) {
      let newInputStyle = Object.assign({}, element.textStyle);
      newInputStyle.fontSize = fontS - 2 + 'px';
      element.textStyle = newInputStyle;
    }
  }

  export function upperAll(element){
    console.log(element);
    let fontS = element.textStyle.fontSize.slice(0, -2);
    if (fontS < 50) {
      let newInputStyle = Object.assign({}, element.textStyle);
      newInputStyle.fontSize = fontS - 0 + 2 + 'px';
      element.textStyle = newInputStyle;
    }
  }

  export function setColorElement(element, newColor){
    console.log(newColor)
    let newInputStyle = Object.assign({}, element.textStyle);
    newInputStyle.color = newColor;
    element.textStyle = newInputStyle;
  }

  export function setSizeElement(element, newSize){
    let newInputStyle = Object.assign({}, element.textStyle);
    newInputStyle.fontSize = newSize + 'px';
    element.textStyle = newInputStyle;
  }

  export function setFontElement(element, newFont){
    let newInputStyle = Object.assign({}, element.textStyle);
    newInputStyle.fontFamily = newFont;
    element.textStyle = newInputStyle;
  }

  export function buildStyle(size, color, font) {
    return {
      fontSize: size,
      color: color,
      fontFamily: font
    }
}
  
