function solution(year) {
    let century = 0
    if (year <= 100) {
        century = 1 
    } else if ( year >= 100 )
    {
        century = ( year - 1 ) / 100 + 1; 

    }
    // for every 100 increase century by 1 
    return Math.floor(century);
}

console.log(solution(1700));