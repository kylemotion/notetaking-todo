(function () {
  'use strict';

  const fs = require('fs');
  const path = require('path');

  const folderPath = '/Users/Shared/note-taking';
  if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath)
  }
  const noteFile = 'notes.txt';

  init(folderPath, noteFile);

  function init(folderPath, noteFile) {
    handleLoadNotes(folderPath, noteFile);

    document.getElementById('createBtn').addEventListener('click', () => {
      handleCreateNewNotes(folderPath, noteFile);
    });

    document.getElementById('submitBtn').addEventListener('click', handleSubmitButton);
  }

  function handleLoadNotes(folderPath, noteFile) {
    const filePath = path.join(folderPath, noteFile);

    try {
      const contents = fs.readFileSync(filePath, 'utf8');
      document.getElementById('notesWrittenDiv').innerText = contents;
    } catch (err) {
      document.getElementById('notesWrittenDiv').innerText = "No notes file found yet.";
      console.error("Error reading notes file:", err);
    }
  }

  function handleCreateNewNotes(folderPath, noteFile) {
    const filePath = path.join(folderPath, noteFile);

    if (!fs.existsSync(filePath)) {
      try {
        fs.writeFileSync(filePath, '', 'utf8');
        alert(`Created ${noteFile}`);
      } catch (err) {
        alert(`Error creating file: ${err.message}`);
        console.error("Write error:", err);
        return;
      }
    } else {
      alert(`${noteFile} already exists`);
    }

    handleLoadNotes(folderPath, noteFile);
  }

  function handleSubmitButton() {
    const input = document.getElementById('notepadEntry').value.trim();
    const filePath = path.join(folderPath, noteFile);

    if(input.length === 0){
        alert("Note is empty. Please write something");
        return;
    }

    try{
        fs.appendFileSync(filePath, input + "\n\n", 'utf8');
        alert("Note saved");
        document.getElementById('notepadEntry').value='';
        handleLoadNotes(folderPath, noteFile);
    } catch (err) {
        alert(`Error saving note: ${err.message}`);
        console.error("Append error:", err);
    }

  }

})();





function getOS() {
 		var userAgent = window.navigator.userAgent,
 		platform = window.navigator.platform,
 		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
 		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
 		os = null;

 		if(macosPlatforms.indexOf(platform) != -1) {
 			os = "MAC";
 		} else if(windowsPlatforms.indexOf(platform) != -1) {
 			os = "WIN";
 		}
 		return os;
 	}