'use strict';

describe('2日目までの復習テスト 基本問題編', function() {
  describe('基本文法', function() {

    it(showTitle('変数の理解'), function() {
      var expect = true

      // 変数fooに任意の値を入れて定義せよ
      // --- 以下にコードを書く ---

      var foo = 1;
      
      // --- ここまでコードを書く ---

      assert.equal(foo !== undefined, expect);
    });

    it(showTitle('関数の実行'), function() {
      function calcTax(money) {
        return money * 1.08;
      }
      var expect = 1080;

      // calcTaxに引数を与えて実行せよ
      // --- 以下にコードを書く ---

      var actual = calcTax(1000);
      
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

    it(showTitle('関数オブジェクトの定義'), function() {
      var call = function(where, name) {
        return 'Hello ' + where + '! and ' + name + '!';
      };
      var expect = 'Hello World! and SAW!';

      // 期待するメッセージを返す関数callを実行せよ
      // --- 以下にコードを書く ---

      var actual = call("World", "SAW");

      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

  });


  describe('オブジェクトの理解', function() {

    var object = {
      foo: 1,
      bar: 'baz',
      qux: true,
      quux: {
        corge: 2,
        grault: 'garply',
        waldo: function() {
          return 'javascript';
        }
      }
    };

    it(showTitle('オブジェクトのネスト'), function() {
      var expect = 3;

      // object内の数値を加算せよ
      // --- 以下にコードを書く ---

      var actual = object.foo + object.quux.corge;
      
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

    it(showTitle('オブジェクト内の関数実行'), function() {
      var expect = 'javascript';

      // objectから'javascript'を取得せよ
      // --- 以下にコードを書く ---

      var actual = object.quux.waldo();
      
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });
  });

  describe('文字列型の操作', function() {

    var corporateName = 'bizreach';

    it(showTitle('文字数を取得'), function() {
      var expect = 8;

      // corporateNameの文字数を取得せよ
      // --- 以下にコードを書く ---

      var actual = corporateName.length;
      
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

    it(showTitle('大文字に変換'), function() {
      var expect = 'BIZREACH';

      // corporateNameを大文字に変換せよ
      // --- 以下にコードを書く ---

      var actual = corporateName.toUpperCase();

      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

    it(showTitle('文字列の一部を取得'), function() {
      var expect = 'rea';

      // corporateNameの4文字目から6文字目を取得せよ
      // --- 以下にコードを書く ---

      var actual = corporateName.slice(3,6);
      
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

  });

  describe('型変換', function() {

    it(showTitle('文字列から数値へ1'), function() {
      var numberStr = '100';
      var expect = 100;

      // numberStrを数値へ変換せよ
      // --- 以下にコードを書く ---

      var actual = Number(numberStr);
      
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

    it(showTitle('文字列から数値へ2'), function() {
      var numberStr = '100JavaScript';
      var expect = 100;

      // numberStrを数値へ変換せよ
      // --- 以下にコードを書く ---

      var actual = parseInt(numberStr, 10); //変換対象
      
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

    it(showTitle('文字列から数値へ3'), function() {

      // 10進数で100になる16進数を入力せよ
      // --- 以下にコードを書く ---

      var numberStr = (100).toString(16);
      
      // --- ここまでコードを書く ---

      var expect = 100;
      var actual = parseInt(numberStr, 16);
      assert.equal(actual, expect);
    });

    it(showTitle('Booleanへの変換'), function() {
      var expect = false;

      // falseと一致する値を入力せよ(!true, falseは除く)
      // --- 以下にコードを書く ---

      var actual = 2 > 10;
      
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

  });

  describe('制御文', function() {

    it(showTitle('if - else'), function() {

      // 入力された文字列の長さが5以上ならtrue、それ以外の場合はfalseを返す関数fを実装せよ
      // --- 以下にコードを書く ---

      var f = function(str) {
        return str.length >= 5;
      };
      
      // --- ここまでコードを書く ---

      assert.equal(f('hello'), true);
      assert.equal(f('hello work'), true);
      assert.equal(f('work'), false);
      assert.equal(f('orz'), false);
    });

    it(showTitle('switch'), function() {

      // 入力された数値が
      // 65 => A, 90 => Z, 97 => a, 122 => z
      // と返す関数fを実装せよ（それ以外の数値の場合は特に規定しない）
      // --- 以下にコードを書く ---

      var f = function(num) {
        switch(num) {
          case 65:
          return 'A';
          break;

          case 90:
          return 'Z';
          break;

          case 97:
          return 'a';
          break;

          case 122:
          return 'z';
          break;
        }
    }
      
      // --- ここまでコードを書く ---

      assert.equal(f(65), 'A');
      assert.equal(f(90), 'Z');
      assert.equal(f(97), 'a');
      assert.equal(f(122), 'z');
    });

    it(showTitle('for'), function() {
      var array = [1, 3, 5, 7, 9];
      var expect = 25;

      // 配列の値を全て足しあわせよ
      // --- 以下にコードを書く ---

      var actual = 0;
      for(var i = 0; i < array.length; i++) {
        actual += array[i];
      };
      
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

    it(showTitle('for in'), function() {
      var object = {foo: 2, bar: 4, baz: 6, qux: 8};
      var expect = 20;

      // オブジェクトの値を全て足しあわせよ
      // --- 以下にコードを書く ---

      var actual = 0;
      for (var key in object) {
        actual += object[key];
      }
      
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

  });

  describe('評価式', function() {

    it(showTitle('同値演算子'), function() {
      var valueA = true;
      var valueB = 1;
      var expect = false;

      // valueAとvalueBの比較結果がfalseとなるようにせよ
      // --- 以下にコードを書く ---

      var actual = (valueA === valueB);
      
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

  });

  describe('配列', function() {

    it(showTitle('要素アクセス'), function() {
      var expect = 'hello';

      // 配列変数arrayを作り、1個目の要素に'hello'を入力せよ
      // --- 以下にコードを書く ---

      var array = ['hello'];
      
      // --- ここまでコードを書く ---

      var actual = array[0];
      assert.equal(actual, expect);
    });

    it(showTitle('配列の要素数'), function() {
      var expect = 100;

      // 配列変数arrayの要素数を100にせよ（なるべく短く記述せよ）
      // --- 以下にコードを書く ---

      var array = [];
      // for (var i = 0; i < 100; i++) {
      //   array.push(i);
      // }
      var i = 0;
      while (i < 100) {
        array.push(i++);
      }
      
      // --- ここまでコードを書く ---

      var actual = array.length;
      assert.equal(actual, expect);
    });

    it(showTitle('Arrayクラスのメソッド1'), function() {
      var array = [1, 2, 3, 4, 5];
      var expect = '1,2,3,4,5';

      // 配列を結合し、期待する文字列に変換せよ
      // --- 以下にコードを書く --

      var actual = '';
      for (var i = 0; i < array.length; i++) {
        if(i == 0) {
          actual += array[i];
        } else {
          actual += ',' + array[i];
        }
      }
      
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

    it(showTitle('Arrayクラスのメソッド2'), function() {
      var array = [1, 2, 3, 4, 5];
      var expect = [1, 3, 5];

      // 偶数を取り除いた配列を作成せよ
      // --- 以下にコードを書く --
      
      var actual = [];
      for (var i = 0; i < array.length; i++) {
        if(array[i] % 2 != 0) {
          actual.push(array[i]);
        }
      }

      // var actual = array.filter(function(element){
      //   return 
      // })

      // --- ここまでコードを書く ---

      assert.deepEqual(actual, expect);
    });

    it(showTitle('Arrayクラスのメソッド3'), function() {
      var array = [1, 10, 2, 4, 9, 9, 8, 3];
      var expect = [10, 9, 9, 8, 4, 3, 2, 1];

      // 配列をソートし降順（大きい値順）にせよ
      // --- 以下にコードを書く --
      var actual;
      // --- ここまでコードを書く ---

      assert.deepEqual(actual, expect);
    });

  });

  describe('JSON', function() {

    it(showTitle('JSONパース'), function() {
      var expect = {
        foo: 1,
        bar: 'baz',
        qux: {
          quux: true,
          corge: 2
        }
      };

      // 与えられたオブジェクトと同等のJSON文字列を作成し、オブジェクトへ変換せよ
      // --- 以下にコードを書く --
      var json;
      // --- ここまでコードを書く ---

      var actual = JSON.parse(json);
      assert.deepEqual(actual, expect);
    })

    it(showTitle('JSONへ変換'), function() {
      var expect = '{"foo":1,"bar":{"baz":2,"qux":"quux"}}';

      // 与えられたJSON文字列と同等のオブジェクトを作成し、JSON文字列へ変換せよ
      // --- 以下にコードを書く --
      var object;
      // --- ここまでコードを書く ---

      var actual = JSON.stringify(object);
      assert.equal(actual, expect);
    })

  });

  describe('日付', function() {

    it(showTitle('HRMOSのローンチ日'), function() {
      var expect = '2016年6月14日';

      // HRMOSのローンチ日をDateで作成し「YYYY年M月d日」のフォーマットにせよ
      // --- 以下にコードを書く --
      var actual;
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

    it(showTitle('Swimmyのローンチ日'), function() {
      var expect = '2016年6月15日';

      // HRMOSのローンチ日をDateで作成後、1日後のDateに変換して「YYYY年M月d日」のフォーマットにせよ
      // --- 以下にコードを書く --
      var actual;
      // --- ここまでコードを書く ---

      assert.equal(actual, expect);
    });

  });

  describe('再帰関数', function() {

    it(showTitle('階乗計算'), function() {

      // 数値を入力すると階乗を出力する関数fを実装せよ
      // 階乗とは https://ja.wikipedia.org/wiki/%E9%9A%8E%E4%B9%97
      // 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800
      // --- 以下にコードを書く --
      var f;
      // --- ここまでコードを書く ---

      var expect = 3628800;
      var actual = f(10);

      assert.equal(actual, expect);
    });

  });

  describe('クロージャ', function() {

    it(showTitle('カウントアップ'), function() {

      // 呼び出すたびに1, 2, 3とカウントアップする関数を実装せよ
      // --- 以下にコードを書く --
      var f;
      // --- ここまでコードを書く ---

      assert.equal(f(), 1);
      assert.equal(f(), 2);
      assert.equal(f(), 3);
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
