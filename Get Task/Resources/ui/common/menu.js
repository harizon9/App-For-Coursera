var layout = require('ui/common/layout');
var common = require('tools/common/commonTools');
var windowNames = require('control/windowNames');

function processButtons(controlButton){
	
	switch(controlButton.myValueID){
		case 1:
			common.navHandler({TYPE: windowNames.REGISTERTASK});
			break;
		case 2:
			common.navHandler({TYPE: windowNames.AVAILABLETASKS});
			break;
		case 3:
			common.navHandler({TYPE: windowNames.GETTASK});
			break;
		case 4:
			common.navHandler({TYPE: windowNames.EXIT});
			break;
		default:
			alert("Unknown ID" + controlButton.myValueID);
			break;
	}
	
	
}

function loadMenuBar(inParam){
	
	var menuBarWin = Ti.UI.createView({ height: layout.params.menu.height, width: layout.params.menu.width, bottom:0, backgroundColor:'white', layout:'horizontal' });
	
	// ----- Button Register Task Menu button
	var menuButtonRegisterTask = Ti.UI.createButton({title:'Add', width:'25%', top:0, myValueID:1});
	menuBarWin.add(menuButtonRegisterTask);
	menuButtonRegisterTask.addEventListener('click', function(){
														processButtons(menuButtonRegisterTask);});
	
	
	// ----- Button Show Tasks Menu button
	var menuButtonAvailableTasks = Ti.UI.createButton({title:'Show', width:'25%', top:0, myValueID:2});
	menuBarWin.add(menuButtonAvailableTasks);
	menuButtonAvailableTasks.addEventListener('click', function(){ 
														processButtons(menuButtonAvailableTasks);});
	
	// ----- Button Get Task Menu Button
	var menuButtonGetTask = Ti.UI.createButton({title:'Get', width:'25%', top:0, myValueID:3});
	menuBarWin.add(menuButtonGetTask);
	menuButtonGetTask.addEventListener('click', function(){
													processButtons(menuButtonGetTask);});
													
	// ----- Button Exit Button
	var menuButtonExit = Ti.UI.createButton({title:'Exit', width:'25%', top:0, myValueID:4});
	menuBarWin.add(menuButtonExit);
	menuButtonExit.addEventListener('click', function(){
													processButtons(menuButtonExit);});
	
	return menuBarWin;
}

exports.loadMenuBar = loadMenuBar;