/* Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for
 which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, 
return the number for which the second occurrence has a smaller index than the second occurrence of the other number does.
If there are no such elements, return -1. */


function firstDuplicate(a) {
    for(let i of a){
        let index = Math.abs(i) - 1;
        if(a[index] < 0) return index + 1;
        a[index] =  a[index] * -1;
    }
    return -1;
}



 /* array only contains numbers from 1 to a.length this means that if we find this index again we know there is a duplicate. we check if a at this index is < 0 and return if so,
if not we change this index to negative such that checking that index again will confirm a duplicate. if this does not happen we exit the loop and return -1 meaning no duplicates. */