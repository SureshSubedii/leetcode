var isValid = function (s) {
  const stack = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (brackets[char]) {
      stack.push(char);
    } else {
      const lastOpenBracket = stack.pop();
      if (brackets[lastOpenBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
