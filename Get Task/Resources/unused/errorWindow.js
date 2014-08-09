var layout = require('ui/common/layout');
var colorCodes = require('ui/styles/colorCodes');

function loadError(inParam){
	
	var newWinDisplay = Ti.UI.createView({top:0, left:0, right:0, bottom:layout.params.menu.height,  backgroundColor:colorCodes.ApplicationBackground});
	
	var newLabel = Ti.UI.createLabel({text:'ERROR WINDOW', color:'#fff'});
	newWinDisplay.add(newLabel);
	
	newWinDisplay.addEventListener('close', function(e){
		newWinDisplay = null;
	});
	
	return newWinDisplay;
	
}

exports.loadError = loadError;