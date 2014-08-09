var layout = require('ui/common/layout');
var controlStyles = require('ui/styles/controlStyles');
var inputTime = require('ui/controls/inputTime');
var displayTasks = require('ui/controls/displayTask');
var common = require('tools/common/commonTools');
var viewNames = require('control/viewNames');
var colorCodes = require('ui/styles/colorCodes');

function loadGetTask(inParam){
	
	var newWinDisplay = Ti.UI.createView({top:0, left:0, right:0, bottom:layout.params.menu.height, backgroundColor:colorCodes.ApplicationBackgroundColor, layout:'vertical'});
	
	var newLabel = Ti.UI.createLabel({text:Ti.Locale.getString('get_task'), color:'#000', font:{fontSize:28}, top:'10%' });
	//var newLabel = Ti.UI.createLabel(controlStyles.labelHeading({labelText:Ti.Locale.getString('get_task'), fontSize:'40dp'}));
	newWinDisplay.add(newLabel);
	
	var lineView1 = Ti.UI.createView({top:'1%', left:0, height:'1dp', width:'100%', backgroundColor:colorCodes.HorizontalBarColor});
	newWinDisplay.add(lineView1);
	
	var offset = 7;
	var inputTimeTextDimensions = 32;
	
	var inputTimeControl = inputTime.inputTimeView({top:'2%', textBoxDimension: inputTimeTextDimensions, controlOffset:offset, buttonText:Ti.Locale.getString('button_get_tasks')});
	newWinDisplay.add(inputTimeControl);
	
	var displayTaskView = displayTasks.displayTasksControl({top:'5%'});
	newWinDisplay.add(displayTaskView);
	
	newWinDisplay.addEventListener('close', function(e){
		newWinDisplay = null;
	});
	
	newWinDisplay.addEventListener('taskSelected', function(e){
		common.navHandler({title:e.title, taskID:e.taskID, TYPE: viewNames.SHOWTASKS});
	});
	
	newWinDisplay.addEventListener('doubletap', function(e){
		inputTimeControl.fireEvent('blurText', {});
	});
	
	newWinDisplay.addEventListener('inputTimeButtonPressed', function(e){
		//var listOfTasksView = listOfTasks.listOfTasks();
		//newWinDisplay.add(listOfTasksView);		
		displayTaskView.fireEvent('showTasks', {TaskTime:e.TaskTime});
	});
	
	return newWinDisplay;
}

exports.loadGetTask = loadGetTask;