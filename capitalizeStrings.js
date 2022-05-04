// Write a function which takes a string of two or more word and capitalize 
//the first letter of each word.

const capitalize = (str) => {



    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')



}

capitalize('viktorija kuneviciute')