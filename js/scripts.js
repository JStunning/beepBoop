$(document).ready(function(){

  //button clicked function
  $("#button").click(function(event){
    event.preventDefault();
    var number = $("input#number").val();
    var name = $("input#name").val();

    var arr = [];
    
    if(number.includes(3)){
      arr.push(`I'm sorry, ${name}. I'm afraid I can't do that. <br>`)
      $("#result").append(arr[0])
      
    } else if(number.includes(2)){
      arr.push(`Boop <br>`)
      $("#result").append(arr[0])
      
    } else if (number.includes(1)){
      arr.push(`Beep <br>`)
      $("#result").append(arr[0])
      
    } else {
      arr.push(`Beep <br>`)
      arr.push(`Boop <br>`)
      arr.push(`I'm sorry, ${name}. I'm afraid I can't do that. <br>`)
      $("#result").append(arr[0])
      $("#result").append(arr[1])
      $("#result").append(arr[2])
      for(var i = 4; i <= number; i++) {
        arr.push(`${i}`)
        console.log(arr)
        $("#result").append(`${arr[i - 1]} <br>`)
      }
    }
    
  })
})