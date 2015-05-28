//Asynchronous Programming

//Typical approach:
var conn = getDbConnection(connectionString);
var stmt = conn.createStatement();
var results = stmt.executeQuery(sqlQuery);
for(var i=0; i<results.length; i++){
	//print results[i];
};

//Asynchronous/"non-blocking" approach:
getDbConnection(connectionString,function(err,conn){
	conn.createStatement(function(err,stmt){
		var results = stmt.executeQuery(sqlQuery);
		results.on('row',function(result){
			//print result
		});
	});
});