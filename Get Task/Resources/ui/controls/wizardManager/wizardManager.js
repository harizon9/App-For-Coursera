var layout = require('ui/common/layout');
var colorCodes = require('ui/styles/colorCodes');
var wizardStep = require('ui/controls/wizardManager/wizardstep');
var common = require('tools/common/commonTools');

function createWizardStep(inParam){
	var wiz1;
	
	if(inParam.wizValue.length > 0){
		wiz1 =  wizardStep.wizardStep({wizTitle:inParam.wizTitle, wizValue:inParam.wizValue, keyboardType:inParam.keyboardType, stepType:inParam.stepType});
	}
	else{
		wiz1 = wizardStep.wizardStep({wizTitle:inParam.wizTitle, keyboardType:inParam.keyboardType, stepType:inParam.stepType});
	}
// 	
	return wiz1;
}

function wizardManager(inParam){
		
		// Inparam is an array of wizard related objects
		
		var inParamArray = inParam;
		var currentView = 0;
		var maxViews = inParamArray.length;
		var viewTop = 20;
		var wizardStepsViews = [];
		var wizardStepValues = [];
		var curStepType = 0;
		
		
		// Create the wizard steps and push them into the array
		for(i=0; i<maxViews; i++){			
			if(i == 0){
				curStepType = 0;
			} else if(i > 0 && i < maxViews-1){
				curStepType = 1;
			}else if(i == maxViews-1){
				curStepType = 2;
			}
			
			wizardStepValues.push('');
									
			wizardStepsViews.push(createWizardStep({wizTitle:inParam[i].wizTitle, wizValue:inParam[i].wizValue, stepType:curStepType, keyboardType:inParam[i].keyboardType}));			
		}
			
		var newWinDisplay = Ti.UI.createView({top:viewTop, width:'95%', layout:'vertical'});
		newWinDisplay.add(wizardStepsViews[0]);
		
		newWinDisplay.addEventListener('showPreviousView', function(e){	
			if(currentView > 0){
				newWinDisplay.remove(wizardStepsViews[currentView]);
				currentView--;
				newWinDisplay.add(wizardStepsViews[currentView]);
			}			
		});
		newWinDisplay.addEventListener('showNextView', function(e){				
			wizardStepValues[currentView] = e.wizStepValue;
			if(currentView != maxViews-1){
				newWinDisplay.remove(wizardStepsViews[currentView]);
				currentView++;
				newWinDisplay.add(wizardStepsViews[currentView]);
			}
		});
		newWinDisplay.addEventListener('endTheWizard', function(e){ 
			// message of updated database values to the parent window.
			wizardStepValues[currentView] = e.wizStepValue;
			this.parent.fireEvent('updateDBNewValues', {src:this.parent, wizardValues:wizardStepValues});	
		});
			
		return newWinDisplay;
}

exports.wizardManager = wizardManager;