var mirrorTree = function (root) {
  if (root == null) {
    return null
  }
  let temp = root.left
  root.left = mirrorTree(root.right)
  root.right = mirrorTree(temp)
  return root
}

const root = [5, 7, 9, 8, 3, 2, 4]
const result = mirrorTree(root)
console.log(result)
