module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = [];
  const closingBrackets = [];
  const matchingBrackets = {};

  for (const [open, close] of bracketsConfig) {
      openingBrackets.push(open);
      closingBrackets.push(close);
      matchingBrackets[close] = open;
  }

  for (const char of str) {
      if (openingBrackets.includes(char)) {
          if (char === matchingBrackets[char] && stack.length > 0 && stack[stack.length - 1] === char) {
              stack.pop();
          } else {
              stack.push(char);
          }
      } else if (closingBrackets.includes(char)) {
          if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
              return false;
          }
      } else {
          return false;
      }
  }
  return stack.length === 0;
};
