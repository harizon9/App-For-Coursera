var persTypes = ({TODAY:'today', TOKEN:'token'});

// set the persistent data
function putPersData(inParam){
	Ti.App.Properties.setString(persTypes[inParam.TYPE], inParam.DATA);
	return;	
}

//get the persistent data
function retPersData(inParam){
	return Ti.App.Properties.getString(persTypes[inParam.TYPE]);
}

function navHandler(inParam){
	Ti.App.fireEvent('APPNAV', inParam);
	return;
}

exports.putPersData = putPersData;
exports.retPersData = retPersData;
exports.navHandler = navHandler;