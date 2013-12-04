# trbl

Expand component arrays to `[top, right, bottom, left]`, in accordance with CSS rules. That is:

    [a] => [a, a, a, a]
    [a, b] => [a, b, a, b]
    [a, b, c] => [a, b, c, b]
    [a, b, c, d] => [a, b, c, d]

For convenience, a scalar argument is also supported:

    a => [(int)a, (int)a, (int)a, (int)a]