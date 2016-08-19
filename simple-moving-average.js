/*
Daily Closing Prices: 11,12,13,14,15,16,17

First day of 5-day SMA: (11 + 12 + 13 + 14 + 15) / 5 = 13

Second day of 5-day SMA: (12 + 13 + 14 + 15 + 16) / 5 = 14

Third day of 5-day SMA: (13 + 14 + 15 + 16 + 17) / 5 = 15
*/


var datas = [
{
    date: '01/01/2016',
    price: 11
},{
    date: '01/02/2016',
    price: 12
},{
    date: '01/03/2016',
    price: 13
},{
    date: '01/04/2016',
    price: 14
},{
    date: '01/05/2016',
    price: 15
},{
    date: '01/06/2016',
    price: 16
},{
    date: '01/07/2016',
    price: 17
}];

function sma (datas) {
    var result = 0;
    for (idx in datas) {
        result += datas[idx].price;
    }

    return result / datas.length;
}

// console.log(sma(datas)); // 14

function recurSMA (datas, idx) {
    if (idx < 0) {
        return 0;
    }

    return datas[idx].price + ( recurSMA(datas, idx-1) ); // 98
}

// console.log( recurSMA(datas, datas.length-1) / datas.length);

/**
 * As a user need the simple-moving-average function
 * they able to specific current date and specific how many previous date
 */

// Assume the cDate is current index array
// Assume that pDate is previous date length from current date
var prevSMA = function doProcess (datas, cDate, pDate) {
    if(cDate < 4){  // todo: it sohuld not hard code
        return 0;
    }
    
    return datas[cDate].price + ( doProcess (datas, cDate-1, pDate) );
}

console.log(prevSMA(datas, 6, 2));
