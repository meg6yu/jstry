'use strict';

var prepareValues = getPrepareValues();

describe('基礎', function() {

  // イントロダクション
  //
  // このレッスンではクライアントサイドJSの基礎について学びます。
  // 下記のテストが全てgreenになるようにしてください。

  describe('変数宣言(var)', function() {

    // hellojsという名前で変数を宣言しよう！中身はなんでもいいです。
    // --- 以下にコードを書く ---

    var hellojs = "hello world";

    // --- ここまでコードを書く ---
    it('varで変数が宣言できること', function() {
      expect(hellojs);
    });
  });

  // varで宣言した変数には任意の型の値が入ることを確認します。
  // また、1度値を代入した後に違う型の値を代入することができることを確認します。
  describe('変数に型がないことを確認', function() {

    // teststringという変数を宣言してその中に文字列'hello'を代入してみましょう。
    // testnumberという変数を宣言してその中に数字100を代入してみましょう。
    // testmixという変数を宣言して、文字列'hoge'を代入した後に数字2を代入しましょう。
    // --- 以下にコードを書く ---

    var teststring = "hello";
    var testnumber = 100;
    var testmix = "hoge";
    testmix = 2;

    // --- ここまでコードを書く ---
    it('文字列入りの変数を宣言', function() {
      expect(teststring).to.be.a('string');
    });

    it('数字入りの変数を宣言', function() {
      expect(testnumber).to.be.a('number');
    });

    it('文字列入りの変数を宣言して、その変数に数字を代入', function() {
      expect(testmix).to.be.a('number');
    });
  });


  describe('関数宣言', function() {

    // 関数returnHelloを宣言しましょう。この関数は'hello'を返すだけの関数です。
    // また、関数を実行し、戻り値を変数returnValueに入れましょう。
    // --- 以下にコードを書く ---

    function returnHello() {
    	return 'hello';
    };
    var returnValue = returnHello();

    // --- ここまでコードを書く ---
    it('関数を宣言する', function() {
      expect(returnHello).to.be.a('function');
    });
    it('関数を正しく実装する', function() {
      expect(returnHello()).to.equal('hello');
    });
    it('関数の実行結果がhelloになっている', function() {
      expect(returnValue).to.equal('hello');
    });
  });


  describe('無名関数宣言', function() {

    // 無名関数を宣言し、変数anonymousHelloに代入しましょう。この関数は'anonymous hello'を返すだけの関数です。
    // また、関数を実行し、戻り値を変数returnValueに入れましょう。
    // --- 以下にコードを書く ---

    var anonymousHello = function () {
    	return 'anonymous hello';
    }
    var returnValue = anonymousHello();

    // --- ここまでコードを書く ---
    it('無名関数を宣言、変数に代入する', function() {
      expect(anonymousHello).to.be.a('function');
    });
    it('関数を正しく実装する', function() {
      expect(anonymousHello()).to.equal('anonymous hello');
    });
    it('関数の実行結果がanonymous helloになっている', function() {
      expect(returnValue).to.equal('anonymous hello');
    });
  });

  describe('オブジェクト宣言', function () {

    // 変数objを宣言して、その中に{a:1, b:2}を代入してみましょう。
    // --- 以下にコードを書く ---

    var obj = {a:1, b:2};

    // --- ここまでコードを書く ---
    it('オブジェクトを宣言', function() {
      expect(obj).to.be.a('object');
    });
    it('オブジェクトの中身が正しい', function() {
      expect(obj).to.deep.equal({a:1, b:2});
    });


  });


  describe('コンストラクタ', function () {

    // 関数Dogを引数name, cryを取るコンストラクタとして定義しましょう。
    // コンストラクタの振る舞いは、nameをthis.nameに格納し、this.getCryにcryをreturnする関数を宣言してみましょう。
    // 定義したコンストラクタを変数dogにnameを'コロ'、cryを'ワン'でnewして代入してみましょう。
    // --- 以下にコードを書く ---

    function  Dog(name, cry) {
    	this.name = name;
    	this.getCry = function() { 
    		return cry;
    	}
    }
    var dog = new Dog ('コロ', 'ワン');

    // --- ここまでコードを書く ---
    it('コンストラクタが正しく定義されているか', function() {
      var testDog = new Dog('dogname', 'cry');
      expect(testDog.name).to.equal('dogname');
      expect(testDog.getCry()).to.equal('cry');
    });
    it('コロとワンで初期化されているか', function() {
      expect(dog.name).to.equal('コロ');
      expect(dog.getCry()).to.equal('ワン');
    });

  });


  describe('いろとりどりのthis', function () {

    // 以下thisを使用してください。
    // 変数objForThisにオブジェクトを代入しましょう。内容はvalue=10、getValueがvalueの内容を返す関数です。
    // 変数objForFunctionThisにオブジェクトを代入しましょう。内容はvalue=10、getValueがgetValueExternalを呼び出してその戻り値を返す関数です。
    // getValueを実行して変数returnObjに代入しようとするとエラーで落ちることを確認します。
    // 今度はobjForFunctionThisのgetValueを改造しvalueが返るように修正しましょう。
    // 最後に関数Dogをコンストラクタのところで作ったのと同じ要件で作成し、name'いぬ'cry'わん'でnewして変数dogに代入しましょう。
    function getValueExternal() {
      return this.value;
    }
    // --- 以下にコードを書く ---

    var objForThis = {value:10,  getValue:function() {return this.value}};
    var objForFunctionThis = {value:10, getValue:function() {return getValueExternal.apply(this)}}; ///////check!!
    var returnObj = objForFunctionThis.getValue;
    function  Dog(name, cry) {
    	this.name = name;
    	this.getCry = function() { 
    		return cry;
    	}
    }
    var dog = new Dog('いぬ', 'わん');

    // --- ここまでコードを書く ---
    it('objForThisのgetValueで10が返ってくるか', function() {
      expect(objForThis.getValue()).to.equal(10);
    });
    it('objForFunctionThisのgetValueで10が返ってくるか', function() {
      expect(objForFunctionThis.getValue()).to.equal(10);
    });
    it('dogがいぬとわんで初期化されているか', function() {
      expect(dog.name).to.equal('いぬ');
      expect(dog.getCry()).to.equal('わん');
    });

  });


  describe('文字列型', function () {

    // 変数penSnipet1を'This is'という内容で宣言しましょう。
    // 変数penSnipet2を'a pen'という内容で宣言しましょう。
    // 変数penSentenceに、penSnipet1+' '+penSnipet2を代入しましょう。
    // penSentenceと'This is a pen'を比較し、その結果を変数penEqualに代入しましょう。
    // 変数penLengthに変数penSentenceの中身の文字列の長さを代入しましょう。
    // --- 以下にコードを書く ---

    var penSnipet1 = 'This is';
    var penSnipet2 = 'a pen';
    var penSentence = penSnipet1 + ' ' + penSnipet2;
    var penEqual = penSentence === 'This is a pen';
    var penLength = penSentence.length;

    // --- ここまでコードを書く ---
    it('penSnipet1を宣言', function() {
      expect(penSnipet1).to.equal('This is');
    });
    it('penSnipet2を宣言', function() {
      expect(penSnipet2).to.equal('a pen');
    });
    it('penSentenceがpenSnipet1+\' \'+penSnipet2になっているか', function() {
      expect(penSentence).to.equal('This is a pen');
    });
    it('penEqualに比較結果が正しく入っているか', function() {
      expect(penEqual).to.ok;
    });
    it('penLengthにpenSentenceの長さが入っているか', function() {
      expect(penLength).to.equal(13);
    });


  });

  describe('数値型', function () {

    // 変数xを10という内容で宣言しましょう。
    // 変数yを3という内容で宣言しましょう。
    // 変数zに、x + y * 5を代入しましょう。
    // 変数zと35を比較し、その結果を変数numNotEqualに代入しましょう。
    // Math.pow関数をつかって、2の10乗を計算し、その結果を変数loveNumber代入しましょう。
    // 変数numNaNに数字ではない文字列をnumber型に変換することでNaNを作り代入しましょう。
    // --- 以下にコードを書く ---

    var x = 10;
    var y = 3;
    var z = x + y * 5;
    var numNotEqual = z == 35;
    var loveNumber = Math.pow(2, 10);
    var numNaN = Number('hoge');

    // --- ここまでコードを書く ---
    it('xを宣言', function() {
      expect(x).to.equal(10);
    });
    it('yを宣言', function() {
      expect(y).to.equal(3);
    });
    it('zがx + y * 5になっているか', function() {
      expect(z).to.equal(25);
    });
    it('numNotEqualnい比較結果が正しく入っているか', function() {
      expect(numNotEqual).to.not.ok;
    });
    it('2の10乗がloveNumberに入っているか', function() {
      expect(loveNumber).to.equal(1024);
    });
    it('numNaNにNaNが入っているか', function() {
      expect(Number.isNaN(numNaN)).to.ok; // なぜか.NaNが動かなかった
    });


  });

  describe('Boolean', function () {

    // 変数boolTrueにtrueを代入しましょう。
    // 変数toggledBooleanにboolTrueを反転した内容を代入しましょう。
    // --- 以下にコードを書く ---

    var boolTrue = true;
    var toggledBoolean = !boolTrue;

    // --- ここまでコードを書く ---
    it('boolTrueを宣言', function() {
      expect(boolTrue).to.ok;
    });
    it('toggledBooleanがboolTrueの反転になっているか', function() {
      expect(toggledBoolean).to.not.ok;
    });


  });


  describe('nullとundefined', function () {

    // 変数returnedNullにdocument.getElementById('noExistedId')を代入しましょう。
    // (ここではnoExistedIdというID名の要素がHTML上にないということだけ認識してください)
    // 変数returnedUndefinedを何も代入せずに宣言してください。
    // 2つが別物であることを確認するためにreturnedNull === returnedUndefinedを変数differentStateに代入してください。
    // differentStateがfalseになっていることをアサートします。
    // --- 以下にコードを書く ---

    var returnedNull = document.getElementById('noExistedId');
    var returnedUndefined;
    var differentState = returnedNull === returnedUndefined;

    // --- ここまでコードを書く ---
    it('returnedNullがnullになっていることを確認', function() {
      expect(returnedNull).to.be.null;
    });
    it('returnedUndefinedがundefinedになっていることを確認', function() {
      expect(returnedUndefined).to.be.undefined;
    });
    it('returnedNull === returnedUndefinedがfalseであることを確認', function() {
      expect(differentState).to.not.ok;
    });


  });


  describe('型', function () {

    // 変数string100に'100'を代入しましょう。
    // 変数number100にstring100をnumber型に変換した値を代入しましょう。
    // 変数stringResultにnumber100*20+10を文字列型に変換した値を代入しましょう。
    // --- 以下にコードを書く ---

    var string100 = '100';
    var number100 = Number(string100);
    var stringResult = String(number100 * 20 + 10);

    // --- ここまでコードを書く ---
    it('string100を宣言', function() {
      expect(string100).to.equal('100');
    });
    it('number100が数値型になっているか', function() {
      expect(number100).to.equal(100);
    });
    it('stringResultに文字列型の正しい結果が入っているか', function() {
      expect(stringResult).to.equal('2010');
    });


  });

  describe('if文が書ける', function () {

    // if文をつかって、変数ifResultにprepareValues.ifConditionがtrueなら'ifOk'、falseなら'ifNg'を代入しましょう。
    // --- 以下にコードを書く ---

    var ifResult;
    if(prepareValues.ifCondition) {
    	ifResult = 'ifOk';
    } else {
    	ifResult = 'ifNg';
    }

    // --- ここまでコードを書く ---
    it('ifResultにif文で分岐した結果が入っているか', function() {
      expect(ifResult).to.equal('ifOk');
    });


  });

  describe('switch文が書ける', function () {

    // switch文をつかって、変数switchResultにprepareValues.switchConditionが'red'なら'#FF0000'、'green'なら'#00FF00'、'blue'なら'#0000FF'を代入しましょう。
    // --- 以下にコードを書く ---

    var switchResult;

    switch(prepareValues.switchCondition) {
    	case 'red':
    	switchResult = '#FF0000';
    	break;

    	case 'green':
    	switchResult = '#00FF00';
    	break;

    	case 'blue':
    	switchResult = '#0000FF';
    	break;
    }

    // --- ここまでコードを書く ---
    it('switchResultにswitch文で分岐した結果が入っているか', function() {
      expect(switchResult).to.equal('#0000FF');
    });


  });

  describe('while文が書ける', function () {

    // while文を使って、1から100までの数を足しあわせてその結果を変数whileResultに代入しましょう。
    // --- 以下にコードを書く ---
    var count = 1;
    var whileResult = 0;

    while(count <= 100) {
    	whileResult += count;
    	count++;
    }


    // --- ここまでコードを書く ---
    it('whileResultに1から100までの和が入っているか', function() {
      expect(whileResult).to.equal(5050);
    });


  });

  describe('for文が書ける', function () {

    // for文を使って、1から100までの数を足しあわせてその結果を変数forResultに代入しましょう。
    // --- 以下にコードを書く ---

    var forResult = 0;

    for(var i = 1; i <= 100; i++) {
    	forResult += i;
    }

    // --- ここまでコードを書く ---
    it('forResultに1から100までの和が入っているか', function() {
      expect(forResult).to.equal(5050);
    });


  });


  describe('forin文が書ける', function () {

    // forin文を使って、prepareValues.forinDataの各要素の値(中身は整数)を足しあわせてその結果を変数forinResultに代入しましょう。
    // また、forinDataのkeyを連結して変数forinKeysに代入しましょう。
    // --- 以下にコードを書く ---

	var forinKeys = "";
    var forinResult = 0;
    for (var key in prepareValues.forinData) {
    	forinKeys += key;
    	forinResult += prepareValues.forinData[key]; 	
    }

    // --- ここまでコードを書く ---

    it('forinKeysにforinDataのkeyの連結文字列が入っているか', function() {
      expect(forinKeys).to.equal('abcdefgh');
    });
    it('forinResultにforinDataの値の和が入っているか', function() {
      expect(forinResult).to.equal(54);
    });

  });


  describe('例外処理が書ける', function () {

    // prepareValues.isErrorをチェックして、trueならprepareValues.errorMsgをエラー内容として例外をthrowしましょう。
    // catch節ではエラーのmessageを変数errorMsgに格納しましょう。
    // 例外が起きても起きなくても処理が終了した後に変数finallyMsgに'finally'を代入しましょう。
    // --- 以下にコードを書く ---

	if (prepareValues.isError) {
	    try {
	    	throw prepareValues.errorMsg;
	    } catch (e) {
	    	var errorMsg = e;
	    } finally {
	    	var finallyMsg = 'finally';
	    }
	}　

    // --- ここまでコードを書く ---
    it('errorが起こっていたらerrorMsgにエラーメッセージが入っているか', function() {
      expect(errorMsg).to.equal('error');
    });
    it('finallyMsgが代入されているか', function() {
      expect(finallyMsg).to.equal('finally');
    });


  });


});
