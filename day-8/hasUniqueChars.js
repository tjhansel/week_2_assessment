// Write your code below
function uniqueWord(word){
    var uniqueLetter = new Set([])
    for(let i=0; i<word.length; i++){
        uniqueLetter.add(word[i])
    }
    return uniqueLetter.size === word.length
}

console.log(uniqueWord("Panda")) 
console.log(uniqueWord("Henry"))                    