function tipView(inParam){
	
	// var imagePath = inParam.imagePath;
	// var imageDescription = inParam.Description;
	
	var newWinDisplay = Ti.UI.createView({layout:'horizontal', bottom:0, width:'100%', height:'20%', backgroundColor:colorCodes.ApplicationBackgroundColor});
	
	var image = Ti.UI.createImageView({width:'20%', image:inParam.imagePath});
	newWinDisplay.add(image);
	
	var imageDesc = Ti.UI.createLabel({width:'80%',text:inParam.Description, backgroundColor:colorCodes.ApplicationBackgroundColor, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, color:'#0f0'});
	newWinDisplay.add(imageDesc);
	
	return newWinDisplay;
}

exports.tipView = tipView;