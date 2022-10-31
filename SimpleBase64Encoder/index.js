function binchar(char){
  var binarr=[];
  for (i=0;i<char.length;i++){
    bin=Number(char.charCodeAt(i)).toString(2)
    while(bin.length <8) {
    bin = "0" + bin;
    }
     binarr.push((bin));
    }
    return binarr.join('');
} 

const prompt = require("prompt-sync")();
const input = prompt("Enter the string to be encoded:");
let char = input;
std_base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
let finalarr=[];
binarr=binchar(char).toString();
for (i=0;i<binarr.length;i=i+6){
  finalarr.push(std_base64chars[parseInt(parseInt(binarr.slice(i,i+6)), 2)]);
}
console.log(finalarr.join('')+"==");
