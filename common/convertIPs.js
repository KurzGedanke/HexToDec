function toDec(ipArray){
    var decIP = [0, ".", 0, ".", 0, ".", 0]
    
    // loops over decIP and converts ipArray into an decimal value
    // which get insertet betwen the "." (i*2), into decIP
    // notice that ipArray[i] contains always to values eg: "7F"
    for(var i = 0; i < 4; i++){
        decIP[i*2] = parseInt(ipArray[i], 16);
    }
    console.log(decIP)

    
    // return the decIP as a string with the "," replaced with whitespace
    return decIP.toString().replace(/,/g, '');
}


 function splitIP(ip){
  // splits the initial hex ip into a array

   var ipSplit = []
  ipSplit[0] = ip.substring(0, 2);
  ipSplit[1] = ip.substring(2, 4);
  ipSplit[2] = ip.substring(4, 6);
  ipSplit[3] = ip.substring(6, 8);

  return ipSplit;
}

module.exports = {
  toDec,
  splitIP
}