'use strict';

// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
// DOM操作のレッスンは同じディレクトリにある./test.jsを編集して行います。
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

$(function() {

  // Emoine Button
  // ----------------------------------------------------------------------
  // handleEmoine(indicatorElem)メソッドを使い、
  // $('#emoine')をクリックしたら$('#emoCount')の値がインクリメントされるような処理を追加してください。

  // 処理の記述ここから ----------------------

  $('#emoine').click(function(){             // click イベントのリスナ設定
    handleEmoine($('#emoCount')).add();
  });

  function handleEmoine($indicatorElem) {
    var count = Number($indicatorElem.text());
    // これがクロージャ
    return {
      add: function() {
        count++;
        $indicatorElem.text(count);
      }
    };
  }




  // 処理の記述ここまで ----------------------


  // tooltip
  // ----------------------------------------------------------------------
  // $('withTooltip')にフォーカスが当たる/外れるとツールチップが表示/非表示されるような処理を追加してください。
  // なお、ツールチップはあるclassが付与されると表示されます。cssファイルを見てみましょう。

  // 処理の記述ここから ----------------------

  $('#withTooltip').focus(function () { 
    $('#tooltip').addClass('active');
    console.log('***');
  });

  $('#withTooltip').focusout(function () { 
    $('#tooltip').removeClass('active');
    console.log('***');
  });

  // 処理の記述ここまで ----------------------


  // show translated text
  // ----------------------------------------------------------------------
  // selectで選択されている項目が変化したら、
  // 選択されたoption要素のvalueをtranslated内に表示する処理を自分で書いてみましょう。
  // 「選択されたoption要素のvalue」をどう取得するかがミソです。

  // 処理の記述ここから ----------------------

  // 処理の記述ここまで ----------------------


  // validate empty value
  // ----------------------------------------------------------------------
  // formがsubmitされた際、input要素のvalueが空だった場合は
  // input要素の背景色を赤（ rgb(248, 204, 204) ）にしてみましょう。
  // 再度submitした際、inputのvalueが空ではなかった場合には
  // requiredInputの背景色を白（ rgb(255, 255, 255) ）に戻しましょう。

  // 処理の記述ここから ----------------------

  // 処理の記述ここまで ----------------------


  // word count
  // ----------------------------------------------------------------------
  // wordCountにテキストが入力されるたびに、入力された文字数をcountIndicator内に表示してみましょう。
  // 余裕のある人は、「入力された文字が140字を超えたらcountIndicatorの文字色を#f00にする」をやってみてください。

  // 処理の記述ここから ----------------------

  // 処理の記述ここまで ----------------------


  // オマケ問題
  //-----------------------------------------------------------------------
  // 下記のURLのようなアニメーションを実装してください。
  // https://www.youtube.com/watch?v=az6rA71tlVo

  // 処理の記述ここから ----------------------

  // 処理の記述ここまで ----------------------

});