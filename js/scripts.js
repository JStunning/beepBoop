function beepBoop(num, name) { // Business Logic
  if(num.includes(3)){
    return `Beep <br>Boop <br>I'm sorry, ${name}. I'm afraid I can't do that. <br>`
  } else if(num.includes(2)) {
    return `Beep <br>Boop <br>`
  } else if(num.includes(1)) {
    return `Beep <br>`
  } else {
    let arr = [];
    arr = [`Beep<br>`, `Boop<br>`, `I'm sorry, ${name}. I'm afraid I can't do that.<br>`];
    for(var i = 4; i <= num; i++) {
      arr.push(`${i} <br>`);
    }
    return arr
  }
}


$(document).ready(function(){ // Interface Logic

  //button clicked function
  $("#button").click(function(event){
    event.preventDefault();
    var number = $("input#number").val();
    var name = $("input#name").val();
    $("#regular").empty() 
    $("#regular").append(beepBoop(number, name));

  $("#reverseButton").click(function(event){
    event.preventDefault();
    var number = $("input#number").val();
    var name = $("input#name").val();
    $("#regular").empty();
    $("#regular").append(beepBoop(number, name).reverse());
    
  })
  })
})
