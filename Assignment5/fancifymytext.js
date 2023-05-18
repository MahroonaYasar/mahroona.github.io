function Bigger(){
  var textBox = document.getElementById("textbox");
  textBox.style.fontSize = "24pt";
}

function fancyShmancy() {
    var textBox = document.getElementById("textbox");
    textBox.style.color = "blue";
    textBox.style.textDecoration = "underline";
  }
  
  function boringBetty() {
    var textBox = document.getElementById("textbox");
    textBox.style.fontWeight = "normal";
    textBox.style.fontSize = "12pt";
    textBox.style.color = "black";
    textBox.style.textDecoration = "none";
  }
  
  function addMooSuffix() {
    var str = document.getElementById("textbox").value;
    var parts = str.split(".");
    document.getElementById("textbox").value = parts.join("-Moo");
  }

  
  
  