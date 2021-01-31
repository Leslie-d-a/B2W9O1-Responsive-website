var dropButton = document.getElementById("dropButton")
var dropContent = document.getElementById("dropContent")

dropButton.onclick = function(){
  if (dropContent.className == "dropHide"){
    dropContent.className = "dropShow"
  } else {
    dropContent.className = "dropHide"
  }
}