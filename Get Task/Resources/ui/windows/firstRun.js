var layout = require('ui/common/layout');
var controlStyles = require('ui/styles/controlStyles');
var colorCodes = require('ui/styles/colorCodes');
var openDB = require('db/opendb');
var wizardManager = require('ui/controls/wizardManager/wizardManager');
var common = require('/tools/common/commonTools');
var viewNames = require('control/viewNames');
exports.firstRun = false;

function getDBFieldValues(inParam){
	
	var query = 'SELECT * FROM APPPROPS WHERE PROPNAME="' + inParam.dbField + '"';
	var usernameDBObject = openDB.runQuery(query);
	if(usernameDBObject.isValidRow()){
		var prop1 = usernameDBObject.fieldByName('PROP1'); 
		return prop1;
	}
	else{return '';};
}

function setDBFieldValues(inParam){
	var query = 'UPDATE APPPROPS SET PROP1="' + inParam.value + '" WHERE PROPNAME="' + inParam.field + '"';
	var usernameDBObject = openDB.runQuery(query);
}

function loadFirstRun(inParam){
	
	var newWinDisplay = Ti.UI.createView({top:0, left:0, right:0, bottom:layout.params.menu.height, backgroundColor:colorCodes.ApplicationBackgroundColor, layout:'vertical'});
	
	var newLabel = Ti.UI.createLabel({text:Ti.Locale.getString('first_run_configuration'), color:'#000', font:{fontSize:28}, top:'10%' });
	newWinDisplay.add(newLabel);
	
	var lineView1 = Ti.UI.createView({top:'1%', left:0, height:'1dp', width:'100%', backgroundColor:colorCodes.HorizontalBarColor});
	newWinDisplay.add(lineView1);
	
	// wizard steps brings name and date-of-birth from the database
	var wizardBackValues;
	
	
	// user name
	var username = getDBFieldValues({dbField:'username'});
	var age = getDBFieldValues({dbField:'age'});
	
	var wizardSteps = [{wizTitle:Ti.Locale.getString('firstRun_Yourname'), wizValue:username, keyboardType:Titanium.UI.KEYBOARD_DEFAULT/*1*/},
					  {wizTitle:Ti.Locale.getString('firstRun_yourAge'), wizValue:age, keyboardType:6}];
					  
	// wizard steps brings name and date-of-birth from the database
	// var wizardBackValues = [];
	// for(var i=0; i<wizardSteps.length; i++){
		// wizardBackValues.push('');
	// }
					  
	var theWizard = wizardManager.wizardManager(wizardSteps);
	newWinDisplay.add(theWizard);
	newWinDisplay.addEventListener('updateDBNewValues', function(e){
		wizardBackValues = e.wizardValues;
		setDBFieldValues({field:'username', value:wizardBackValues[0]});
		setDBFieldValues({field:'age', value:wizardBackValues[1]});
		setDBFieldValues({field:'dirtyFlag', value:'1105'});
		common.navHandler({TYPE: viewNames.GETTASK});
	});
	
	
	
	return newWinDisplay;
}

exports.loadFirstRun = loadFirstRun;