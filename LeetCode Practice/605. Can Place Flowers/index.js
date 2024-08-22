var canPlaceFlowers = function(flowerbed, n) {

    // Variable to return true or false 
    let count = 0

    // loop
    for(let i = 0; i < flowerbed.length; i++){

        if(flowerbed[i] === 0 && (i === 0 || flowerbed[i-1] === 0 ) && (i === flowerbed.length -1 || flowerbed[i+1] === 0)){
           flowerbed[i] = 1;
           count++
           i++
        } 
    }

    // return true or false
    return count >= n
};
