let formatNumber = (num) => {
    let arr = num.toString().split('.');
    let intRev = arr[0].split('').reverse();
    let result = [];
    for (let i = 0; i < arr[0].length; i++) {
        i == 0 ? result.push(intRev[i]) : i % 3 == 0 ? result.push(',', intRev[i]) : result.push(intRev[i]);
    }
    result.reverse().push('.', arr[1]);

    return result.join('');
}

export default formatNumber;