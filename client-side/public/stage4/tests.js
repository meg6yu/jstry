'use strict';

describe('Stage4 jQuery', function() {

  // イントロダクション
  //
  // このレッスンでは広く普及しているJSライブラリであるjQueryの使い方を学びます。
  // jQueryのAPIドキュメントは http://api.jquery.com/ にあります。

  describe('DOM manipulate via jQuery', function() {
    // DOM操作をjQueryで行います。
    // 'FIXME!!!' の部分を書き換え、テストがすべて通るようにしてください。

// *～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～**～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*
    it('六角形の要素全てを取得できること', function() {
      var $hexes = $('#hexes div.hex'); // jQueryオブジェクトは変数/引数名の頭に`$`をつける風習があります
      expect($hexes.length).to.equal(7);
    });

// *～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～**～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*
    it('六角形の先頭の要素が取得できること', function() {
      var $head = $('#hexes .hex:first');
      expect($head.attr('title')).to.equal('cat');
    });

// *～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～**～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*
    it('六角形の3番目の要素が取得できること', function() {
      var $third = $('#hexes .hex:eq(2)');
      expect($third.attr('title')).to.equal('uni');
    });

// *～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～**～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*
    it('六角形の偶数番目の要素が取得できること', function() {
      var $even = $('#hexes .hex:odd');
      var titles = [];
      $even.each(function(_, elem) {
        titles.push($(elem).attr('title'));
      });
      expect(titles).to.eql(['tuna', 'hotate', 'salmon']);
    });

// *～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～**～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*
    it('六角形の要素のうち、idが`space-cat`以外の要素が取得できること', function() {
      var $edible = $('#hexes .hex').not('#space-cat');
      var titles = [];
      $edible.each(function(_, elem) {
        titles.push($(elem).attr('title'));
      });
      expect(titles).to.eql(['tuna', 'uni', 'hotate', 'makizushi', 'salmon', 'agari']);
    });

// *～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～**～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*
    it('六角形の要素が逆順に並べ替えられていること', function() {
      // hint1: https://api.jquery.com/get/
      // hint2: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

      var $wrapper = $('#hexes');
      var $hexes = $('.hex');
      $($hexes.get().reverse()).each(function(_, item){
        $wrapper.append(item);
      });
      var titles = [];
      $('.hex').each(function(_, elem) {
        titles.push($(elem).attr('title'));
      });
      expect(titles).to.eql(['agari', 'salmon', 'makizushi', 'hotate', 'uni', 'tuna', 'cat']);
    });

  });


  describe('Event via jQuery', function() {
    // イベントのステージで行った内容をjQueryで実装します。
    // 下記のテストが全てgreenになるようにしてください。

    // ☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆
    // ここからは、このファイルと同じディレクトリ内にある'./main.js'を編集します。
    // ☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆

    it('「エモいね」ボタンをクリックされた際にカウントがインクリメントされること', function () {
      var emoineBtn = document.getElementById('emoine');
      var emoCount  = document.getElementById('emoCount');
      emoineBtn.dispatchEvent(createClickEvent());
      emoineBtn.dispatchEvent(createClickEvent());
      expect(emoCount).to.have.property('textContent', '2');
    });

    it('input要素にフォーカスがあたった際、tooltipにclassに`active`が付与されること', function() {
      var inputWithTooltip = document.getElementById('withTooltip');
      var tooltipElem      = document.getElementById('tooltip');
      inputWithTooltip.dispatchEvent(createFocusEvent());
      expect(tooltipElem.className).to.equal('active');
    });

    it('input要素からフォーカスが外れた際、tooltipからclass `active`が取り除かれること', function() {
      var inputWithTooltip = document.getElementById('withTooltip');
      var tooltipElem      = document.getElementById('tooltip');
      inputWithTooltip.dispatchEvent(createFocusEvent());
      expect(tooltipElem.className).to.equal('active');
      inputWithTooltip.dispatchEvent(createBlurEvent());
      expect(tooltipElem.className).not.to.equal('active');
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
      var emoineIndicator = document.getElementById('emoCount');
      emoineIndicator.textContent = '0';
    });
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

function secret(str) {
  // Copyright (c) 2012 K.Adam White
  // Released under the MIT license
  // https://github.com/kadamwhite/jquery.rot13/blob/master/LICENSE-MIT
  return Array.prototype.map.call(str, function(char) {
    if (!char.match(/[A-Za-z]/)) { return char; }

    var charCode = char.charCodeAt(0);
    if(charCode < 97) {
      charCode = (charCode - 52) % 26 + 65;
    } else {
      charCode = (charCode - 84) % 26 + 97;
    }
    return String.fromCharCode(charCode);
  }).join('');
}