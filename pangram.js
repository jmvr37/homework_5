const pangram = 'abcdefghijklmnopqrstuvwxyz'
const notAPanagram = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'


const isPangrams = function (pangram) {

    let str = "abcdefghijklmnopqrstuvwxyz"; 

    pangram = pangram.toLowerCase().replace(/[^a-z]/g,'');
    if (pangram.includes(str)) {
      console.log('pangram');
    } else {
      console.log('not pangram');
    } 
    
 }
isPangrams(pangram);

// Class Review
// 1. Iterate over each character 
// 2. check if the character exist in the string 
//    - loop through the alphabet and check if exist in the string 
//    - if it does, move on to the character in the alphabet
//    - if does not, return false
// 3. if it goes through the entire alphabet and they all exist, return true

function isPangrams2(str){
  const lcase = str.lowercase(); // lowercasing the string so that we need to loop through
  for(var i = 97; i <= 122; i++){ // loop through every charcode
    const letter = str.fromCharCode(i) // get the letter from charcode
    if(  lcase.indexOf(String.fromCharCode(letter)) == -1){
      return false;
    }
    return true
  }

}

console.log(isPangrams2("the quick brown fox jumps over the lazy dog"));
console.log(isPangrams2(pangram));
console.log(isPangrams2(notAPanagram));