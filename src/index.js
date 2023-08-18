const NUMBER = {
    0:'zero',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    14:'fourteen',
    15:'fifteen',
    16:'sixteen',
    17:'seventeen',
    18:'eighteen',
    19:'nineteen',
    20:'twenty',
    30:'thirty',
    40:'forty',
    50:'fifty',
    60:'sixty',
    70:'seventy',
    80:'eighty',
    90:'ninety'
}

module.exports = function toReadable (number) {
    answer = []
    if (number.toString().length == 3) {
        answer.push(NUMBER[Math.floor(number/100)])
        answer.push('hundred')
        if (number%100 == 0){
            return answer.join(' ')
        }
    }
    if (number%10 == 0 || number%100 < 20) {
        answer.push(NUMBER[number%100])
    } else {
        answer.push(NUMBER[Math.floor(number%100/10)*10])
        answer.push(NUMBER[number%10])
    }
    return answer.join(' ')
}
