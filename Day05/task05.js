module.exports = {
    range : function(start, end, step) {
        res = []
        if (step == undefined) {
            step = 1
        }

        if (typeof(step) !== "number" || typeof(start) !== "number" || typeof(end) !== "number") {
            return false
        }

        
        if (start < end) {
            for(var i = start; i <= end; i += step) {
                res.push(i)
            }
        }
        else {
            for(var i = start; i >= end; i += step) {
                res.push(i)
            }
        }
        return res
    }
}