'use strict';

// Emoine Button
// ----------------------------------------------------------------------
// handleEmoine(indicatorElem)メソッドを使い、
// emoineBtnをクリックしたらemoineIndicatorの値がインクリメントされるような処理を追加してください。

// 処理の記述ここから ----------------------

var emoine = document.getElementById('emoine');
var emoCount = document.getElementById('emoCount');
emoine.addEventListener('click', function() {
  handleEmoine(emoCount).add();
});

// 処理の記述ここまで ----------------------

/** Add Emotion
 * usage)
 * element.addEventListener(event, function() {
 *   handleEmoine(indicateElement).add();
 * });
 */
function handleEmoine(indicatorElem) {
  var count = Number(indicatorElem.textContent);
  // これがクロージャ
  return {
    add: function() {
      count++;
      indicatorElem.textContent = count;
    }
  };
}


// tooltip show
// ----------------------------------------------------------------------
// showTooltip(tooltipElem)メソッドを使い、
// inputWithTooltipにフォーカスが当たったらtooltipElemが表示されるような処理を追加してください。

// 処理の記述ここから ----------------------

var input = document.getElementsByTagName('input')[0];
// var input = document.getElementById('withTooltip');
input.addEventListener('focus', function() {
  showTooltip(tooltip);
});

// 処理の記述ここまで ----------------------

function showTooltip(tooltipElem) {
  tooltipElem.style.display = 'block';
  return undefined;
}


// tooltip hide
// ----------------------------------------------------------------------
// hideTooltip(tooltipElem)メソッドを使い、
// inputWithTooltipからフォーカスが当たったらtooltipElemが非表示になるような処理を追加してください。

// 処理の記述ここから ----------------------

var input = document.getElementsByTagName('input')[0];
// var input = document.getElementById('withTooltip');
input.addEventListener('blur', function() {
  hideTooltip(tooltip);
});

// 処理の記述ここまで ----------------------

function hideTooltip(tooltipElem) {
  tooltipElem.style.display = 'none';
}


// show translated text
// ----------------------------------------------------------------------
// selectで選択されている項目が変化したら、
// 選択されたoption要素のvalueをtranslated内に表示する処理を自分で書いてみましょう。
// 「選択されたoption要素のvalue」をどう取得するかがミソです。

// 処理の記述ここから ----------------------

//var optionTab = document.querySelector("option");
//optionTab.value;
//"Abstraction"
//var optionTab = document.querySelectorAll("input");

var optionTab = document.querySelector("option");
var optionValue = optionTab.value;
var newTextId = document.querySelector("#translated");
// newTextId.innerText = optionValue;
optionTab.addEventListener('click', function() {
  newTextId.innerText = ('optionValue');
});

function selectChange(value, newElem) {
  newElem.innerText = ('value');
}

// 処理の記述ここまで ----------------------


// validate empty value
// ----------------------------------------------------------------------
// formがsubmitされた際、requiredInputのvalueが空だった場合は
// requiredInputの背景色を赤（ rgb(248, 204, 204) ）にしてみましょう。
// 再度submitした際、inputのvalueが空ではなかった場合には
// requiredInputの背景色を白（ rgb(255, 255, 255) ）に戻しましょう。

// 処理の記述ここから ----------------------

// 処理の記述ここまで ----------------------


// word count
// ----------------------------------------------------------------------
// wordCountにテキストが入力されるたびに、入力された文字数をcountIndicator内に表示してみましょう。
// 余裕のある人は、「入力された文字が140字を超えたらcountIndicatorの文字色を#f00にする」をやってみてください。


// 処理の記述ここから ----------------------

// 処理の記述ここまで ----------------------
