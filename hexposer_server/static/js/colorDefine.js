/* function to transform a Hex_Color value  to a rgb value {0-255,0-255,0-255}

@param color : hexadecimal string (#000000-#ffffff)

@return rgbColor: {rChannel:num, gChannel:num, bChannel:num}
*/
const colorRange = [30, 90, 160];
const colorSet = [0, 153, 255]

function convertColor(color) {
    /* Check for # infront of the value, if it's there, strip it. Could be deleted */
  
    if(color.substring(0,1) == '#') {
       color = color.substring(1);
     }
  
    var rgbColor = {};
  
    /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
    rgbColor.rChannel = parseInt(color.substring(0,2),16);
    rgbColor.gChannel = parseInt(color.substring(2,4),16);
    rgbColor.bChannel = parseInt(color.substring(4),16);
  
    // console.log('convertColor done');
    return rgbColor;
}

    /* function to check the closest distance of a number to an array of numbers*/

    /*  @param num : number to check
        @param arr : array of numbers to check against
    
        @return curr : closest value for the num out of the given array
    */

   function closest (num, arr) {
    var curr 
    var diffs = []
    var diff
    console.log("Number: " + num)
    for (var val = 0; val < arr.length; val++) {
        diff = Math.abs (num - colorRange[val])
        diffs.push(diff)
    }
    var minimun = Math.min(...diffs)
    console.log("Mini: " + minimun)
    var index = diffs.indexOf(minimun)
    console.log("Index: " + index)  

    curr = colorSet[index]
    console.log("Set: " + curr + "\n")

    return curr
}
 
/*  executes the value cleanUp for each channel in a given rgbColor

    @param rgbColor: {rChannel:num, gChannel:num, bChannel:num}
    
    @return rgbColor: {rChannel:num, gChannel:num, bChannel:num}

*/

 function colorAdjust (rgbColor){
    for (var property in rgbColor){
       rgbColor[property] = closest(rgbColor[property],colorRange); 
    }
    console.log('-----------');
    return rgbColor;
}

var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    // console.log('rgbToHex transform');
    return hex;
  }

function colorPrepare(HexColor){
    let proc = convertColor(HexColor);
    proc = colorAdjust(proc);
    var newHex = '';
    for (var property in proc) {
        //console.log(proc[property]);  
        newHex = newHex.concat(rgbToHex(proc[property]));
    }
    // console.log('colorPrepare');
    return newHex;
}  

/*  our color list for reference
   var red      = 'ff0000';
   var yellow   = 'ffff00';
   var pink     = 'ff99ff';
   var orange   = 'ff9900';
   var green    = '00ff00';
   var blue     = '0000ff';
   var purple   = '990099';
   var grey     = '999999';
   var cyan     = '00ffff';
*/
  
   module.exports.colorPrepare = colorPrepare;
  
   // only colorPrepare needs export

    // module.exports.colorAdjust = colorAdjust;
    // module.exports.closest = closest;
    // module.exports.convertColor = convertColor;
    // module.exports.colorRange = colorRange;
    // module.exports.rgbToHex = rgbToHex;

