/*
BST: Is Balanced

Write isBalanced() method to indicate whether
a BST is balanced. For this challenge, consider
a tree balanced when all nodes are balanced. A
BTNode is balanced if heights of its left subtree
and right subtree differ by at most one.
*/

function BTNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
    this.count = 1;
}

function BST() {
    this.root = null;
}

//: Helper function to add nodes to BST
BST.prototype.add = function(value) {
    //: Check if root node exists
    if (this.root === null) {
        this.root = new BTNode(value);
    } else {
        //: Compare value at each node and move accordingly
        var runner = this.root;
        while (runner) {
            //: If value is equal...
            if (value === runner.val) {
                runner.count++;
                break;
            //: If value is less than...
            } else if (value < runner.val) {
                if (!runner.left) {
                    runner.left = new BTNode(value);
                    break;
                } else {
                    runner = runner.left;
                }
            //: If value is greater than...
            } else {
                if (!runner.right) {
                    runner.right = new BTNode(value);
                    break;
                } else {
                    runner = runner.right;
                }
            }
        }
    }
}

//: Helper function for finding height from root
BST.prototype.height = function() {
    if (this.root === null) {
        return 0;
    }
    return getHeight(this.root);
}

//: Recursive helper function to find height from a node
function getHeight(node) {
    if (node === null) {
        return 0;
    }
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

//:

var tree = new BST();
console.log(tree.height()); //: 0
tree.add(3);
console.log(tree.height()); //: 1
tree.add(4);
console.log(tree.height()); //: 2
tree.add(2);
console.log(tree.height()); //: 2
tree.add(5);
console.log(tree.height()); //: 3
