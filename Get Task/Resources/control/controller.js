var common = require('/tools/common/commonTools');
var viewNames = require('control/viewNames');
var containerWindow = require('ui/windows/containerWindow');
var containerWindowObj = containerWindow.loadContainerWindow();
var openDB = require('db/opendb');

var openView = null;
var prevView = null;
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
	backArray.push(inParam.VIEW);

	prevView = openView;

	openView = inParam.VIEW;
	
	containerWindowObj.add(openView);
	
	if(prevView){		
		containerWindowObj.remove(prevView);
		prevWin = null;
	}
}

function loadGetTaskView(inParam){
	var viewRef = require('ui/windows/getTask');
	var viewObj = viewRef.loadGetTask();
	windowHandler({VIEW:viewObj, PARAMS:{TYPE:viewNames.GETTASK}});
}

function loadRegisterTaskW(inParam){
	var viewRef = require('ui/windows/registerTask');
	var viewObj = viewRef.loadRegisterTask();
	windowHandler({VIEW:viewObj, PARAMS:{TYPE:viewNames.REGISTERTASK}});
}

function loadSettingsW(inParam){
	var viewRef = require('ui/windows/settings');
	var viewObj = viewRef.loadSettings();
	windowHandler({VIEW:viewObj, PARAMS:{TYPE:viewNames.SETTINGS}});
}

function loadFirstRunConfigW(inParam){
	var viewRef = require('ui/windows/firstRun');
	var viewObj = viewRef.loadFirstRun(inParam);
	windowHandler({VIEW:viewObj, PARAMS:{TYPE:viewNames.FIRSTRUN}});
}

function loadShowTaskW(inParam){
	var viewRef = require('ui/windows/theTask');
	var viewObj = viewRef.loadTask(inParam);
	windowHandler({VIEW:viewObj, PARAMS:{TYPE:viewNames.SHOWTASKS}});
	
}

function loadStatisticsW(inParam){
	var viewRef = require('ui/windows/statistics');
	var viewObj = viewRef.loadStatistics(inParam);
	windowHandler({VIEW:viewObj, PARAMS:{TYPE:viewNames.STATISTICS}});
	
}

function exitApplication(){
	removeNavigateAppListener();
	containerWindowObj.close();
	containerWindowObj = null;
	
	if(Ti.Platform.osname == 'android'){
		var activity = Ti.Android.currentActivity;
		activity.finish();
	}
}

function navigateApplication(inParam){
	switch(inParam.TYPE){
		case viewNames.ERROR:
			loadErrorW(inParam);
			break;
		case viewNames.MAINMENU:
			loadMainMenuW(inParam);
			break;
		case viewNames.REGISTERTASK:
			loadRegisterTaskW(inParam);
			break;
		case viewNames.GETTASK:
			loadGetTaskView(inParam);
			break;
		case viewNames.SETTINGS:
			loadSettingsW(inParam);
			break;
		case viewNames.FIRSTRUN:
			loadFirstRunConfigW(inParam);
			break;
		case viewNames.SHOWTASKS:
			loadShowTaskW(inParam);
			break;
		case viewNames.STATISTICS:
			loadStatisticsW(inParam);
			break;
		case viewNames.EXIT:
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

// This is start of the application

function startApplication(){	
	containerWindowObj.open();	
	addNavigateAppListener();
		var firstRunCheck = openDB.isInitialized();
	
	if(!firstRunCheck){
		common.navHandler({TYPE:viewNames.FIRSTRUN});
	}else{
		common.navHandler({TYPE:viewNames.GETTASK});
	}
	// instead always go through first run to decide if
	// the parameters are already set
	
	//common.navHandler({TYPE:viewNames.FIRSTRUN});
	
}

exports.startApplication = startApplication;
