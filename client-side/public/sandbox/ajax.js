/*
 * ===========================
 * Only to show Sync vs. Async 
 * ===========================
 */
addText = function(str){
  var elem = $('#counter');
  elem.text(elem.text() + " " + str);
};

getRequest = function(url, async, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.responseText);
    }
  };
  xhr.open('GET', url, async);
  xhr.send(null);
};


function printUsers(users){
  console.log(users);
  console.log(JSON.stringify(users, undefined, 2));
  document.querySelector('#users').innerHTML = JSON.stringify(users, null, 2);
}

function startCounting(){
  setInterval(function(){
    addText("|");
  }, 1000);
}


function onButtonClick(onClick){
  $('#button').on('click', onClick);
}

function requestUsers(async, onResponse){
  getRequest(
    '/api/users?delay=5000', /* URL */
    async,                   /* Async */
    onResponse
  );
}
