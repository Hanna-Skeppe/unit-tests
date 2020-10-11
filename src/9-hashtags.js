export const hashtags = (text) => {
  let splitWords = text.split(" ")
  console.log(splitWords)
  let newArray = new Array();
  //(console.log(newArray)
  splitWords.forEach(item => {
    if (item.charAt(0) === "#") {
      newArray.push(item);
    }

  });
  text = newArray;
  return text
}

// export const hashtags = (text) => {
//   return text
// }

// export const hashtags = text => {
//   text = text.split(' ');
//   for (let i = 0; i < text.length; i++) {
//     if (text[i].charAt(0) !== '#') {
//       text.splice(i, 1);
//       i--;
//     }
//   }
//   return text;
// };
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
//https://stackoverflow.com/questions/6323417/regex-to-extract-all-matches-from-string-using-regexp-exec
