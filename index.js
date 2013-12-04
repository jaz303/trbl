// [a] => [a,a,a,a]
// [a,b] => [a,b,a,b]
// [a,b,c] => [a,b,c,b]
// [a,b,c,d] => [a,b,c,d]
// a => [(int)a, (int)a, (int)a, (int)a]
module.exports = function(thing) {
    if (Array.isArray(thing)) {
        switch (thing.length) {
            case 1:
                return [
                    hk.parseInt(thing[0], 10),
                    hk.parseInt(thing[0], 10),
                    hk.parseInt(thing[0], 10),
                    hk.parseInt(thing[0], 10)
                ];
            case 2:
                return [
                    hk.parseInt(thing[0], 10),
                    hk.parseInt(thing[1], 10),
                    hk.parseInt(thing[0], 10),
                    hk.parseInt(thing[1], 10)
                ];
            case 3:
                return [
                    hk.parseInt(thing[0], 10),
                    hk.parseInt(thing[1], 10),
                    hk.parseInt(thing[2], 10),
                    hk.parseInt(thing[1], 10)
                ];
            case 4:
                return [
                    hk.parseInt(thing[0], 10),
                    hk.parseInt(thing[1], 10),
                    hk.parseInt(thing[2], 10),
                    hk.parseInt(thing[3], 10)
                ];
            default:
                throw new Error("trbl - array must have 1-4 elements");
        }
    } else {
        var val = hk.parseInt(thing);
        return [val, val, val, val];
    }
}