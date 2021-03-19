
// var reset = function() {
//     clearInterval(this.stop2);
//     this.time = 0;
// };

function Start () {
    var minute = 3;
    var sec = 30;
    sta = setInterval(function() {
      document.getElementById("timer").innerHTML = minute + " : " + sec;
      sec--;
      if (sec == 00) {
        minute --;
        sec = 59;
        // if (minute == 0) {
        //   minute = 3;
        // }
      }
    }, 1000);
  }
  function Stop() {
    clearInterval(sta);
}

  $(document).ready(function(){
      Start();
      stop() ; 
  })





