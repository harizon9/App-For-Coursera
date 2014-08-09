var layout = require('ui/common/layout');
var controlStyles = require('ui/styles/controlStyles');
var colorCodes = require('ui/styles/colorCodes');
var common = require('tools/common/commonTools');
var viewNames = require('control/viewNames');

exports.TotalTime = 0;

function taskOnTableView(inParam){
	
	var viewDimensions = inParam.viewDimensions;
	var taskID = inParam.taskID;
	
	var taskTimeInMinutes = parseInt(inParam.taskTime,10);
	var hours = Math.floor(taskTimeInMinutes/60);
	var minutes = taskTimeInMinutes - hours *60;
	minutesString = (minutes < 10) ? ("0" + minutes) : minutes;
	
	var taskTimeText = '(' + hours + ':' + minutesString + ')';
	
	var newWinDisplay = Ti.UI.createTableViewRow({layout:'horizontal', top:inParam.top, height:viewDimensions, width:'100%', backgroundColor:colorCodes.ApplicationBackgroundColor});	//, backgroundColor:'yellow'
	
	// ------- TASK DESCRIPTION -------------
	
	// var taskDescView = Ti.UI.createView({width:'90%'});
	// newWinDisplay.add(taskDescView);
	
	var taskDescriptionLabel = Ti.UI.createLabel({text:inParam.taskDescription, font:{size:16}, left:0});
	newWinDisplay.add(taskDescriptionLabel);
	
	// ------- TASK TIME -------------
	
	// var taskTimeView = Ti.UI.createView({width:'10%'});
	// newWinDisplay.add(taskTimeView);
	
	var taskTimeLabel = Ti.UI.createLabel({text:taskTimeText, font:{size:16}, right:0, color:'#f00'});
	newWinDisplay.add(taskTimeLabel);
	
	newWinDisplay.addEventListener('openTask', function(e){
		common.navHandler({title:inParam.taskDescription, taskTime:taskTimeInMinutes , taskID:taskID, taskDone: inParam.taskDone, taskRepeatable:inParam.taskRepeatable ,TYPE: viewNames.SHOWTASKS});
	});
	
	return newWinDisplay;	
}

exports.taskOnTableView = taskOnTableView;