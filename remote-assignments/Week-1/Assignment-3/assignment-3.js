function countAandB(input){
    /* count how many ‘a’ and ‘b’ letters in the given input and return the total number. */
    var count_total = 0, count_a=0, count_b=0;
    for(var i=0; i<=input.length; i++){
        if (input[i] == 'a'){
            count_a += 1;
        }else if(input[i] == 'b'){
            count_b += 1;
        }
    }
    count_total = count_a + count_b

    return count_total
}

function toNumber(input){
    /* convert English letter to number, let ‘a’ to be 1, ‘b’ to be 2 and so on. */
    var tmp_ls = [];
    for(var i=0; i<input.length; i++){
        code = (input[i].charCodeAt(0)) - 96;
        tmp_ls.push(code)
    }
    return tmp_ls;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1));
console.log(toNumber(input1))

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2));
console.log(toNumber(input2))