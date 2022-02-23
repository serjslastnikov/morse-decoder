const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********' : ' ',
};

function decode(expr) {
  array = [];
  for (var i = 0; i < expr.length; i+=10) {
    array.push(expr.slice(i, i + 10));
  }
  let noZeroArray = [];
  array.forEach(function(item) {
    if (item.indexOf('1') !== -1) {
    item = item.slice(item.indexOf('1'));
      }
    noZeroArray.push(item); 
  })

   let morseArray = [];
  noZeroArray.forEach(function(item){
    let tempArray = [];
    let tempString = '';
      for (var i = 0; i < item.length; i+=2) {
    tempArray.push(item.slice(i, i + 2)); 
  }
    tempArray.forEach(function(item) {
      (item === '10' ? tempString += '.' : 0);
      (item === '11' ? tempString += '-' : 0);
      (item === '**' ? tempString += '**' : 0);
    })
    morseArray.push(tempString);
  })
  
  let result = '';
  let decodingArray = Object.entries(MORSE_TABLE);
  
  morseArray.forEach(function(item) {
    for(i = 0; i < decodingArray.length; i++) 
     if(item === decodingArray[i][0] ){
        result += decodingArray[i][1];
      }
  })
  return result;
}

module.exports = {
    decode
}