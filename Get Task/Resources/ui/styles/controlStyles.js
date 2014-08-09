/*
* controlStyles.js
* ======
*
* Application wide styles used in the application are calculated here the first time
* the application runs and stored in the database or App properties. Once these values
* are saved, the values are fetched from the database instead of calculating again
*
* Author : Hari Nidamarthy
*
* Date : 2014/05/03
*
* Maintenance Log
*
* Date : Author: Changes :
*
* 
*/
/*
* The require of the application controller
*/

var colorCodes = require('ui/styles/colorCodes');

var applicationfirstRun = false; // Later this values are fetched from the
exports.labelHeadingSize = 32;
exports.labelDescriptionSize = 20;

var applicationFirstRun = function(){
	
	// check if the application is running for the first time
	// Yes -> calculateTheSizes()
	// No -> fetchTheSizes()
};
exports.applicationFirstRun = applicationFirstRun;

var calculateTheSizes = function(){
	// labelHeadingSize = 32;
	// labelDescriptionSize = 20;
};

var fetchTheSizes = function(){
	// fetch the sizes from the App properties or database
	// labelHeadingSize = 32;
	// labelDescriptionSize = 20;
};

var fontSize = function(){
	
	// density iPod and iPhone
	// high : 320dpi
	// medium: 160dpi
	
	// density iPad
	// high: 260dpi
	// medium: 130dpi
	
	// var screenHeight = Ti.Platform.displayCaps.
	// switch()
};

