const binaryTree = {
  value: 10,
  left: {
    value: 10,
    left: {
      value: 10,
    },
    right: {
      value: 10,
    }
  },
  right: {
    value: 10,
    left: {
      value: 10,
    },
    right: {
      value: 10,
    }
  }
}

const binaryTreeSum = (binaryTree) => {
let result = binaryTree.value;
if (binaryTree.left) {
  result = result + binaryTreeSum(binaryTree.left);
};
if (binaryTree.right) {
  result = result + binaryTreeSum(binaryTree.right);
};
return result;
}

console.log(binaryTreeSum(binaryTree));
