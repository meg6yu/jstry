'use strict';


describe('6章　関数とクロージャ', function() {
  describe('再帰関数がわかる', function() {
    it('階乗が関数を完成させよ', function() {
      var answer = function(x) {
        if (x > 0) {
          return x * answer(x - 1);
        } else if (x == 0) {
          return 1;
        }
      };
      answer(3);

      assert.equal(answer(0), 1);
      assert.equal(answer(2), 2);
      assert.equal(answer(3), 6);
      assert.equal(answer(4), 24);
      assert.equal(answer(7), 5040);
    });
    
    it('フィボナッチ数関数を完成させよ', function() {
      var answer = function(x){
        if (x == 1 || x == 2) {
          return 1;
        } else ()
        for (var i = 0; i < x; i++) {
          return i
        }
      };
      
      assert.equal(answer(1), 1);
      assert.equal(answer(2), 1);
      assert.equal(answer(3), 2);
      assert.equal(answer(4), 3);
      assert.equal(answer(5), 5);
      assert.equal(answer(11), 89);
      assert.equal(answer(17), 1597);
    });
   });

  describe('スコープについてわかる', function() {
    it('スコープについてわかる1', function() {
      var answer = null;
      var x = 1;
    
      assert.equal(answer, x);
    });    
    
    it('スコープについてわかる2', function() {
      var answer = null;
      var x = 1;
      if(true) {
        x = 5;
      }
    
      assert.equal(answer, x);
    });    
    
    it('スコープについてわかる3', function() {
      var answer = null;
      var x = 1;
      if(true) {
        var x = 2;
        x = 5;
      }
    
      assert.equal(answer, x);
    });         
 
  });


  

  describe('クロージャについてわかる', function() {
    it('クロージャのスコープについてわかる1', function() {
      var answer = null;
      var x = 1;
      var a = function () {
        var x = 100;
        x++;
      };
      a();
    
        assert.equal(answer, x);      
    });
 
    it('クロージャスコープについてわかる2', function() {
      var answer = null;
      var x = 1;
      var a = function () {
        x++;
      };
      a();
    
      assert.equal(answer, x);
    });
    
    it('環境束縛について理解する', function() {
      var answer = null;
      var x = 1;
      var a = function () {
        x++;
      };
      a();
      a();
    
      assert.equal(answer, x);
    });
    
    it('環境束縛について理解する', function() {
      // 呼び出すと「呼び出すたびに、何回目に呼び出されたかの整数値を返す関数」を返す関数ansewerを完成させよ
      var answer = null;
      var x = answer();
      var y = answer();
    
      assert.equal(x(), 1);
      assert.equal(x(), 2);
      assert.equal(y(), 1);
      assert.equal(y(), 2);
      assert.equal(y(), 3);
    });
  });
  
  describe('コールバックについて理解する', function() {
    it('引数にnと関数fを受け取り、nにfを2回適用させる関数を完成させよ', function() {
      var answer = null;
      
      assert.equal(answer(1, function(n){return n*2}), 4);
      assert.equal(answer("hi!", function(n){return n+"hello!"}), "hi!hello!hello!");

    });
      var answer = null;
      var x = 1;
      var a = function () {
        x++;
      };    
    assert.equal(answer, x);
  });
  
  
});