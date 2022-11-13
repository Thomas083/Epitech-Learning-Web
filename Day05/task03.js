module.exports = {
    countGs : function(str) {
        var count = 0
        for(var i = 0; i < str.length; i++) {
            if(str[i] == "G") {
                count++
            }
        }
        return count;
    }
}