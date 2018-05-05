
/* Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.*/

function firstNotRepeatingCharacter(s) {
    for(let i=0; i<s.length; i++){
        if(i == s.indexOf(s[i]) && i == s.lastIndexOf(s[i])){
            return s[i];
        }
    }
    
    return '_';
}

/* loop through the string, if the index of the value of the string is both the first and last index then it can't be a duplicate. exit the loop and return '_' if all are duplicates */