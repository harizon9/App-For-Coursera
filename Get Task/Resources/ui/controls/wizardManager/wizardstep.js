var layout = require('ui/common/layout');
var colorCodes = require('ui/styles/colorCodes');

function wizardStep(inParam){
		
		var wizardHeading = inParam.wizTitle; // Title of the wizard step
		var wizardValue = inParam.wizValue; // Value of the wizard step
		var stepType = inParam.stepType; // 0 - first step, 1 - middle step, 2 - last step
		var keyboardType = inParam.keyboardType; // keyboard type for this window
		this.wizStepValue;
	
		var newWinDisplay = Ti.UI.createView({top:0, width:'95%', layout:'vertical'});		
		
		var wizTitle = Ti.UI.createLabel({text:inParam.wizTitle, width:'100%', top:0});
		newWinDisplay.add(wizTitle);
		
		var wizText = Ti.UI.createTextField({width:'100%', top:'1%', borderWidth:colorCodes.TextBoxBorderWidth, borderColor:colorCodes.TextBoxBorderColor, 
												keyboardType:inParam.keyboardType ,borderRadius:colorCodes.TextBoxBorderRadius, value:wizardValue, backgroundColor:colorCodes.ApplicationBackgroundColor });
		newWinDisplay.add(wizText);
		
		var buttonHolderView = Ti.UI.createView({width:'100%', layout:'horizontal', height:'15%', top:'1%'});		
		
		// -------- Show back button only from second step of the wizard ------------
		
		switch(stepType){
			case 0: // Only next button
				var nextButton = Ti.UI.createButton({width:'30%', color:colorCodes.WizardButtonTextColor ,title:'next', backgroundColor:colorCodes.WizardRightButtonColor, borderRadius:colorCodes.WizardButtonBorderRadius});
				buttonHolderView.add(nextButton);
				// ----- Event Listener ----
				nextButton.addEventListener('click', function(e){						
						this.parent.fireEvent('showNextView', {src:this.parent, wizStepValue:wizText.value});					
				});		
				break;
			case 1: // next button and back button
				
				var backButton = Ti.UI.createButton({width:'30%', color:colorCodes.WizardButtonTextColor ,title:'back',backgroundColor:colorCodes.WizardLeftButtonColor, left:0, borderRadius:colorCodes.WizardButtonBorderRadius});
				buttonHolderView.add(backButton);
				var nextButton = Ti.UI.createButton({width:'30%', color:colorCodes.WizardButtonTextColor ,title:'next', backgroundColor:colorCodes.WizardRightButtonColor, borderRadius:colorCodes.WizardButtonBorderRadius});
				buttonHolderView.add(nextButton);
				// ----- Event Listeners ----
				nextButton.addEventListener('click', function(e){
						this.parent.fireEvent('showNextView', {src:this.parent, wizStepValue:wizText.value});					
				});					
				backButton.addEventListener('click', function(e){
					this.parent.fireEvent('showPreviousView', {src:this.parent});
				});			
				break;
			case 2: // back button and finish button
				var backButton = Ti.UI.createButton({width:'30%', color:colorCodes.WizardButtonTextColor ,title:'back',backgroundColor:colorCodes.WizardLeftButtonColor, left:0, borderRadius:colorCodes.WizardButtonBorderRadius});
				buttonHolderView.add(backButton);
				var finishButton = Ti.UI.createButton({width:'30%', color:colorCodes.WizardButtonTextColor ,title:'finish', backgroundColor:colorCodes.WizardRightButtonColor, borderRadius:colorCodes.WizardButtonBorderRadius});
				buttonHolderView.add(finishButton);	
				
				backButton.addEventListener('click', function(e){
						this.parent.fireEvent('showPreviousView', {src:this.parent});					
				});	
				finishButton.addEventListener('click', function(e){
					this.parent.fireEvent('endTheWizard', {src:this.parent, wizStepValue:wizText.value});
				});
				break;
			default:
				break;
			
		}
		
		newWinDisplay.add(buttonHolderView);		
		return newWinDisplay;

}

exports.wizardStep = wizardStep;