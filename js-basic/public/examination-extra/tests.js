'use strict';

describe('2日目までの復習テスト エクストラ問題編', function() {

  it(showTitle('fizzBuzz'), function() {

    // 3の倍数を入力すると「fizz」。5の倍数を入力すると「buzz」
    // 3と5の倍数が入力すると「fizz buzz」、それ以外の場合は入力された数値を文字列として返す関数fを実装せよ
    // --- 以下にコードを書く ---
    var f;
    // --- ここまでコードを書く ---

    assert.deepEqual(f(1), '1');
    assert.deepEqual(f(3), 'fizz');
    assert.deepEqual(f(5), 'buzz');
    assert.deepEqual(f(15), 'fizz buzz');
    assert.deepEqual(f(43), '43');
    assert.deepEqual(f(50), 'buzz');
    assert.deepEqual(f(75), 'fizz buzz');
    assert.deepEqual(f(78), 'fizz');
  });

  it(showTitle('素数チェック'), function() {

    // 入力された値n（nば1以上の整数）が素数である場合「n prime」、そうではない場合はnを文字列として返す関数fを実装せよ
    // --- 以下にコードを書く ---
    var f;
    // --- ここまでコードを書く ---

    assert.deepEqual(f(1), '1 prime');
    assert.deepEqual(f(2), '2 prime');
    assert.deepEqual(f(4), '4');
    assert.deepEqual(f(59), '59 prime');
    assert.deepEqual(f(111), '111');
    assert.deepEqual(f(9871), '9871 prime');
    assert.deepEqual(f(22853), '22853 prime');
    assert.deepEqual(f(517613), '517613 prime');
    assert.deepEqual(f(9961009), '9961009 prime');
    assert.deepEqual(f(93637499), '93637499 prime');
    assert.deepEqual(f(872804623), '872804623 prime');
    assert.deepEqual(f(4923937441), '4923937441 prime');
  });

  it(showTitle('素数チェック改'), function() {

    // 入力された値n（nば1以上の整数）が素数である場合「n prime」、そうではない場合はnを文字列として返す関数fを実装せよ
    // ただしwhile, for、for in、forEachの使用は禁止とする
    // また、なるべく高速に動作するよう実装せよ
    // --- 以下にコードを書く ---
    var f;
    // --- ここまでコードを書く ---

    assert.deepEqual(f(1), '1 prime');
    assert.deepEqual(f(2), '2 prime');
    assert.deepEqual(f(4), '4');
    assert.deepEqual(f(59), '59 prime');
    assert.deepEqual(f(111), '111');
    assert.deepEqual(f(9871), '9871 prime');
    assert.deepEqual(f(22853), '22853 prime');
    assert.deepEqual(f(517613), '517613 prime');
    assert.deepEqual(f(9961009), '9961009 prime');
    assert.deepEqual(f(93637499), '93637499 prime');
    assert.deepEqual(f(872804623), '872804623 prime');
    assert.deepEqual(f(4923937441), '4923937441 prime');
  });

  it(showTitle('オブジェクト内検索'), function() {
    var object = {
      foo: 1,
      bar: {
        baz: 2,
        qux: 'qux'
      },
      quux: {
        corge: {
          grault: [3, 4, 5],
          garply: false
        },
        waldo: '1234',
        fred: function() {
          return {
            plugh: 6,
            xyzzy: function() {
              return NaN;
            },
            thud: [7, 8, 9, 10]
          };
        },
      }
    };
    var expect = 55;

    // objectから数値を探しだし、全て足しあわせよ
    // 文字列やBooleanは考慮する必要はないが、配列やオブジェクト、関数からは取得せよ
    // またNaNは足し合わせなくてよい
    // --- 以下にコードを書く ---
    var actual;
    // --- ここまでコードを書く ---

    assert.equal(actual, expect);
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
