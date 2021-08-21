/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return []

	return helper([], root, 0, 'start')

};

const helper = (res, root, level, indicator) => {
	// if(!root) return res
	console.log(res, root ? root.val : 'null', `, level = ${level},`, indicator)
	if (root) {
		if (!res[level]) res[level] = []
		res[level].push(root.val)
		helper(res, root.left, level + 1, 'left')
		console.log('pass helper left')
		helper(res, root.right, level + 1, 'right')
		console.log('pass helper right')
	}
	console.log('---------root is null = the end')
	return res

}

//stdout

// [] 3 , level = 0, start
// 		[ [ 3 ] ] 9 , level = 1, left
// 		[ [ 3 ], [ 9 ] ] null , level = 2, left
// ---------root is null = the end
// pass helper left
// 		[ [ 3 ], [ 9 ] ] null , level = 2, right
// ---------root is null = the end
// pass helper right
// ---------root is null = the end
// pass helper left
// 		[ [ 3 ], [ 9 ] ] 20 , level = 1, right
// 		[ [ 3 ], [ 9, 20 ] ] 15 , level = 2, left
// 		[ [ 3 ], [ 9, 20 ], [ 15 ] ] null , level = 3, left
// ---------root is null = the end
// pass helper left
// 		[ [ 3 ], [ 9, 20 ], [ 15 ] ] null , level = 3, right
// ---------root is null = the end
// pass helper right
// ---------root is null = the end
// pass helper left
// 		[ [ 3 ], [ 9, 20 ], [ 15 ] ] 7 , level = 2, right
// 		[ [ 3 ], [ 9, 20 ], [ 15, 7 ] ] null , level = 3, left
// ---------root is null = the end
// pass helper left
// 		[ [ 3 ], [ 9, 20 ], [ 15, 7 ] ] null , level = 3, right
// ---------root is null = the end
// pass helper right
// ---------root is null = the end
// pass helper right
// ---------root is null = the end
// pass helper right
// ---------root is null = the end
