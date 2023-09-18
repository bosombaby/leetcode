/**
 * 转置矩阵，行列转换
 */
var transpose = function(matrix) {
    let m = matrix.length , n=matrix[0].length
    let newMatrix = new Array(n).fill(0).map(()=>new Array(m))

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            newMatrix[j][i] = matrix[i][j]
        }
    }

    return newMatrix
};