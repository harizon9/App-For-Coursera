var layout = require('ui/common/layout');
var controlStyles = require('ui/styles/controlStyles');
var colorCodes = require('ui/styles/colorCodes');

exports.TotalTime = 0;

function inputTimeView(inParam){
	
	var textBoxDimensions = inParam.textBoxDimension;
	var controlOffset = inParam.controlOffset;
	var textboxWidth = textBoxDimensions +6;
	var viewWidth = 2 * textboxWidth + controlOffset;
	var viewDimensions = 2 * textBoxDimensions + controlOffset;
	var textfontSize = textBoxDimensions - 20;
	var buttonText = inParam.buttonText;
	
	var newWinDisplay = Ti.UI.createView({layout:'horizontal', top:inParam.top, height:viewDimensions, width:viewWidth, backgroundColor:colorCodes.ApplicationBackgroundColor});	//, backgroundColor:'yellow'
	
	
	
	var newhourText = Ti.UI.createTextField({hintText:Ti.Locale.getString('hour_representation'), height:textBoxDimensions , width:textboxWidth , font:{fontSize:textfontSize},
							borderColor:colorCodes.TextBoxBorderColor, borderWidth:colorCodes.TextBoxBorderWidth, keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
							borderRadius:colorCodes.TextBoxBorderRadius ,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER, backgroundColor:colorCodes.ApplicationBackgroundColor});
	newWinDisplay.add(newhourText);
	
	var colorLabel = Ti.UI.createLabel({text:':'});
	newWinDisplay.add(colorLabel);
	
	var newminuteText = Ti.UI.createTextField({hintText:Ti.Locale.getString('minute_representation'), height:textBoxDimensions , width:textboxWidth , font:{fontSize:textfontSize},
							borderColor:colorCodes.TextBoxBorderColor, borderWidth:colorCodes.TextBoxBorderWidth , keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD, 
							borderRadius:colorCodes.TextBoxBorderRadius ,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER, backgroundColor:colorCodes.ApplicationBackgroundColor});
	newWinDisplay.add(newminuteText);
	
	var topForSubmitButton = textBoxDimensions + controlOffset - 1;
	
	var submitButton = Ti.UI.createButton({top:controlOffset, title:buttonText, borderRadius:colorCodes.ButtonBorderRadius, borderColor:colorCodes.ButtonBorderColor, 
											backgroundColor:colorCodes.ButtonBackgroundColor ,color:colorCodes.ButtonTextColor, borderWidth:colorCodes.ButtonBorderWidth, width:viewWidth, height:textBoxDimensions});
	newWinDisplay.add(submitButton);
	
	newWinDisplay.addEventListener('blurText', function(e){
		newhourText.blur();
		newminuteText.blur();
	});
	
	submitButton.addEventListener('click', function(){
		
		
		var hours = (newhourText.value.length > 0) ? parseInt(newhourText.value,10) : 0;
		var minutes = (newminuteText.value.length > 0) ? parseInt(newminuteText.value,10) : 0;
		var taskTime = hours*60 + minutes;
		
		newhourText.blur();
		newminuteText.blur();
		
		if(newhourText.value.length > 0 || newminuteText.value.length > 0){
			this.parent.fireEvent('inputTimeButtonPressed', {src:this.parent, TaskTime: taskTime});
		}
	});
	
	exports.getTotalTime = function(){
		
	};
	
	return newWinDisplay;	
}

exports.inputTimeView = inputTimeView;