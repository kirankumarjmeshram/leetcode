/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let count = students.length;
    let map = {};
    for(let s of students) {
        if(!map[s]){
            map[s] = 1
        }else{
            map[s]++
        }
    }
    for(let s of sandwiches) {
        if(map[s]>0){
            map[s]--;
            count--;
        }else{
            return count;
        }
    }
    return count;
};