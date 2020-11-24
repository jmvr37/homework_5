const text = "QQQUUUUUUUlllllllqqQQQQQQQQQTTA"

function compressString(text){
   var output = '';
   var count = 0;
   for (var i = 0; i < text.length; i++){
       count++;
       if(text[i] != text[i+1]){
           output += text[i] + count;
           count = 0;
       }
   }
   return output;
}

compressString(text);

// anson's solution 
function compressString2(text){
    var output = '';
    var count = 1;
    for (var i = 0; i < text.length; i++){
      if(text[i] === text[i + 1]){
          count++;
      } else {
          output += count + text[i]
          count = 1;
      }
    }
    return output;
 }

 console.log(compressString2(text))
 console.log("QQQUUUUUUUlllllllqqQQQQQQQQQTTA")