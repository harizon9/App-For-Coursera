var colorCodes = require('styles/colorCodes');
var common = require('tools/common/commonTools');
var windowNames = require('control/windowNames');

function loadMainMenu(inParam){
	
	var newWin = Ti.UI.createWindow({});
	
	//var newWinDisplay = Ti.UI.createView({top:0, left:0, right:0, bottom:layout.params.menu.height});
	var newWinDisplay = Ti.UI.createView({top:0, left:0, right:0, bottom:0, backgroundColor:colorCodes.ApplicationMenu, layout:'vertical'});
	
	
	// UI controls
	
	var newLabel = Ti.UI.createLabel({text:'MAIN MENU', color:'#000000', top:30});
	newWinDisplay.add(newLabel);
	
	var launchRegisterTaskButton = Ti.UI.createButton({ title: 'Register a task'});
	newWinDisplay.add(launchRegisterTaskButton);
	
	var launchGetTaskButton = Ti.UI.createButton({ title: 'Get a Task'});
	newWinDisplay.add(launchGetTaskButton);
	
	var launchSettingsButton = Ti.UI.createButton({ title: 'Show All Tasks'});
	newWinDisplay.add(launchSettingsButton);
	

	
	// Event listeners
	newWin.addEventListener('close', function(e){ newWin = null; });
	
	launchRegisterTaskButton.addEventListener('click', function(e){ 
		common.navHandler({TYPE:windowNames.REGISTERTASK}); });
	
	launchGetTaskButton.addEventListener('click', function(e){ 
		common.navHandler({TYPE:windowNames.GETTASK}); });
		
	launchSettingsButton.addEventListener('click', function(e){ 
		common.navHandler({TYPE:windowNames.SETTINGS}); });	
	
	newWin.add(newWinDisplay);
	return newWin;
	
}

exports.loadMainMenu = loadMainMenu;
