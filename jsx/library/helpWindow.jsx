// bring in OS library for cross OS compatibility
//@include "../library/OS.jsx"

var HelpWindow = (function (){


        var scriptName = "km-render-slate-batch-output";

        function show(){

        var settingsWindow = new Window("palette", "About " + scriptName, undefined, {closeButton: true, resizeable: true});
        settingsWindow.orientation = 'column';
        settingsWindow.alignChildren = ["fill", "fill"];

        var editTextGroup = settingsWindow.add("group", undefined, "Middle Info Group");
        editTextGroup.orientation = 'column';
        editTextGroup.alignChildren = ["left", "top"];
        var helpMessage = 
        'ABOUT '+scriptName.toUpperCase()+'\r\r\
        This script will render out compositions as mp4s as well as jpg slate options \r\r\
        This script speeds up the process of exporting your selected compositions and their accompanying slates. This will save tons of time and prevent arthritis hopefully.\
        ------------------------\
        HOW TO USE '+scriptName.toUpperCase()+':\r\r\
        STEP #1: SELECT YOUR SLATE STYLE\r\
        This selection will determine if you will export an intro slate, end slate, or both slate styles along with your mp4 render\r\r\
        -----------\r\
        STEP #2: CLICK "RENDER" AND SELECT OUTPUT DESTINATION\r\
        Once you click the "RENDER" button a window will pop up promopting you to select an output desination for all of your files. Your render queue will be populated with your selected comp items and their accompanying slate comps. The render queue will automatically begin rendering inside of After Effects.\r\r\
        -----------\r\
        BONUS: \r\
        After your render is complete, an prompt window will pop up displaying a success message along with the location of your output files. Once you click "OK" your system file explorer window will pop up displaying the folder containing your output items.\r\r\
        '
        var textBox = editTextGroup.add("edittext", undefined, helpMessage, {multiline: true, readonly: true ,scrollable: true});
        textBox.justify = "left";
        textBox.alignment = ["fill","fill"];
        textBox.preferredSize = [600,200];

        var creatorInfo = 
        ''+scriptName+' v1.0\r\
        Script created by Kyle Harter\r\
        www.kylemotion.com'


        var bottomGroup = settingsWindow.add("group", undefined, "bottomGroup");
        bottomGroup.orientation = "row";
        bottomGroup.alignChildren = ["fill", "center"];
        var creatorGroup = bottomGroup.add("group", undefined, "Creator Info Group")
        var creatorStatic = creatorGroup.add("statictext", undefined, creatorInfo, {multiline: true});
        var closeGroup = bottomGroup.add("group", undefined, "Close Group");
        closeGroup.alignChildren = ["right", "center"];
        var closeButton = closeGroup.add("button", undefined, "Close");
        closeButton.preferredSize = [-1, 30];


        creatorStatic.addEventListener("mousedown", function () {
            var userOS = OS
            var launchCode = userOS.openUrl("https://www.kylemotion.com/")
        });

        closeButton.addEventListener("mousedown", function(){settingsWindow.close()}) 

        
        settingsWindow.hide();
        settingsWindow.show();
        

}

return {
    show: show
}
})()