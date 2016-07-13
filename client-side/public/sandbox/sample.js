// alert("JavaScript is working");

window.addEventListener('load', function(){
  var container = document.getElementById('img-container');
  var img = document.getElementById('sample-img');

  var counter = 0;

  setInterval(function(){
    if(counter < 5){
      var newImage = document.createElement('img');
      newImage.src = img.src;
      container.appendChild(newImage);
      counter++;
    }
  }, 1000);

});

