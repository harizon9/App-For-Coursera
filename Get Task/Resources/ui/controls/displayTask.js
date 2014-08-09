var layout = require('ui/common/layout');
var colorCodes = require('ui/styles/colorCodes');
var openDB = require('db/opendb');
var taskOnTableView= require('ui/controls/taskOnTableView');

function displayTasksControl(inParam){
	
		var viewTop = inParam.top;
		//var taskTime = inParam.taskTime;
		var taskTime = parseInt(inParam.taskTime,10);
	
		var newWinDisplay = Ti.UI.createView({top:viewTop, width:'95%', backgroundColor:colorCodes.ListOfTasksViewBackgroundColor, bottom:5,
		borderRadius:colorCodes.ListOfTasksViewBorderRadius, borderWidth:colorCodes.ListOfTasksViewBorderWidth, borderColor:colorCodes.ListOfTasksViewBorderColor});		
		
		var listCategoryView = Ti.UI.createTableView({});
		
		var tasksToAdd = [];
		
		var tableCategories = Ti.UI.createTableView({data:tasksToAdd, objName:'tableCategories'});
		
		tableCategories.addEventListener('click', function(e){
			e.row.fireEvent('openTask',{});
			//this.parent.fireEvent('taskSelected', {title:e.row.title, taskID:e.row.taskID });
		});
		
		
		
		newWinDisplay.addEventListener('showTasks', function(e){
			
			tasksToAdd.length = 0;
			//tableCategories.data = tasksToAdd;
			var qReturnTasks = openDB.getTasksByTime(e.TaskTime);
			var c = qReturnTasks.rowCount;
			while(qReturnTasks.isValidRow()){
				var taskOnTable = taskOnTableView.taskOnTableView({
					viewDimensions: 32, taskDescription:qReturnTasks.fieldByName(openDB.taskName, Ti.Database.FIELD_TYPE_STRING), taskTime:qReturnTasks.fieldByName(openDB.taskProps2 , Ti.Database.FIELD_TYPE_STRING),
					taskID:qReturnTasks.fieldByName(openDB.taskProps12 , Ti.Database.FIELD_TYPE_STRING),
					taskDone:qReturnTasks.fieldByName(openDB.taskProps1 , Ti.Database.FIELD_TYPE_STRING),
					taskRepeatable:qReturnTasks.fieldByName(openDB.taskProps3 , Ti.Database.FIELD_TYPE_STRING)});				 				
				tasksToAdd.push(taskOnTable);
				qReturnTasks.next();
			}
			
			tableCategories.data = tasksToAdd;			
			newWinDisplay.add(tableCategories);
		});
		
		newWinDisplay.addEventListener('openTask', function(e){
			
		});
		
		return newWinDisplay;
	
}

exports.displayTasksControl = displayTasksControl;