'use strict';


function createClickEvent() {
  var event = document.createEvent('MouseEvents');
  event.initEvent('click', false, true);
  return event;
}


function simulateChangeEvent(inputElement, newValue) {
  inputElement.value = newValue;
  inputElement.dispatchEvent(createChangeEvent());
}


function createChangeEvent() {
  var event = document.createEvent('HTMLEvents');
  event.initEvent('change', true, true);

  return event;
}

function createSubmitEvent() {
  var event = document.createEvent('HTMLEvents');
  event.initEvent('submit', true, true);

  return event;
}


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


