function LongestWord(sen) {
  let newS = sen.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");

  let high = 0;
  for (let i = 0; i < newS.length; i++) {
    if (newS[i].length > high) {
      high = newS[i].length;
    }
  }

  return high;
}
