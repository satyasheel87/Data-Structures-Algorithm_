// === String ===

let s = "momi";
let i = 0;
let j = s.length - 1;
function palindrome(s) {
  while (i < j) {
    if (s[i] == s[j]) {
      return true;
    }
    return false;
  }
  i++;
  j--;
}
console.log(palindrome(s));
