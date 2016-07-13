'use strict';

describe('4章　文、式、演算子', function() {
  describe('式の評価順がわかる', function() {
    it('四則演算の優先順位がわかる', function() {
      var answer = 19;
      var expected = function () {
        return 1 + 2 * 9;
      };
      assert.equal(answer, expected());
    });
    
    it('オペランドの演算順についてわかる', function() {
      var answerX = 1000;
      var answerY = 1000;
      var x = 100;
      var y = 1000;

      var runner = function () {
        return true ? function () {x = x * 10}() : function () {y = y * 10}();
      };
      runner();
      // trueで前半だけ通る　三項演算子  
      assert.equal(answerX, x);
      assert.equal(answerY, y);
    });

     it('演算子の優先順位についてわかる', function() {
      var answer = 2;
      var expected = function () {
        return 5 > 1 ? 3 > 4 ? 1 : 2 : 4;
      };
      // 5 > 1 ? (3 > 4 ? 1 : 2) : 4
      // 5 > 1 ? 2 : 4
      assert.equal(answer, expected());
    });


                
    it('演算子の優先順位についてわかる', function() {
      var answer = 4;
      var expected = function () {
        return 5 > 7 ? 3 : 4 + 4 > 5 ? 4 : 2;
      };
      // (5 > 7 ? 3 : 4) + 4 > 5 ? 4 : 2
      // 4 + 4 > 5 ? 4 : 2
      // 8 > 5 ? 4 : 2
      assert.equal(answer, expected());
    });

     it('括弧が付いた時の演算子の優先順位についてわかる', function() {
      var answer = 2;
      var expected = function () {
        return 5 > 1 ? (3 > 4 ? 1 : 2) : 4;
      };
      // 5 > 1 ? (3 > 4 ? 1 : 2) : 4
      // 5 > 1 ? 2 : 4
      assert.equal(answer, expected());
    });
     
     it('括弧が付いた時の演算子の優先順位についてわかる', function() {
      var answer = 4;
      var expected = function () {
        return (5 > 1 ? 3 : 4) + 4 > 5 ? 4 : 2;
      };
      // (5 > 1 ? 3 : 4) + 4 > 5 ? 4 : 2
      // 3 + 4 > 5 ? 4 : 2
      assert.equal(answer, expected());
    });
       
    
  });

  describe('演算子についてわかる', function() {
    var obj = {value: 99};
    obj.toString = function(){return '1234';};
    
    it('算術演算子についてわかる', function() {
      var answer = 10;
      var expected = function () {
        var n = 10;
        return n++; //最後に++
      };
      assert.equal(answer, expected());
    });
    
    it('算術演算子についてわかる', function() {
      var answer = 9;
      var expected = function () {
        var n = 10;
        return --n;
      };
      assert.equal(answer, expected());
    });
    
    it('算術演算子についてわかる', function() {
      var answer = '1hello';
      var expected = function () {
        return 1 + 'hello';
      };
      assert.equal(answer, expected());
    });
    
    it('同値演算子についてわかる', function() {
      var answer = false;
      var expected = function () {
        return null === 3;
      };
      assert.equal(answer, expected());
    });
    
    it('同値演算子についてわかる', function() {
      var answer = true;
      var expected = function () {
        return 3 === 3;
      };
      assert.equal(answer, expected());
    });
    
    it('同値演算子についてわかる', function() {
      var answer = false;
      var expected = function () {
        return true === 'hello';
      };
      assert.equal(answer, expected());
    });
    
    it('同値演算子についてわかる', function() {
      var answer = false;
      var expected = function () {
        return 3 === "3";
      };
      assert.equal(answer, expected());
    });
 
     it('同値演算子についてわかる', function() {
      var answer = false;
      var expected = function () {
        return obj === "1234";
      };
      assert.equal(answer, expected());
    });
       
    it('同値演算子についてわかる', function() {
      var answer = false;
      var expected = function () {
        return 3 == null;
      };
      assert.equal(answer, expected());
    });
    
    it('同値演算子についてわかる', function() {
      var answer = false;
      var expected = function () {
        return undefined == 1;
      };
      assert.equal(answer, expected());
    });
    
    it('同値演算子についてわかる', function() {
      var answer = true;
      var expected = function () {
        return 1 == '1'; //型変換しない
      };
      assert.equal(answer, expected());
    });
    
    it('同値演算子についてわかる', function() {
      var answer = true;
      var expected = function () {
        return 1 == true;
      };
      assert.equal(answer, expected());
    });
    
    it('同値演算子についてわかる', function() {
      var answer = true;
      var expected = function () {
        return '0' == false;
      };
      assert.equal(answer, expected());
    });   
    
    it('同値演算子についてわかる', function() {
      var answer = false;
      var expected = function () {
        return obj == 99;
      };
      assert.equal(answer, expected());
    });

    it('同値演算子についてわかる', function() {
      var answer = true; //true
      var expected = function () {
        return obj == '1234'; ///////////////////////
      };
      assert.equal(answer, expected());
    });
        
    it('比較演算子についてわかる', function() {
      var answer = false;
      var expected = function () {
        return 1 > 2;
      };
      assert.equal(answer, expected());
    });
    
    it('比較演算子についてわかる', function() {
      var answer = true;
      var expected = function () {
        return 5 > '2'; //型むし
      };
      assert.equal(answer, expected());
    });
    
    it('比較演算子についてわかる', function() {
      var answer = false;
      var expected = function () {
        return '122' > '42';
      };
      assert.equal(answer, expected());
    });
    
    it('比較演算子についてわかる', function() {
      var answer = false;
      var expected = function () {
        return 1 > 'x'
      };
      assert.equal(answer, expected());
    });
    
    it('比較演算子についてわかる', function() {
      var answer = true;
      var expected = function () {
        return 1 > false
      }
      assert.equal(answer, expected())
    });
    
    it('比較演算子についてわかる', function() {
      var answer = false;
      var expected = function () {
        return 1 > 'false' ////////////////////// 文字falseってことか！
      };
      assert.equal(answer, expected());
    });
    
    it('比較演算子についてわかる', function() {
      var answer = true;
      var expected = function () {
        return 1 > null
      };
      assert.equal(answer, expected());
    });
    
    it('比較演算子についてわかる', function() {
      var answer = false;
      var obj  = {};
      var expected = function () {
        return 1 > obj;
      };
      assert.equal(answer, expected());
    });
 
     it('比較演算子についてわかる', function() {
      var answer = false;
      var obj  = {};
      obj.valueOf = function() {1};
      var expected = function () {
        return 1 > obj;
      };
      assert.equal(answer, expected());
    });
    
    it('論理演算子についてわかる', function() {
      var answer = false;
      var expected = function () {
        return true && false; /////////////////////////// どっちもtrueにならないから？
      };
      assert.equal(answer, expected());
    });
    
    it('論理演算子についてわかる', function() {
      var answer = true;
      var expected = function () {
        return 1 > 3 || 4 > 3; //片方がtrueだから？
      };
      assert.equal(answer, expected());
    });
    
    it('論理演算子についてわかる', function() {
      var answer = '2';
      var expected = function () {
        return 1 > 3 || '2'; /////////////////// これも不思議 1>3がfalseだから
      };
      assert.equal(answer, expected());
    });
    
    it('論理演算子についてわかる', function() {
      var answer = true;
      var expected = function () {
        return 1 < 3 || '2';
      };
      assert.equal(answer, expected());
    });
    
    it('論理演算子についてわかる', function() {
      var x = 10;
      var answer = false;
      var answerX = 10;
      var expected = function () {
        return false && function () {x = x * 10; return 5}();
      };
      assert.equal(answer, expected());
      assert.equal(answerX, x);
    });

    it('論理演算子についてわかる', function() {
      var x = 10;
      var answer = 5;
      var answerX = 100;
      var expected = function () {
        return false || function () {x = x * 10; return 5}();
      };
      assert.equal(answer, expected());
      assert.equal(answerX, x);
    });
         
  });
});
