function createTextLayer(text){
    var proj = app.project;
    var comp = proj.activeItem;
    if(comp && comp instanceof CompItem){
        alert("Whoops! You don't have a comp open. Open one and try again.")
        return;
    }

    app.beginUndoGroup("Create Text Layer");
    var layer = comp.layers.addText(text);
    app.endUndoGroup();
}

