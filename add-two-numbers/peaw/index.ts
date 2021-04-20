class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbersWithCarry(l1: ListNode | null, l2: ListNode | null, carry: number): ListNode | null {
    if (l1 === null && l2 === null) {
        if (carry > 0) {
            return new ListNode(carry, null);
        }

        return null;
    }

    const actualSum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    const nextCarry = Math.floor(actualSum / 10);
    const sum = actualSum % 10

    return new ListNode(sum, addTwoNumbersWithCarry(l1?.next ?? null, l2?.next ?? null, nextCarry));
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return addTwoNumbersWithCarry(l1, l2, 0);
}