function chunk(array, size = 1) {
  if (
    !Array.isArray(array) ||
    typeof size !== "number" ||
    !Number.isInteger(size)
  )
    throw new Error("invalid arguments");

  return array.reduce((chunks, el, index) => {
    if (index % size === 0) {
      chunks.push([el]);
    } else {
      chunks[chunks.length - 1].push(el);
    }
    return chunks;
  }, []);
}

module.exports = { chunk };
