var layout = require('ui/common/layout');
var programMenu = require('ui/common/menu');

function loadError(inParam){
	
	var newWin = Ti.UI.createWindow({});
	
	var newWinDisplay = Ti.UI.createView({top:0, left:0, right:0, bottom:layout.params.menu.height, backgroundColor:'orange'});
	//var newWinDisplay = Ti.UI.createView({top:0, left:0, right:0, bottom:0, backgroundColor:'orange'});
	
	newWin.add(newWinDisplay);
	
	var newLabel = Ti.UI.createLabel({text:'ERROR WINDOW', color:'#fff'});
	newWinDisplay.add(newLabel);
	
	var progMenu = programMenu.loadMenuBar();
	newWin.add(progMenu);
	
	newWin.addEventListener('close', function(e){
		newWin = null;
	});
	
	return newWin;
	
}

exports.loadError = loadError;