$(document).ready(function(){

  //button clicked function
  $("#button").click(function(event){
    event.preventDefault();
    var number = $("input#number").val();

    if(number > 2){
      console.log("I'm sorry Dave, I can't do that.")
    } else if(number.includes(2)){
      console.log("Boop")
    } else if (number.includes(1)){
      console.log("Beep")
    }




  })



})