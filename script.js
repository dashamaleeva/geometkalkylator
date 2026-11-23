var currentShape = "square";

var shapes = [
  {
    id: "square",
    type: "flat",
    name: "Квадрат",
    svg: '<svg width="105" height="105" viewBox="0 0 110 110"><rect x="20" y="16" width="64" height="64" fill="#d9f0fc" stroke="#2389c9" stroke-width="1.8"/><text x="10" y="52" font-size="12" fill="#0d4f8b" font-weight="bold">a</text><text x="50" y="95" font-size="12" fill="#0d4f8b" font-weight="bold">a</text></svg>',
    formulas: '<div>Периметр: <b>P = 4a</b></div><div>Площадь: <b>S = a²</b></div><div class="legend">a — сторона</div>',
    fields: [{ id: "a", text: "Введите сторону a:" }]
  },
  {
    id: "rectangle",
    type: "flat",
    name: "Прямоугольник",
    svg: '<svg width="115" height="105" viewBox="0 0 120 105"><rect x="16" y="22" width="84" height="52" fill="#d9f0fc" stroke="#2389c9" stroke-width="1.8"/><text x="6" y="52" font-size="12" fill="#0d4f8b" font-weight="bold">a</text><text x="55" y="88" font-size="12" fill="#0d4f8b" font-weight="bold">b</text></svg>',
    formulas: '<div>Периметр: <b>P = 2(a + b)</b></div><div>Площадь: <b>S = a · b</b></div><div class="legend">a, b — стороны</div>',
    fields: [
      { id: "a", text: "Введите сторону a:" },
      { id: "b", text: "Введите сторону b:" }
    ]
  },
  {
    id: "triangle",
    type: "flat",
    name: "Треугольник",
    svg: '<svg width="115" height="105" viewBox="0 0 120 105"><polygon points="56,14 18,84 98,84" fill="#d9f0fc" stroke="#2389c9" stroke-width="1.8"/><line x1="56" y1="14" x2="56" y2="84" stroke="#2ea86b" stroke-width="1.3" stroke-dasharray="3"/><text x="26" y="48" font-size="12" fill="#0d4f8b" font-weight="bold">a</text><text x="82" y="48" font-size="12" fill="#0d4f8b" font-weight="bold">b</text><text x="55" y="98" font-size="12" fill="#0d4f8b" font-weight="bold">c</text><text x="60" y="58" font-size="12" fill="#0d4f8b" font-weight="bold">h</text></svg>',
    formulas: '<div>Периметр: <b>P = a + b + c</b></div><div>Площадь: <b>S = ½ · c · h</b></div><div class="legend">a, b, c — стороны, h — высота</div>',
    fields: [
      { id: "a", text: "Сторона a:" },
      { id: "b", text: "Сторона b:" },
      { id: "c", text: "Основание c:" },
      { id: "h", text: "Высота h:" }
    ]
  },
  {
    id: "parallelogram",
    type: "flat",
    name: "Параллелограмм",
    svg: '<svg width="120" height="105" viewBox="0 0 125 105"><polygon points="36,22 108,22 88,78 16,78" fill="#d9f0fc" stroke="#2389c9" stroke-width="1.8"/><line x1="36" y1="22" x2="36" y2="78" stroke="#2ea86b" stroke-width="1.3" stroke-dasharray="3"/><text x="41" y="54" font-size="12" fill="#0d4f8b" font-weight="bold">h</text><text x="52" y="92" font-size="12" fill="#0d4f8b" font-weight="bold">a</text><text x="15" y="50" font-size="12" fill="#0d4f8b" font-weight="bold">b</text></svg>',
    formulas: '<div>Периметр: <b>P = 2(a + b)</b></div><div>Площадь: <b>S = a · h</b></div><div class="legend">a, b — стороны, h — высота</div>',
    fields: [
      { id: "a", text: "Основание a:" },
      { id: "b", text: "Боковая сторона b:" },
      { id: "h", text: "Высота h:" }
    ]
  },
  {
    id: "trapezoid",
    type: "flat",
    name: "Трапеция",
    svg: '<svg width="120" height="105" viewBox="0 0 125 105"><polygon points="36,22 84,22 106,78 14,78" fill="#d9f0fc" stroke="#2389c9" stroke-width="1.8"/><line x1="36" y1="22" x2="36" y2="78" stroke="#2ea86b" stroke-width="1.3" stroke-dasharray="3"/><text x="57" y="16" font-size="12" fill="#0d4f8b" font-weight="bold">a</text><text x="57" y="93" font-size="12" fill="#0d4f8b" font-weight="bold">b</text><text x="41" y="54" font-size="12" fill="#0d4f8b" font-weight="bold">h</text></svg>',
    formulas: '<div>Периметр: <b>P = a + b + c + d</b></div><div>Площадь: <b>S = (a + b)/2 · h</b></div><div class="legend">a, b — основания, c, d — бока, h — высота</div>',
    fields: [
      { id: "a", text: "Верхнее основание a:" },
      { id: "b", text: "Нижнее основание b:" },
      { id: "c", text: "Боковая сторона c:" },
      { id: "d", text: "Боковая сторона d:" },
      { id: "h", text: "Высота h:" }
    ]
  },
  {
    id: "rhombus",
    type: "flat",
    name: "Ромб",
    svg: '<svg width="110" height="105" viewBox="0 0 115 105"><polygon points="42,20 98,20 74,80 18,80" fill="#d9f0fc" stroke="#2389c9" stroke-width="1.8"/><line x1="42" y1="20" x2="42" y2="80" stroke="#2ea86b" stroke-width="1.3" stroke-dasharray="3"/><text x="20" y="50" font-size="12" fill="#0d4f8b" font-weight="bold">a</text><text x="46" y="54" font-size="12" fill="#0d4f8b" font-weight="bold">h</text></svg>',
    formulas: '<div>Периметр: <b>P = 4a</b></div><div>Площадь: <b>S = a · h</b></div><div class="legend">a — сторона, h — высота</div>',
    fields: [
      { id: "a", text: "Сторона ромба a:" },
      { id: "h", text: "Высота ромба h:" }
    ]
  },
  {
    id: "ellipse",
    type: "flat",
    name: "Эллипс",
    svg: '<svg width="120" height="100" viewBox="0 0 125 100"><ellipse cx="62" cy="50" rx="48" ry="28" fill="#d9f0fc" stroke="#2389c9" stroke-width="1.8"/><line x1="62" y1="50" x2="110" y2="50" stroke="#9c59b8" stroke-width="1.3"/><line x1="62" y1="50" x2="62" y2="22" stroke="#2ea86b" stroke-width="1.3"/><text x="82" y="45" font-size="12" fill="#0d4f8b" font-weight="bold">a</text><text x="66" y="38" font-size="12" fill="#0d4f8b" font-weight="bold">b</text></svg>',
    formulas: '<div>Периметр: <b>P ≈ π(a + b)</b></div><div>Площадь: <b>S = π · a · b</b></div><div class="legend">a, b — большая и малая полуоси</div>',
    fields: [
      { id: "a", text: "Большая полуось a:" },
      { id: "b", text: "Малая полуось b:" }
    ]
  },
  {
    id: "cube",
    type: "solid",
    name: "Куб",
    svg: '<svg width="105" height="105" viewBox="0 0 110 110"><rect x="20" y="35" width="50" height="50" fill="#d9f0fc" stroke="#2389c9" stroke-width="1.8"/><polygon points="20,35 40,18 90,18 70,35" fill="#bfe6fa" stroke="#2389c9" stroke-width="1.8"/><polygon points="70,35 90,18 90,68 70,85" fill="#a6dcf7" stroke="#2389c9" stroke-width="1.8"/><text x="42" y="99" font-size="12" fill="#0d4f8b" font-weight="bold">a</text></svg>',
    formulas: '<div>Площадь пов.: <b>S = 6a²</b></div><div>Объем: <b>V = a³</b></div><div class="legend">a — ребро куба</div>',
    fields: [{ id: "a", text: "Длина ребра a:" }]
  },
  {
    id: "parallelepiped",
    type: "solid",
    name: "Параллелепипед",
    svg: '<svg width="120" height="105" viewBox="0 0 125 105"><rect x="15" y="35" width="70" height="45" fill="#d9f0fc" stroke="#2389c9" stroke-width="1.8"/><polygon points="15,35 35,18 105,18 85,35" fill="#bfe6fa" stroke="#2389c9" stroke-width="1.8"/><polygon points="85,35 105,18 105,63 85,80" fill="#a6dcf7" stroke="#2389c9" stroke-width="1.8"/><text x="47" y="95" font-size="12" fill="#0d4f8b" font-weight="bold">a</text><text x="98" y="78" font-size="12" fill="#0d4f8b" font-weight="bold">b</text><text x="110" y="45" font-size="12" fill="#0d4f8b" font-weight="bold">h</text></svg>',
    formulas: '<div>Площадь пов.: <b>S = 2(ab+bh+ah)</b></div><div>Объем: <b>V = a · b · h</b></div><div class="legend">a — длина, b — ширина, h — высота</div>',
    fields: [
      { id: "a", text: "Длина a:" },
      { id: "b", text: "Ширина b:" },
      { id: "h", text: "Высота h:" }
    ]
  },
  {
    id: "cone",
    type: "solid",
    name: "Конус",
    svg: '<svg width="105" height="105" viewBox="0 0 110 110"><ellipse cx="55" cy="82" rx="35" ry="12" fill="#a6dcf7" stroke="#2389c9" stroke-width="1.8"/><path d="M20,82 L55,15 L90,82" fill="#d9f0fc" fill-opacity="0.75" stroke="#2389c9" stroke-width="1.8"/><line x1="55" y1="15" x2="90" y2="82" stroke="#e65100" stroke-width="2"/><line x1="55" y1="15" x2="55" y2="82" stroke="#2ea86b" stroke-width="1.3" stroke-dasharray="3"/><line x1="55" y1="82" x2="90" y2="82" stroke="#9c59b8" stroke-width="1.3"/><text x="44" y="55" font-size="12" fill="#0d4f8b" font-weight="bold">h</text><text x="70" y="79" font-size="12" fill="#0d4f8b" font-weight="bold">R</text><text x="78" y="48" font-size="13" fill="#e65100" font-weight="bold">l</text></svg>',
    formulas: '<div>Образующая: <b>l = √(R² + h²)</b></div><div>Площадь пов.: <b>S = πR(R + l)</b></div><div>Объем: <b>V = ⅓πR²h</b></div><div class="legend">R — радиус, h — высота, l — образующая</div>',
    fields: [
      { id: "r", text: "Радиус основания R:" },
      { id: "h", text: "Высота конуса h:" }
    ]
  },
  {
    id: "pyramid",
    type: "solid",
    name: "Четырехугольная пирамида",
    svg: '<svg width="105" height="105" viewBox="0 0 110 110"><polygon points="15,82 40,68 95,68 70,82" fill="#a6dcf7" stroke="#2389c9" stroke-width="1.8"/><polygon points="55,15 15,82 70,82" fill="#d9f0fc" stroke="#2389c9" stroke-width="1.8"/><polygon points="55,15 70,82 95,68" fill="#bfe6fa" stroke="#2389c9" stroke-width="1.8"/><line x1="55" y1="15" x2="55" y2="75" stroke="#2ea86b" stroke-width="1.3" stroke-dasharray="3"/><text x="40" y="96" font-size="12" fill="#0d4f8b" font-weight="bold">a</text><text x="58" y="55" font-size="12" fill="#0d4f8b" font-weight="bold">h</text></svg>',
    formulas: '<div>Площадь пов.: <b>S = a² + 2a·l</b></div><div>Объем: <b>V = ⅓a²h</b></div><div class="legend">a — сторона осн., h — высота</div>',
    fields: [
      { id: "a", text: "Сторона основания a:" },
      { id: "h", text: "Высота пирамиды h:" }
    ]
  },
  {
    id: "cylinder",
    type: "solid",
    name: "Цилиндр",
    svg: '<svg width="105" height="105" viewBox="0 0 110 110"><rect x="25" y="25" width="60" height="60" fill="#d9f0fc" stroke="none"/><ellipse cx="55" cy="85" rx="30" ry="10" fill="#a6dcf7" stroke="#2389c9" stroke-width="1.8"/><line x1="25" y1="25" x2="25" y2="85" stroke="#2389c9" stroke-width="1.8"/><line x1="85" y1="25" x2="85" y2="85" stroke="#2389c9" stroke-width="1.8"/><ellipse cx="55" cy="25" rx="30" ry="10" fill="#bfe6fa" stroke="#2389c9" stroke-width="1.8"/><line x1="55" y1="25" x2="85" y2="25" stroke="#9c59b8" stroke-width="1.3"/><text x="90" y="58" font-size="12" fill="#0d4f8b" font-weight="bold">h</text><text x="66" y="22" font-size="12" fill="#0d4f8b" font-weight="bold">R</text></svg>',
    formulas: '<div>Площадь пов.: <b>S = 2πR(R + h)</b></div><div>Объем: <b>V = πR²h</b></div><div class="legend">R — радиус, h — высота</div>',
    fields: [
      { id: "r", text: "Радиус основания R:" },
      { id: "h", text: "Высота цилиндра h:" }
    ]
  },
  {
    id: "sphere",
    type: "solid",
    name: "Шар",
    svg: '<svg width="105" height="105" viewBox="0 0 110 110"><circle cx="55" cy="55" r="38" fill="#d9f0fc" stroke="#2389c9" stroke-width="1.8"/><ellipse cx="55" cy="55" rx="38" ry="11" fill="none" stroke="#2389c9" stroke-dasharray="3"/><line x1="55" y1="55" x2="93" y2="55" stroke="#9c59b8" stroke-width="1.5"/><text x="70" y="50" font-size="12" fill="#0d4f8b" font-weight="bold">R</text></svg>',
    formulas: '<div>Площадь пов.: <b>S = 4πR²</b></div><div>Объем: <b>V = ⁴⁄₃πR³</b></div><div class="legend">R — радиус шара</div>',
    fields: [{ id: "r", text: "Радиус шара R:" }]
  }
];

function createPage() {
  var flatGrid = document.getElementById("flatGrid");
  var solidGrid = document.getElementById("solidGrid");

  for (var i = 0; i < shapes.length; i++) {
    var item = shapes[i];
    var tile = document.createElement("div");
    tile.className = "shape-tile";
    tile.id = "tile_" + item.id;
    tile.setAttribute("onclick", "selectShape('" + item.id + "')");
    tile.innerHTML = '<div class="shape-tile-img">' + item.svg + '</div>' +
                     '<div class="shape-tile-name">' + item.name + '</div>';

    if (item.type == "flat") {
      flatGrid.appendChild(tile);
    } else {
      solidGrid.appendChild(tile);
    }
  }
}

function selectShape(shapeId) {
  currentShape = shapeId;
  var tiles = document.getElementsByClassName("shape-tile");
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].classList.remove("active");
  }
  document.getElementById("tile_" + shapeId).classList.add("active");

  var shape = null;
  for (var j = 0; j < shapes.length; j++) {
    if (shapes[j].id == shapeId) {
      shape = shapes[j];
      break;
    }
  }

  document.getElementById("cardTitle").innerHTML = shape.name;
  document.getElementById("diagramBox").innerHTML = shape.svg;
  document.getElementById("formulasBox").innerHTML = shape.formulas;

  var container = document.getElementById("inputsContainer");
  container.innerHTML = "";
  for (var k = 0; k < shape.fields.length; k++) {
    var f = shape.fields[k];
    container.innerHTML += '<div class="input-group">' +
      '<label>' + f.text + '</label>' +
      '<input type="number" id="inp_' + f.id + '" placeholder="Введите число...">' +
      '</div>';
  }

  var resultBox = document.getElementById("resultBox");
  resultBox.style.display = "none";
  resultBox.classList.remove("error");
}
function getVal(id) {
  var val = parseFloat(document.getElementById("inp_" + id).value);
  return val;
}

function showError(text) {
  var box = document.getElementById("resultBox");
  box.classList.add("error");
  box.innerHTML = text;
  box.style.display = "block";
}

function showResult(text) {
  var box = document.getElementById("resultBox");
  box.classList.remove("error");
  box.innerHTML = "<b>Результат расчета:</b><br>" + text;
  box.style.display = "block";
}

function calculate() {
  var pi = 3.14;

  if (currentShape == "square") {
    var a = getVal("a");
    if (isNaN(a) || a <= 0) {
      showError("Ошибка: введите сторону a больше 0!");
      return;
    }
    var P = 4 * a;
    var S = a * a;
    showResult("Периметр P = " + P.toFixed(2) + "<br>Площадь S = " + S.toFixed(2));
  }

  else if (currentShape == "rectangle") {
    var a = getVal("a");
    var b = getVal("b");
    if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0) {
      showError("Ошибка: все стороны должны быть больше 0!");
      return;
    }
    var P = 2 * (a + b);
    var S = a * b;
    showResult("Периметр P = " + P.toFixed(2) + "<br>Площадь S = " + S.toFixed(2));
  }

  else if (currentShape == "triangle") {
    var a = getVal("a");
    var b = getVal("b");
    var c = getVal("c");
    var h = getVal("h");
    if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0 || isNaN(c) || c <= 0 || isNaN(h) || h <= 0) {
      showError("Ошибка: введите все значения больше 0!");
      return;
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
      showError("Ошибка: такой треугольник не существует!");
      return;
    }
    if (h > a || h > b) {
      showError("Ошибка: высота h не может быть больше сторон a и b!");
      return;
    }
    var P = a + b + c;
    var S = 0.5 * c * h;
    showResult("Периметр P = " + P.toFixed(2) + "<br>Площадь S = " + S.toFixed(2));
  }

  else if (currentShape == "parallelogram") {
    var a = getVal("a");
    var b = getVal("b");
    var h = getVal("h");
    if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0 || isNaN(h) || h <= 0) {
      showError("Ошибка: введите все значения больше 0!");
      return;
    }
    if (h > b) {
      showError("Ошибка: высота h не может быть больше стороны b!");
      return;
    }
    var P = 2 * (a + b);
    var S = a * h;
    showResult("Периметр P = " + P.toFixed(2) + "<br>Площадь S = " + S.toFixed(2));
  }

  else if (currentShape == "trapezoid") {
    var a = getVal("a");
    var b = getVal("b");
    var c = getVal("c");
    var d = getVal("d");
    var h = getVal("h");
    if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0 || isNaN(c) || c <= 0 || isNaN(d) || d <= 0 || isNaN(h) || h <= 0) {
      showError("Ошибка: введите все значения больше 0!");
      return;
    }
    if (h > c || h > d) {
      showError("Ошибка: высота h не может быть больше боковых сторон!");
      return;
    }
    var P = a + b + c + d;
    var S = ((a + b) / 2) * h;
    showResult("Периметр P = " + P.toFixed(2) + "<br>Площадь S = " + S.toFixed(2));
  }

  else if (currentShape == "rhombus") {
    var a = getVal("a");
    var h = getVal("h");
    if (isNaN(a) || a <= 0 || isNaN(h) || h <= 0) {
      showError("Ошибка: введите сторону и высоту больше 0!");
      return;
    }
    if (h > a) {
      showError("Ошибка: высота h не может быть больше стороны a!");
      return;
    }
    var P = 4 * a;
    var S = a * h;
    showResult("Периметр P = " + P.toFixed(2) + "<br>Площадь S = " + S.toFixed(2));
  }

  else if (currentShape == "ellipse") {
    var a = getVal("a");
    var b = getVal("b");
    if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0) {
      showError("Ошибка: введите обе полуоси больше 0!");
      return;
    }
    var P = pi * (a + b);
    var S = pi * a * b;
    showResult("Периметр P ≈ " + P.toFixed(2) + "<br>Площадь S = " + S.toFixed(2));
  }

  else if (currentShape == "cube") {
    var a = getVal("a");
    if (isNaN(a) || a <= 0) {
      showError("Ошибка: введите ребро a больше 0!");
      return;
    }
    var S = 6 * a * a;
    var V = a * a * a;
    showResult("Площадь поверхности S = " + S.toFixed(2) + "<br>Объем V = " + V.toFixed(2));
  }

  else if (currentShape == "parallelepiped") {
    var a = getVal("a");
    var b = getVal("b");
    var h = getVal("h");
    if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0 || isNaN(h) || h <= 0) {
      showError("Ошибка: введите все размеры больше 0!");
      return;
    }
    var S = 2 * (a * b + b * h + a * h);
    var V = a * b * h;
    showResult("Площадь поверхности S = " + S.toFixed(2) + "<br>Объем V = " + V.toFixed(2));
  }

  else if (currentShape == "cone") {
    var r = getVal("r");
    var h = getVal("h");
    if (isNaN(r) || r <= 0 || isNaN(h) || h <= 0) {
      showError("Ошибка: введите радиус и высоту больше 0!");
      return;
    }
    var l = Math.sqrt(r * r + h * h);
    var S = pi * r * (r + l);
    var V = (1 / 3) * pi * r * r * h;
    showResult("Образующая l = " + l.toFixed(2) + "<br>Площадь поверхности S = " + S.toFixed(2) + "<br>Объем V = " + V.toFixed(2));
  }

  else if (currentShape == "pyramid") {
    var a = getVal("a");
    var h = getVal("h");
    if (isNaN(a) || a <= 0 || isNaN(h) || h <= 0) {
      showError("Ошибка: введите сторону и высоту больше 0!");
      return;
    }
    var apofema = Math.sqrt(h * h + (a / 2) * (a / 2));
    var S = a * a + 2 * a * apofema;
    var V = (1 / 3) * a * a * h;
    showResult("Площадь поверхности S = " + S.toFixed(2) + "<br>Объем V = " + V.toFixed(2));
  }

  else if (currentShape == "cylinder") {
    var r = getVal("r");
    var h = getVal("h");
    if (isNaN(r) || r <= 0 || isNaN(h) || h <= 0) {
      showError("Ошибка: введите радиус и высоту больше 0!");
      return;
    }
    var S = 2 * pi * r * (r + h);
    var V = pi * r * r * h;
    showResult("Площадь поверхности S = " + S.toFixed(2) + "<br>Объем V = " + V.toFixed(2));
  }

  else if (currentShape == "sphere") {
    var r = getVal("r");
    if (isNaN(r) || r <= 0) {
      showError("Ошибка: введите радиус R больше 0!");
      return;
    }
    var S = 4 * pi * r * r;
    var V = (4 / 3) * pi * r * r * r;
    showResult("Площадь поверхности S = " + S.toFixed(2) + "<br>Объем V = " + V.toFixed(2));
  }
}

createPage();
selectShape("square");
