// テキスト取得/操作サンプル
function rewriteTargetText(message) {
  var text = $('#target').text();
  console.log(text);
  $('#target').text(message);
  return;
}

// HTML取得/操作サンプル
function rewriteTargetDom(dom) {
  var target = $('main').html();
  console.log(target);
  $('#target').html(dom);
  return;
}

// クラス追加サンプル
function addClass(className) {
  $('#target').addClass(className);
  return;
}

// クラス削除サンプル
function removeClass(className) {
  $('#target').removeClass(className);
  return;
}

// クラス判定サンプル
function hasClass(className) {
  var result = $('#target').hasClass(className);
  return result;
}

// value取得/操作サンプル
function handleValue(input) {
  var value = $('#button').val();
  console.log(value);
  $('#button').val(input);
  return;
}

// lengthサンプル
function increaseSampleDom() {
  $('main').click(function () {
    $('main').append($('<div class="square"></div>'));
    var length = $(".square").length;
    $("#target").text(`${length}個の要素があります。クリックで増えます。`);
  }).click();
}

// clickサンプル
function alertButton(message) {
  $('#button').click(function() {
    alert(message);
  });
}

// hoverサンプル
function handleHover() {
  $('#target').hover(function() {
    $(this).addClass('hoverText');
  }, function() {
    $(this).removeClass('hoverText');
  });
}

function handleInput() {
  var value = $('#input').val();
  console.log(value);
  return;
}

function append() {
  $('main').append('<ul class="container"></ul>');
  $('#button').click(function() {
    var value = $('#input').val();
    $('.container').append(`<li class="list">${value}</li>`);
    $('#input').val('');
  });
  return;
}

function remove() {
  console.log($('#button2'));
  $('#button2').click(function() {
    console.log($('.list'));
    $('.list').remove();
  });
}

// 即時関数
$(function() {
  append();
  remove();
});
