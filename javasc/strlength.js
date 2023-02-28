
function stringLength(str){
    if(str.length >= 1 && str.length <= 10){
        console.log('success')
    } else {
        throw new Error("error count of string is too long");
    }
 //   return str.length;
}

module.exports = stringLength;