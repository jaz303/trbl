var trbl = require('../');

function test(i, o) {
    var r = trbl(i);

    function fail() {
        process.exit(1);
    }

    if (r[0] !== o[0]) fail();
    if (r[1] !== o[1]) fail();
    if (r[2] !== o[2]) fail();
    if (r[3] !== o[3]) fail();
}

test([1], [1,1,1,1]);
test([1,2], [1,2,1,2]);
test([1,2,3], [1,2,3,2]);
test([1,2,3,4], [1,2,3,4]);
test("10", [10,10,10,10]);