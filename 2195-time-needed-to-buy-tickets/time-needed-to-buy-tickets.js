/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time = 0;
    let n = tickets.length;
    for (let i = 0; i < n; i++) {
        if (i <= k) {
            time += Math.min(tickets[i], tickets[k]);
        } else {
            time += Math.min(tickets[i], tickets[k] - 1);
        }
    }

    return time;
};