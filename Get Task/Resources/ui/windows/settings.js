var layout = require('ui/common/layout');
var controlStyles = require('ui/styles/controlStyles');
var colorCodes = require('ui/styles/colorCodes');
var common = require('/tools/common/commonTools');
var viewNames = require('control/viewNames');
var openDB = require('db/opendb');

function loadSettings(inParam){
	
	var newWinDisplay = Ti.UI.createView({top:0, left:0, right:0, bottom:layout.params.menu.height, backgroundColor:colorCodes.ApplicationBackgroundColor, layout:'vertical'});	
	
	var newLabel = Ti.UI.createLabel({text:Ti.Locale.getString('settings'), color:'#000', font:{fontSize:28}, top:'10%' });
	newWinDisplay.add(newLabel);
	
	var lineView1 = Ti.UI.createView({top:'1%', left:0, height:'1dp', width:'100%', backgroundColor:colorCodes.HorizontalBarColor});
	newWinDisplay.add(lineView1);
	
	var satisticsButton = Ti.UI.createButton({top:'10%', width:'50%', title:Ti.Locale.getString('statistics'), borderRadius:colorCodes.ButtonBorderRadius, borderColor:colorCodes.ButtonBorderColor, 
											backgroundColor:colorCodes.ButtonBackgroundColor ,color:colorCodes.ButtonTextColor, borderWidth:colorCodes.ButtonBorderWidth});
	newWinDisplay.add(satisticsButton);
	
	satisticsButton.addEventListener('click',function(e){
		common.navHandler({TYPE:viewNames.STATISTICS});
	});
	
	var firstRunButton = Ti.UI.createButton({top:'10%', width:'50%', title:Ti.Locale.getString('first_run_configuration'), borderRadius:colorCodes.ButtonBorderRadius, borderColor:colorCodes.ButtonBorderColor, 
											backgroundColor:colorCodes.ButtonBackgroundColor ,color:colorCodes.ButtonTextColor, borderWidth:colorCodes.ButtonBorderWidth});
	newWinDisplay.add(firstRunButton);
	
	firstRunButton.addEventListener('click',function(e){
		common.navHandler({TYPE:viewNames.FIRSTRUN});
	});
	
	var resetButton = Ti.UI.createButton({top:'10%', width:'50%', title:Ti.Locale.getString('reset_database'), borderRadius:colorCodes.ButtonBorderRadius, borderColor:colorCodes.ButtonBorderColor, 
											backgroundColor:colorCodes.ButtonBackgroundColor ,color:colorCodes.ButtonTextColor, borderWidth:colorCodes.ButtonBorderWidth});
	newWinDisplay.add(resetButton);
	
	resetButton.addEventListener('click',function(e){
		
		var confirmDialog = Ti.UI.createAlertDialog({title:Ti.Locale.getString('done'), message:Ti.Locale.getString('all_tasks_deleted_OK_NOTOK'),
									buttonNames:['OK', Ti.Locale.getString('cancel')], cancel:1});
		
		confirmDialog.addEventListener('click', function(e){
			if(e.index === 0){
				openDB.deleteAllTasks();
				alert(Ti.Locale.getString('all_tasks_deleted'));
			}
		});									
		confirmDialog.show();
	});
	
	newWinDisplay.addEventListener('close', function(e){
		newWinDisplay = null;
	});
	
	return newWinDisplay;
	
}

exports.loadSettings = loadSettings;