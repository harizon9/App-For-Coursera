var common = require('/tools/common/commonTools');
var windowNames = require('control/windowNames');

var openWin = null;
var prevWin = null;
var backArray = [];

function processBackButton(inParam){
	var iPos = ((backArray.length-2) < 0) ? 0 : (backArray.length-2);
	
	if(iPos >= 0){
		var tmpParams = backArray[iPos];
		
		if(backArray.length>1) {
			backArray.pop();
			common.navHandler(tmpParams);
		}
	}	
}

function windowHandler(inParam){
	backArray.push(inParam.WIN);

	prevWin = openWin;

	openWin = inParam.WIN;
	
	openWin.open();
	
	if(prevWin){
		prevWin.close();
		prevWin = null;
	}
}

function loadErrorW(inParam){
	var loadErrorObject = require('ui/windows/errorWindow');
	var loadErrorWindow = loadErrorObject.loadError();
	windowHandler({WIN:loadErrorWindow, PARAMS:{TYPE:windowNames.ERROR}});
}

function loadMainMenuW(inParam){
	var loadMainMenuObject = require('ui/windows/mainmenu');
	var loadMainMenuWindow = loadMainMenuObject.loadMainMenu();
	windowHandler({WIN:loadMainMenuWindow, PARAMS:{TYPE:windowNames.MAINMENU}});
}

function loadRegisterTaskW(inParam){
	var loadRegisterTaskObject = require('ui/windows/registerTask');
	var loadRegisterTaskWindow = loadRegisterTaskObject .loadRegisterTask();
	windowHandler({WIN:loadRegisterTaskWindow, PARAMS:{TYPE:windowNames.REGISTERTASK}});
}

function loadGetTaskW(inParam){
	var loadGetTaskObject = require('ui/windows/getTask');
	var loadGetTaskWindow = loadGetTaskObject.loadGetTask();
	windowHandler({WIN:loadGetTaskWindow, PARAMS:{TYPE:windowNames.GETTASK}});
}

function loadAvailableTasksW(inParam){
	var loadAvailableTasksObject = require('ui/windows/availableTasks');
	var loadAvailableTasksWindow = loadAvailableTasksObject.loadAvailableTasks();
	windowHandler({WIN:loadAvailableTasksWindow, PARAMS:{TYPE:windowNames.AVAILABLETASKS}});
}

function exitApplication(){
	removeNavigateAppListener();
	openWin.close();
	openWin = null;
	
	if(Ti.Platform.osname == 'android'){
		var activity = Ti.Android.currentActivity;
		activity.finish();
	}
}

function navigateApplication(inParam){
	switch(inParam.TYPE){
		case windowNames.ERROR:
			loadErrorW(inParam);
			break;
		case windowNames.MAINMENU:
			loadMainMenuW(inParam);
			break;
		case windowNames.REGISTERTASK:
			loadRegisterTaskW(inParam);
			break;
		case windowNames.GETTASK:
			loadGetTaskW(inParam);
			break;
		case windowNames.AVAILABLETASKS:
			loadAvailableTasksW(inParam);
			break;
		case windowNames.EXIT:
			exitApplication();
			break;
		default:
			break;
	}
}

function handleAndroidBackButton(){
	if(Ti.Platform.osname == 'android'){
			Ti.App.addEventListener('androidback', function(e){
				alert('Android Back-Button pressed');
			});
	}
}

function addNavigateAppListener(){
	Ti.App.addEventListener('APPNAV', navigateApplication);
}

function removeNavigateAppListener(){
	Ti.App.removeEventListener('APPNAV', navigateApplication);
}

function startApplication(){
	addNavigateAppListener();
	handleAndroidBackButton();
	common.navHandler({TYPE:windowNames.GETTASK});
}

exports.startApplication = startApplication;