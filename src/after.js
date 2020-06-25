function after(n, func) {
  if (
    typeof n !== "number" ||
    !Number.isInteger(n) ||
    typeof func !== "function"
  )
    throw new Error("invalid arguments");

  let count = 1;
  let finished = false;

  return function () {
    if (!finished && count === n) {
      finished = true;
      return func();
    } else count++;
  };
}

module.exports = { after };
