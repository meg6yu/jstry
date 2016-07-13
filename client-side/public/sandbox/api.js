var FLICKR_API_KEY = "efcbf759c33fa0f093e15ac69fdc4e79"; /** WRITE YOUR OWN CODE */

/*
 * ===========================
 * 楽天 API
 * ===========================
 */


/* テストフォームで作成したURL */;
// https://webservice.rakuten.co.jp/explorer/api/IchibaItem/Search/

$('#item-search').on('click', function(){

  var text = $('#search-text').val(); // phto-textのvalueをとってきて検査keyを入れる
  var fClient = createFlickrClient(FLICKR_API_KEY);

  var url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222?format=json&keyword="
  + text + "&applicationId=1023703889887878233";
axios.get(url)
  .then(function(response){
    // response.data.Items
    // var firstItem = response.data.Items[0];
    // console.log(firstItem.Item.itemName);
    // console.log(response.data.Items);
    // var allItems = response.data.Items;
    // $("#rakuten-result").text(firstItem.Item.itemName);
    for (var i = 0; i < response.data.Items.length; i++) {
      var item = response.data.Items[i].Item;
      var img = $('<img>');
      var item_div = $('<div></div>', {
        class: 'item'
        }
      );
      img.attr({
        src: item.mediumImageUrls[0].imageUrl
      });
      item_div.append(img);
      item_div.css({
        "width": '250px'
       ,"height": '300px'
       ,"border": '5px #EEE solid'
       ,"float": 'left'
      })
      item_div.append('★★★ '+item.itemName + " ★★★");
      item_div.append('◆ '+item.itemPrice + "円 ◆");
      $("#rakuten-result").append(item_div);
      


      // $("#rakuten-name").append(item.itemName);
      // $("#rakuten-price").append(item.itemPrice + '円！！！');
      
      // // img.src= item.mediumImageUrls[0].imageUrl;
      // $("#rakuten-img-div").append(img);

        fClient.get('/', {
          params: { // params { key1:value1, key2:value2 }
            method: 'flickr.photos.search',
            per_page: 10,
            // extras:url_q,url_c,
            text: text
          }
        })
        .then(function(res) {
          // 画面に検索結果を出す処理
          // <image src = ""><img src = "">....(10個)
          var $images = res.data.photos.photo.map(function(photo){
            var url = buildImageUrl(photo, 't');
            return $('<img src=' + url + ' />');
          });
          $('#photo-result').html($images); // 作ったimgタグをいれる
        });


    }

    

    // クリックされたときの処理
    $('#item-search').on('click', function(){

      var text = $('#search-text').val(); // phto-textのvalueをとってきて検査keyを入れる

      fClient.get('/', {
          params: { // params { key1:value1, key2:value2 }
            method: 'flickr.photos.search',
            per_page: 10,
            // extras:url_q,url_c,
            text: text
          }
        })
        .then(function(res) {
          // 画面に検索結果を出す処理
          // <image src = ""><img src = "">....(10個)
          var $images = res.data.photos.photo.map(function(photo){
            var url = buildImageUrl(photo, 't');
            return $('<img src=' + url + ' />');
          });
          $('#photo-result').html($images); // 作ったimgタグをいれる
        });

    });



    // $("#rakuten-name").text(firstItem.Item.itemName);
    // $("#rakuten-price").text(firstItem.Item.itemPrice + '円！！！');
    // var img = $('<img>')[0];
    // img.src=firstItem.Item.mediumImageUrls[0].imageUrl;
    // $("#rakuten-img-div").append(img);



    // $("#rakuten-img").text(firstItem.Item.mediumImageUrls[0].imageUrl + '円！！！');

    // $("<div></div>", {
    //   width: 100,
    //   height: 100,
    //   css: {border: "5px solid gray"},
    //   addClass: "my-div",
    //   on: {
    //     click: function(event) {
    //       // イベント設定
    //     }
    //   }
    // });
  });

  // fClient.get('/', {
  //     params: { // params { key1:value1, key2:value2 }
  //       method: 'flickr.photos.search',
  //       per_page: 10,
  //       extras:'url_c',
  //       text: text
  //     }
  //   })
  //   .then(function(res) {
  //     // 画面に検索結果を出す処理
  //     // <image src = ""><img src = "">....(10個)
  //     var $images = res.data.photos.photo.map(function(photo){
  //       var url = buildImageUrl(photo, 't');
  //       return $('<img src=' + url + ' />');
  //     });
  //     $('#photo-result').html($images); // 作ったimgタグをいれる
  //   });

});







/*
 * ===========================
 * Flickr そのまま利用
 * ===========================
 */


/**
 * 普通にやってみる…なんか辛い
 */
var url = "https://api.flickr.com/services/rest?"
 + "api_key=" + FLICKR_API_KEY
 + "&format=json&method=flickr.photos.search&per_page=10&text=Mountain";

axios.get(url).then(function(res){
 console.log(res.data);
});



/*
 * ===========================
 * Flickr 便利メソッド
 * ===========================
 */

/**
 * - BaseURL
 * - Prams (API-Key, JSON-format)
 * - Convert JSONP response to JSON
 */
function createFlickrClient(apiKey){
  return axios.create({
    baseURL: 'https://api.flickr.com/services/rest',
    params: {
      api_key: apiKey,
      format: 'json'
    },
    transformResponse: function(data){ // Convert JSONP format to plain JSON
      return JSON.parse(data.substr(14, data.length - 15));
    }
  });
}


/**
 * Pick imageSize found on the page below:
 */
function buildImageUrl(photo, size){
  var imgSize = size ? size : "t";
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${imgSize}.jpg?`;
}



/*
 * =================================
 * Flickr API を便利メソッド使って利用
 * =================================
 */

// var fClient = createFlickrClient(FLICKR_API_KEY);

// // クリックされたときの処理
// $('#photo-search').on('click', function(){

//   var text = $('#photo-text').val(); // phto-textのvalueをとってきて検査keyを入れる

//   fClient.get('/', {
//       params: { // params { key1:value1, key2:value2 }
//         method: 'flickr.photos.search',
//         per_page: 10,
//         extras:'url_c',
//         text: text
//       }
//     })
//     .then(function(res) {
//       // 画面に検索結果を出す処理
//       // <image src = ""><img src = "">....(10個)
//       var $images = res.data.photos.photo.map(function(photo){
//         var url = buildImageUrl(photo, 't');
//         return $('<img src=' + url + ' />');
//       });
//       $('#photo-result').html($images); // 作ったimgタグをいれる
//     });

// });















// *******************************************

// var FLICKR_API_KEY = "efcbf759c33fa0f093e15ac69fdc4e79"; /** WRITE YOUR OWN CODE */

// /*
//  * ===========================
//  * 楽天 API
//  * ===========================
//  */


// /* テストフォームで作成したURL */;
// // https://webservice.rakuten.co.jp/explorer/api/IchibaItem/Search/
// var url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222?format=json&keyword=%E6%B0%B4&genreId=559887&shopCode=rakuten24&applicationId=1023703889887878233";

// axios.get(url)
//   .then(function(response){
//     var firstItem = response.data.Items[0];
//     console.log(firstItem.Item.itemName);
//     $("#rakuten-result").text(firstItem.Item.itemName);
//   });




// /*
//  * ===========================
//  * Flickr そのまま利用
//  * ===========================
//  */


// /**
//  * 普通にやってみる…なんか辛い
//  */
// var url = "https://api.flickr.com/services/rest?"
//  + "api_key=" + FLICKR_API_KEY
//  + "&format=json&method=flickr.photos.search&per_page=10&text=Mountain";

// axios.get(url).then(function(res){
//  console.log(res.data);
// });



// /*
//  * ===========================
//  * Flickr 便利メソッド
//  * ===========================
//  */

// /**
//  * - BaseURL
//  * - Prams (API-Key, JSON-format)
//  * - Convert JSONP response to JSON
//  */
// function createFlickrClient(apiKey){
//   return axios.create({
//     baseURL: 'https://api.flickr.com/services/rest',
//     params: {
//       api_key: apiKey,
//       format: 'json'
//     },
//     transformResponse: function(data){ // Convert JSONP format to plain JSON
//       return JSON.parse(data.substr(14, data.length - 15));
//     }
//   });
// }


// /**
//  * Pick imageSize found on the page below:
//  */
// function buildImageUrl(photo, size){
//   var imgSize = size ? size : "t";
//   return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${imgSize}.jpg?`;
// }



// /*
//  * =================================
//  * Flickr API を便利メソッド使って利用
//  * =================================
//  */

// var fClient = createFlickrClient(FLICKR_API_KEY);

// // クリックされたときの処理
// $('#photo-search').on('click', function(){

//   var text = $('#photo-text').val(); // phto-textのvalueをとってきて検査keyを入れる

//   fClient.get('/', {
//       params: { // params { key1:value1, key2:value2 }
//         method: 'flickr.photos.search',
//         per_page: 10,
//         // extras:url_q,url_c,
//         text: text
//       }
//     })
//     .then(function(res) {
//       // 画面に検索結果を出す処理
//       // <image src = ""><img src = "">....(10個)
//       var $images = res.data.photos.photo.map(function(photo){
//         var url = buildImageUrl(photo, 't');
//         return $('<img src=' + url + ' />');
//       });
//       $('#photo-result').html($images); // 作ったimgタグをいれる
//     });

// });



