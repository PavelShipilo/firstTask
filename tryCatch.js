do {
  this.expr = prompt("Введите выражение?", '');

  try {
    res = eval(expr);
    if (!isFinite(res)) {
      throw new Error("На ноль делить нельзя");
    }

    break;
  } catch (e) {
    alert(e.message);
  }
} while (expr != null);

alert(res);
