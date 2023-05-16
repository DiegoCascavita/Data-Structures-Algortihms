const strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0; // An empty needle is always present at index 0
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;
    while (j < needle.length && haystack[i + j] === needle[j]) {
      j++;
    }

    if (j === needle.length) {
      return i; // Found a match, return the index
    }
  }

  return -1; // Needle not found in haystack
};