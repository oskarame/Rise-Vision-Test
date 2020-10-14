setInterval(function(){
  var today = new Date();
  var time = today.getHours() + ":" + (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes());
  document.getElementById("datetime").innerHTML = time;
},1000);

