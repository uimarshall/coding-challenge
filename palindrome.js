

function isValidPalindrome(s){
    const strLen = s.length
    for (let i = 0; i < strLen/2; i++) {
        if (s.charAt(i)!= s.charAt(strLen-i-1)) {
            return false
        }
        
    }
        return true

}

function palindromeIndex(s){
    const palindromeIdx = -1
    const strLen = s.length
    for (let i = 0; i < strLen/2; i++) {
        if (s.charAt(i)!= s.charAt(strLen-i-1)) {
            if (i+1 < strLen) {
                let firstHalfValidPalindrome = isValidPalindrome(s.substring(i+1,strLen-i))
                if (firstHalfValidPalindrome) return i
                return strLen -i -1
                    
                
                
            }
            
        }
        
    }


    return palindromeIdx

}
console.log(palindromeIndex('aaab'));