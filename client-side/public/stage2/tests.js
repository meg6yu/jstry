'use strict';

describe('DOM、スタイル操作', function() {

  // プロパティ取得
  describe('要素プロパティの取得、更新', function() {
    it('[DOM操作] <h1>要素(id = title)、およびその id を取得せよ', function() {
      // --- 以下にコードを書く ---

      var h1Element = document.getElementsByTagName("h1")[0];
      var id = h1Element.id;

      // --- ここまでコードを書く ---

      expect(h1Element).to.be.instanceof(HTMLElement);
      expect(h1Element.tagName).to.be.equal('H1');
      expect(id).to.be.equal('title');
    });

    it('[DOM操作] <h1>要素と、その要素が含む文字列を取得せよ', function() {
      // --- 以下にコードを書く ---

      var h1Element = document.getElementsByTagName("h1")[0];
      var text = h1Element.textContent; // 要素が持つ文字列を格納する

      // --- ここまでコードを書く ---

      expect(h1Element).to.be.instanceof(HTMLElement);
      expect(h1Element.tagName).to.be.equal('H1');
      expect(text).to.be.equal('DOM操作');
    });

    it('[DOM操作] <input>要素(id = hello) と、その要素に入力されている値「こんにちわ世界」を取得する', function() {
      // --- 以下にコードを書く ---

      var inputElement = document.getElementsByTagName("input")[0];
      var value = inputElement.value;

      // --- ここまでコードを書く ---

      expect(inputElement).to.be.instanceof(HTMLElement);
      expect(inputElement.tagName).to.be.equal('INPUT');
      expect(value).to.be.equal('こんにちは世界');
    });

    it('[DOM操作] <h1>要素と、その要素の高さを取得する', function() {
      // --- 以下にコードを書く ---

      var h1Element = document.getElementsByTagName("h1")[0];
      var height = h1Element.clientHeight;

      // --- ここまでコードを書く ---

      expect(h1Element).to.be.instanceof(HTMLElement);
      expect(h1Element.tagName).to.be.equal('H1');
      expect(height).to.be.equal(48);
    });

    it('[DOM操作] Javaボタン(id = java)の表示テキストを「JavaScript」に変更せよ', function() {
      // --- 以下にコードを書く ---

      var buttnElement = document.getElementById("java");
      buttnElement.innerText = 'JavaScript';

      // --- ここまでコードを書く ---

      expect(buttnElement).to.be.instanceof(HTMLElement);
      expect(buttnElement.tagName).to.be.equal('BUTTON');
      expect(buttnElement).to.have.property(secret('vaareUGZY'), 'JavaScript');
    });

    it('[DOM操作] 旧Javaボタン(id = java)のidを「javascript」に変更せよ', function() {
      // --- 以下にコードを書く ---

      var buttnElement = document.getElementById("java");
      buttnElement.id = 'javascript'

      // --- ここまでコードを書く ---

      expect(buttnElement).to.be.instanceof(HTMLElement);
      expect(buttnElement.tagName).to.be.equal('BUTTON');
      expect(buttnElement).to.have.property(secret('vq'), 'javascript');
    });
  });

  describe('要素の移動と作成、前後への挿入', function() {

    it('[要素の挿入] 文字列「Script」(id = word-script)を選択し、p要素(id = composed-text)の子要素として追加せよ', function() {
      var textElement = document.getElementById('composed-text');

      // --- 以下にコードを書く ---

      var text = document.getElementById("word-script").textContent;
      var pTag = document.getElementById("composed-text");
      pTag.

      // --- ここまでコードを書く ---

      expect(textElement).to.be.instanceof(HTMLElement);
      expect(textElement.tagName).to.be.equal('P');
      expect(textElement.textContent.trim()).to.be.equal('JavaScript');
    });

    it('[要素の挿入] 「<span>たのしい</span>」という要素を作り、文字列「Java」(id = word-java)の前に挿入せよ', function() {

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---

      var textElement = document.getElementById('composed-text');
      expect(textElement).to.be.instanceof(HTMLElement);
      expect(textElement.tagName).to.be.equal('P');
      expect(textElement.textContent.trim()).to.be.equal('たのしいJavaScript');
    });

    it('[要素の挿入] 「<span>研修</span>」という要素を作り、文字列「Script」(id = word-script)の後ろに挿入せよ', function() {

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---

      var textElement = document.getElementById('composed-text');
      expect(textElement).to.be.instanceof(HTMLElement);
      expect(textElement.tagName).to.be.equal('P');
      expect(textElement.textContent.trim()).to.be.equal('たのしいJavaScript研修');
    });

    it('[要素の挿入] TextNode「 」(スペース)を作って文字列(id = composed-text)の子要素間に挿入し、文字列が「たのしい Java Script 研修」となるようにせよ', function() {
      var textElement = document.getElementById('composed-text');

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---

      expect(textElement).to.be.instanceof(HTMLElement);
      expect(textElement.tagName).to.be.equal('P');
      expect(textElement.textContent.trim()).to.be.equal('たのしい Java Script 研修');
    });
  });

  describe('要素の削除', function() {

    it('[要素の削除] 文字列「Java Script Is Good」（id = deletable-text）は子要素を持っている。一番はじめの子要素を削除せよ', function() {
      var textElement = document.getElementById('deletable-text');

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---

      expect(textElement).to.be.instanceof(HTMLElement);
      expect(textElement.textContent.trim()).to.be.equal('Script Is Good');
    });

    it('[要素の削除] 文字列「Java Script Is Good」(id = deletable-text)の子要素を全て削除せよ', function() {
      var textElement = document.getElementById('deletable-text');

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---

      expect(textElement).to.be.instanceof(HTMLElement);
      expect(textElement.textContent.trim()).to.be.equal('');
    });

    it('[要素の削除] 文字列「Java Script Is Good」（id = deletable-text）自身を削除せよ', function() {
      var textElement = document.getElementById('deletable-text');

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---

      expect(document.getElementById('deletable-text')).to.be.equal(null);
    });
  });

  describe('演習問題', function() {

    it('[演習問題] チェックボックス(type = checkbox, name = checks)の要素からチェック済み項目の数を取得せよ', function() {
      // --- 以下にコードを書く ---
      var checkedCount;

      // --- ここまでコードを書く ---

      expect(checkedCount).to.be.equal(2);
    })

    // input(type = radio, name = radios)の要素を複数取得し、チェック済みの項目の値を取得せよ
    it('[演習問題] ラジオボタン(input, type = radio, name = radios)の要素からチェック済みの項目を探し、値を取得せよ', function() {
      // --- 以下にコードを書く ---
      var checkdValue;

      // --- ここまでコードを書く ---

      expect(checkdValue).to.be.equal('bar');
    })

    it('[演習問題] セレクトボックス(id = cred)の選択されている値を「巻き込み、巻き込まれよう」に変更せよ', function() {
      var selectElement = document.getElementById('cred');

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---

      expect(selectElement).to.be.instanceof(HTMLElement);
      expect(selectElement.tagName).to.be.equal('SELECT');
      expect(findSelectedOption(selectElement)).to.be.equal('巻き込み、巻き込まれよう');
    });
  });

  describe('スタイルの更新', function() {

    it('[スタイルの更新] div(class = box)の背景色を水色(#00FFFF)にせよ', function() {
      var elements = document.getElementsByClassName('box');

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---

      for(var i = 0; i < elements.length; i++) {
        var element = elements[i];
        expect(element).to.be.instanceof(HTMLElement);
        expect(element.style).to.have.property(secret('onpxtebhaqPbybe'), 'rgb(0, 255, 255)');
      }
    });

    it('[スタイルの更新] div(class = box)の境界線を水色(#00FFFF)にせよ', function() {
      var elements = document.getElementsByClassName('box');

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---

      for(var i = 0; i < elements.length; i++) {
        var element = elements[i];
        expect(element).to.be.instanceof(HTMLElement);
        expect(element.style).to.have.property(secret('obeqrePbybe'), 'rgb(0, 255, 255)');
      }
    });

    it('[スタイルの更新] div(class = box)の3番目の要素の幅と高さを倍にし、文字の高さ（line-height）を「100px」にせよ', function() {
      // --- 以下にコードを書く ---
      var element;

      // --- ここまでコードを書く ---

      expect(element).to.be.instanceof(HTMLElement);
      expect(element).to.have.property(secret('bssfrgJvqgu'), 106);
      expect(element).to.have.property(secret('bssfrgUrvtug'), 106);
    });

    it('[No Assert] div(class = box)の3番目の要素を円形にし、任意の背景画像を設定せよ', function() {
      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---
    });

    it('[No Assert] ボタン要素を作成し、スタイルを自由に設定後main(id = training-content)配下に追加せよ', function() {
      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---
    });

    it('[No Assert] SUSHIの画像(id = img-sushi)がどこかへ移動し続けるようにアニメーションを実装せよ', function() {
      var imgElement = document.getElementById('img-sushi');

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---
    });

    it('[No Assert] 意識の高い人の画像(id = img-ishiki-way-man)が往復して移動し続けるようにアニメーションを実装せよ', function() {
      var imgElement = document.getElementById('img-ishiki-way-man');

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---
    });
  });

  describe('演習問題', function() {

    it('[No Assert] style要素を追加して文字が赤色(#FF0000)となるクラスredTextを作成せよ', function() {
      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---
    });

    it('[No Assert] 円陣を組んだ人たちの画像(id = img-circle1)が回転し続けるようにアニメーションを設定せよ', function() {
      var imgElement = document.getElementById('img-circle1');

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---
    });

    it('[No Assert] 円陣を組んだ人たちの画像(id = img-circle2)が回転し続けるようにアニメーションを設定せよ（CSSアニメーションを用いること）', function() {
      var imgElement = document.getElementById('img-circle2');

      // --- 以下にコードを書く ---

      // --- ここまでコードを書く ---
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
