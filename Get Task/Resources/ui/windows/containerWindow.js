function loadContainerWindow(){
	var newWin = Ti.UI.createWindow({title:'Get Task'});
	
	var programMenu = require('ui/' + Ti.Platform.osname + '/menu');
	var progMenu = programMenu.loadMenuBar();
	newWin.add(progMenu);
	
	return newWin;
}

exports.loadContainerWindow = loadContainerWindow;