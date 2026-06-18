/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let combinations = [];
    Helper(n,k,combinations,1,[]);
    return combinations;
};

function Helper(n,k,combinations,index,current){
    if(current.length ===k){
        combinations.push([...current]);
        return;
    }
    for(let i=index;i<=n;i++){
        current.push(i);
        Helper(n,k,combinations,i+1,current);
        current.pop()
    }
}