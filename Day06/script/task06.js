var draggableId = document.getElementsByTagName("canvas")[0].setAttribute("id", "draggableItem");
var draggable = document.getElementById("draggableItem").setAttribute("draggable", "true");
var dragstart = document.getElementById("draggableItem").setAttribute("ondragstart", "drag(event)");
var footer = document.getElementsByTagName("footer")[0];
var dropZone = footer.getElementsByTagName("div")[0].setAttribute("id", "drop-zone");
var dragover = document.getElementById("drop-zone").setAttribute("ondragover", "allowDrop(event)");
var drop = document.getElementById("drop-zone").setAttribute("ondrop", "drop(event)");
         
var drag = function (event) {
    event.dataTransfer.setData("Text", event.target.id);
    console.dir(event);
}
var allowDrop = function (event) {
    event.preventDefault();
    console.dir(event)
}
var drop = function (event) {
    console.log("drop");
    event.preventDefault();
    console.dir(event)
    var data = event.dataTransfer.getData("Text");
    event.target.append(document.getElementById(data));
    console.dir(event.target.append(document.getElementById(data)))
}
