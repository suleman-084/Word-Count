let textbox = document.getElementById("textbox");
textbox.addEventListener("input", function () {
  var text = this.value;
  let char = text.length;
  document.getElementById("char").innerHTML = char;
  text = text.trim();
  //   let words = text.split(" ").join(" ");
  let words = text.split(" ").filter((word) => word !== "");
  document.getElementById("word").innerHTML = words.length;
});
/*
arr.filter(word=> word!=="")
*/
