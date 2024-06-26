function shiftFn(e) {
    var n = document.getElementById("shiftBtn"),
        t = document.getElementsByTagName("td");
    1 == e ? (n.setAttribute("onclick", "shiftFn(0)"), n.style.backgroundColor = "orange", t[2].innerHTML = "sin<sup>-1</sup><span style='font-size:12px;display: block;font-weight:normal'>(arcsin)</span>", t[2].setAttribute("onclick", "trigo1('sin')"), t[3].innerHTML = "cos<sup>-1</sup><span style='font-size:12px;display: block;font-weight:normal'>(arccos)</span>", t[3].setAttribute("onclick", "trigo1('cos')"), t[4].innerHTML = "tan<sup>-1</sup><span style='font-size:12px;display: block;font-weight:normal'>(arctan)</span>", t[4].setAttribute("onclick", "trigo1('tan')"), t[5].innerHTML = "!", t[5].setAttribute("onclick", "input('!')"), t[6].innerHTML = "³√<span style='font-size:12px;display: block;font-weight:normal'>" + lang_cbrt + "</span>", t[6].setAttribute("onclick", "cbrt()"), t[7].innerHTML = "<span style='font-size:18px'>csc</span>", t[7].setAttribute("onclick", "csc()"), t[10].innerHTML = "ln", t[10].setAttribute("onclick", "log(0)"), t[8].innerHTML = "<span style='font-size:18px'>sec</span>", t[8].setAttribute("onclick", "sec()"), t[9].innerHTML = "<span style='font-size:18px'>cot</span", t[9].setAttribute("onclick", "cot()"), t[15].innerHTML = "e<sup>x</sup>", t[15].setAttribute("onclick", "exp()")) : (n.setAttribute("onclick", "shiftFn(1)"), n.style.backgroundColor = "#ffe000", t[2].innerHTML = "sin", t[2].setAttribute("onclick", "trigo('sin')"), t[3].innerHTML = "cos", t[3].setAttribute("onclick", "trigo('cos')"), t[4].innerHTML = "tan", t[4].setAttribute("onclick", "trigo('tan')"), t[5].innerHTML = "%", t[5].setAttribute("onclick", "per()"), t[6].innerHTML = "^<span style='font-size:12px;display: block;font-weight:normal'>" + lang_exp + "</span>", t[6].setAttribute("onclick", "pow()"), t[7].innerHTML = "<span style='font-size:20px;padding:6px 0 0 0;line-height:18px'>√</span><span style='font-size:12px;display: block;font-weight:normal'>" + lang_sqrt + "</span>", t[7].setAttribute("onclick", "sqrt()"), t[10].innerHTML = "log", t[10].setAttribute("onclick", "log(1)"), t[8].innerHTML = "π", t[8].setAttribute("onclick", "piOrE('pi')"), t[9].innerHTML = "<span style='font-size:20px'>e</span><span style='font-size:12px;display: block;font-weight:normal'>euler</span>", t[9].setAttribute("onclick", "piOrE('e')"), t[15].innerHTML = "<span style='font-size:18px'>AC</span>", t[15].setAttribute("onclick", "ac()"))
}

function input(e) {
    var n = document.getElementById("result"),
        t = document.getElementById("myPara");
    "+" == e || "-" == e ? (n.value += e, t.innerHTML += e) : isFinite(e) && ")" == t.innerHTML.slice(-1) || "E" == t.innerHTML.slice(-1) && ")" != e || "I" == t.innerHTML.slice(-1) && ")" != e || "1 " == (isFinite(e) && t.innerHTML.slice(-2)) ? (n.value += e, t.innerHTML += "*   " + e) : (n.value += e, t.innerHTML += e)
}

function minx() {
    var e = document.getElementById("result"),
    n = document.getElementById("myPara");
    if (n.innerHTML == "") e.value += "-", n.innerHTML += "-1 * ";
    else if (n.innerHTML.endsWith("/") || n.innerHTML.endsWith("+") || n.innerHTML.endsWith("*") || n.innerHTML.endsWith("-")) e.value += "(-", n.innerHTML += "(-1 * ";
    else (e.value += "-", n.innerHTML += "-");
}

function factorial(e) {
    if (Number.isInteger(e)) return e < 2 ? 1 : e * factorial(e - 1)
}

function sqrt() {
    var e = document.getElementById("result"),
        n = document.getElementById("myPara");
    "1 " == n.innerHTML.slice(-2) && (n.innerHTML += "  *  "), e.value += "√(", n.innerHTML += /[\d)IE]/.test(n.innerHTML.slice(-1)) ? " * Math.sqrt(" : "Math.sqrt("
}

function pow() {
    var e = document.getElementById("result"),
        n = document.getElementById("myPara");
    e.value += "^", n.innerHTML += "** "
}

function cbrt() {
    var e = document.getElementById("result"),
        n = document.getElementById("myPara");
    "1 " == n.innerHTML.slice(-2) && (n.innerHTML += "  *  "), e.value += " ³√(", n.innerHTML += /[\d)IE]/.test(n.innerHTML.slice(-1)) ? " * Math.cbrt(" : "Math.cbrt("
}

function exp() {
    var e = document.getElementById("result"),
        n = document.getElementById("myPara");
    "1 " == n.innerHTML.slice(-2) && (n.innerHTML += "  *  "), e.value += "exp(", n.innerHTML += /[\d)IE]/.test(n.innerHTML.slice(-1)) ? " * Math.exp(" : "Math.exp("
}

function csc() {
    var e = document.getElementById("result"),
        n = document.getElementById("myPara");
    "1 " == n.innerHTML.slice(-2) && (n.innerHTML += "  *  "), e.value += "csc(", n.innerHTML += /[\d)IE]/.test(n.innerHTML.slice(-1)) ? " * 1 / Math.sin(1 *  " : "1 / Math.sin(1 *  "
}

function sec() {
    var e = document.getElementById("result"),
        n = document.getElementById("myPara");
    "1 " == n.innerHTML.slice(-2) && (n.innerHTML += "  *  "), e.value += "sec(", n.innerHTML += /[\d)IE]/.test(n.innerHTML.slice(-1)) ? " * 1 / Math.cos(1 *  " : "1 / Math.cos(1 *  "
}

function cot() {
    var e = document.getElementById("result"),
        n = document.getElementById("myPara");
    "1 " == n.innerHTML.slice(-2) && (n.innerHTML += "  *  "), e.value += "cot(", n.innerHTML += /[\d)IE]/.test(n.innerHTML.slice(-1)) ? " * 1 / Math.tan(1 *  " : "1 / Math.tan(1 *  "
}

function leftParen() {
    var e = document.getElementById("result"),
        n = document.getElementById("myPara");
    "1 " == n.innerHTML.slice(-2) && (n.innerHTML += "  *  "), e.value += "(", n.innerHTML += /[\d)IE]/.test(n.innerHTML.slice(-1)) ? "  *  (" : "("
}

function per() {
    var e = document.getElementById("result"),
        n = document.getElementById("myPara");
    e.value += "%", n.innerHTML += (/[\d)IE]/.test(n.innerHTML.slice(-1)), " * 0.01 ")
}

function piOrE(e) {
    var n = document.getElementById("result"),
        t = document.getElementById("myPara");
    "1 " == t.innerHTML.slice(-2) && (t.innerHTML += "  *  "), "pi" == e ? (n.value += "π", t.innerHTML += /[\d)IE]/.test(t.innerHTML.slice(-1)) ? " *Math.PI" : "Math.PI") : (n.value += "e", t.innerHTML += /[\d)IE]/.test(t.innerHTML.slice(-1)) ? " *Math.E" : "Math.E")
}

function log(e) {
    var n = document.getElementById("result"),
        t = document.getElementById("myPara");
    "1 " == t.innerHTML.slice(-2) && (t.innerHTML += "  *  "), 1 == e ? (n.value += "log(", t.innerHTML += /[\d)IE]/.test(t.innerHTML.slice(-1)) ? " * Math.log10(" : "Math.log10(") : (n.value += "ln(", t.innerHTML += /[\d)IE]/.test(t.innerHTML.slice(-1)) ? " * Math.log(" : "Math.log(")
}

function trigo(e) {
    var n = document.getElementById("result"),
        t = document.getElementById("myPara");
    "1 " == t.innerHTML.slice(-2) && (t.innerHTML += "  *  "), n.value += e + "(", t.innerHTML += /[\d)IE]/.test(t.innerHTML.slice(-1)) ? " * Math." + e + "(1 * " : "Math." + e + "(1 * "
}

function trigo1(e) {
    var n = document.getElementById("result"),
        t = document.getElementById("myPara");
    "1 " == t.innerHTML.slice(-2) && (t.innerHTML += "  *  "), n.value += e + "⁻¹(", t.innerHTML += /[\d)IE]/.test(t.innerHTML.slice(-1)) ? " * 1 * Math.a" + e + "(" : "1 * Math.a" + e + "("
}

function multOrDiv(e) {
    var n = document.getElementById("result"),
        t = document.getElementById("myPara");
    "mult" == e ? (n.value += "×", t.innerHTML += "*") : (n.value += "÷", t.innerHTML += "/")
}

function del() {
    var e = document.getElementById("result"),
        n = document.getElementById("myPara");
    if (lang_inv == e.value || lang_inf == e.value || lang_infm == e.value) ac();
    else if (isFinite(n.innerHTML.slice(-1)) && "*   " == n.innerHTML.slice(-5, -1)) n.innerHTML = n.innerHTML.slice(0, -5), e.value = e.value.slice(0, -1);
    else if (" *Math.PI" == n.innerHTML.slice(-9)) n.innerHTML = n.innerHTML.slice(0, -9), e.value = e.value.slice(0, -1);
    else if ("Math.PI" == n.innerHTML.slice(-7)) n.innerHTML = n.innerHTML.slice(0, -7), e.value = e.value.slice(0, -1);
    else if (" *Math.E" == n.innerHTML.slice(-8)) n.innerHTML = n.innerHTML.slice(0, -8), e.value = e.value.slice(0, -1);
    else if ("Math.E" == n.innerHTML.slice(-6)) n.innerHTML = n.innerHTML.slice(0, -6), e.value = e.value.slice(0, -1);
    else if ("-1 * " == n.innerHTML.slice(-5)) n.innerHTML = n.innerHTML.slice(0, -5), e.value = e.value.slice(0, -1);
    else if (" ³√(" == e.value.slice(-4)) "π" == e.value.slice(-5, -4) || "e" == e.value.slice(-5, -4) ? (n.innerHTML = n.innerHTML.slice(0, -13), e.value = e.value.slice(0, -4)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-5, -4)) ? n.innerHTML.slice(0, -13) : n.innerHTML.slice(0, -10), e.value = e.value.slice(0, -4));
    else if ("√(" == e.value.slice(-2)) "π" == e.value.slice(-3, -2) || "e" == e.value.slice(-3, -2) ? (n.innerHTML = n.innerHTML.slice(0, -13), e.value = e.value.slice(0, -2)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-3, -2)) ? n.innerHTML.slice(0, -13) : n.innerHTML.slice(0, -10), e.value = e.value.slice(0, -2));
    else if ("** " == n.innerHTML.slice(-3)) n.innerHTML = n.innerHTML.slice(0, -3), e.value = e.value.slice(0, -1);
    else if ("1" == e.value.length) ac();
    else switch (n.innerHTML.slice(-2)) {
        case "* ":
            "π" == e.value.slice(-5, -4) || "e" == e.value.slice(-5, -4) ? (n.innerHTML = n.innerHTML.slice(0, -16), e.value = e.value.slice(0, -4)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-5, -4)) ? n.innerHTML.slice(0, -16) : n.innerHTML.slice(0, -13), e.value = e.value.slice(0, -4));
            break;
        case "n(":
        case "s(":
            "π" == e.value.slice(-7, -6) || "e" == e.value.slice(-7, -6) ? (n.innerHTML = n.innerHTML.slice(0, -17), e.value = e.value.slice(0, -6)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-7, -6)) ? n.innerHTML.slice(0, -17) : n.innerHTML.slice(0, -14), e.value = e.value.slice(0, -6));
            break;
        case "0(":
            "π" == e.value.slice(-5, -4) || "e" == e.value.slice(-5, -4) ? (n.innerHTML = n.innerHTML.slice(0, -14), e.value = e.value.slice(0, -4)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-5, -4)) ? n.innerHTML.slice(0, -14) : n.innerHTML.slice(0, -11), e.value = e.value.slice(0, -4));
            break;
        case "g(":
            "π" == e.value.slice(-4, -3) || "e" == e.value.slice(-4, -3) ? (n.innerHTML = n.innerHTML.slice(0, -12), e.value = e.value.slice(0, -3)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-4, -3)) ? n.innerHTML.slice(0, -12) : n.innerHTML.slice(0, -9), e.value = e.value.slice(0, -3));
            break;
        case "  ":
            "π" == e.value.slice(-5, -4) || "e" == e.value.slice(-5, -4) ? (n.innerHTML = n.innerHTML.slice(0, -21), e.value = e.value.slice(0, -4)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-5, -4)) ? n.innerHTML.slice(0, -21) : n.innerHTML.slice(0, -18), e.value = e.value.slice(0, -4));
            break;
        case "1 ":
            n.innerHTML = (/[\d)IE]/.test(e.value.slice(0, -1)), n.innerHTML.slice(0, -8)), e.value = e.value.slice(0, -1);
            break;
        case "p(":
            "π" == e.value.slice(-5, -4) || "e" == e.value.slice(-5, -4) ? (n.innerHTML = n.innerHTML.slice(0, -12), e.value = e.value.slice(0, -4)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-5, -4)) ? n.innerHTML.slice(0, -12) : n.innerHTML.slice(0, -9), e.value = e.value.slice(0, -4));
            break;
        default:
            n.innerHTML = n.innerHTML.slice(0, -1), e.value = e.value.slice(0, -1)
    }
    "  *  " == n.innerHTML.slice(-5) && (n.innerHTML = n.innerHTML.slice(0, -5))
}

function ac() {
    var e = document.getElementById("result"),
        n = document.getElementById("myPara");
    w = document.getElementById("calculate"), e.value = n.innerHTML = w.innerHTML = ""
}

function equal() {
    v = document.getElementById("myPara").value, w = document.getElementById("calculate"), w.innerHTML = document.getElementById("result").value, u = document.getElementById("error"), u.innerHTML = document.getElementById("myPara").innerHTML, t = document.getElementById("history"), t.innerHTML += "\n" + document.getElementById("result").value;
    for (var x = document.getElementById("result"), y = document.getElementById("myPara"), i = 0; i < x.value.split("(").length - x.value.split(")").length; i++) y.innerHTML += ")";
    try {
        "" != y.innerHTML && (y.innerHTML = parseFloat(eval(y.innerHTML.replace(/(\d+\.?\d*)\!/g, "factorial($1)").replace(/(\(?[^(]*\)?)\^(\(?.*\)?)/, "Math.pow($1, $2)")).toFixed(12))), "16331239353195370" == y.innerHTML ? (y.innerHTML = "Infinity", x.value = lang_inf) : ("-16331239353195370" == y.innerHTML || -1 * Infinity == y.innerHTML) ? (y.innerHTML = "-Infinity", x.value = lang_infm) : isFinite(x.value = y.innerHTML) || (x.value = lang_inv)
    } catch (e) {
        console.error(e instanceof SyntaxError), e instanceof SyntaxError && (w.innerHTML = lang_error, y.innerHTML = u.innerHTML)
    }
    t.innerHTML += "<span style='color: blue'><strong> = </strong></span><a href='javascript:inputx(" + x.value + ")'>" + x.value + "</a>";
    if (Number(y.innerHTML) < 0) y.innerHTML = "-1 * " + y.innerHTML.substring(1);
}