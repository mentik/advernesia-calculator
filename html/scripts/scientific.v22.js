function shiftFn(e) {
  var n = document.getElementById("shiftBtn"),
    i = document.getElementsByTagName("td");
  1 == e ? (n.setAttribute("onclick", "shiftFn(0)"), n.style.backgroundColor = "orange", i[2].innerHTML = "sin<sup>-1</sup><span style='font-size:12px;display: block;font-weight:normal'>(arcsin)</span>", i[2].setAttribute("onclick", "trigo1('sin')"), i[3].innerHTML = "cos<sup>-1</sup><span style='font-size:12px;display: block;font-weight:normal'>(arccos)</span>", i[3].setAttribute("onclick", "trigo1('cos')"), i[4].innerHTML = "tan<sup>-1</sup><span style='font-size:12px;display: block;font-weight:normal'>(arctan)</span>", i[4].setAttribute("onclick", "trigo1('tan')"), i[5].innerHTML = "!", i[5].setAttribute("onclick", "input('!')"), i[6].innerHTML = "³√<span style='font-size:12px;display: block;font-weight:normal'>" + lang_cbrt + "</span>", i[6].setAttribute("onclick", "cbrt()"), i[7].innerHTML = "<span style='font-size:18px'>csc</span>", i[7].setAttribute("onclick", "csc()"), i[10].innerHTML = "ln", i[10].setAttribute("onclick", "log(0)"), i[8].innerHTML = "<span style='font-size:18px'>sec</span>", i[8].setAttribute("onclick", "sec()"), i[9].innerHTML = "<span style='font-size:18px'>cot</span", i[9].setAttribute("onclick", "cot()"), i[15].innerHTML = "e<sup>x</sup>", i[15].setAttribute("onclick", "exp()")) : (n.setAttribute("onclick", "shiftFn(1)"), n.style.backgroundColor = "#ffe000", i[2].innerHTML = "sin", i[2].setAttribute("onclick", "trigo('sin')"), i[3].innerHTML = "cos", i[3].setAttribute("onclick", "trigo('cos')"), i[4].innerHTML = "tan", i[4].setAttribute("onclick", "trigo('tan')"), i[5].innerHTML = "%", i[5].setAttribute("onclick", "per()"), i[6].innerHTML = "^<span style='font-size:12px;display: block;font-weight:normal'>" + lang_exp + "</span>", i[6].setAttribute("onclick", "pow()"), i[7].innerHTML = "<span style='font-size:20px;padding:6px 0 0 0;line-height:18px'>√</span><span style='font-size:12px;display: block;font-weight:normal'>" + lang_sqrt + "</span>", i[7].setAttribute("onclick", "sqrt()"), i[10].innerHTML = "log", i[10].setAttribute("onclick", "log(1)"), i[8].innerHTML = "π", i[8].setAttribute("onclick", "piOrE('pi')"), i[9].innerHTML = "<span style='font-size:20px'>e</span><span style='font-size:12px;display: block;font-weight:normal'>euler</span>", i[9].setAttribute("onclick", "piOrE('e')"), i[15].innerHTML = "<span style='font-size:18px'>AC</span>", i[15].setAttribute("onclick", "ac()"))
}

function input(e) {
  var n = document.getElementById("result"),
    i = document.getElementById("myPara");
  "+" == e || "-" == e ? (n.value += e, i.innerHTML += e) : isFinite(e) && ")" == i.innerHTML.slice(-1) || "E" == i.innerHTML.slice(-1) && ")" != e || "I" == i.innerHTML.slice(-1) && ")" != e || "1 " == (isFinite(e) && i.innerHTML.slice(-2)) ? (n.value += e, i.innerHTML += "*   " + e) : (n.value += e, i.innerHTML += e)
}

function minx() {
  var e = document.getElementById("result"),
    n = document.getElementById("myPara");
  "" == n.innerHTML ? (e.value += "-", n.innerHTML += "-1 * ") : n.innerHTML.endsWith("/") || n.innerHTML.endsWith("+") || n.innerHTML.endsWith("*") || n.innerHTML.endsWith("-") ? (e.value += "(-", n.innerHTML += "(-1 * ") : (e.value += "-", n.innerHTML += "-")
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
  "1 " == n.innerHTML.slice(-2) && (n.innerHTML += "  *  "), e.value += "csc(", n.innerHTML += /[\d)IE]/.test(n.innerHTML.slice(-1)) ? " * 1 / Math.sin(Math.PI / 180 *  " : "1 / Math.sin(Math.PI / 180 *  "
}

function sec() {
  var e = document.getElementById("result"),
    n = document.getElementById("myPara");
  "1 " == n.innerHTML.slice(-2) && (n.innerHTML += "  *  "), e.value += "sec(", n.innerHTML += /[\d)IE]/.test(n.innerHTML.slice(-1)) ? " * 1 / Math.cos(Math.PI / 180 *  " : "1 / Math.cos(Math.PI / 180 *  "
}

function cot() {
  var e = document.getElementById("result"),
    n = document.getElementById("myPara");
  "1 " == n.innerHTML.slice(-2) && (n.innerHTML += "  *  "), e.value += "cot(", n.innerHTML += /[\d)IE]/.test(n.innerHTML.slice(-1)) ? " * 1 / Math.tan(Math.PI / 180 *  " : "1 / Math.tan(Math.PI / 180 *  "
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
    i = document.getElementById("myPara");
  "1 " == i.innerHTML.slice(-2) && (i.innerHTML += "  *  "), "pi" == e ? (n.value += "π", i.innerHTML += /[\d)IE]/.test(i.innerHTML.slice(-1)) ? " *Math.PI" : "Math.PI") : (n.value += "e", i.innerHTML += /[\d)IE]/.test(i.innerHTML.slice(-1)) ? " *Math.E" : "Math.E")
}

function log(e) {
  var n = document.getElementById("result"),
    i = document.getElementById("myPara");
  "1 " == i.innerHTML.slice(-2) && (i.innerHTML += "  *  "), 1 == e ? (n.value += "log(", i.innerHTML += /[\d)IE]/.test(i.innerHTML.slice(-1)) ? " * Math.log10(" : "Math.log10(") : (n.value += "ln(", i.innerHTML += /[\d)IE]/.test(i.innerHTML.slice(-1)) ? " * Math.log(" : "Math.log(")
}

function trigo(e) {
  var n = document.getElementById("result"),
    i = document.getElementById("myPara");
  "1 " == i.innerHTML.slice(-2) && (i.innerHTML += "  *  "), n.value += e + "(", i.innerHTML += /[\d)IE]/.test(i.innerHTML.slice(-1)) ? " * Math." + e + "(Math.PI / 180 * " : "Math." + e + "(Math.PI / 180 * "
}

function trigo1(e) {
  var n = document.getElementById("result"),
    i = document.getElementById("myPara");
  "1 " == i.innerHTML.slice(-2) && (i.innerHTML += "  *  "), n.value += e + "⁻¹(", i.innerHTML += /[\d)IE]/.test(i.innerHTML.slice(-1)) ? " * 180 / Math.PI * Math.a" + e + "(" : "180 / Math.PI * Math.a" + e + "("
}

function multOrDiv(e) {
  var n = document.getElementById("result"),
    i = document.getElementById("myPara");
  "mult" == e ? (n.value += "×", i.innerHTML += "*") : (n.value += "÷", i.innerHTML += "/")
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
      "π" == e.value.slice(-5, -4) || "e" == e.value.slice(-5, -4) ? (n.innerHTML = n.innerHTML.slice(0, -28), e.value = e.value.slice(0, -4)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-5, -4)) ? n.innerHTML.slice(0, -28) : n.innerHTML.slice(0, -25), e.value = e.value.slice(0, -4));
      break;
    case "n(":
    case "s(":
      "π" == e.value.slice(-7, -6) || "e" == e.value.slice(-7, -6) ? (n.innerHTML = n.innerHTML.slice(0, -29), e.value = e.value.slice(0, -6)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-7, -6)) ? n.innerHTML.slice(0, -29) : n.innerHTML.slice(0, -26), e.value = e.value.slice(0, -6));
      break;
    case "0(":
      "π" == e.value.slice(-5, -4) || "e" == e.value.slice(-5, -4) ? (n.innerHTML = n.innerHTML.slice(0, -14), e.value = e.value.slice(0, -4)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-5, -4)) ? n.innerHTML.slice(0, -14) : n.innerHTML.slice(0, -11), e.value = e.value.slice(0, -4));
      break;
    case "g(":
      "π" == e.value.slice(-4, -3) || "e" == e.value.slice(-4, -3) ? (n.innerHTML = n.innerHTML.slice(0, -12), e.value = e.value.slice(0, -3)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-4, -3)) ? n.innerHTML.slice(0, -12) : n.innerHTML.slice(0, -9), e.value = e.value.slice(0, -3));
      break;
    case "  ":
      "π" == e.value.slice(-5, -4) || "e" == e.value.slice(-5, -4) ? (n.innerHTML = n.innerHTML.slice(0, -33), e.value = e.value.slice(0, -4)) : (n.innerHTML = /[\d)IE]/.test(e.value.slice(-5, -4)) ? n.innerHTML.slice(0, -33) : n.innerHTML.slice(0, -30), e.value = e.value.slice(0, -4));
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
    "" != y.innerHTML && (y.innerHTML = parseFloat(eval(y.innerHTML.replace(/(\d+\.?\d*)\!/g, "factorial($1)").replace(/(\(?[^(]*\)?)\^(\(?.*\)?)/, "Math.pow($1, $2)")).toFixed(12))), "16331239353195370" == y.innerHTML ? (y.innerHTML = "Infinity", x.value = lang_inf) : "-16331239353195370" == y.innerHTML || -1 / 0 == y.innerHTML ? (y.innerHTML = "-Infinity", x.value = lang_infm) : isFinite(x.value = y.innerHTML) || (x.value = lang_inv)
  } catch (e) {
    console.error(e instanceof SyntaxError), e instanceof SyntaxError && (w.innerHTML = lang_error, y.innerHTML = u.innerHTML)
  }
  t.innerHTML += "<span style='color: blue'><strong> = </strong></span><a href='javascript:inputx(" + x.value + ")'>" + x.value + "</a>", Number(y.innerHTML) < 0 && (y.innerHTML = "-1 * " + y.innerHTML.substring(1))
}