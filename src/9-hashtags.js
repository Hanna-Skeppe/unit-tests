export const hashtags = (text) => {
  return text
}

export const hashtags = text => {
  text = text.split(' ');
  for (let i = 0; i < text.length; i++) {
    if (text[i].charAt(0) !== '#') {
      text.splice(i, 1);
      i--;
    }
  }
  return text;
};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
//https://stackoverflow.com/questions/6323417/regex-to-extract-all-matches-from-string-using-regexp-exec
