'use strict';


describe('7章　データ処理', function() {
  describe('配列についてわかる', function() {
    it('4つ要素をもつ配列を作成せよ', function() {
      var answer = null;

      assert.equal(answer.length, 4);
    });

    it('配列の文字列を「,」で結合せよ', function() {
      var a = ['one', 'two', 'three', 'four'];
      var answer = null;

      assert.equal(answer, "one,two,three,four");
    });
        
    it('2つ配列を結合せよ', function() {
      var a = ['one', 'two', 'three', 'four'];
      var b = [1, 2, 3, 4];
      var answer = null;

      assert.deepEqual(answer, ['one', 'two', 'three', 'four', 1, 2, 3, 4]);
    });
       
    it('配列の各要素を2倍せよ', function() {
      var a = [1, 2, 3, 4];
      var answer = null;

      assert.deepEqual(answer, [2, 4, 6, 8]);
    });
    
    it('配列の各要素を乗算せよ', function() {
      var a = [1, 2, 3, 4];
      var answer = null;

      assert.equal(answer, 24);
    });
    
  });

  describe('JSONについてわかる', function() {

    describe('JSON.parseについて分かる', function() {
      var answer = null;
      var obj = JSON.parse(answer);
      it('スコープについてわかる', function() {
        assert.equal(obj.a, "hello");
      });   
      it('スコープについてわかる', function() {
        assert.equal(obj.b[2], 5);
      }); 
      it('スコープについてわかる', function() {
        assert.equal(obj.b.length, 4);
      });  
      it('スコープについてわかる', function() {
        assert.equal(obj.c, false);
      });
      it('スコープについてわかる', function() {
        assert.equal(obj.d, null);
      });
      it('スコープについてわかる', function() {
        assert.equal(obj.b[1] + obj.b.length, 8);
      });
    });
    

      it('JSON.stringifyについてわかる', function() {
        var answer = null;
        var str = JSON.stringify(answer);
        assert.equal(str, '{"x":"javascript!!","java":"????","R5RS":555,"scala":false}');
      });   
    });
    

 
  describe('日付についてわかる', function() {
    it('ビズリーチ創業日の一ヶ月後の日付を求めよ', function() {
      var a = new Date(2009, 4, 14);
      var answer = null;
    
      assert.deepEqual(answer, new Date(2009, 5, 14));
    });
    
    it('ビズリーチ創業日の40日後の日付を求めよ', function() {
      var a = new Date(2009, 4, 14);
      var answer = null;
    
      assert.deepEqual(answer, new Date(2009, 5, 23));
    });
    
    it('入社日はビズリーチ創業日から何日後か求めよ', function() {
      var a = new Date(2009, 4, 14);
      var b = new Date(2016, 4, 1);
      var answer = null;
    
      assert.equal(answer, 2544);
    });
  });

  
});
