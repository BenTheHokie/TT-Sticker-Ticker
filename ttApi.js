var a = / Preparing message /i;
for (var b in turntable) {
    var c = turntable[b];
    if (typeof c !== "function") {
        continue
    }
    c.toString = Function.prototype.toString;
    if (a.test(c.toString())) {
        var ttApi = c;
    }
}