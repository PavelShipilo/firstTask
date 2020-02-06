let expr, res;

while (true) {
  expr = prompt("Введите выражение?", '');
  if (expr == null) break;

  try {
    res = eval(expr);
    if (!isFinite(res)) {
      throw new Error("На ноль делить нельзя");
    }

    break;
  } catch (e) {
    alert( e.message );
  }
}

alert( res );