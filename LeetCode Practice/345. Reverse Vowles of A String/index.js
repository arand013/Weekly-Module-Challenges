var reverseVowels = function(s) {

    let vowels = 'aeiouAEIOU';
    let sArray = s.split('');
    let i = 0, j = sArray.length -1; 

    while(i < j){
        if(!vowels.includes(s[i])) i++;
    else if (!vowels.includes(s[j])) j--;
    else {
        [sArray[i],sArray[j]] = [sArray[j],sArray[i]];
        i++
        j--
        }
    }

    return sArray.join('');
}

