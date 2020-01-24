$(document).ready(function(){

  //button clicked function
  $("#button").click(function(event){
    event.preventDefault();
    var number = $("input#number").val();
    var name = $("input#name").val();

    $("#result").append()
    
    if(number.includes(3)){
      $("#result").append(`I'm sorry ${name}, I'm afraid I can't do that. <br>`)
      
    } else if(number.includes(2)){
      $("#result").append(`Boop <br>`)
      
    } else if (number.includes(1)){
      $("#result").append(`Beep <br>`)
      
    } else {
      $("#result").append(`Beep <br>`)
      $("#result").append(`Boop <br>`)
      $("#result").append(`I'm sorry ${name}, I'm afraid I can't do that. <br>`)
      for(var i = 4; i <= number; i++) {
        $("#result").append(`${i} <br>`)
      }
    }
    
  })
})