/*
Given an array of numbers, representing birthday candle lengths, if blown on from one angle, straight across the top, how many candles can be hit in one blow? (How many of the max number are there?)
*/

function birthdayCandles(ar) {
    return ar.sort().filter(int => int === ar[ar.length - 1]).length;
}

module.exports = birthdayCandles;
