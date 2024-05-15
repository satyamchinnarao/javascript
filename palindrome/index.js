function isPalindromeNoStringFunc(str) {
  let normal = "";
  // convert to lowercase and remove non-alphanumeric characters
  for (let char of str) {
    if (char.match(/[a-zA-Z0-9]/)) {
      normal += char.toLowerCase();
    }
  }
  let rev = "";
  for (let i = normal.length - 1; i >= 0; i--) {
    rev += normal[i];
  }
  return normal === rev;
}
function isPalindromeWithStaringFunc(str) {
  // convert to lowercase and remove non-alphanumeric characters
  let normal = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let rev = normal.split("").reverse().join("");
  return normal === rev;
}
console.log(pald("racecar"));
