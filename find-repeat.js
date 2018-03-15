const n = [9, 8, 2, 6, 1, 8, 5, 3, 4, 7];

// sol: create a has table and before insert hash check the key is already in hash 
// if so, take value and plus it one
// O(n)

function findRepeat(n) {
    let report = {};
    const len = n.length;

    for (let i=0; i<len; i++) {
        let hash = {};
        hash[n[i]] = report.hasOwnProperty(n[i]) ? report[n[i]] + 1 : 1;

        Object.assign(report, {...hash});
    }

    return report;
}

console.log(findRepeat(n));

/*
{ '1': 1,
  '2': 1,
  '3': 1,
  '4': 1,
  '5': 1,
  '6': 1,
  '7': 1,
  '8': 2,
  '9': 1 }
*/
