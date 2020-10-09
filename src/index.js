
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix == undefined) {
    return result;
  }
  else {
    for (let i=0; matrix.length > i; i++) {
      if ((i%2) === 0) {
        result = result.concat(matrix[i]);
      }
      else {
        result = result.concat((matrix[i]).reverse());
      }
    }
    return result;
  }
}
