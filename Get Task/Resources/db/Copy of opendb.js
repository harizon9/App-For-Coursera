function isDirty(){
	
	// 1. Opens the database
	
	var conn = Ti.Database.install('mrkarl.sqlite');
	
	// 2. Check dirtyFlag = 1; which means that application has already calculated the values
	 var checkIfDirty = 'SELECT * APPPROPS SET WHERE PROPNAME="dirtyFlag"';
	 var dirtyCheckRow = conn.execute(checkIfDirty);
	 var dirty = false;
	 
	 if(dirtyCheckRow.isValidRow()){
	 	dirty = (dirtyCheckRow[0].fieldByName('dirtyFlag') == '1') ? true : false;
	 }
	 
	 return dirty;
};

function openDatabase (dbName, tableName){
	
	// This runs only first time
	
	var conn = Ti.Database.install('mrkarl.sqlite');
	
	// check dirtyFlag =1; which means that application has already calculated the values
	 var checkIfDirty = 'SELECT * APPPROPS SET WHERE PROPNAME="dirtyFlag"';
	 var dirtyCheckRow = conn.execute(checkIfDirty);
	 var isDirty = false;
	 
	 if(dirtyCheckRow.isValidRow()){
	 	isDirty = (dirtyCheckRow[0].fieldByName('dirtyFlag') == '1') ? true : false;
	 }
	 
	 if(!isDirty){

	 	// set user name
		var updateName = 'UPDATE APPPROPS SET PROP1="you" WHERE PROPNAME="username"';
		
		// set password
		var updatePassword = 'UPDATE APPPROPS SET PROP1="pass123" WHERE PROPNAME="password"';
		
		var screenHeight = Ti.Platform.displayCaps.platformHeight;
		var screenWidth = Ti.Platform.displayCaps.platformWidth;
		
		// set screen resolution values
		var updatePassword = 'UPDATE APPPROPS SET PROP1=' + screenHeight + ',PROP2=' + screenWidth + ' WHERE PROPNAME="screensize"';
			
		getReader = conn.execute(selectSQL);
		
		// set dirtyFlag
		var updatedirtyFlag = 'UPDATE APPPROPS SET PROP1="1" WHERE PROPNAME="dirtyFlag"';
	 }
		
	getReader.close();
	//conn.close();
	
	getReader = null;
	//conn = null;
	
	return conn;
	
};

exports.openDatabase = openDatabase;