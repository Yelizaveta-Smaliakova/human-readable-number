module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    else {
        let n = [];
        let str = "";

        while (number != 0) {
            n.push(number % 1000);
            number = Math.trunc(number / 1000);
        }

        for (let i = n.length - 1; i >= 0; i--) {
            if (n[i] >= 100) {
                str += ZeroToNine[Math.trunc(n[i] / 100)] + " hundred";
                n[i] %= 100;
            }

            if (n[i] >= 10) {
                if (n[i] >= 20) {
                    str += " " + TwentyToNinety[Math.trunc(n[i] / 10)];
                    n[i] %= 10;
                }
                else {
                    str += " " + TenToNineteen[n[i] % 10];
                    n[i] = 0;
                }
            }

            str += " " + ZeroToNine[n[i]];

            str += BigNumbers[i];
        }
        if (str[str.length - 1] === " ") str = str.slice(0, str.length - 1);
        if (str[0] === " ") str = str.slice(1, str.length);
        return str;
    }
}

let ZeroToNine = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
};

let TenToNineteen = {
    0: "ten",
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen"
};

let TwentyToNinety = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
};

let BigNumbers = {
    0: "",
    1: " thousand ",
    2: " million ",
    3: " billion ",
    4: " trillion "
};
