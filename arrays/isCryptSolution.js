/* A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits. You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm. If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false. */

function isCryptSolution(crypt, solution) {
    let lib = toObj(solution);
    return toNum(crypt[0],lib) + toNum(crypt[1],lib) == toNum(crypt[2],lib);
}

function toObj(arr) {
    let object = {};
    for(let i=0; i<arr.length; i++){
        object[arr[i][0]] = arr[i][1];
    }
    return object;
}

function toNum(string, hash) {
    let result = "";
    for(let i=0; i<string.length; i++){
        if(hash[string[i]]){
            result += hash[string[i]];
        }
    }
    
    if(result[0] == '0' && result.length > 1){
        return 1;
    } else if(result[0] == '0') {
        return 0;
    }
    
    return parseInt(result);
}