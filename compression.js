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