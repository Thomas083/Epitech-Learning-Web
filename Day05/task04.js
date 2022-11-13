module.exports = {
    fizzBuzz : function(num) {
        res = ""
        for (var i = 1; i <= num; i++) {
            switch (true) {
                case i%3 == 0 && i%5 == 0:
                    res+="FizzBuzz";
                    break;
                case i%3 == 0:
                    res+="Fizz";
                    break;
                case i%5 == 0:
                    res+="Buzz";
                    break;
                default:
                    res+=i;
            }
            if(i != num) {
                res+=", "
            }
            // if (i % 3 == 0 && i % 5 == 0) {
            //     console.log("FizzBuzz")
            // } else if (i % 3 == 0) {
            //     console.log("Fizz")
            // }
            // else if (i % 5 == 0) {
            //     console.log("Buzz")
            // }
            // else {
            //     console.log(i)
            // }
        }
        console.log(res)
    }
}