function Start () {
    var minute = 1;
    var sec = 30;
    sta = setInterval(function() {
      $("#timer").text(minute + " : " + sec);
      sec--;
      if (sec == 00) {
        minute --;
        sec = 59;
        if (minute === 0 && sec===0) {
          minute = 1;
          sec = 30;
         }
      }
    }, 1000);
  }
  function Stop() {
    clearInterval(this.sta);
}

 
 
 function check(correct,answer){
  for (var i=0;i<correct.length; i++){
    
      if(correct[i] !== answer[i]){
        return false ;
      }
    }
      return true;
 
}


/*function clat (){
   answer = [];
  answer.push(document.getElementById('n1').value)
  answer.push(document.getElementById('n2').value)
  answer.push(document.getElementById('n3').value)
  answer.push(document.getElementById('n4').value)
  
    if (check(correct,answer)){
      stop() ;
      alert("You GUESSED");
    }
    
  }*/
$(document).ready(function(){
  var correct = [0,5,7,1];
  $(".b1").click(function(){
    Start();
    $(".b2").click(function(){ 
    answer=[];
    answer.push(Number($('#n1').val()))
    answer.push(Number($('#n2').val()))
    answer.push(Number($('#n3').val()))
    answer.push(Number($('#n4').val()))
    if(check(correct,answer)===false){
      stop();
    $("#m2").hide();
    $("#tac").show();
    }
    else{
      stop();
      alert("you guessed");
    }console.log(check(correct,answer));
    })



})
})


//   $(document).ready(function(){
//     Start();
//     stop() ; 
//     clat() ;
// })


//  if (c1===C1 && c2===C2 && c3===C3 && c4===C4){
  //       stop();
  //       document.innerHTML('you guessed it sucker!');
  //  }
  //  else  if (c1!==C1 || c2!==C2 || c3!==C3 || c4!==C4){
  //  $body.html('');
  //  }

























