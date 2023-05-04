function isValid(s) {
    const stack = [];
    const brackets = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (brackets[char]) {
        // Closing bracket
        const lastOpenBracket = stack.pop();
        if (brackets[char] !== lastOpenBracket) {
          return false;
        }
      } else {
        // Opening bracket
        stack.push(char);
      }
    }
  
    return stack.length === 0;
  }
  