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
