var romanToInt = function(s) {
    translations = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    number = 0
    //Case IV and IX
    s = s.replace(/IV/g,'IIII').replace(/IX/g,'VIIII')
    //Case XL and XC
    s = s.replace(/XL/g,'XXXX').replace(/XC/g, "LXXXX")
    //Case CD and CM
    s = s.replace(/CD/g,'CCCC').replace(/CM/g,'DCCCC')
    for (var i = 0; i < s.length; i++){
        number+= translations[s.charAt(i)]
    }
    console.log(number)
    return number
};

romanToInt("MCMXCIV")