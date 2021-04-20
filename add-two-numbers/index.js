/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
};

const createListNode = (intArr) => {
  const val = intArr.pop();
  if (intArr.length === 1) {
    return new ListNode(val, new ListNode(intArr[0]));
  }
  return new ListNode(val, createListNode(intArr));
};
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
const addTwoNumbers = (l1, l2) => {
  // const num1 = l1.reverse();
  // const num2 = l2.reverse();
};

const reverseArr = (arr, accumulator) => {
  if (arr.length === 0) {
    return;
  }
  return [arr.slice(-1), reverseArr(arr.slice(0, -1))];
  // return accumulator.push(arr.slice(-1));
};

module.exports = {
  reverseArr,
  addTwoNumbers,
  ListNode,
  createListNode,
};
