function isAnagram(str1, str2) {
  if (!str1 || !str2 || str1.length !== str2.length) {
    return false;
  }

  let lowStr1 = str1.toLowerCase();
  let lowStr2 = str2.toLowerCase();
  if (lowStr1 === lowStr2) {
    return false;
  }

  let newStr1 = lowStr1
    .split('')
    .sort()
    .join('');
  let newStr2 = lowStr2
    .split('')
    .sort()
    .join('');

  return newStr1 === newStr2;
}

module.exports = { isAnagram };
