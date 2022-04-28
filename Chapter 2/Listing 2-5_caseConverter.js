export const convertCase = (chars) => {
  const changedCharacters = chars.map((c) => {
    if (c === c.toLowerCase()) {
      return c.toUpperCase();
    } else {
      return c.toLowerCase();
    }
  });
  const changedCharacters = chars.map((c) => {
    return c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  });
  return changedCharacters;
};
