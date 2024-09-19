/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    s = s.replace(/\s+/g, ' ').trim()
        let word = s.split(' ')
            word.reverse()
                return word.join(' ')
                }
    // s.split();
    // s.reverse();
    // s.join();


