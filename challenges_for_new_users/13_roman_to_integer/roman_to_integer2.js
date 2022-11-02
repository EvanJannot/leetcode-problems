var romanToInt = function(s) {
    num_output = 0
    next_char = ''
    char= ''
    for (var i = 0; i < s.length; i++){
        old_char = s.charAt(i-1)
        char = s.charAt(i)
        next_char = s.charAt(i+1)
        // Cas ou on fait +1
        if (char == "I" & next_char != "V" & next_char != "X"){
            num_output+=1}
        //Cas ou on fait +4
        if (char == "I" & next_char == "V"){
            num_output+=4}
        //Cas ou on fait +9
        if (char == "I" & next_char == "X"){
            num_output+=9}
        //Cas ou on fait +5
        if (char == "V" & old_char != "I"){
            num_output+=5}      
        //Cas ou on fait +10  
        if (char == "X" & old_char != "I" & next_char != "L" & next_char != "C"){
            num_output+=10}
        //Cas ou on fait +40
        if (char == "X" & next_char == "L"){
            num_output+=40}
        //Cas ou on fait +90
        if (char == "X" & next_char == "C"){
            num_output+=90}
        //Cas ou on fait +50
        if (char == "L" & old_char != "X"){
            num_output+=50}
        //Cas ou on fait +100
        if (char == "C" & old_char != "X" & next_char != "D" & next_char != "M"){
            num_output+=100}
        //Cas ou on fait +400
        if (char == "C" & next_char == "D"){
            num_output+=400}
        //Cas ou on fait +900
        if (char == "C" & next_char == "M"){
            num_output+=900}
        //Cas ou on fait +500
        if (char == "D" & old_char != "C"){
            num_output+=500}
        //Cas ou on fait +1000
        if (char == "M" & old_char != "C"){
            num_output+=1000}
    }
    console.log(num_output)
};

romanToInt("MCMXCIV")