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
	
	var newWinDisplay = Ti.UI.createView({layout:'horizontal', top:inParam.top, height:viewDimensions, width:viewWidth});
	
	var newhourText = Ti.UI.createTextField({hintText:'h', height:textBoxDimensions , width:textboxWidth , font:{fontSize:textfontSize},
							borderColor:colorCodes.TextBoxBorderColor, borderWidth:colorCodes.TextBoxBorderWidth , keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
							borderRadius:colorCodes.TextBoxBorderRadius ,textAlign:Ti.UI.TEXT_ALIGNMENT_RIGHT});
	newWinDisplay.add(newhourText);
	
	var colorLabel = Ti.UI.createLabel({text:':'});
	newWinDisplay.add(colorLabel);
	
	var newminuteText = Ti.UI.createTextField({hintText:'m', height:textBoxDimensions , width:textboxWidth , font:{fontSize:textfontSize},
							borderColor:colorCodes.TextBoxBorderColor, borderWidth:colorCodes.TextBoxBorderWidth , keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD, 
							borderRadius:colorCodes.TextBoxBorderRadius ,textAlign:Ti.UI.TEXT_ALIGNMENT_RIGHT});
	newWinDisplay.add(newminuteText);
	
	var topForSubmitButton = textBoxDimensions + controlOffset - 1;
	
	var submitButton = Ti.UI.createButton({top:controlOffset, title:Ti.Locale.getString('button_get_tasks'), borderRadius:colorCodes.ButtonBorderRadius, borderColor:colorCodes.ButtonBorderColor, borderWidth:colorCodes.ButtonBorderWidth, width:viewWidth, height:textBoxDimensions});
	newWinDisplay.add(submitButton);
	
	submitButton.addEventListener('click', function(){
		
		newhourText.blur();
		newminuteText.blur();
		
		this.parent.fireEvent('showTasks', {src:this.parent});
		
	});
	
	exports.getTotalTime = function(){
		
	};
	
	return newWinDisplay;	
}

exports.inputTimeView = inputTimeView;