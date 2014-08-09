var colorCodes = require('ui/styles/colorCodes');
var layout = require('ui/common/layout');
var openDB = require('db/opendb');
var common = require('/tools/common/commonTools');
var viewNames = require('control/viewNames');

var loadTask = function(inParam){
	var newWinDisplay = Ti.UI.createView({top:0, left:0, right:0, bottom:layout.params.menu.height,  backgroundColor:'#fff', layout:'vertical'});
	
	var taskTitle = inParam.title;
	var taskTime = inParam.taskTime;
	var taskID = inParam.taskID;
	var taskDone = inParam.taskDone;
	var taskRepeatable = inParam.taskRepeatable;
	//var qReturnObject = openDB.getTaskByID(taskID);
	
	
	
// -------------------- TASK DESCRPTION SECTION --------------	
	var taskHeading = Ti.UI.createLabel({text:Ti.Locale.getString('task_details'), font:{fontSize:32}, top:'5%', color:'#000'});
	newWinDisplay.add(taskHeading);
	
	var lineView1 = Ti.UI.createView({top:'1%', left:0, height:'1dp', width:'100%', backgroundColor:colorCodes.HorizontalBarColor});
	newWinDisplay.add(lineView1);
	
	// Label task description
	var labelDescription = Ti.Locale.getString('task_description') + ':';
	var taskLabel = Ti.UI.createLabel({left:'1%', text:labelDescription , font:{size:16}, top:'3%', color:'#000'});
	newWinDisplay.add(taskLabel);
	
	// Task details that are fetched from database
	//var taskInformationLabel = Ti.UI.createLabel({left:'1%', text:taskTitle, font:{size:16}, top:'1%', color:'#f00'});	
	//newWinDisplay.add(taskInformationLabel);
	
	var taskInformationText = Ti.UI.createTextField({left:'3%', value:taskTitle, font:{size:16}, top:'1%', color:'#f00'});	
	newWinDisplay.add(taskInformationText);
	
// ------------------- TIME TEXT BOXES ------------------

	var taskTimeLabel = Ti.UI.createLabel({left:'1%', text:Ti.Locale.getString('task_time'), font:{size:16}, top:'3%', color:'#000'});
	newWinDisplay.add(taskTimeLabel);
	
	var hours = Math.floor(taskTime/60);
	var minutes = taskTime - hours *60;
	var minutesString = (minutes < 10) ? ("0" + minutes) : minutes;

	var offset = 7;
	var textBoxDimensions = 32;
	var textboxWidth = textBoxDimensions +6;
	var viewWidth = 2 * textboxWidth + offset;
	var viewDimensions = textBoxDimensions; 
	var textfontSize = textBoxDimensions - 20;

	var timeView = Ti.UI.createView({layout:'horizontal', center:{x:newWinDisplay.width/2}, height:viewDimensions, width:viewWidth, backgroundColor:colorCodes.ApplicationBackgroundColor});
	
	//Ti.UI.createView({top:'1%', width:'30%', center:{x:newWinDisplay.width/2}, height:'10%', layout:'horizontal', backgroundColor:'yellow' /*backgroundColor:colorCodes.ApplicationBackgroundColor*/});	//, backgroundColor:'yellow'
	
	
	
	var newhourText = Ti.UI.createTextField({hintText:Ti.Locale.getString('hour_representation'), height:textBoxDimensions , width:textboxWidth , font:{fontSize:textfontSize},
							borderColor:colorCodes.TextBoxBorderColor, borderWidth:colorCodes.TextBoxBorderWidth, keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
							borderRadius:colorCodes.TextBoxBorderRadius ,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER, backgroundColor:colorCodes.ApplicationBackgroundColor,
							value:hours});
	timeView.add(newhourText);
	
	var colorLabel = Ti.UI.createLabel({text:':'});
	timeView.add(colorLabel);
	
	var newminuteText = Ti.UI.createTextField({hintText:Ti.Locale.getString('minute_representation'), height:textBoxDimensions , width:textboxWidth , font:{fontSize:textfontSize},
							borderColor:colorCodes.TextBoxBorderColor, borderWidth:colorCodes.TextBoxBorderWidth , keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD, 
							borderRadius:colorCodes.TextBoxBorderRadius ,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER, backgroundColor:colorCodes.ApplicationBackgroundColor,
							value:minutesString});
	timeView.add(newminuteText);	
	newWinDisplay.add(timeView);


// ---------- TASK FINISHED SECTION ---------------
	//Label task finished
	var labelFinished = Ti.Locale.getString('finished_task') + '?';
	var finishedLabel = Ti.UI.createLabel({left:'1%', text:labelFinished, font:{size:16}, top:'3%', color:'#000'});
	newWinDisplay.add(finishedLabel);
	
	// view for the done-notdone
	var doneNotDoneView = Ti.UI.createView({top:'1%', width:'30%', center:{x:newWinDisplay.width/2}, height:'10%', layout:'horizontal', backgroundColor:colorCodes.ApplicationBackgroundColor});
	newWinDisplay.add(doneNotDoneView);
	
	var notDone = Ti.UI.createLabel({left:'2%', text:Ti.Locale.getString('no'), top:'2%', color:'#f00', font:{size:16}});
	
	var done = Ti.UI.createLabel({left:'2%', text:Ti.Locale.getString('yes'), top:'2%', color:'#0f0', font:{size:16}});
	
	var taskDone = Ti.UI.createSwitch({value:taskDone, top:'1%'});
	
	function doneYesNo(){
		if(taskDone.value == true){
			doneNotDoneView.remove(notDone);
			doneNotDoneView.add(done);
		} else {
			doneNotDoneView.remove(done);
			doneNotDoneView.add(notDone);		
		}
	}
	
	taskDone.addEventListener('change', function(e){
		if(taskDone.value == false){
			repeatSwitch.value = false;
			repeatView.remove(repeat);
			repeatView.remove(noRepeat);
			repeatView.add(noRepeat);	
		}		
	});
	
	doneNotDoneView.add(taskDone);
	//newWinDisplay.add(done);	
	//doneNotDoneView.add(notDone);
	doneYesNo();
	
	taskDone.addEventListener('change', function(e){
		doneYesNo();
	});

// ---------- TASK REPEAT SECTION ---------------
	// Label task Repeatable
	var labelRepeat = Ti.Locale.getString('set_repeatable') + '?';
	var repeatLabel = Ti.UI.createLabel({left:'1%', text:labelRepeat, font:{size:16}, top:'3%', color:'#000'});
	newWinDisplay.add(repeatLabel);
	
	//view for the repeatable
	var noRepeat = Ti.UI.createLabel({left:'2%', text:Ti.Locale.getString('no'), top:'2%', color:'#f00', font:{size:16}});
	var repeat = Ti.UI.createLabel({left:'2%', text:Ti.Locale.getString('yes'), top:'2%', color:'#0f0', font:{size:16}});
	var repeatSwitch = Ti.UI.createSwitch({value:taskRepeatable, top:'1%'});
	
	//var repeatView = Ti.UI.createView({top:'1%', width:'30%', left:0, height:'10%', layout:'horizontal', backgroundColor:'#ff0'/*colorCodes.ApplicationBackgroundColor*/});
 	var repeatView = Ti.UI.createView({top:'1%', center:{x:newWinDisplay.width/2}, width:'30%', height:'10%', layout:'horizontal', backgroundColor:colorCodes.ApplicationBackgroundColor});
 	
 	function repeatYesNo(){
 		if(repeatSwitch.value == true){
			repeatView.remove(noRepeat);
			repeatView.add(repeat);
		} else {
			repeatView.remove(repeat);
			repeatView.add(noRepeat);		
		}
 	}
 	
	repeatView.add(repeatSwitch);
	//newWinDisplay.add(done);	
	//repeatView.add(noRepeat);
	repeatYesNo();

	repeatSwitch.addEventListener('change', function(e){
		if(taskDone.value == true){
			repeatYesNo();
		} else {
			repeatSwitch.value = false;
		}
		
	});
	newWinDisplay.add(repeatView);
	
	newWinDisplay.addEventListener('doubletap', function(e){
		taskInformationText.blur();
		newhourText.blur();
		newminuteText.blur();
	});
	
	
	var submitButton = Ti.UI.createButton({top:'5%',title:'Submit', borderRadius:colorCodes.ButtonBorderRadius, borderColor:colorCodes.ButtonBorderColor, width:'20%',
											backgroundColor:colorCodes.ButtonBackgroundColor ,color:colorCodes.ButtonTextColor, borderWidth:colorCodes.ButtonBorderWidth});
	newWinDisplay.add(submitButton);
	
	submitButton.addEventListener('click', function(e){
		
		var hours = (newhourText.value.length > 0) ? parseInt(newhourText.value,10) : 0;
		var minutes = (newminuteText.value.length > 0) ? parseInt(newminuteText.value,10) : 0;
		var taskTimeNewValue = hours*60 + minutes;
		
		var taskDoneInt = (taskDone.value == true) ? 1 : 0;
		var repeatableInt = (repeatSwitch.value == true) ? 1 : 0;
		openDB.updateTask({taskID:taskID, taskName:taskInformationText.value, done:taskDoneInt, taskTime:taskTimeNewValue , repeatable:repeatableInt});
		if(taskDone.value == true){
			openDB.updateAchievement({time:taskTimeNewValue});
		}
		alert(Ti.Locale.getString('task_is_updated'));
		common.navHandler({TYPE:viewNames.GETTASK});
	});
	
	return newWinDisplay;
};

exports.loadTask = loadTask;