
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const matris = matrix || [];
  let allinone = [];

  for (let i = 0; i < matris.length; i++) {
    if (i%2 !== 0) {
      for (let k = matris[i].length - 1; k >= 0; k--) {
        allinone.push(matris[i][k]);
      }
    } else {
      allinone = [...allinone, ...matris[i]];
    }
  }
  return allinone;
}