// コンソールでHello World
function sayHelloFromConsole() {
  console.log('hello world!');
}

// アラートでHello World
function sayHelloFromAlert() {
  alert('hello world!');
}

// 変数定義サンプル
function deferNumberAndString() {
  var number = 100;
  // 文字列はシングルクォーテーションで囲む（ダブルクォーテーションでも可）
  var message = 'I am a message';
  console.log(number);
  console.log(message);
}

// 四則演算サンプル
function executeArithmeticOperations(leftHand, rightHand) {
  var addition = leftHand + rightHand;
  var subtraction = leftHand - rightHand;
  var multiplication = leftHand * rightHand;
  var divition = leftHand / rightHand;
  console.log(addition, subtraction, multiplication, divition);
  return;
}

// 関数サンプル
function sampleFunction(value) {
  // テンプレート文字列（バックティック文字で囲む）
  return `入力値は${value}です`;
}

// if文サンプル
function conpareNumberWithIfLine(number) {
  var threshold = 100;
  if (number < threshold) {
    console.log(`入力値は${threshold}を下回ります`);
  } else if (number === threshold) {
    console.log('入力値はしきい値と合致します');
  } else {
    console.log(`入力値は${threshold}を超えています`);
  }
  return;
}

// for文サンプル
function recurNoteWithForLine(message) {
  // max回数分繰り返す
  var max = 100;
  for(var i = 0; i < max; i++) {
    if (i % 3) {
      console.log(i);
    }
  }
  return;
}

// 配列取扱サンプル
function arrayHandling() {
  var array = [];
  // 配列の一番目のインデックスは0
  array[0] = 'tokyo';
  array[1] = 'kanagawa';
  array[2] = 'chiba';
  array[3] = 'saitama';
  console.log(array);
  // 配列の長さを確認
  console.log(array.length);
  return;
}

// オブジェクト取扱サンプル
function objectHandling() {
  var user = {
    id: 123456,
    name: 'Yamada Taro',
    isPremiumUser: false,
  }
  console.log(user);
  return;
}

// DOM操作サンプル
function rewriteTargetDomText(message) {
  // innerHTMLなので、messageはDOMでもよい
  var sampleDOM = '<span>DOMを埋め込んでるよー</span>';
  document.getElementById('target').innerHTML = sampleDOM;
  return;
}

// 即時関数
(function() {
  recurNoteWithForLine();
}());
