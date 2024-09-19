class Solution {
    public boolean isVow(char c){
        
        c = Character.toLowerCase(c);
        return c == 'a' || c == 'e' || c == 'o' || c == 'i' || c == 'u';
}


public String reverseVowels(String s) {

    int n = s.length();
    int l = 0;
    int r = n -1;

    while(l < r){
        if(!isVow(s.charAt(l))){
            l++;
        }
        else if (!isVow(s.charAt(r))) { 
            r--;
        } else {
            char temp = s.charAt(l);
            s = s.substring(0, l) + s.charAt(r) + s.substring(l + 1, r) + temp + s.substring(r+1);
            l++;
            r--; 

        }
    }
return s; 
    }   
}
