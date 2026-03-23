/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

var exclusiveTime = function(n, logs) {
    const res = new Array(n).fill(0);
    // [3,4]
    const stack = [];
    // [0,]
    let prevTime = 0;
    // 6
// n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
    for (const log of logs) {
        const [idStr, type, timeStr] = log.split(":");
        const id = Number(idStr);
        const time = Number(timeStr);

        if (type === "start") {
            if (stack.length > 0) {
                res[stack[stack.length - 1]] += time - prevTime;
            }
            stack.push(id);
            prevTime = time;
        } else {
            res[stack.pop()] += time - prevTime + 1;
            prevTime = time + 1;
        }
    }

    return res;
};