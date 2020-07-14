/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

//My Solution
function arrayDiff(a, b) {
    if(b.length===0){
      return a
    }
 
    for(let i=0; i<b.length; i++){
       let num = b[i]
       for(let j=0; j<a.length; j++){
         if(a[j]==num){
           a.splice(j,1)
           j--
         }
       }
    }    
    return a
}


//Best practices solution
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}
 