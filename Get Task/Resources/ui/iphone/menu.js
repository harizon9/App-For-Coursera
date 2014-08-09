var layout = require('ui/common/layout');
var common = require('tools/common/commonTools');
var viewNames = require('control/viewNames');
var colorCodes = require('ui/styles/colorCodes');

function processButtons(controlButton){
	
	switch(controlButton.myValueID){
		case 1:
			common.navHandler({TYPE: viewNames.REGISTERTASK});
			break;
		case 2:
			common.navHandler({TYPE: viewNames.SETTINGS});
			break;
		case 3:
			common.navHandler({TYPE: viewNames.GETTASK});
			break;
		case 4:
			common.navHandler({TYPE: viewNames.EXIT});
			break;
		default:
			alert("Unknown ID" + controlButton.myValueID);
			break;
	}
	
	
}

function loadMenuBar(inParam){
	
	var menuBarWin = Ti.UI.createView({height: layout.params.menu.height, width: layout.params.menu.width, bottom:0, backgroundColor:colorCodes.ApplicationMenuColor, layout:'horizontal' });
	
	// ----- Button Register Task Menu button
	var menuButtonRegisterTask = Ti.UI.createButton({color:colorCodes.MenuForegroundColor, top:'20%', left:'10%', myValueID:1, backgroundImage:'/assets/images/buttons/plus.png'});
	menuBarWin.add(menuButtonRegisterTask);
	menuButtonRegisterTask.addEventListener('click', function(){
														processButtons(menuButtonRegisterTask);});

	// ----- Button Get Task Menu Button
	var menuButtonGetTask = Ti.UI.createButton({color:colorCodes.MenuForegroundColor, top:'20%', left:'10%', myValueID:3, backgroundImage:'/assets/images/buttons/gettask.png'});
	menuBarWin.add(menuButtonGetTask);
	menuButtonGetTask.addEventListener('click', function(){
													processButtons(menuButtonGetTask);});

		// ----- Button Show Tasks Menu button
	var menuButtonSettings = Ti.UI.createButton({color:colorCodes.MenuForegroundColor, top:'20%', left:'10%', myValueID:2, backgroundImage:'/assets/images/buttons/options.png'});
	menuBarWin.add(menuButtonSettings);
	menuButtonSettings.addEventListener('click', function(){ 
														processButtons(menuButtonSettings);});
	
	return menuBarWin;
}

exports.loadMenuBar = loadMenuBar;