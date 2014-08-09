var colorCodes = require('ui/styles/colorCodes');

function choiceControl(inParam){
	
	var done = inParam.status;
	
	var doneNotDoneView = Ti.UI.createView({top:'1%', left:0, height:'10%', width:'100%', layout:'horizontal', backgroundColor:colorCodes.ApplicationBackgroundColor});
	
	var notDone = Ti.UI.createLabel({left:'2%', text:Ti.Locale.getString('no'), top:'2%', color:'#f00', font:{size:16}});
	
	var done = Ti.UI.createLabel({left:'2%', text:Ti.Locale.getString('yes'), top:'2%', color:'#0f0', font:{size:16}});
	
	var taskDone = Ti.UI.createSwitch({value:false, top:'1%'});
	
	doneNotDoneView.add(taskDone);
	//newWinDisplay.add(done);	
	doneNotDoneView.add(notDone);

	
	taskDone.addEventListener('change', function(e){
		var choiceStatus = (taskDone.value == true) ? 1 : 0;
		this.parent.fireEvent('choice', {src:this.parent, status:choiceStatus});
		if(taskDone.value == true){
			doneNotDoneView.remove(notDone);
			doneNotDoneView.add(done);
			
		} else {
			doneNotDoneView.add(notDone);
			doneNotDoneView.remove(done);
		}
	});
	
	var taskDone = Ti.UI.createSwitch({value:false, top:'1%'});
	newWinDisplay.add(taskDone);
	
	var labelNotDone = Ti.UI.createLabel({text:Ti.Locale.getString('nej'), backgroundColor:colorCodes.ApplicationBackgroundColor, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, color:'#0f0'});
	
	return doneNotDoneView;	
}

exports.choiceControl = choiceControl;