'use strict';

describe('DOMの基本, DOMの取得', function() {
  describe('基本編', function() {

    it('[IDによる要素取得] タイトル文字「Hello, DOM World」(id = hello)の要素を取得', function() {
      // --- 以下にコードを書く ---

      var titleElement = document.getElementById("hello"); // タイトル文字「Hello, DOM World」(id = hello)の要素

      // --- ここまでコードを書く ---

      expect(titleElement).to.be.instanceof(HTMLElement);
      expect(titleElement).to.have.property(secret('vq'), secret('uryyb'));
    });

    it('[タグ名による要素取得] 最初の<li>要素「foo」を取得', function() {
      // --- 以下にコードを書く ---

      var liElement = document.getElementsByTagName("li")[0]; // 最初の<li>要素

      // --- ここまでコードを書く ---

      expect(liElement).to.be.instanceof(HTMLElement);
      expect(liElement).to.have.property(secret('vaareUGZY'), secret('sbb'));
    });

    it('[タグ名による要素取得] 5番目の<li>要素「BIZREACH」を取得', function() {
      // --- 以下にコードを書く ---

      var bizreachElement = document.getElementsByTagName("li")[4];; // 5番目の<li>要素

      // --- ここまでコードを書く ---

      expect(bizreachElement).to.be.instanceof(HTMLElement);
      expect(bizreachElement).to.have.property(secret('vaareUGZY'), secret('OVMERNPU'));
    });

    it('[クラス名による要素取得] (class = bizreach-serivce)の最初の要素「BIZREACH」を取得', function() {
      // --- 以下にコードを書く ---

      var bizreachElement = document.getElementsByClassName("bizreach-service")[0];

      // --- ここまでコードを書く ---

      expect(bizreachElement).to.be.instanceof(HTMLElement);
      expect(bizreachElement).to.have.property(secret('vaareUGZY'), secret('OVMERNPU'));
    });

    it('[クラス名による要素取得] (class = bizreach-service)の2番目の要素「careertrek」を取得', function() {
      // --- 以下にコードを書く ---

      var careertrekElement = document.getElementsByClassName("bizreach-service")[1];

      // --- ここまでコードを書く ---

      expect(careertrekElement).to.be.instanceof(HTMLElement);
      expect(careertrekElement).to.have.property(secret('vaareUGZY'), secret('pnerregerx'));
    });
  });

  describe('開発ツールを使う編 (ここからは開発ツールを使ってDOMの構造を確認しながら)', function() {

    it('「スタンバイ」の要素を取得', function() {
      // --- 以下にコードを書く ---

      var stanbyElement = document.getElementsByClassName("bizreach-service")[4];

      // --- ここまでコードを書く ---

      expect(stanbyElement).to.be.instanceof(HTMLElement);
      expect(stanbyElement).to.have.property(secret('vaareUGZY'), 'スタンバイ');
    });

    it('「HRMOS」の要素を取得', function() {
      // --- 以下にコードを書く ---

      var hrmosElement = document.getElementsByClassName("hrmos-20160614")[0];

      // --- ここまでコードを書く ---

      expect(hrmosElement).to.be.instanceof(HTMLElement);
      expect(hrmosElement).to.have.property(secret('vaareUGZY'), 'HRMOS');
    });

    it('<img>要素の「1番目のSwimmy」を探して取得', function() {
      // --- 以下にコードを書く ---

      var firstSwimmyElement = document.getElementById("swimmy");

      // --- ここまでコードを書く ---

      expect(firstSwimmyElement).to.be.instanceof(HTMLElement);
      expect(firstSwimmyElement).to.have.property(secret('nyg'), secret('Jbex Uneq, Cynl FHCRE Uneq.'));
    });

    it('<img>要素の「2番目のSwimmy」を探して取得', function() {
      // --- 以下にコードを書く ---

      var secondSwimmyElement = document.getElementById("toggle-second-swimmy");

      // --- ここまでコードを書く ---

      expect(secondSwimmyElement).to.be.instanceof(HTMLElement);
      expect(secondSwimmyElement).to.have.property(secret('nyg'), secret('40歳'));
    });
  });

  describe('CSSセレクタ編 (以下 getElementsByTagName/ById/ByClassName 禁止)', function() {

    it('[CSSセレクタで要素取得] タイトル文字「Hello, DOM World」(id = helloの要素)を取得', function() {
      // --- 以下にコードを書く ---
      var h1Element;

      // --- ここまでコードを書く ---

      expect(h1Element).to.be.instanceof(HTMLElement);
      expect(h1Element).to.have.property(secret('vq'), secret('uryyb'));
    });

    it('[CSSセレクタで要素取得] 隠れたビズリーチサービス名の1個目の要素を取得せよ', function() {
      // --- 以下にコードを書く ---
      var hiddenElement;

      // --- ここまでコードを書く ---

      expect(hiddenElement).to.be.instanceof(HTMLElement);
      expect(hiddenElement).to.have.property(secret('vaareUGZY'), secret('pbqroernx;'));
    });

    it('5番目の<li>要素「BIZREACH」 を取得', function() {
      // --- 以下にコードを書く ---
      var bizreachElement;

      // --- ここまでコードを書く ---

      expect(bizreachElement).to.be.instanceof(HTMLElement);
      expect(bizreachElement).to.have.property(secret('vaareUGZY'), secret('OVMERNPU'));
    });

    it('前問と同じ要素「BIZREACH」を querySelector を使って取得(querySelectorAll 禁止)', function() {
      // --- 以下にコードを書く ---
      var bizreachElement;

      // --- ここまでコードを書く ---

      expect(bizreachElement).to.be.instanceof(HTMLElement);
      expect(bizreachElement).to.have.property(secret('vaareUGZY'), secret('OVMERNPU'));
    });
  });

  describe('おまけ編', function() {

    it('移動している要素「Mach 55」を取得', function() {
      // --- 以下にコードを書く ---
      var mach55Element;

      // --- ここまでコードを書く ---

      expect(mach55Element).to.be.instanceof(HTMLElement);
      expect(mach55Element).to.have.property(secret('vq'), secret('znpu'));
    });

    it('どこかに隠れている<img>要素の「3人目のSwimmy」を取得せよ', function() {
      // --- 以下にコードを書く ---
      var thirdSwimmyElement;

      // --- ここまでコードを書く ---

      expect(thirdSwimmyElement).to.be.instanceof(HTMLElement);
      expect(thirdSwimmyElement).to.have.property(secret('nyg'), '3人目のSwimmy');
    });
  });
});

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
