const { identity } = require("./identity");

function countBy(collection, iteratee = identity) {
  if (
    typeof iteratee !== "function" ||
    typeof collection !== "object" ||
    typeof collection.length !== "number" ||
    !collection.hasOwnProperty(collection.length)
  )
    throw new Error("invalid arguments");

  const counts = {};
  for (let i = 0; i < collection.length; i++) {
    const value = collection[i];
    const result = iteratee(value);
    counts[result] = counts[result] || 0;
    ++counts[result];
  }
  return counts;
}

module.exports = { countBy };
