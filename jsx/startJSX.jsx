//@include "./json2.js"

function returnFolderDirectory(){
    var folderPath = Folder.selectDialog("Choose a folder");

    if(!folderPath){
        alert("Whoops!\rYou didn't pick a folder location for your notes. Pick a valid folder and try again.");
        return
    }


    return JSON.stringify(folderPath.fsName);
}