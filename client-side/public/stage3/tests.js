'use strict';

describe('Stage3 イベント', function() {

  // イントロダクション
  //
  // このレッスンではクライアントサイドJSの重要な概念、イベントについて学びます。
  // 下記のテストが全てgreenになるようにしてください。

  // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
  // ここからは、このファイルと同じディレクトリ内にある'./main.js'を編集します。
  // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

  it('「エモいね」ボタンはクリックされた際にカウントがインクリメントされること', function() {
    var emoineBtn = document.getElementById('emoine');
    var emoCount  = document.getElementById('emoCount');
    emoineBtn.dispatchEvent(createClickEvent());
    emoineBtn.dispatchEvent(createClickEvent());
    expect(emoCount).to.have.property('textContent', '2');
  });

  it('input要素にフォーカスがあたった際にtooltipが表示されること(表示中は display: block になる)', function() {
    var inputWithTooltip = document.getElementById('withTooltip');
    var tooltipElem      = document.getElementById('tooltip');
    inputWithTooltip.dispatchEvent(createFocusEvent());
    expect(tooltipElem.style.display).to.equal('block');
  });

  it('input要素からフォーカスが外れた際にtooltipが非表示になること(非表示中は display: none になる)', function() {
    var inputWithTooltip = document.getElementById('withTooltip');
    var tooltipElem      = document.getElementById('tooltip');
    inputWithTooltip.dispatchEvent(createFocusEvent());
    expect(tooltipElem.style.display).to.equal('block');
    inputWithTooltip.dispatchEvent(createBlurEvent());
    expect(tooltipElem.style.display).to.equal('none');
  });

  it('select要素を変更した際に選択した項目が表示されること', function() {
    var select     = document.getElementById('showSelectedValue');
    var translated = document.getElementById('translated');
    simulateChangeEvent(select, 'Encapsulation');
    expect(translated).to.have.property('textContent', 'Encapsulation');
  });

  it('入力欄が空のままformをsubmitした際にinputの背景色がrgb(248, 204, 204)になること', function() {
    var form          = document.getElementById('mustNotEmpty');
    var requiredInput = document.getElementById('required');
    form.dispatchEvent(createSubmitEvent());
    expect(requiredInput.style.backgroundColor).to.equal('rgb(248, 204, 204)');
  });

  it('入力欄を埋めてsubmitした際には背景色がrgb(255, 255, 255)になること', function() {
    var form          = document.getElementById('mustNotEmpty');
    var requiredInput = document.getElementById('required');
    simulateChangeEvent(requiredInput, 'hogehoge');
    form.dispatchEvent(createSubmitEvent());
    expect(requiredInput.style.backgroundColor).to.equal('rgb(255, 255, 255)');
  });


  it('入力文字数カウントが機能すること', function() {
    var wordCount      = document.getElementById('wordCount');
    var countIndicator = document.getElementById('countIndicator');
    simulateChangeEvent(wordCount, 'JavaScript');
    wordCount.dispatchEvent(createKeydownEvent());
    expect(countIndicator).to.have.property('textContent', '10');
  });

  after(function() {
    var tooltipElem = document.getElementById('tooltip');
    tooltipElem.style.display = 'none';
    var emoineIndicator = document.getElementById('emoCount');
    emoineIndicator.textContent = '0';
  });
});

function createClickEvent() {
  var event = document.createEvent('MouseEvents');
  event.initEvent('click', false, true);
  return event;
}

function createFocusEvent() {
  var event = document.createEvent('MouseEvents');
  event.initEvent('focus', false, true);
  return event;
}

function createBlurEvent() {
  var event = document.createEvent('MouseEvents');
  event.initEvent('blur', false, true);
  return event;
}

function simulateChangeEvent(inputElement, newValue) {
  inputElement.value = newValue;
  inputElement.dispatchEvent(createChangeEvent());
}

function createChangeEvent() {
  var event = document.createEvent('HTMLEvents');
  event.initEvent('change', true, true);
  return event;
}

function createKeydownEvent() {
  var event = document.createEvent('KeyboardEvent');
  event.initEvent('keydown', true, true);
  return event;
}

function createSubmitEvent() {
  var event = document.createEvent('HTMLEvents');
  event.initEvent('submit', true, true);
  return event;
}