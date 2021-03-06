monitoringsurveyfreq=[];
// ============= layer styles ==================

function getlandmartstyle(featuretype)
{
	if(featuretype=='PUBLIC TOILETS') {
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/1.png'}))
		});
	}
	if(featuretype=='PHC'){
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/2.png'}))
		});
	}
	if(featuretype=='CHC'){
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/3.png'}))
		});
	}
	if(featuretype=='SUB CENTRE'){
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/4.png'}))
		});
	}
	if(featuretype=='PANCHAYAT BHAWAN'){
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/5.png'}))
		});
	}
	if(featuretype=='POST OFFICE'){
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/6.png'}))
		});
	}
	if(featuretype=='POLICE OFFICE'){
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/7.png'}))
		});
	}
	if(featuretype=='VENTERINERY HOSPITAL'){
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/8.png'}))
		});
	}
	if(featuretype=='RELIGIOUS BUILDING'){
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/9.png'}))
		});
	}
	if(featuretype=='CEMETERY & BURIAL GROUND'){
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/10.png'}))
		});
	}
	if(featuretype=='ELECTRICITY STATION'){
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/11.png'}))
		});
	}
	if(featuretype=='GOVT. SCHOOL'){
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/12.png'}))
		});
	}
	if(featuretype=='PVT SCHOOL'){
		return new ol.style.Style
		({
			fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
			stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
			image: new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/13.png'}))
		});
	}
}


var todo = new ol.style.Style
	({
		fill: new ol.style.Fill({ color: 'rgba(254, 0, 0, 0.59)', weight: 1 }),
		stroke: new ol.style.Stroke({ color: 'rgb(254, 0, 0)', width: 2 }),
		image: new ol.style.Circle({ radius: 7,
			stroke: new ol.style.Stroke
			({ color: 'rgba(254, 0, 0, 0.59)', width: 2 }),
			fill: new ol.style.Fill
			({ color: 'rgba(254, 0, 0, 0.59)' })
		})
	});

var inprogress = new ol.style.Style
	({
		fill: new ol.style.Fill({ color: 'rgba(245, 104, 2, 0.59)', weight: 1 }),
		stroke: new ol.style.Stroke({ color: 'rgb(245, 104, 2)', width: 2 }),
		image: new ol.style.Circle({ radius: 7,
			stroke: new ol.style.Stroke
			({ color: 'rgba(245, 104, 2, 0.59)', width: 2 }),
			fill: new ol.style.Fill
			({ color: 'rgba(245, 104, 2, 0.59)' })
		})
	});


var submitted = new ol.style.Style
	({
		fill: new ol.style.Fill({ color: 'rgba(193, 142, 0, 0.59)', weight: 1 }),
		stroke: new ol.style.Stroke({ color: '#rgb(193, 142, 0)', width: 2 }),
		image: new ol.style.Circle({ radius: 7,
			stroke: new ol.style.Stroke
			({ color: 'rgba(193, 142, 0, 0.59)', width: 2 }),
			fill: new ol.style.Fill
			({ color: 'rgba(193, 142, 0, 0.59)' })
		})
	});

var synced = new ol.style.Style
	({
		fill: new ol.style.Fill({ color: 'rgba(159, 216, 2, 0.59)', weight: 1 }),
		stroke: new ol.style.Stroke({ color: 'rgb(159, 216, 2)', width: 2 }),
		image: new ol.style.Circle({ radius: 7,
			stroke: new ol.style.Stroke
			({ color: 'rgba(159, 216, 2, 0.59)', width: 2 }),
			fill: new ol.style.Fill
			({ color: 'rgba(159, 216, 2, 0.59)' })
		})
	});
// ============= layer styles ends ==================

//  ================== *** SYNC BEGAIN  ***  ====================
function syncdate()
{
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Syncing...", true);
				//var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
		    	db.transaction(sqlsyncdate, errorCB, syncLoad);
		    }else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});

	}, 60);
}

	
function sqlsyncdate(createtransaction)
{
	//createtransaction.executeSql('CREATE TABLE IF NOT EXISTS syncdates (remark, uploadservertime, uploadlocaltime, downloadservertime, downloadlocaltime)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS syncdates (service, surveyworkitemmapping, servertime, localtime, remark)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS workitems (workitemcode,  workitemname, workitemdesc, workitemtype, parentworkitemcode, planstartdate, planenddate, actualstartdate, primaryowner, percentagecompleted, displayorder, surveyworkitemmappingcode, target, createdby, surveycode, frequncy)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS monitoringsurveydates (surveyworkitemmappingcode, surveycode, startdate, enddate, frequency, fromsurveydate, tosurveydate, status, createddate)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS locations (workitemscode, locationcode, locationname, locationtype)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS survey (workitemscode, surveycode, surveyname, surveydesc, sectorcode, questionsetcode, createdby, createdon, type, frequency, startdate, enddate, programcode, interventioncode)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS mmpbenfimis (surveyworkitemmappingcode, surveycode, resondantcode, respondantname, gender, hohname, relationwithhoh, occupation, dateofbirth, block, grampanchayat, village, buildingcode, housecode,  buildingtype, surveydate, updatedon, empid, empname, status)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS mmpbenfigis (gissurveyworkitemmappingcode, gisbuildingcode, geom, gisstatus)');
	
	//createtransaction.executeSql('CREATE TABLE IF NOT EXISTS mmpbenfi (surveyworkitemmappingcode, surveycode,resondantcode,respondantname,gender,hohname,relationwithhoh,occupation,dateofbirth,block,grampanchayat,village, buildingcode, housecode,  buildingtype, geom, surveydate, updatedon, empid, empname, status)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS mmp_ms_benf (surveyworkitemmappingcode, surveycode, respondantcode, fromdate, todate, status, updatedon, empid, empname )');
	
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS questiontypes (questiontypecode, questiontype)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS questions (workitemscode, surveycode, sectioncode, sectiondisplayorder INTEGER, questiondisplayorder INTEGER,  questioncode, questiontext, sectionname, validationtypecode, questiontypecode, questiontype, haschildquestion, parentquestion, conditionvalue, controltype, questionlevel, hasoptions, optionid, childquestionconditionid, helptext, frequencyofquestions, numberoftimes, frequencystartdate, sectorcode, programcode, interventioncode, categoryid, suggestivetext)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS questionoptions (workitemscode, surveycode, questioncode, displaytext, displayvalue, displayorder INTEGER)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS surveyparentresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, syncedon, empid, UploadedFrom)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS surveychildresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, syncedon, empid, UploadedFrom)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS validations (workitemscode, surveycode, validationtypecode, questioncode, validationtypename, allowedvalues, violationmessage)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS workitemsserverstatus(workitemmmpcode, target, fromdate, open, saved, submitted, synced)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS shroads(roadcode, geom)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS gproads(roadcode, geom)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS villageroads(roadcode, geom)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS villageboundries(workitemscode,roadcode, villagename, geom)');
	createtransaction.executeSql('CREATE TABLE IF NOT EXISTS landmarks(workitemscode, type, geom)');
	
	// createtransaction.executeSql('INSERT INTO mmpbenfimis (surveyworkitemmappingcode, surveycode, resondantcode, respondantname, gender, hohname, relationwithhoh, occupation, dateofbirth, block, grampanchayat, village, buildingcode, housecode,  buildingtype, surveydate, updatedon, empid, empname, status) VALUES ("0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0", "0", "0", "0", "0", "0")');
	// createtransaction.executeSql('INSERT INTO mmpbenfigis (surveyworkitemmappingcode, buildingcode, geom, status) VALUES (surveyworkitemmappingcode, "0", "0", "0")');
	
	// createtransaction.executeSql('CREATE VIEW IF NOT EXISTS mmpbenfi AS SELECT mmpbenfimis.surveyworkitemmappingcode, mmpbenfimis.surveycode, mmpbenfimis.resondantcode, mmpbenfimis.respondantname, mmpbenfimis.gender, mmpbenfimis.hohname, mmpbenfimis.relationwithhoh, mmpbenfimis.occupation, mmpbenfimis.dateofbirth, mmpbenfimis.block, mmpbenfimis.grampanchayat, mmpbenfimis.village, mmpbenfimis.buildingcode, mmpbenfimis.housecode,  mmpbenfimis.buildingtype, mmpbenfimis.surveydate, mmpbenfimis.updatedon, mmpbenfimis.empid, mmpbenfimis.empname, mmpbenfimis.status as status, mmpbenfigis.geom, mmpbenfigis.status as gistatus WHERE mmpbenfimis.surveyworkitemmappingcode=mmpbenfigis.surveyworkitemmappingcode AND mmpbenfimis.buildingcode=mmpbenfigis.buildingcode');
	createtransaction.executeSql('CREATE VIEW IF NOT EXISTS mmpbenfi AS SELECT surveyworkitemmappingcode, surveycode, resondantcode, respondantname, gender, hohname, relationwithhoh, occupation, dateofbirth, block, grampanchayat, village, buildingcode, housecode,  buildingtype, surveydate, updatedon, empid, empname, status, geom, gisstatus FROM mmpbenfimis  LEFT JOIN mmpbenfigis ON mmpbenfimis.surveyworkitemmappingcode=mmpbenfigis.gissurveyworkitemmappingcode AND mmpbenfimis.buildingcode=mmpbenfigis.gisbuildingcode');
	createtransaction.executeSql('CREATE VIEW IF NOT EXISTS ms_mmp_benf_selected AS SELECT mmpbenfi.surveyworkitemmappingcode as surveyworkitemmappingcode, mmpbenfi.surveycode, mmpbenfi.resondantcode, mmp_ms_benf.empid, mmp_ms_benf.empname, mmpbenfi.respondantname, mmpbenfi.gender, mmpbenfi.hohname, mmpbenfi.relationwithhoh, mmpbenfi.occupation, mmpbenfi.dateofbirth, mmpbenfi.block, mmpbenfi.grampanchayat, mmpbenfi.village, mmpbenfi.buildingcode, mmpbenfi.housecode,  mmpbenfi.buildingtype, mmpbenfi.geom, mmp_ms_benf.fromdate, mmp_ms_benf.todate, mmp_ms_benf.status FROM mmp_ms_benf LEFT JOIN mmpbenfi ON mmp_ms_benf.respondantcode=mmpbenfi.resondantcode AND mmp_ms_benf.surveyworkitemmappingcode=mmpbenfi.surveyworkitemmappingcode AND mmp_ms_benf.surveycode=mmpbenfi.surveycode');
	
	// mmpbenfimis.surveyworkitemmappingcode, mmpbenfimis.surveycode, mmpbenfimis.resondantcode, mmpbenfimis.respondantname, mmpbenfimis.gender, mmpbenfimis.hohname, mmpbenfimis.relationwithhoh, mmpbenfimis.occupation, mmpbenfimis.dateofbirth, mmpbenfimis.block, mmpbenfimis.grampanchayat, mmpbenfimis.village, mmpbenfimis.buildingcode, mmpbenfimis.housecode,  mmpbenfimis.buildingtype, mmpbenfimis.surveydate, mmpbenfimis.updatedon, mmpbenfimis.empid, mmpbenfimis.empname, mmpbenfimis.status
	createtransaction.executeSql('SELECT service, servertime, localtime FROM syncdates',[], function(lastsync, results)
	{
		if(results.rows.length>0)
		{
			//alert(JSON.stringify(results.rows.item(0)));
			uploadservertime=results.rows.item(0).servertime;
			uploadlocaltime=results.rows.item(0).localtime;
			downloadservertime=results.rows.item(0).servertime;
			downloadlocaltime=results.rows.item(0).localtime;
		}else{
			// lastsync.executeSql('INSERT INTO syncdates (service) VALUES ("row")');
			lastsync.executeSql('INSERT INTO syncdates (service) VALUES ("empworkitemdetails")');
			lastsync.executeSql('INSERT INTO syncdates (service) VALUES ("sdnew")');
			lastsync.executeSql('INSERT INTO syncdates (service) VALUES ("updatebeneficiarynew")');

		}
	});
	
}



function syncUpload()
{

	rootdetection.isDeviceRooted(function (result) {
		if(result==0)
		{
			// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
			var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
		    db.transaction(sqlsyncUpload, errorCB, uploadsurveyresponsesavedSuccessfully);	
		}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
	}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});	
}
function uploadsurveyresponsesavedSuccessfully(uploadsurveyresponsetrans, results)
{
	uploadsurveyresponses(uploadsurveyresponsetrans)
}
function preparentdata1(prepareprantdatatrans, results){for(ploop=0; ploop<results.rows.length; ploop++){parentresponse[ploop]= results.rows.item(ploop)}}
function prechilddata1(prechilddatatrans, results){for(cloop=0; cloop<results.rows.length; cloop++){childresponse[cloop]= results.rows.item(cloop)}}
function uploadmonitoringbenf(uploadmonitoringtrans, results){for(loop=0; loop<results.rows.length; loop++){selectedmonitoringbenflist[loop]= results.rows.item(loop)}}
function sqlsyncUpload(uploadsynctrans)
{
	selectedmonitoringbenflist={};
	parentresponse={};
	childresponse={};

	uploadlocaltime=(new Date()).toISOString();
	
	if(uploadlocaltime=="")
	{
		uploadsynctrans.executeSql('SELECT surveyworkitemmappingcode, surveycode, resondantcode, housecode, hohname FROM mmpbenfi WHERE status="4"', [], uploadmonitoringbenf, errorCB);
		uploadsynctrans.executeSql('SELECT * FROM surveyparentresponse WHERE status="2"', [], preparentdata1, errorCB);
		uploadsynctrans.executeSql('SELECT * FROM surveychildresponse WHERE status="2"', [], prechilddata1, errorCB);
	}
	else{
		uploadsynctrans.executeSql('SELECT surveyworkitemmappingcode, surveycode, resondantcode, housecode, hohname FROM mmpbenfi WHERE  Datetime(updatedon) <= Datetime(?) AND status IN ("4","2")', [uploadlocaltime], uploadmonitoringbenf, errorCB);
		uploadsynctrans.executeSql('SELECT * FROM surveyparentresponse WHERE  Datetime(createdon) <= Datetime(?) AND status="2"', [uploadlocaltime], preparentdata1, errorCB);
		uploadsynctrans.executeSql('SELECT * FROM surveychildresponse WHERE  Datetime(createdon) <= Datetime(?) AND status="2"', [uploadlocaltime], prechilddata1, errorCB);	
	}
}



// Create OR Update DATABASE
function syncDownload()
{
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
		    	db.transaction(addValidationMaster, errorCB, loadlocalresponces);
		    }else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}

//  ERROR CallBack function     
function errorCB(err)
{
	SpinnerDialog.hide();
	var message= "Error processing SQL: "+err.code+"\n"+"Error Message:"+err.message;
	navigator.notification.alert(message, function(){}, 'Samuday 360','Done');
}

//  IF all the Data
function addsuccess()
{
	var path = window.location.pathname.split("/").pop();
	
	navigator.notification.alert("Synced Successfully", function(){
		
		if(path=="index.html"){
			SpinnerDialog.hide();
			$("#loginform").hide();
			$("#verificationform").hide();
			$("#setpinform").show();
			$("#enterpinform").hide();
			$("#attendanceform").hide();
		}else if(path=="selectsbeneficiary.html"){
			setTimeout(function(){window.location.href="monitoringworkiteminfo.html";},100)
		}
		else{setTimeout(function(){SpinnerDialog.hide(); window.location.reload();},100)}
	}, 'Samuday 360','Done');
}

// Create OR Update ValidationMaster
function addValidationMaster(validationmastertrans)
{
	questiontypesarry=questiontypes.length;
	if(questiontypesarry>0)
	{
		for(loop=0; loop<questiontypesarry; loop++)
		{validationmastertrans.executeSql('INSERT INTO questiontypes (questiontypecode, questiontype) VALUES (?, ?)', [questiontypes[loop].questiontypecode, questiontypes[loop].questiontype]);}	
	}
	
	// sh_roads_arrlen=sh_roads_arr.length;
	// if(sh_roads_arrlen>0)
	// {
	// 	for(sh_roadsloop=0; sh_roadsloop<sh_roads_arrlen; sh_roadsloop++)
	// 	{validationmastertrans.executeSql('INSERT INTO shroads(roadcode, geom) VALUES (?,?)',  [sh_roads_arr[sh_roadsloop].sh_code, sh_roads_arr[sh_roadsloop].st_astext]);}
	// }

	// gp_roads_arrlen=gp_roads_arr.length;
	// if(gp_roads_arrlen>0)
	// {
	// 	for(gp_roadsloop=0; gp_roadsloop<gp_roads_arrlen; gp_roadsloop++)
	// 	{validationmastertrans.executeSql('INSERT INTO gproads(roadcode, geom) VALUES (?,?)', [gp_roads_arr[gp_roadsloop].gpr_code, gp_roads_arr[gp_roadsloop].st_astext]);}
	// }

	addWorkItems(validationmastertrans);
}

function addWorkItems(addworkitemtrans)
{	
	workitemsarry=workitems.length;
	timestamp=new Date().toISOString();
	
	for(closedworkitesloop=0; closedworkitesloop<colsedworkitems.length; closedworkitesloop++)
	{

		addworkitemtrans.executeSql("DELETE FROM workitems WHERE workitemcode=?", [colsedworkitems[closedworkitesloop].workitemcode]);
		addworkitemtrans.executeSql("DELETE FROM locations WHERE   workitemscode=?", [colsedworkitems[closedworkitesloop].workitemcode]);
		addworkitemtrans.executeSql("DELETE FROM survey WHERE   workitemscode=?", [colsedworkitems[closedworkitesloop].workitemcode]);
		addworkitemtrans.executeSql("DELETE FROM questions WHERE  workitemscode=?", [colsedworkitems[closedworkitesloop].workitemcode]);
		addworkitemtrans.executeSql("DELETE FROM questionoptions WHERE  workitemscode=?", [colsedworkitems[closedworkitesloop].workitemcode]);
		addworkitemtrans.executeSql("DELETE FROM validations WHERE  workitemscode=?", [colsedworkitems[closedworkitesloop].workitemcode]);
		addworkitemtrans.executeSql("DELETE FROM workitemsserverstatus WHERE workitemmmpcode=?", [colsedworkitems[closedworkitesloop].workitemcode]);

		addworkitemtrans.executeSql("DELETE FROM monitoringsurveydates WHERE  surveyworkitemmappingcode=?", [colsedworkitems[closedworkitesloop].surveymappingcode]);
		addworkitemtrans.executeSql("DELETE FROM mmpbenfimis WHERE  surveyworkitemmappingcode=?", [colsedworkitems[closedworkitesloop].surveymappingcode]);
		addworkitemtrans.executeSql("DELETE FROM mmpbenfigis WHERE  surveyworkitemmappingcode=?", [colsedworkitems[closedworkitesloop].surveymappingcode]);
		addworkitemtrans.executeSql("DELETE FROM mmp_ms_benf WHERE   surveyworkitemmappingcode=?", [colsedworkitems[closedworkitesloop].surveymappingcode]);
		addworkitemtrans.executeSql("DELETE FROM surveyparentresponse WHERE   surveyworkitemmappingcode=?", [colsedworkitems[closedworkitesloop].surveymappingcode]);
		addworkitemtrans.executeSql("DELETE FROM surveychildresponse WHERE   surveyworkitemmappingcode=?", [colsedworkitems[closedworkitesloop].surveymappingcode]);
		addworkitemtrans.executeSql('DELETE FROM syncdates WHERE surveyworkitemmapping=?', [colsedworkitems[closedworkitesloop].surveymappingcode]);
	}

		//=====   Remove All workitems  ======================
		addworkitemtrans.executeSql("DELETE FROM questiontypes", []);
		addworkitemtrans.executeSql("DELETE FROM workitems", []);
		addworkitemtrans.executeSql("DELETE FROM locations", []);
		addworkitemtrans.executeSql("DELETE FROM survey", []);
		addworkitemtrans.executeSql("DELETE FROM questions", []);
		addworkitemtrans.executeSql("DELETE FROM questionoptions", []);
		addworkitemtrans.executeSql("DELETE FROM validations", []);
		addworkitemtrans.executeSql("DELETE FROM workitemsserverstatus", []);
		addworkitemtrans.executeSql("DELETE FROM monitoringsurveydates", []);
		// addworkitemtrans.executeSql("DELETE FROM mmpbenfimis", []);
		// addworkitemtrans.executeSql("DELETE FROM mmpbenfigis", []);
		// addworkitemtrans.executeSql("DELETE FROM mmp_ms_benf", []);
		// addworkitemtrans.executeSql("DELETE FROM surveyparentresponse", []);
		// addworkitemtrans.executeSql("DELETE FROM surveychildresponse", []);
		// addworkitemtrans.executeSql('DELETE FROM syncdates', []);
		//=====   Remove All workitems  ======================
	

	// var freqarry=["100", "101", "102", "103", "127"];
	// && (freqarry.indexOf(workitemset.frequncy)>=0)

	if(workitemsarry>0)
	{
		for(loop=0; loop<workitemsarry; loop++)
		{
			workitemset=workitems[loop].workitems[0];
			
			if(workitems[loop].workitems.length>0)
			{
			surveyset=workitems[loop].survey[0];
			if(surveyset.type=="MS")
			{
				msdate = new Date(workitemset.startdate.slice(0,10));
				enddate= new Date(workitemset.endddate.slice(0,10));
				msfrequency=0;

				if(workitemset.frequncy=="100"){msfrequency=1}
				else if(workitemset.frequncy=="101"){msfrequency=2}
				else if(workitemset.frequncy=="102"){msfrequency=7}
				else if(workitemset.frequncy=="103"){msfrequency=15}
				else if(workitemset.frequncy=="127"){msfrequency=30}


				msdates=[]
				lastdate = msdate.toISOString().slice(0,10);
				var mscount=0;
				
				while(enddate>=msdate)
				{
					msdate.setDate(msdate.getDate() + msfrequency);
					
					if(parseInt((enddate-msdate) / (1000 * 60 * 60 * 24), 10)>=0)
					{
						msdates.push(lastdate)
						addworkitemtrans.executeSql('INSERT INTO monitoringsurveydates (surveyworkitemmappingcode, surveycode, startdate, enddate, frequency, fromsurveydate, tosurveydate, status, createddate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',  [workitemset.surveyworkitemmappingcode, workitemset.surveycode, workitemset.startdate, workitemset.endddate, workitemset.frequncy, lastdate, msdate.toISOString().slice(0,10), "1", timestamp]);
						addworkitemtrans.executeSql('INSERT INTO workitemsserverstatus(workitemmmpcode, target, fromdate, open, saved, submitted, synced) VALUES (?, ?, ?, ?, ?, ?, ?)', [workitemset.wrkitem, workitems[loop].status[0].target, lastdate, workitems[loop].status[0].open, workitems[loop].status[0].saved, workitems[loop].status[0].submitted, workitems[loop].status[0].synced]);
						mscount++;
					}
					lastdate = msdate.toISOString().slice(0,10);					
				}
				if(mscount==0){
					msdates.push(workitemset.startdate.slice(0,10))
					addworkitemtrans.executeSql('INSERT INTO monitoringsurveydates (surveyworkitemmappingcode, surveycode, startdate, enddate, frequency, fromsurveydate, tosurveydate, status, createddate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [workitemset.surveyworkitemmappingcode, workitemset.surveycode, workitemset.startdate, workitemset.endddate, workitemset.frequncy, workitemset.startdate.slice(0,10), workitemset.endddate.slice(0,10), "1", timestamp]);
					addworkitemtrans.executeSql('INSERT INTO workitemsserverstatus (workitemmmpcode, target, fromdate, open, saved, submitted, synced) VALUES (?, ?, ?, ?, ?, ?, ?)',  [workitemset.wrkitem, workitems[loop].status[0].target, workitemset.startdate.slice(0,10), workitems[loop].status[0].open, workitems[loop].status[0].saved, workitems[loop].status[0].submitted, workitems[loop].status[0].synced]);
				}
			}
			else{
				addworkitemtrans.executeSql('INSERT INTO workitemsserverstatus (workitemmmpcode, target, open, saved, submitted, synced) VALUES (?, ?, ?, ?, ?, ?)', [workitemset.wrkitem, workitems[loop].status[0].target, workitems[loop].status[0].open, workitems[loop].status[0].saved, workitems[loop].status[0].submitted, workitems[loop].status[0].synced]);
			}

			validations=workitems[loop].validations;
			validationarray=validations.length;
			if(validationarray>0)
			{
				for(validationloop=0; validationloop<validationarray; validationloop++)
				{addworkitemtrans.executeSql('INSERT INTO validations (workitemscode, surveycode, validationtypecode, questioncode, validationtypename, allowedvalues, violationmessage) VALUES (?, ?, ?, ?, ?, ?, ?)',  [workitemset.wrkitem, surveyset.surveycode, validations[validationloop].validationtypecode, validations[validationloop].questioncode, validations[validationloop].validationtypename, validations[validationloop].allowedvalues, validations[validationloop].violationmessage]);}
			}
			
			questionoptions=workitems[loop].questionoptions;
			questionoptionsarray=questionoptions.length;
			if(questionoptionsarray>0)
			{
				for(qoloop=0; qoloop<questionoptionsarray; qoloop++)
				{addworkitemtrans.executeSql('INSERT INTO questionoptions (workitemscode, surveycode, questioncode, displaytext, displayvalue, displayorder) VALUES (?, ?, ?, ?, ?, ?)', [workitemset.wrkitem, surveyset.surveycode, questionoptions[qoloop].questioncode, questionoptions[qoloop].displaytext, questionoptions[qoloop].displayvalue, questionoptions[qoloop].displayorder]);}
			}
			
			addworkitemtrans.executeSql('INSERT INTO workitems (workitemcode, workitemname, workitemdesc, workitemtype, parentworkitemcode, planstartdate, planenddate, actualstartdate, primaryowner, percentagecompleted, displayorder, surveyworkitemmappingcode, target, createdby, surveycode, frequncy) VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',  [workitemset.wrkitem, workitemset.workitemname, workitemset.workitemdesc, workitemset.workitemtype, workitemset.parentworkitemcode, workitemset.planstartdate, workitemset.planenddate, workitemset.actualstartdate, workitemset.primaryowner, workitemset.percentagecompleted, workitemset.displayorder, workitemset.surveyworkitemmappingcode, workitemset.target, workitemset.createdby, workitemset.surveycode, workitemset.frequncy]);
			if(workitemset.surveycode!=null && workitemset.surveycode!="null" && workitemset.surveycode!="")
			{
				addworkitemtrans.executeSql('INSERT INTO survey (workitemscode, surveycode, surveyname, surveydesc, sectorcode, questionsetcode, createdby, createdon, type, frequency, startdate, enddate, programcode, interventioncode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',  [workitemset.wrkitem, surveyset.surveycode, surveyset.surveyname, surveyset.surveydesc, surveyset.sectorcode, surveyset.questionsetcode, surveyset.createdby, surveyset.createdon, surveyset.type, surveyset.frequency, surveyset.startdate, surveyset.enddate, surveyset.programcode, surveyset.interventioncode]);
			}
			for(locationloop=0; locationloop< workitems[loop].locations.length; locationloop++)
			{
				addworkitemtrans.executeSql('INSERT INTO locations (workitemscode, locationcode, locationname,locationtype) VALUES (?, ?, ?, ?)',  [workitemset.wrkitem, workitems[loop].locations[locationloop].locationcode, workitems[loop].locations[locationloop].locationname, workitems[loop].locations[locationloop].locationtype]);
			}
			
			for(questionloop=0; questionloop<workitems[loop].questions.length; questionloop++)
			{
				questionset=workitems[loop].questions[questionloop];
				addworkitemtrans.executeSql('INSERT INTO questions (workitemscode, surveycode, sectioncode, sectiondisplayorder, questiondisplayorder, questioncode, questiontext, sectionname, validationtypecode, questiontypecode, questiontype, haschildquestion, parentquestion, conditionvalue, controltype, questionlevel, hasoptions, optionid, childquestionconditionid, helptext, frequencyofquestions, numberoftimes, frequencystartdate, sectorcode, programcode, interventioncode, categoryid, suggestivetext) VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ', [workitemset.wrkitem, surveyset.surveycode, questionset.sectorcode, questionset.sectiondisplayorder, questionset.questiondisplayorder, questionset.questioncode, questionset.questiontext, questionset.sectionname, questionset.validationtypecode, questionset.questiontypecode, questionset.questiontype, questionset.haschildquestion, questionset.parentquestion, questionset.conditionvalue, questionset.controltype, questionset.questionlevel, questionset.hasoptions, questionset.optionid, questionset.childquestionconditionid, questionset.helptext, questionset.frequencyofquestions, questionset.numberoftimes, questionset.frequencystartdate, questionset.sectorcode, questionset.programcode, questionset.interventioncode, questionset.categoryid, questionset.suggestivetext]);
			}
			
			}
		}	
	}

	workitemsupdated(addworkitemtrans);
	if(lastsynced!="")
	{
		addworkitemtrans.executeSql('UPDATE syncdates SET servertime=?, localtime=? WHERE service=?', [lastsynced, timestamp, "empworkitemdetails"]);
	}
}




//------ update workitems ---------------------

function workitemsupdated(updatedworkitemstrans)
{
	timestamp=new Date().toISOString();
	if(updatedworkitems.length>0)
	{
		for(uploop=0; uploop<updatedworkitems.length; uploop++)
		{
			updatedworkitemsset=updatedworkitems[uploop];
			//alert("workitemsupdated");
			updatedworkitemstrans.executeSql('UPDATE workitems SET workitemcode=?, workitemname=?, workitemdesc=?, workitemtype=?, parentworkitemcode=?, planstartdate=?, planenddate=?, actualstartdate=?, primaryowner=?, percentagecompleted=?, displayorder=?, target=?, createdby=?, surveycode=?, frequncy=? WHERE surveyworkitemmappingcode=?', [updatedworkitemsset.wrkitem, updatedworkitemsset.workitemname, updatedworkitemsset.workitemdesc, updatedworkitemsset.workitemtype, updatedworkitemsset.parentworkitemcode, updatedworkitemsset.planstartdate, updatedworkitemsset.planenddate, updatedworkitemsset.actualstartdate, updatedworkitemsset.primaryowner, updatedworkitemsset.percentagecompleted, updatedworkitemsset.displayorder, updatedworkitemsset.target, updatedworkitemsset.createdby, updatedworkitemsset.surveycode, updatedworkitemsset.frequncy, updatedworkitemsset.surveyworkitemmappingcode]);
			updatedworkitemstrans.executeSql('DELETE FROM monitoringsurveydates WHERE surveyworkitemmappingcode=?',[updatedworkitemsset.surveyworkitemmappingcode]);
			updatedworkitemstrans.executeSql('DELETE FROM workitemsserverstatus WHERE workitemmmpcode=?',[updatedworkitemsset.wrkitem]);
			//alert(JSON.stringify(updatedworkitemsset));
			//var surveyset=updatedworkitems[uploop].survey[0];
			if(updatedworkitemsset.type=="MS")
			{
				msdate = new Date(updatedworkitemsset.startdate.slice(0,10));
				enddate= new Date(updatedworkitemsset.endddate.slice(0,10));

				msfrequency=0;
				if(updatedworkitemsset.frequncy=="100"){msfrequency=1}
				else if(updatedworkitemsset.frequncy=="101"){msfrequency=2}
				else if(updatedworkitemsset.frequncy=="102"){msfrequency=7}
				else if(updatedworkitemsset.frequncy=="103"){msfrequency=15}
				else if(updatedworkitemsset.frequncy=="127"){msfrequency=30}

				msdates=[]
				lastdate = msdate.toISOString().slice(0,10);
				var mscount=0;
				while(enddate>=msdate)
				{
					msdate.setDate(msdate.getDate() + msfrequency);
						
					if(parseInt((enddate-msdate) / (1000 * 60 * 60 * 24), 10)>=0)
					{
						msdates.push(lastdate)
						updatedworkitemstrans.executeSql('INSERT INTO monitoringsurveydates (surveyworkitemmappingcode, surveycode, startdate, enddate, frequency, fromsurveydate, tosurveydate, status, createddate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',  [updatedworkitemsset.surveyworkitemmappingcode, updatedworkitemsset.surveycode, updatedworkitemsset.startdate, updatedworkitemsset.endddate, updatedworkitemsset.frequncy, lastdate, msdate.toISOString().slice(0,10), "1", timestamp]);
						updatedworkitemstrans.executeSql('INSERT INTO workitemsserverstatus(workitemmmpcode, target, fromdate, open, saved, submitted, synced) VALUES (?, ?, ?, ?, ?, ?, ?)', [updatedworkitemsset.wrkitem, updatedworkitemsset.target, lastdate, '0', '0', '0', '0']);
						mscount++;
					}
					lastdate = msdate.toISOString().slice(0,10);
				}
				if(mscount==0){
					msdates.push(workitemset.startdate.slice(0,10))
					updatedworkitemstrans.executeSql('INSERT INTO monitoringsurveydates (surveyworkitemmappingcode, surveycode, startdate, enddate, frequency, fromsurveydate, tosurveydate, status, createddate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [updatedworkitemsset.surveyworkitemmappingcode, updatedworkitemsset.surveycode, updatedworkitemsset.startdate, updatedworkitemsset.endddate, updatedworkitemsset.frequncy, updatedworkitemsset.startdate.slice(0,10), updatedworkitemsset.endddate.slice(0,10), "1", timestamp]);
					updatedworkitemstrans.executeSql('INSERT INTO workitemsserverstatus (workitemmmpcode, target, fromdate, open, saved, submitted, synced) VALUES (?, ?, ?, ?, ?, ?, ?)',  [updatedworkitemsset.wrkitem, updatedworkitemsset.target, updatedworkitemsset.startdate.slice(0,10), '0', '0', '0', '0']);
				}
			}
			else{

					//addworkitemtrans.executeSql('UPDATE workitemsserverstatus SET target=?, open=?, saved=?, submitted=?, synced=? WHERE workitemmmpcode=?',['0', '0', '0', '0', '0', workitemset.wrkitem]);
					updatedworkitemstrans.executeSql('INSERT INTO workitemsserverstatus (workitemmmpcode, target, open, saved, submitted, synced) VALUES (?, ?, ?, ?, ?, ?)', [updatedworkitemsset.wrkitem, '0', '0', '0', '0', '0']);

			}
		}
	}
}

//  ================== *** SYNC END   ***  ====================





// ================  *** WORK ITEMS BEGAIN ***	 =============

function getWorkItemList()
{
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlGetWorkItemList, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}
function pageloadedsuccess()
{
	SpinnerDialog.hide();
}
function sqlGetWorkItemList(worikitemlisttrans)
{
	worikitemlisttrans.executeSql('SELECT localtime FROM syncdates', [], function(downloadtrans, lastsynceddateslocal){
		if(typeof lastsynceddateslocal.rows.item(0).downloadlocaltime !="undefined" || lastsynceddateslocal.rows.item(0).downloadlocaltime!="" ){$("#lastsynceddate").html(new Date(lastsynceddateslocal.rows.item(0).localtime).toISOString().slice(0, 10)+"   "+new Date(lastsynceddateslocal.rows.item(0).localtime).toISOString().slice(11, 19));}else{$("#lastsynceddate").html("Not Synced Yet");}}, errorCB);
	worikitemlisttrans.executeSql('SELECT workitemcode, workitemname, planstartdate, planenddate, actualstartdate, surveyworkitemmappingcode, surveycode, (SELECT surveyname FROM survey WHERE survey.surveycode=workitems.surveycode) as surveyname, (SELECT type FROM survey WHERE survey.surveycode=workitems.surveycode) as type, (SELECT sectorcode FROM survey WHERE survey.surveycode=workitems.surveycode) as sectorcode, (SELECT programcode FROM survey WHERE survey.surveycode=workitems.surveycode) as programcode, (SELECT interventioncode FROM survey WHERE survey.surveycode=workitems.surveycode) as interventioncode, displayorder,  frequncy FROM workitems ORDER BY displayorder DESC', [], resultWorkItemList, errorCB);
}


function resultWorkItemList(resultWorkItemtrans, results)
{
	populateWorkItems(results);
	resultWorkItemtrans.executeSql('SELECT workitemscode, locationname  FROM locations', [], resultLocationList, errorCB);	
}

function resultLocationList(resultLocationtrans, results)
{
	resultlocation=results.rows
	uniqueNames = [];
	dataarray=[]
	for(i = 0; i< results.rows.length; i++)
	{    
    	if(uniqueNames.indexOf(results.rows.item(i).workitemscode) === -1)
    	{ uniqueNames.push(results.rows.item(i).workitemscode); dataarray.push(array=[]);}     
	}

	for(i = 0; i< results.rows.length; i++)
	{
		dataarray[uniqueNames.indexOf(results.rows.item(i).workitemscode)].push(results.rows.item(i).locationname);
	}

	for(i = 0; i< uniqueNames.length; i++)
	{
		string="";
		for(stringloop=0; stringloop<3; stringloop++){if( typeof dataarray[i][stringloop] !="undefined"){string+=dataarray[i][stringloop]+",";}}
		count="";
		if(dataarray[i].length-3 >0){string+= " +";string+= dataarray[i].length-3;}
		document.getElementById(uniqueNames[i]).innerHTML=string;
	}

}	
// ================  *** WORK ITEMS END *** =============




// ============== *** Monitoring Work Item Info BEGAIN *** ==============

function getWorkItemDetails()
{
	localStorage.surveyworkitemstartdate="";
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
		if(result==0)
		{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlGetWorkItemDetails, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}
	
function sqlGetWorkItemDetails(getWorkItemDetailstrans)
{
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	if(surveyworkitemmappingcode!="" && survey!="" &&  workitemcode!="")
	{
		var surveybenfdate=(new Date()).toISOString().slice(0,10);
		if(typeof localStorage.surveybenfdate=="undefined" || localStorage.surveybenfdate=="")
		{
			getWorkItemDetailstrans.executeSql('SELECT surveydate FROM surveyparentresponse WHERE surveyworkitemmappingcode=? ORDER BY createdon', [surveyworkitemmappingcode], function(surveyparentresponsetrans, resul){if(resul.rows.length>0){if(resul.rows.item(0).surveydate!="" && resul.rows.item(0).surveydate!=null && resul.rows.item(0).surveydate!="null"){localStorage.surveybenfdate=CryptoJS.AES.encrypt('"'+resul.rows.item(0).surveydate+'"', localStorage.employeeid);}else{localStorage.surveybenfdate=CryptoJS.AES.encrypt('"'+surveybenfdate+'"', localStorage.employeeid);}}else{localStorage.surveybenfdate=CryptoJS.AES.encrypt('"'+surveybenfdate+'"', localStorage.employeeid);} }, errorCB);
		}

		getWorkItemDetailstrans.executeSql('SELECT * FROM workitems WHERE workitemcode=?', [workitemcode], resultWorkItemDetails, errorCB);
		getWorkItemDetailstrans.executeSql('SELECT fromsurveydate, tosurveydate FROM monitoringsurveydates WHERE surveyworkitemmappingcode=? AND surveycode=?', [surveyworkitemmappingcode, survey], sqlmonitoringlistdates, errorCB);
		
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}





function sqlmonitoringlistdates(monitoringlistdatestrans, results)
{
	monitoringsurveyfreq=results.rows;
	datesarry=[];
	var freqtable="<table class='table' style='width: 100%;'><tr><th>SNo.</th><th>From</th><th>To</th></tr><tbody>";
	for(datesloop=0; datesloop<results.rows.length; datesloop++)
	{
		var sno=datesloop+1;
		freqtable+="<tr><td>"+sno+"</td><td>"+results.rows.item(datesloop).fromsurveydate+"</td><td>"+results.rows.item(datesloop).tosurveydate+"</td><tr>";
		datesarry.push(new Date(results.rows.item(datesloop).fromsurveydate).toISOString().slice(0, 10));
	}
	freqtable+="</tboby></table>"
		var path = window.location.pathname.split("/").pop();
	
		if(path=="monitoringworkiteminfo.html")
		{
	 		$("#event-cal-container").simpleCalendar({
                events: datesarry,
                selectCallback: function(date){
                	surveybenfdate=date;
                	localStorage.surveybenfdate=CryptoJS.AES.encrypt('"'+surveybenfdate+'"', localStorage.employeeid);
                	if(new Date(surveybenfdate)<new Date())
                	{getWorkItemDetails();}
                	else{navigator.notification.alert("Date Should Not Be Future", function(){}, 'Samuday 360','Done');}
                    	
                    $("#event-cal-container").toggle();
                }
            });
            $("#surveyfreq").html("<h5>Survey period</h5>"+freqtable);
	 	}
}

function resultWorkItemDetails(workItemDetailstrans, results)
{
	var downloadstatus=0;
	var surveybenfdate=(new Date()).toISOString().slice(0,10);
	var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	if(empidlocal!="")
	{
		populateWorkItemDetails(results);
		var path = window.location.pathname.split("/").pop();
		workItemDetailstrans.executeSql('SELECT * FROM survey WHERE workitemscode=? AND surveycode=?', [results.rows.item(0).workitemcode, results.rows.item(0).surveycode], resultSurveyDetails, errorCB);
		
		if(path=="monitoringworkiteminfo.html")
		{
			workItemDetailstrans.executeSql('Select count(*) as count FROM mmpbenfi WHERE surveyworkitemmappingcode=? AND surveycode=?', [results.rows.item(0).surveyworkitemmappingcode,results.rows.item(0).surveycode], function(mmpbenfitrans, resul){ if(resul.rows.item(0).count>0){ downloadstatus=resul.rows.item(0).count;}}, errorCB);
			if(typeof localStorage.surveybenfdate=="undefined" || localStorage.surveybenfdate=="")
			{
				surveybenfdate=(new Date()).toISOString().slice(0,10);
			}
			else{
				surveybenfdate=CryptoJS.AES.decrypt(localStorage.surveybenfdate, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
				$("#monitoringdate").html(surveybenfdate);
			}
			workItemDetailstrans.executeSql('SELECT COUNT(resondantcode) AS target, (SELECT COUNT(resondantcode) FROM ms_mmp_benf_selected WHERE status IN ("0", "1", "2", "3")  AND  surveycode="'+results.rows.item(0).surveycode+'" AND surveyworkitemmappingcode="'+results.rows.item(0).surveyworkitemmappingcode+'" AND ( Datetime(fromdate) <= Datetime("'+surveybenfdate+'") AND Datetime(todate) > Datetime("'+surveybenfdate+'") ) ) AS mapped, (SELECT COUNT(resondantcode) FROM ms_mmp_benf_selected WHERE status="0"  AND  surveycode="'+results.rows.item(0).surveycode+'" AND surveyworkitemmappingcode="'+results.rows.item(0).surveyworkitemmappingcode+'" AND ( Datetime(fromdate) <= Datetime("'+surveybenfdate+'") AND Datetime(todate) > Datetime("'+surveybenfdate+'") ) ) AS open, (SELECT COUNT(resondantcode) FROM ms_mmp_benf_selected WHERE status="1"  AND surveycode="'+results.rows.item(0).surveycode+'" AND surveyworkitemmappingcode="'+results.rows.item(0).surveyworkitemmappingcode+'" AND empid="'+empidlocal+'" AND ( Datetime(fromdate) <= Datetime("'+surveybenfdate+'") AND Datetime(todate) > Datetime("'+surveybenfdate+'") ) ) AS inprogress, (SELECT COUNT(resondantcode) FROM ms_mmp_benf_selected WHERE status="2"  AND surveycode="'+results.rows.item(0).surveycode+'" AND surveyworkitemmappingcode="'+results.rows.item(0).surveyworkitemmappingcode+'" AND empid="'+empidlocal+'" AND ( Datetime(fromdate) <= Datetime("'+surveybenfdate+'") AND Datetime(todate) > Datetime("'+surveybenfdate+'") ) ) AS submitted, (SELECT COUNT(resondantcode) FROM ms_mmp_benf_selected WHERE status="3"  AND surveycode="'+results.rows.item(0).surveycode+'" AND surveyworkitemmappingcode="'+results.rows.item(0).surveyworkitemmappingcode+'" AND empid="'+empidlocal+'" AND ( Datetime(fromdate) <= Datetime("'+surveybenfdate+'") AND Datetime(todate) > Datetime("'+surveybenfdate+'") ) ) AS synced FROM mmpbenfi WHERE  surveycode="'+results.rows.item(0).surveycode+'" AND surveyworkitemmappingcode="'+results.rows.item(0).surveyworkitemmappingcode+'"', [], surveyStataticsDetails, errorCB);
			workItemDetailstrans.executeSql('SELECT fromsurveydate FROM monitoringsurveydates WHERE surveycode=? AND surveyworkitemmappingcode=? AND ( Datetime(fromsurveydate) <= Datetime(?) AND Datetime(tosurveydate) > Datetime(?))', [results.rows.item(0).surveycode, results.rows.item(0).surveyworkitemmappingcode, surveybenfdate, surveybenfdate], 
					function(monitoringsurveydatestrans, fromsurveydateresult)
					{
						if(fromsurveydateresult.rows.length>0)
						{
							monitoringsurveydatestrans.executeSql('SELECT * FROM workitemsserverstatus WHERE workitemmmpcode=? AND fromdate =?', [results.rows.item(0).workitemcode, fromsurveydateresult.rows.item(0).fromsurveydate], function(workitemsserverstatustrans, statusresult)
							{
								if(results.rows.length>0)
								{
									$("#totaltargetcount").html(statusresult.rows.item(0).target);
									$("#totalopencount").html(statusresult.rows.item(0).open);
									$("#totalinprogresscount").html(statusresult.rows.item(0).saved);
									//$("#totalsubmitedcount").html(statusresult.rows.);
									$("#totalsyncedcount").html(statusresult.rows.item(0).synced);
									 if(downloadstatus>0)
									 {
										if(statusresult.rows.item(0).saved>0){
											$("#workitemeditben").attr("disabled", false);
										}else{
											$("#workitemeditben").attr("disabled", true);
										}
									}
								}else
								{
									$("#totaltargetcount").html(0);
									$("#totalopencount").html(0);
									$("#totalinprogresscount").html(0);
									//$("#totalsubmitedcount").html(0);
									$("#totalsyncedcount").html(0);
								}
							});
						}else{
							$("#totaltargetcount").html(0);
							$("#totalopencount").html(0);
							$("#totalinprogresscount").html(0);
							//$("#totalsubmitedcount").html(0);
							$("#totalsyncedcount").html(0);
						}
					},errorCB);
		}	
		else if(path=="baselineworkiteminfo.html")
		{
			workItemDetailstrans.executeSql('SELECT COUNT(status) AS count FROM mmpbenfi WHERE surveyworkitemmappingcode=? AND surveycode=?', [results.rows.item(0).surveyworkitemmappingcode, results.rows.item(0).surveycode], function(mmpbenfitrans, resul){if(resul.rows.item(0).count>0){downloadstatus=resul.rows.item(0).count;}}, errorCB);
			workItemDetailstrans.executeSql('SELECT COUNT(resondantcode) AS target, (SELECT COUNT(resondantcode) FROM mmpbenfi WHERE status="0"  AND surveycode=? AND surveyworkitemmappingcode=? ) AS open, (SELECT COUNT(resondantcode) FROM mmpbenfi WHERE status="1"  AND surveycode=? AND surveyworkitemmappingcode=? AND empid=? ) AS inprogress, (SELECT COUNT(resondantcode) FROM mmpbenfi WHERE status="2"  AND surveycode=? AND surveyworkitemmappingcode=? AND empid=? ) AS submitted, (SELECT COUNT(resondantcode) FROM mmpbenfi WHERE status="3"  AND surveycode=? AND surveyworkitemmappingcode=? AND empid=? ) AS synced FROM mmpbenfi WHERE  surveycode=? AND surveyworkitemmappingcode=?', [results.rows.item(0).surveycode, results.rows.item(0).surveyworkitemmappingcode, results.rows.item(0).surveycode, results.rows.item(0).surveyworkitemmappingcode, empidlocal, results.rows.item(0).surveycode, results.rows.item(0).surveyworkitemmappingcode, empidlocal, results.rows.item(0).surveycode, results.rows.item(0).surveyworkitemmappingcode, empidlocal, results.rows.item(0).surveycode, results.rows.item(0).surveyworkitemmappingcode], surveyStataticsDetails, errorCB);
			
			workItemDetailstrans.executeSql('SELECT * FROM workitemsserverstatus WHERE workitemmmpcode=?', [results.rows.item(0).workitemcode], function(workitemsserverstatustrans, statusresult)
			{
				if(results.rows.length>0)
				{
					$("#totaltargetcount").html(statusresult.rows.item(0).target);
					$("#totalopencount").html(statusresult.rows.item(0).open);
					$("#totalinprogresscount").html(statusresult.rows.item(0).saved);
					//$("#totalsubmitedcount").html(statusresult.rows.);
					$("#totalsyncedcount").html(statusresult.rows.item(0).synced);
					if(downloadstatus>0)
					{
						if(statusresult.rows.item(0).saved>0)
						{
							$("#workitemeditben").attr("disabled", false);
						}
						else
						{
							$("#workitemeditben").attr("disabled", true);
						}
					}else{$("#workitemeditben").attr("disabled", true);}
				}else
				{
					$("#totaltargetcount").html(0);
					$("#totalopencount").html(0);
					$("#totalinprogresscount").html(0);
					//$("#totalsubmitedcount").html(0);
					$("#totalsyncedcount").html(0);
				}
			},errorCB);
		}
		workItemDetailstrans.executeSql('SELECT locationname FROM locations WHERE workitemscode=?', [results.rows.item(0).workitemcode], resultLocaitionDetails, errorCB);

	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}

function resultSurveyDetails(surveyDetailstrans, results)
{
	populateSurveyDetails(results);	
}

function resultLocaitionDetails(locaitionDetailstrans, results)
{
	populateLocaitionDetails(results);
}

function surveyStataticsDetails(surveyStataticsDetailstrans, results)
{
	var path = window.location.pathname.split("/").pop();

	if(path="monitoringworkiteminfo.html")
	{$("#targetcount").html(results.rows.item(0).mapped);}
	else{$("#targetcount").html(results.rows.item(0).target);}

	$("#opencount").html(results.rows.item(0).open);
	$("#inprogresscount").html(results.rows.item(0).inprogress);
	$("#submitedcount").html(results.rows.item(0).submitted);
	$("#syncedcount").html(results.rows.item(0).synced);

	// Total
	if(results.rows.item(0).target!="0")
	//{$("#totaltargetcount").html(results.rows[0].target);}
	{$("#totaltargetcount").html(results.rows.item(0).mapped);}
	$("#totalsubmitedcount").html(results.rows.item(0).submitted)

	// if(results.rows.item(0).target>0){$("#downloadben").attr("disabled", true);}else{$("#downloadben").attr("disabled", false);}
	if(results.rows.item(0).open>0){$("#workitemsurveyben").attr("disabled", false);}else{$("#workitemsurveyben").attr("disabled", true);}
	if(results.rows.item(0).target>0){if(results.rows.item(0).inprogress>0){$("#workitemeditben").attr("disabled", false);}else{$("#workitemeditben").attr("disabled", true);}}else{$("#workitemeditben").attr("disabled", true);}
	if(path="monitoringworkiteminfo.html"){
		if(results.rows.item(0).target>0){$("#msaddbeneficiary").attr("disabled", false);}else{$("#msaddbeneficiary").attr("disabled", true);}
	}
}
// ============== *** Monitoring Work Item Info END *** ==============







// ============= ***  Survey Page BEGAIN *** ==================

// ===== VAR 
optionQuestions=[]; // questions having options
questionsOptions=[]; // Option of questions in optionQuestions

surveyquestions=[]; // Collection of questions (with all info required)
surveyquestionnumber=[]; // Collection of questions (with only question number)
onlyparentquestions=[]; // Collection of Parent questions (with only question number)
surveysections=[]; // Question Section name


childparentquestion=[];  //Collection of Parent Questions
childquestions=[]; // Collection of child questions
childquestionconditions=[]; //Collection of condition for child questions


validationsdistquestions=[]; //Distinct questions to validate
questionsvalidation=[]; //Question Validations

function getSurveyQuestions()
{
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
		    	db.transaction(sqlSurveyQuestions, errorCB, pageloadedsuccess);
		    }else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 100);	
}
	
function sqlSurveyQuestions(surveyQuestionstran)
{
	workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	respondantcode=CryptoJS.AES.decrypt(localStorage.respondantcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	if(workitemcode!="" && survey!="" && surveyworkitemmappingcode!="" && respondantcode!="")
	{
		surveyQuestionstran.executeSql('SELECT questioncode, displaytext, displayvalue, displayorder FROM questionoptions WHERE workitemscode=? AND surveycode=? ORDER BY questioncode, displayorder ', [workitemcode, survey], resultSurveyQuestionsOptions, errorCB);
		surveyQuestionstran.executeSql('SELECT workitemname, ( SELECT surveyname FROM survey WHERE surveycode=?) as surveyname FROM workitems WHERE workitemcode=?',[survey, workitemcode], function(surveytrans, results){$("#workitemtitle").html(results.rows.item(0).workitemname+' - '+results.rows.item(0).surveyname)},errorCB);
		surveyQuestionstran.executeSql('SELECT respondantname FROM mmpbenfi WHERE surveyworkitemmappingcode=? AND surveycode=? AND resondantcode=?',[surveyworkitemmappingcode, survey, respondantcode], function(mmpbenfitran, results){$("#beneficiaryname").html(results.rows.item(0).respondantname)},errorCB);
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}
 



function resultSurveyQuestionsOptions(resultSurveyQuestionsOptionstrans, results)
{
	optionQuestions=[];
	questionsOptions=[];
	qoptions=results.rows;
	qoptionslen=qoptions.length;
	for(qoploop=0; qoploop<qoptionslen; qoploop++)
	{
		if(optionQuestions.indexOf(results.rows.item(qoploop).questioncode) === -1){
			emptyarray=[];
			optionQuestions.push(results.rows.item(qoploop).questioncode);
			questionsOptions.push(emptyarray);
		}
	}

	for(qoparrayloop=0; qoparrayloop<qoptionslen; qoparrayloop++)
	{
		var questionindex=optionQuestions.indexOf(results.rows.item(qoparrayloop).questioncode)
		if(questionindex!== -1)
		{
			entity=[];
			entity.push(results.rows.item(qoparrayloop).displaytext);
			entity.push(results.rows.item(qoparrayloop).displayvalue);
			// entity.push(qoptions[qoparrayloop].questioncode);
			questionsOptions[questionindex].push(entity)
		}
	}

	workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	if(workitemcode!="" && survey!="")
	{
		resultSurveyQuestionsOptionstrans.executeSql('SELECT validationtypecode, questioncode, validationtypename, allowedvalues, violationmessage FROM validations WHERE workitemscode=? AND surveycode=? ORDER BY questioncode', [workitemcode, survey], validationquestionresult, errorCB);
		resultSurveyQuestionsOptionstrans.executeSql('SELECT sectioncode, questioncode, questiontext, sectionname, validationtypecode, questiontypecode, questiontype, haschildquestion, parentquestion, conditionvalue, controltype, hasoptions, helptext, suggestivetext FROM questions WHERE workitemscode=? AND surveycode=? ORDER BY sectiondisplayorder, questiondisplayorder', [workitemcode, survey], resultSurveyQuestions, errorCB);
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}

function validationquestionresult(validationquestionresulttrans, validationresult){
	 validations=validationresult.rows;
	 validationslen=validations.length;
	 validationsdistquestions=[];
	 questionsvalidation=[];
	for(validationdistq=0; validationdistq<validationslen; validationdistq++)
	{
		if(validationsdistquestions.indexOf(validationresult.rows.item(validationdistq).questioncode)<0)
		{validationsdistquestions.push(validationresult.rows.item(validationdistq).questioncode); questionsvalidation.push([])}
	}
	for(validationarray=0; validationarray<validationslen; validationarray++)
	{
		questionsvalidation[validationsdistquestions.indexOf(validationresult.rows.item(validationarray).questioncode)].push(validationresult.rows.item(validationarray));
	}
	
}


function resultSurveyQuestions(resultSurveyQuestionstrans, results)
{
	surveyquestions=[];
	surveyquestionnumber=[];
	surveysections=[];
	childparentquestion=[]; 
	childquestions=[];
	childquestionconditions=[];
	onlyparentquestions=[];


	surveyquestioncust=results.rows;
	surveyquestioncustlen=results.rows.length;
	for(questloop=0; questloop<surveyquestioncustlen; questloop++)
	{
		
		question=[];
		if(results.rows.item(questloop).haschildquestion==1)
		{ 
			childparentquestion.push(results.rows.item(questloop).questioncode);
			childquestionconditions.push([]);
		}
		question.push(results.rows.item(questloop).questioncode);
		question.push(results.rows.item(questloop).questiontext);
		question.push(results.rows.item(questloop).questiontype); // parent / child
		question.push(results.rows.item(questloop).questiontypecode); // 1/2/3/4.. (input/select...)
		question.push(results.rows.item(questloop).hasoptions);
		question.push(results.rows.item(questloop).sectionname);
		question.push(results.rows.item(questloop).validationtypecode);
		question.push(results.rows.item(questloop).helptext);
		question.push(results.rows.item(questloop).suggestivetext);
		question.push(results.rows.item(questloop).sectioncode);
		surveyquestions.push(question);
		surveyquestionnumber.push(results.rows.item(questloop).questioncode);
		if(results.rows.item(questloop).questiontype=='P'){
			onlyparentquestions.push(results.rows.item(questloop).questioncode);
		}
		if(surveysections.indexOf(results.rows.item(questloop).sectionname)===-1)
		{
			if(results.rows.item(questloop).sectionname!=null && results.rows.item(questloop).sectionname!="null" && results.rows.item(questloop).sectionname!="")
			{
				surveysections.push(results.rows.item(questloop).sectionname)
			}
		}
	}

	if(childparentquestion.length>0){
		for(questloop=0; questloop<surveyquestioncustlen; questloop++)
		{
			qindex=childparentquestion.indexOf(results.rows.item(questloop).parentquestion);
			if(qindex>=0)
			{
				tempcond=[results.rows.item(questloop).questioncode, results.rows.item(questloop).conditionvalue , results.rows.item(questloop).parentquestion]
				childquestions.push(results.rows.item(questloop).questioncode);
				childquestionconditions[qindex].push(tempcond);
			}
		}
	}

	surveyQuestionshtml();
}





function saveSurveyResponse()
{
	var processmag="Updating Response";
	if(surveyresponsesavetype==1){processmag="Saving Response..."}else{processmag="Submiting Response..."}
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", processmag, true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
		    	db.transaction(sqlsaveSurveyResponse, errorCB, responsesavedSuccessfully);
		    }else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);		
}

function responsesavedSuccessfully(responsesavedSuccessfullytrans, results)
{
	var savemessage="";
	if(surveyresponsesavetype==1){savemessage="Response Saved"}
	else if(surveyresponsesavetype==2){savemessage="Response Submitted"}
	SpinnerDialog.hide();
	var path = window.location.pathname.split("/").pop();
	navigator.notification.alert(savemessage, function(){
		if(path=="surveypage.html"){window.location.href="surveybeneficiarylist.html";}
		else if(path=="blsurveypage.html") {window.location.href="blsurveybeneficiarylist.html";}
	}, 'Samuday 360','Done');
}

function sqlsaveSurveyResponse(saveSurveyResponsetrans)
{
	var path = window.location.pathname.split("/").pop();
	var surveydate="";
	var date="";
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var respondantcode=CryptoJS.AES.decrypt(localStorage.respondantcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var workitem=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1)
	var usernamelocal=CryptoJS.AES.decrypt(localStorage.username, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1)
	var survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var platform=device.platform;
	
	if(surveyworkitemmappingcode!="" && respondantcode!="" && workitem!="" && empidlocal!="" && usernamelocal!="" && survey!="" )
	{
		if(typeof localStorage.surveybenfdate!="undefined" && localStorage.surveybenfdate!="")
		{surveydate=CryptoJS.AES.decrypt(localStorage.surveybenfdate, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);}
		else{surveydate=(new Date()).toISOString().slice(0,10);}

		if(typeof localStorage.surveyworkitemstartdate!="undefined" && localStorage.surveyworkitemstartdate!="")
		{date=CryptoJS.AES.decrypt(localStorage.surveyworkitemstartdate, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);}
		else{date=(new Date()).toISOString().slice(0,10);}

		if(path=="editsurveypage.html" || path=="surveypage.html")
		{
			saveSurveyResponsetrans.executeSql('DELETE FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1" AND surveydate="'+date+'"');
			saveSurveyResponsetrans.executeSql('DELETE FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1" AND surveydate="'+date+'"');
		}else if(path=="bleditsurveypage.html" || path=="blsurveypage.html"){
			saveSurveyResponsetrans.executeSql('DELETE FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1"');
			saveSurveyResponsetrans.executeSql('DELETE FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1"');
		}
		timestamp =new Date().toISOString();

		for(surveyparentresponseloop=0; surveyparentresponseloop<surveyparentresponse.length; surveyparentresponseloop++)
		{
			saveSurveyResponsetrans.executeSql('INSERT INTO surveyparentresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, empid, UploadedFrom) VALUES ("'+surveyparentresponse[surveyparentresponseloop][0]+'", "'+surveyparentresponse[surveyparentresponseloop][1]+'", "'+surveyparentresponse[surveyparentresponseloop][2]+'", "'+surveyparentresponse[surveyparentresponseloop][3]+'", "'+surveyparentresponse[surveyparentresponseloop][5]+'", "'+surveyparentresponse[surveyparentresponseloop][4]+'", "'+date+'", "'+surveyresponsesavetype+'", "'+timestamp+'", "'+empidlocal+'", "'+platform+'")');
		}


		for(surveychildresponseloop=0; surveychildresponseloop<surveychildresponse.length; surveychildresponseloop++)
		{
			saveSurveyResponsetrans.executeSql('INSERT INTO surveychildresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, empid, UploadedFrom) VALUES ("'+surveychildresponse[surveychildresponseloop][0]+'", "'+surveychildresponse[surveychildresponseloop][1]+'", "'+surveychildresponse[surveychildresponseloop][2]+'", "'+surveychildresponse[surveychildresponseloop][3]+'", "'+surveychildresponse[surveychildresponseloop][5]+'", "'+surveychildresponse[surveychildresponseloop][4]+'", "'+date+'", "'+surveyresponsesavetype+'", "'+timestamp+'", "'+empidlocal+'", "'+platform+'")');
		}
	 	var updatetime=(new Date()).toISOString();


	 	if(path=="bleditsurveypage.html" || path=="blsurveypage.html")
	 	{ saveSurveyResponsetrans.executeSql('UPDATE mmpbenfimis SET status="'+surveyresponsesavetype+'", empid="'+empidlocal+'", empname="'+usernamelocal+'", updatedon="'+updatetime+'" WHERE surveyworkitemmappingcode ="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND resondantcode="'+respondantcode+'"');
		}else if(path=="editsurveypage.html" || path=="surveypage.html")
		{ saveSurveyResponsetrans.executeSql('UPDATE mmp_ms_benf SET status="'+surveyresponsesavetype+'", empid="'+empidlocal+'", empname="'+usernamelocal+'" WHERE Datetime(fromdate) <= Datetime("'+surveydate+'") AND Datetime(todate) > Datetime("'+surveydate+'") AND surveyworkitemmappingcode ="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND respondantcode="'+respondantcode+'"');}
		

		if(surveyresponsesavetype==1){
			if(path=="surveypage.html")
			{
				saveSurveyResponsetrans.executeSql('SELECT open, saved FROM workitemsserverstatus WHERE workitemmmpcode="'+workitem+'" AND fromdate ="'+date+'"', [], function(workitemsserverstatustrans, countresult)
				{
					var tempsaved=parseInt(countresult.rows.item(0).saved) + 1;
					var tempopen=0
					if(countresult.rows.item(0).open>0)
					{tempopen=parseInt(countresult.rows.item(0).open) - 1;}
					workitemsserverstatustrans.executeSql('update workitemsserverstatus SET open="'+tempopen+'", saved="'+tempsaved+'" WHERE workitemmmpcode="'+workitem+'" AND fromdate ="'+date+'"')
				},errorCB);
			}else  if(path=="blsurveypage.html"){
				saveSurveyResponsetrans.executeSql('SELECT open, saved FROM workitemsserverstatus WHERE workitemmmpcode="'+workitem+'"', [], function(workitemsserverstatustrans, countresult)
				{
					var tempsaved=parseInt(countresult.rows.item(0).saved) + 1;
					var tempopen=0
					if(countresult.rows.item(0).open>0)
					{tempopen=parseInt(countresult.rows.item(0).open) - 1;}
					workitemsserverstatustrans.executeSql('update workitemsserverstatus SET open="'+tempopen+'", saved="'+tempsaved+'" WHERE workitemmmpcode="'+workitem+'"')
				},errorCB);
			}
		}else if(surveyresponsesavetype==2){
			if(path=="surveypage.html")
			{
				saveSurveyResponsetrans.executeSql('SELECT open FROM workitemsserverstatus WHERE workitemmmpcode="'+workitem+'" AND fromdate ="'+date+'"', [], function(workitemsserverstatustrans, countresult)
				{
					var tempopen=0
					if(countresult.rows.item(0).open>0)
					{tempopen=parseInt(countresult.rows.item(0).open) - 1;}
					workitemsserverstatustrans.executeSql('update workitemsserverstatus SET open="'+tempopen+'" WHERE workitemmmpcode="'+workitem+'" AND fromdate ="'+date+'"')
				},errorCB);
			}else  if(path=="blsurveypage.html"){
				saveSurveyResponsetrans.executeSql('SELECT open FROM workitemsserverstatus WHERE workitemmmpcode="'+workitem+'"', [], function(workitemsserverstatustrans, countresult)
				{
					var tempopen=0
					if(countresult.rows.item(0).open>0)
					{tempopen=parseInt(countresult.rows.item(0).open) - 1;}
					workitemsserverstatustrans.executeSql('update workitemsserverstatus SET open="'+tempopen+'" WHERE workitemmmpcode="'+workitem+'"')
				},errorCB);
			}

		}

		//surveychildresponse
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}

// ============= ***  Survey Page END *** ==================



// ============= ***  Survey Page BEGINS *** ==================

function preloadSurveyResponse()
{
	setTimeout(function(){ 
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
		    	db.transaction(sqlpreSurveyResponse, errorCB, pageloadedsuccess);
		    }else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
			
}

function sqlpreSurveyResponse(preSurveyResponsetrans)
{
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	respondantcode=CryptoJS.AES.decrypt(localStorage.respondantcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	if(surveyworkitemmappingcode!="" && respondantcode!="")
	{
		preSurveyResponsetrans.executeSql('SELECT * FROM surveyparentresponse WHERE surveyworkitemmappingcode=? AND respondentcode=? AND status="1"', [surveyworkitemmappingcode, respondantcode], preparentdata, errorCB);
		preSurveyResponsetrans.executeSql('SELECT * FROM surveychildresponse WHERE surveyworkitemmappingcode=? AND respondentcode=? AND status="1"', [surveyworkitemmappingcode, respondantcode], prechilddata, errorCB);
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}

function preparentdata(preparentdatatrans, results)
{
	parentdata=results.rows;
	for(parentdataloop=0; parentdataloop<results.rows.length; parentdataloop++)
	{
		questinfo=surveyquestions[surveyquestionnumber.indexOf(results.rows.item(parentdataloop).questioncode)]

		if(questinfo[3]==2 || questinfo[3]==3 || questinfo[3]==4)
		{
			tempdata="";
			checkboxradio=document.getElementsByName(questinfo[0])
			tempdata=results.rows.item(parentdataloop).answer.split(",")
			for(checkboxradioloop=0; checkboxradioloop<checkboxradio.length; checkboxradioloop++)
			{
				if(tempdata.indexOf(checkboxradio[checkboxradioloop].value)>=0)
				{ 
					checkboxradio[checkboxradioloop].checked=true;
					changeaction(checkboxradio[checkboxradioloop]);
				}
			}			
		}
		else if(questinfo[3]==8 )
		{
			elem=document.getElementById(results.rows.item(parentdataloop).questioncode)
			elem.value=results.rows.item(parentdataloop).answer;
			changeaction(elem);
		}
		else{
			elem=document.getElementById(results.rows.item(parentdataloop).questioncode)
			elem.value=results.rows.item(parentdataloop).answer;
			changeaction(elem);
		}
	}
}

function prechilddata(prechilddatatrans, results)
{
	childdata=results.rows
	for(childdataloop=0; childdataloop<results.rows.length; childdataloop++)
	{
		questinfo=surveyquestions[surveyquestionnumber.indexOf(results.rows.item(childdataloop).questioncode)]

		if(questinfo[3]==2 || questinfo[3]==3 || questinfo[3]==4)
		{
			tempdata="";
			checkboxradio=document.getElementsByName(questinfo[0])
			tempdata=results.rows.item(childdataloop).answer.split(",");
			for(checkboxradioloop=0; checkboxradioloop<checkboxradio.length; checkboxradioloop++)
			{
				if(tempdata.indexOf(checkboxradio[checkboxradioloop].value)>=0)
				{ 
					checkboxradio[checkboxradioloop].checked=true;
				}
			}			
		}
		else if(questinfo[3]==8 )
		{
			elem=document.getElementById(results.rows.item(childdataloop).questioncode)
			elem.value=results.rows.item(childdataloop).answer;
		}
		else{
			elem=document.getElementById(results.rows.item(childdataloop).questioncode)
			elem.value=results.rows.item(childdataloop).answer;
		}
	}
}
// ============= ***  Survey Page ENDS *** ==================


// ============= ***  Survey EDIT Page BEGANS *** ==================




function saveEditSurveyResponse()
{
	var processmag="Updating Response";
	if(surveyresponsesavetype==1){processmag="Saving Response..."}else{processmag="Submiting Response..."}
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", processmag, true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
		    	db.transaction(sqlsaveEditSurveyResponse, errorCB, responseEditsavedSuccessfully);
		    }else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
			
}
function responseEditsavedSuccessfully(responseEditsavedSuccessfullytrans, results)
{
	var savemessage="";
	if(surveyresponsesavetype==1){savemessage="Response Saved"}
	else if(surveyresponsesavetype==2){savemessage="Response Submitted"}
	SpinnerDialog.hide();
	var path = window.location.pathname.split("/").pop();
	navigator.notification.alert(savemessage, function(){
		if(path=="editsurveypage.html"){window.location.href="editbeneficiary.html"}
		else if(path=="bleditsurveypage.html"){window.location.href="bleditbeneficiary.html"}
	}, 'Samuday 360','Done');
}
function sqlsaveEditSurveyResponse(sqlsaveEditSurveyResponsetrans)
{
	path = window.location.pathname.split("/").pop();
	var surveydate="";
	var date="";
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	var respondantcode=CryptoJS.AES.decrypt(localStorage.respondantcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var workitem=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var usernamelocal=CryptoJS.AES.decrypt(localStorage.username, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var platform=device.platform;

	if( surveyworkitemmappingcode!="" && respondantcode!="" && workitem!="" && empidlocal!="" && usernamelocal!="" && survey!="")
	{
		if(typeof localStorage.surveybenfdate!="undefined" && localStorage.surveybenfdate!="")
		{surveydate=CryptoJS.AES.decrypt(localStorage.surveybenfdate, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);}
		else{surveydate=(new Date()).toISOString().slice(0,10);}

		if(typeof localStorage.surveyworkitemstartdate!="undefined" && localStorage.surveyworkitemstartdate!="")
		{date=CryptoJS.AES.decrypt(localStorage.surveyworkitemstartdate, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);}
		else{date=(new Date()).toISOString().slice(0,10);}
		
		if(path=="editsurveypage.html" || path=="surveypage.html")
		{
			sqlsaveEditSurveyResponsetrans.executeSql('DELETE FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1" AND surveydate="'+date+'"');
			sqlsaveEditSurveyResponsetrans.executeSql('DELETE FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1" AND surveydate="'+date+'"');
		}else if(path=="bleditsurveypage.html" || path=="blsurveypage.html"){
			sqlsaveEditSurveyResponsetrans.executeSql('DELETE FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1"');
			sqlsaveEditSurveyResponsetrans.executeSql('DELETE FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1"');
		}
		timestamp =new Date().toISOString();
		
		for(surveyparentresponseloop=0; surveyparentresponseloop<surveyparentresponse.length; surveyparentresponseloop++)
		{
			sqlsaveEditSurveyResponsetrans.executeSql('INSERT INTO surveyparentresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, empid, UploadedFrom) VALUES ("'+surveyparentresponse[surveyparentresponseloop][0]+'", "'+surveyparentresponse[surveyparentresponseloop][1]+'", "'+surveyparentresponse[surveyparentresponseloop][2]+'", "'+surveyparentresponse[surveyparentresponseloop][3]+'", "'+surveyparentresponse[surveyparentresponseloop][5]+'", "'+surveyparentresponse[surveyparentresponseloop][4]+'", "'+date+'", "'+surveyresponsesavetype+'", "'+timestamp+'", "'+empidlocal+'", "'+platform+'")');
		}
		
		for(surveychildresponseloop=0; surveychildresponseloop<surveychildresponse.length; surveychildresponseloop++)
		{
			sqlsaveEditSurveyResponsetrans.executeSql('INSERT INTO surveychildresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, empid, UploadedFrom) VALUES ("'+surveychildresponse[surveychildresponseloop][0]+'", "'+surveychildresponse[surveychildresponseloop][1]+'", "'+surveychildresponse[surveychildresponseloop][2]+'", "'+surveychildresponse[surveychildresponseloop][3]+'", "'+surveychildresponse[surveychildresponseloop][5]+'", "'+surveychildresponse[surveychildresponseloop][4]+'", "'+date+'", "'+surveyresponsesavetype+'", "'+timestamp+'", "'+empidlocal+'", "'+platform+'")');
		}
		var updatetime=(new Date()).toISOString();

		if(path=="bleditsurveypage.html" || path=="blsurveypage.html")
	 	{ sqlsaveEditSurveyResponsetrans.executeSql('UPDATE mmpbenfimis SET status="'+surveyresponsesavetype+'", empid="'+empidlocal+'", empname="'+usernamelocal+'", updatedon="'+updatetime+'" WHERE surveyworkitemmappingcode ="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND resondantcode="'+respondantcode+'"');
		}else if(path=="editsurveypage.html" || path=="surveypage.html")
		{sqlsaveEditSurveyResponsetrans.executeSql('UPDATE mmp_ms_benf SET status="'+surveyresponsesavetype+'", empid="'+empidlocal+'", empname="'+usernamelocal+'" WHERE Datetime(fromdate) <= Datetime("'+surveydate+'") AND Datetime(todate) > Datetime("'+surveydate+'") AND surveyworkitemmappingcode ="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND respondantcode="'+respondantcode+'"');}
		

		

		if(surveyresponsesavetype==2){
			if(path=="editsurveypage.html")
			{
				sqlsaveEditSurveyResponsetrans.executeSql('SELECT saved FROM workitemsserverstatus WHERE workitemmmpcode=? AND fromdate ="'+date+'"', [workitem], function(workitemsserverstatustrans, countresult)
				{
					var tempsaved=parseInt(countresult.rows.item(0).saved) - 1;
					workitemsserverstatustrans.executeSql('update workitemsserverstatus SET saved=? WHERE workitemmmpcode=? AND fromdate ="'+date+'"', [tempsaved, workitem])
				},errorCB);
			}else  if(path=="bleditsurveypage.html"){
				sqlsaveEditSurveyResponsetrans.executeSql('SELECT saved FROM workitemsserverstatus WHERE workitemmmpcode=?', [workitem], function(workitemsserverstatustrans, countresult)
				{
					var tempsaved=parseInt(countresult.rows.item(0).saved) - 1;
					workitemsserverstatustrans.executeSql('update workitemsserverstatus SET saved=? WHERE workitemmmpcode=?', [tempsaved, workitem])
				},errorCB);
			}
		}
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}


// ============= ***  Survey EDIT Page ENDS *** ==================


// ============ *** BASELINE SURVEY BENEFICIARY LIST BEGIN ***============
	blitems=[];

	
function loadbenffilterApply()
{
	if($("#loadbenfblock").val()!="")
	{
		if($("#loadbenffiltergp").val()!="")
		{
			if($("#loadbenffiltervillage").val()!="")
			{
				var tempblock = $("#loadbenfblock").val();
				var tempgp = $("#loadbenffiltergp").val();
				var tempvillage = $("#loadbenffiltervillage").val();

				localStorage.BENF_LOAD_BLOCK= '"' + tempblock.join('", "') + '"';
				localStorage.BENF_LOAD_GP= '"' + tempgp.join('", "') + '"';
				localStorage.BENF_LOAD_VILLAGE= '"' + tempvillage.join('", "') + '"';
				$("#loadbenfmodal").modal("hide");
				setTimeout(function(){
					rootdetection.isDeviceRooted(function (result) {
						if(result==0)
						{
							SpinnerDialog.show("Samuday 360", "Loading...", true);
							// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
							var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
					    	db.transaction(sqlBLBeneficiaryList, errorCB, pageloadedsuccess);
					    }else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
					}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
				}, 60);
			}else{navigator.notification.alert("Please Select village", function(){}, 'Samuday 360','Done');}
		}else{navigator.notification.alert("Please Select GP", function(){}, 'Samuday 360','Done');}
	}else{navigator.notification.alert("Please Select Block", function(){}, 'Samuday 360','Done');}
}


function getBLBeneficiaryList()
{
	if(typeof localStorage.BENF_LOAD_GP!="undefined" && localStorage.BENF_LOAD_GP!="")
	{
		setTimeout(function(){
			rootdetection.isDeviceRooted(function (result) {
				if(result==0)
				{
					SpinnerDialog.show("Samuday 360", "Loading Beneficiaries...", true);
					// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
					var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
			    	db.transaction(sqlBLBeneficiaryList, errorCB, pageloadedsuccess);
			    }else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
			}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
		}, 30);
	}
	else{$("#loadbenfmodal").modal("show");}
}
	
function sqlBLBeneficiaryList(sqlBLBeneficiaryListtrans)
{
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	if(surveyworkitemmappingcode!="" && survey!="")
	{
		sqlBLBeneficiaryListtrans.executeSql('SELECT * FROM gproads', [], function(gproadstrans, results){
			gproadssource=gproadslayer.getSource();
			gproadssource.clear();
			gproadsresult=results.rows;
			for(gproadsresultloop=0; gproadsresultloop<results.rows.length; gproadsresultloop++)
			{
				format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(gproadsresultloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					gproadssource.addFeature(featureGeom);
			}
		}, errorCB);

		sqlBLBeneficiaryListtrans.executeSql('SELECT * FROM shroads', [], function(shroadstrans, results){
			shroadssource=shroadslayer.getSource();
			shroadssource.clear();
			shroadsresult=results.rows;
			for(shroadsresultloop=0; shroadsresultloop<results.rows.length; shroadsresultloop++)
			{
				format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(shroadsresultloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					shroadssource.addFeature(featureGeom);
			}
		}, errorCB);

		sqlBLBeneficiaryListtrans.executeSql('SELECT * FROM villageroads', [], function(villageroadstarns, results){
			villageroadssource=villageroadslayer.getSource();
			villageroadssource.clear();
			vlroadsresult=results.rows;
			for(vlroadsresultloop=0; vlroadsresultloop<results.rows.length; vlroadsresultloop++)
			{
				format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(vlroadsresultloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					villageroadssource.addFeature(featureGeom);
			}
		}, errorCB);

		sqlBLBeneficiaryListtrans.executeSql('SELECT DISTINCT geom, villagename FROM villageboundries', [], function(villageboundriestarns, results){
			var villageboundriessource=villageboundrieslayer.getSource();
			villageboundriessource.clear();
			var vlboundriesresult=results.rows;
			for(vlboundriesresultloop=0; vlboundriesresultloop<results.rows.length; vlboundriesresultloop++)
			{
				if(results.rows.item(vlboundriesresultloop).geom!="")
				{
					format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(vlboundriesresultloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					featureGeom.setStyle(new ol.style.Style
					({
						fill: new ol.style.Fill({ color: 'rgba(255, 255, 255, 0.0)', weight: 1 }),
						stroke: new ol.style.Stroke({ color: 'rgba(0, 0, 0, 0.3)', width: 2 }),
						image: new ol.style.Circle({ radius: 7,
							stroke: new ol.style.Stroke ({ color: 'rgba(0, 0, 0, 0.0)', width: 2 }),
							fill: new ol.style.Fill({ color: 'rgba(0, 0, 0, 0.0)' })
						}),
						text: new ol.style.Text({ text:results.rows.item(vlboundriesresultloop).villagename})
					}));
					villageboundriessource.addFeature(featureGeom);
				}
			}
		}, errorCB);

		sqlBLBeneficiaryListtrans.executeSql('SELECT type, geom FROM landmarks', [], function(landmarkstrans, results){
			var landmarkssource=landmarkslayer.getSource();
			landmarkssource.clear();
			var landmarksresult=results.rows;
			for(landmarksloop=0; landmarksloop<results.rows.length; landmarksloop++)
			{ 
				if(results.rows.item(landmarksloop).geom!="")
				{
					format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(landmarksloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					featureGeom.setStyle(getlandmartstyle(results.rows.item(landmarksloop).type));
					landmarkssource.addFeature(featureGeom);
				}
			}
			var extent = landmarkssource.getExtent();
			map.getView().fit(extent, map.getSize());
		}, errorCB);

		sqlBLBeneficiaryListtrans.executeSql('SELECT resondantcode, respondantname, block, grampanchayat, village, gender, buildingtype, housecode, hohname, relationwithhoh, occupation, dateofbirth, status, geom FROM mmpbenfi WHERE surveyworkitemmappingcode ="'+surveyworkitemmappingcode+'" AND  surveycode="'+survey+'" AND  block IN ('+localStorage.BENF_LOAD_BLOCK+') AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+') ORDER BY status', [], resultBLBeneficiaryList, errorCB);
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}


function resultBLBeneficiaryList(resultBLBeneficiaryListtran, results)
{
	htmlcontent="";
	blitems=[];
	//blitems=results.rows;
	benfsource=benflayer.getSource();
	benfsource.clear();
	count=0;
	$("#bencount").html(results.rows.length);
	if(results.rows.length>0)
	{
		for(blitemsloop=0; blitemsloop<results.rows.length; blitemsloop++)
		{
			blitems.push(results.rows.item(blitemsloop));
			if(results.rows.item(blitemsloop).resondantcode!="")
			{
				if(results.rows.item(blitemsloop).status==0)
				{
					count++; $("#bencounttodo").html(count);
					htmlcontent+='<div class="col-sm-12 card odd" ><div class="card-body"><h6 class="card-title" onclick=startsurvey("'+results.rows.item(blitemsloop).resondantcode+'")>'+results.rows.item(blitemsloop).respondantname +'</h6><p class="card-text" onclick=startsurvey("'+results.rows.item(blitemsloop).resondantcode+'")>'+results.rows.item(blitemsloop).hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(results.rows.item(blitemsloop).status==1){
					htmlcontent+='<div class="col-sm-12 card even"><div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-open-o" style="float: none;"> </span>'+results.rows.item(blitemsloop).respondantname +'</h6><p class="card-text" >'+results.rows.item(blitemsloop).hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(results.rows.item(blitemsloop).status==2){
					htmlcontent+='<div class="col-sm-12 card even"><div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-o" style="float: none;"> </span>'+results.rows.item(blitemsloop).respondantname +'</h6><p class="card-text" >'+results.rows.item(blitemsloop).hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(results.rows.item(blitemsloop).status==3){
					htmlcontent+='<div class="col-sm-12 card even"><div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-o" style="float: none;"> </span>'+results.rows.item(blitemsloop).respondantname +'</h6><p class="card-text" >'+results.rows.item(blitemsloop).hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}

				else{
					
				}
				if(results.rows.item(blitemsloop).resondantcode!="" && results.rows.item(blitemsloop).geom!="undefined" && results.rows.item(blitemsloop).geom!="" && results.rows.item(blitemsloop).geom!="null" && results.rows.item(blitemsloop).geom!=null)
				{

					format = new ol.format.WKT();
					var featureGeom="";
					featureGeom = format.readFeature(results.rows.item(blitemsloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					featureGeom.setProperties({'respondentcode':results.rows.item(blitemsloop).resondantcode, 'index':blitemsloop,  'geom':results.rows.item(blitemsloop).geom});
					
					if(results.rows.item(blitemsloop).status==0 || results.rows.item(blitemsloop).status==4)
					{featureGeom.setStyle(todo);}
					else if(results.rows.item(blitemsloop).status==1)
					{featureGeom.setStyle(inprogress);}
					else if(results.rows.item(blitemsloop).status==2)
					{featureGeom.setStyle(submitted);}
					else if(results.rows.item(blitemsloop).status==3)
					{featureGeom.setStyle(synced);}
				
					benfsource.addFeature(featureGeom);
				}else{}
			}
		}

		setTimeout(function(){ 
			var extent = benfsource.getExtent();
			map.getView().fit(extent, map.getSize());

		 }, 2000);
		
		
	}
	else{
		htmlcontent="<hr style='background-color:white;'><h4 align='center' style='width:100%;'>No Records Found</h4>";
	}

	$("#datapool").html(htmlcontent);
}

// ============ *** BASELINE SURVEY BENEFICIARY LIST END ***============




// ============ *** BASELINE SURVEY BENEFICIARY LIST BEGIN ***============
	blitems=[];

function getBlEditBeneficiarylist()
{
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlBlEditBeneficiarylist, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}
	
function sqlBlEditBeneficiarylist(sqlBlEditBeneficiarylisttran)
{
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	if(surveyworkitemmappingcode!="" && survey!="")
	{
		sqlBlEditBeneficiarylisttran.executeSql('SELECT resondantcode, respondantname, block, grampanchayat, village, gender, housecode, hohname, relationwithhoh, occupation, dateofbirth, geom, empid, empname,  (SELECT COUNT(questioncode) FROM surveyparentresponse WHERE surveyworkitemmappingcode=? AND surveycode=? AND mmpbenfi.resondantcode=surveyparentresponse.respondentcode) AS totalparentcount, (SELECT COUNT(questioncode) FROM surveychildresponse WHERE surveyworkitemmappingcode=? AND surveycode=? AND mmpbenfi.resondantcode=surveychildresponse.respondentcode) AS totalchildcount, (SELECT COUNT(questioncode) FROM surveyparentresponse WHERE answer !="" AND answer IS NOT NULL  AND surveyworkitemmappingcode=? AND surveycode=? AND mmpbenfi.resondantcode=surveyparentresponse.respondentcode) AS parentansweredcount, (SELECT COUNT(questioncode) FROM surveychildresponse WHERE answer !="" AND answer IS NOT NULL AND surveyworkitemmappingcode=? AND surveycode=? AND mmpbenfi.resondantcode=surveychildresponse.respondentcode) AS childansweredcount FROM mmpbenfi WHERE status="1" AND surveycode=? AND surveyworkitemmappingcode=?', [surveyworkitemmappingcode, survey, surveyworkitemmappingcode, survey, surveyworkitemmappingcode, survey, surveyworkitemmappingcode, survey,  survey, surveyworkitemmappingcode], resultBlEditBeneficiarylist, errorCB); 
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}


function resultBlEditBeneficiarylist(resultBlEditBeneficiarylisttrans, results)
{
	htmlcontent="";
	blitems=[];
	//blitems=results.rows;
	$("#bencount").html(results.rows.length);
	for(blitemsloop=0; blitemsloop<results.rows.length; blitemsloop++)
	{
		blitems.push(results.rows.item(blitemsloop));
		if(results.rows.item(blitemsloop).resondantcode!="")
		{
			totalquest=parseInt(results.rows.item(blitemsloop).totalparentcount)+parseInt(results.rows.item(blitemsloop).totalchildcount);
			totalanswered=parseInt(results.rows.item(blitemsloop).parentansweredcount)+parseInt(results.rows.item(blitemsloop).childansweredcount); 
			var empname="self";
			if(typeof results.rows.item(blitemsloop).empname!="undefined" && results.rows.item(blitemsloop).empname!="self" && results.rows.item(blitemsloop).empname!="null" && results.rows.item(blitemsloop).empname!=null)
			{empname=results.rows.item(blitemsloop).empname;}

			htmlcontent+='<div class="col-sm-12 card odd" ><div class="card-body"><h6 class="card-title" onclick=editsurvey("'+results.rows.item(blitemsloop).resondantcode+'") style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-open-o" style="float: none;"> </span>'+results.rows.item(blitemsloop).respondantname+'      ('+totalanswered+'/'+totalquest+') <small style="float:right; right:8px; color:#9C9C9C; padding-top: 8px; max-width:100px;"> <i class="fa fa-floppy-o" aria-hidden="true" style="display: contents; font-size: 13px; color: #0b70b3; padding-right:5px;"> &nbsp </i>'+empname+'</small></h6><p class="card-text" onclick=editsurvey("'+results.rows.item(blitemsloop).resondantcode+'")>'+results.rows.item(blitemsloop).hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
		}
	}
	$("#datapool").html(htmlcontent);
}

// ============ *** BASELINE SURVEY BENEFICIARY LIST END ***============



// ============ *** SELECT BENEFICIARY BEGIN ***============




function loadselectbenffilterApply()
{
	if($("#loadbenfblock").val()!="")
	{
		if($("#loadbenffiltergp").val()!="")
		{
			if($("#loadbenffiltervillage").val()!="")
			{
				var tempblock = $("#loadbenfblock").val();
				var tempgp = $("#loadbenffiltergp").val();
				var tempvillage = $("#loadbenffiltervillage").val();

				localStorage.BENF_LOAD_BLOCK= '"' + tempblock.join('", "') + '"';
				localStorage.BENF_LOAD_GP= '"' + tempgp.join('", "') + '"';
				localStorage.BENF_LOAD_VILLAGE= '"' + tempvillage.join('", "') + '"';
				$("#loadbenfmodal").modal("hide");

				setTimeout(function(){
					rootdetection.isDeviceRooted(function (result) {
						if(result==0)
						{
							SpinnerDialog.show("Samuday 360", "Loading Beneficiaries...", true);
							// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
							var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
							db.transaction(sqlmsselectBeneficiarylist, errorCB, pageloadedsuccess);
						}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
					}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
				}, 60);

			}else{navigator.notification.alert("Please Select village", function(){}, 'Samuday 360','Done');}
		}else{navigator.notification.alert("Please Select GP", function(){}, 'Samuday 360','Done');}
	}else{navigator.notification.alert("Please Select Block", function(){}, 'Samuday 360','Done');}
}







blitems=[];
tempaddbenfarray=[];
function getmsselectBeneficiarylist()
{
	if(typeof localStorage.BENF_LOAD_GP!="undefined" && localStorage.BENF_LOAD_GP!="")
	{
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				$("#loadbenfmodal").modal("hide");
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlmsselectBeneficiarylist, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}else{SpinnerDialog.hide(); $("#loadbenfmodal").modal("show");}
		
}
	
function sqlmsselectBeneficiarylist(sqlmsselectBeneficiarylisttrans)
{
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	if(surveyworkitemmappingcode!="" && survey!="")
	{
		sqlmsselectBeneficiarylisttrans.executeSql('SELECT * FROM gproads', [], function(gproadstrans, results){
			gproadssource=gproadslayer.getSource();
			gproadssource.clear();
			gproadsresult=results.rows;
			
			for(gproadsresultloop=0; gproadsresultloop<results.rows.length; gproadsresultloop++)
			{
				format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(gproadsresultloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					gproadssource.addFeature(featureGeom);
			}
		}, errorCB);
		
		sqlmsselectBeneficiarylisttrans.executeSql('SELECT * FROM shroads', [], function(shroadstrans, results){
			shroadssource=shroadslayer.getSource();
			shroadssource.clear();
			shroadsresult=results.rows;
			for(shroadsresultloop=0; shroadsresultloop<results.rows.length; shroadsresultloop++)
			{
				format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(shroadsresultloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					shroadssource.addFeature(featureGeom);
			}
		}, errorCB);

		sqlmsselectBeneficiarylisttrans.executeSql('SELECT * FROM villageroads', [], function(villageroadstarns, results){
			villageroadssource=villageroadslayer.getSource();
			villageroadssource.clear();
			vlroadsresult=results.rows;
			for(vlroadsresultloop=0; vlroadsresultloop<results.rows.length; vlroadsresultloop++)
			{
				format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(vlroadsresultloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					villageroadssource.addFeature(featureGeom);
			}
		}, errorCB);

		sqlmsselectBeneficiarylisttrans.executeSql('SELECT DISTINCT geom, villagename FROM villageboundries', [], function(villageboundriestrans, results){
			var villageboundriessource=villageboundrieslayer.getSource();
			villageboundriessource.clear();
			var vlboundriesresult=results.rows;

			for(vlboundriesresultloop=0; vlboundriesresultloop<results.rows.length; vlboundriesresultloop++)
			{
				if(results.rows.item(vlboundriesresultloop).geom!="")
				{
					format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(vlboundriesresultloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					featureGeom.setStyle(new ol.style.Style
					({
						fill: new ol.style.Fill({ color: 'rgba(255, 255, 255, 0.0)', weight: 1 }),
						stroke: new ol.style.Stroke({ color: 'rgba(0, 0, 0, 0.3)', width: 2 }),
						image: new ol.style.Circle({ radius: 7,
							stroke: new ol.style.Stroke ({ color: 'rgba(0, 0, 0, 0.0)', width: 2 }),
							fill: new ol.style.Fill({ color: 'rgba(0, 0, 0, 0.0)' })
						}),
						text: new ol.style.Text({ text:results.rows.item(vlboundriesresultloop).villagename})
					}));
					villageboundriessource.addFeature(featureGeom);
				}
			}
		}, errorCB);

		sqlmsselectBeneficiarylisttrans.executeSql('SELECT type, geom FROM landmarks', [], function(landmarkstrans, results){
			var landmarkssource=landmarkslayer.getSource();
			landmarkssource.clear();
			var landmarksresult=results.rows;
			for(landmarksloop=0; landmarksloop<results.rows.length; landmarksloop++)
			{ 
				if(results.rows.item(landmarksloop).geom!="")
				{
					format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(landmarksloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					featureGeom.setStyle(getlandmartstyle(results.rows.item(landmarksloop).type));
					landmarkssource.addFeature(featureGeom);
				}
			}
			
		}, errorCB);

		// ==== offline Bendataload====
		sqlmsselectBeneficiarylisttrans.executeSql('SELECT resondantcode, respondantname, hohname, housecode, block, grampanchayat, village, gender, hohname, relationwithhoh, occupation, dateofbirth, buildingtype,  geom, status FROM mmpbenfi WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"  AND  block IN ('+localStorage.BENF_LOAD_BLOCK+') AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+') AND status="0"', [], resultmsselectBeneficiarylist, errorCB); 
		
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}

// ==== offline Bendataload====
function resultmsselectBeneficiarylist(resultmsselectBeneficiarylisttrans, results)
{
	htmlcontent="";

	var uniquebuildingtype = [];

	// ==== offline Bendataload====
	//blitems=results.rows;
	blitems==[];
	//tempaddbenfarray=blitems;

	benfsource=benflayer.getSource();
	benfsource.clear();
	$("#bencount").html(results.rows.length);
	if(results.rows.length>0)
	{
		for(blitemsloop=0; blitemsloop<results.rows.length; blitemsloop++)
		{
			blitems.push(results.rows.item(blitemsloop));
			if(results.rows.item(blitemsloop).resondantcode!="")
			{
				tempaddbenfarray.push(results.rows.item(blitemsloop));

				htmlcontent+='<div class="col-sm-12 card add"  id="'+results.rows.item(blitemsloop).resondantcode+'"> <div class="card-body"><h6 class="card-title" onclick=selectcard("'+blitemsloop+'","'+results.rows.item(blitemsloop).resondantcode+'")>'+results.rows.item(blitemsloop).respondantname+'</h6><p class="card-text" onclick=selectcard("'+blitemsloop+'","'+results.rows.item(blitemsloop).resondantcode+'")> HoH -  '+results.rows.item(blitemsloop).hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				
				if(uniquebuildingtype.indexOf(results.rows.item(blitemsloop).buildingtype) === -1){
			        uniquebuildingtype.push(results.rows.item(blitemsloop).buildingtype); 
			        document.getElementById("buildingtype").options[document.getElementById("buildingtype").length]=new Option(results.rows.item(blitemsloop).buildingtype,results.rows.item(blitemsloop).buildingtype);
			    } 
			    // alert(results.rows.item(blitemsloop).geom);
				format = new ol.format.WKT();
				var featureGeom="";
				if(typeof results.rows.item(blitemsloop).geom!="undefined" && results.rows.item(blitemsloop).geom!="" && results.rows.item(blitemsloop).geom!="null" && results.rows.item(blitemsloop).geom!=null)
				{
					
					featureGeom = format.readFeature(results.rows.item(blitemsloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					if(results.rows.item(blitemsloop).status==0 || results.rows.item(blitemsloop).status==4)
					{featureGeom.setStyle(todo);}
					else if(results.rows.item(blitemsloop).status==1)
					{featureGeom.setStyle(inprogress);}
					else if(results.rows.item(blitemsloop).status==2)
					{featureGeom.setStyle(submitted);}
					else if(results.rows.item(blitemsloop).status==3)
					{featureGeom.setStyle(synced);}

					featureGeom.setProperties({'respondentcode':results.rows.item(blitemsloop).resondantcode, 'index':blitemsloop,  'geom':results.rows.item(blitemsloop).geom});
					benfsource.addFeature(featureGeom);
				}
			}
		}

		// if(benfsource.getFeatures().length>0)
		// {
			$("#datapool").html(htmlcontent);
			var extent = benfsource.getExtent();
			setTimeout(function (){map.getView().fit(extent, map.getSize())},1000);
		// }
	}
	else{
		$("#datapool").html("<hr style='background-color:white;'><h4 align='center' style='width:100%;'>No Records Found</h4>");
	}

	
}


//--------  Save selected  -------------
function saveSelectedBenf()
{
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Saving Selected...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlGetMSurveyDates, errorCB, saveSelectedBenfsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}

function sqlGetMSurveyDates(sqlGetMSurveyDatestrans)
{
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	if(surveyworkitemmappingcode!="" && survey!="")
	{
		sqlGetMSurveyDatestrans.executeSql('SELECT fromsurveydate, tosurveydate FROM monitoringsurveydates WHERE surveyworkitemmappingcode=? AND surveycode=?', [surveyworkitemmappingcode, survey], sqlSaveSelectedBenfUpdate, errorCB);
	
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}


 

function saveSelectedBenfsuccess(saveSelectedBenfsuccesstrans)
{
	SpinnerDialog.hide();
	navigator.notification.alert("Your Selection Is Saved", function(){getmsselectBeneficiarylist()}, 'Samuday 360','Done');
	$("#beneficiaryadd").hide();
	$("#beneficiaryaddcontinue").show()	
}


function sqlSaveSelectedBenfUpdate(sqlSaveSelectedBenfUpdatetrans, results)
{
	msdates=results.rows;
	msdateslen=results.rows.length;
	var updatetime=(new Date()).toISOString();
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1)

	if(surveyworkitemmappingcode !="" && survey !="")
	{
		for(benlen=0; benlen<selectedbeneficiaryarray.length; benlen++)
		{
			sqlSaveSelectedBenfUpdatetrans.executeSql('UPDATE mmpbenfimis SET status="4", empid=?, updatedon=? WHERE surveyworkitemmappingcode=? AND surveycode=? AND resondantcode=?', [empidlocal, updatetime, surveyworkitemmappingcode, survey, selectedbeneficiaryarray[benlen]]);
			for(msdatesloop=0; msdatesloop<msdateslen; msdatesloop++)
			{
				sqlSaveSelectedBenfUpdatetrans.executeSql('INSERT INTO mmp_ms_benf (surveyworkitemmappingcode, surveycode, respondantcode, fromdate, todate, status, empid) VALUES(?,?,?,?,?,?,?)', [surveyworkitemmappingcode, survey, selectedbeneficiaryarray[benlen], results.rows.item(msdatesloop).fromsurveydate, results.rows.item(msdatesloop).tosurveydate, "0", empidlocal]);
			}			
		}
		$("#datapool").html("");
		sqlSaveSelectedBenfUpdatetrans.executeSql('SELECT resondantcode, respondantname, block, grampanchayat, village, gender, housecode, hohname, relationwithhoh, occupation, buildingtype, dateofbirth, geom FROM mmpbenfi WHERE status="0" AND surveyworkitemmappingcode=? AND surveycode=?', [surveyworkitemmappingcode, survey], resultmsselectBeneficiarylist, errorCB);
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}



// ============ *** SELECT BENEFICIARY END ***============mmpbenfi


// ============ *** SELECTED BENEFICIARY BEGIN ***============


blitems=[];


function loadselectedbenffilterApply()
{
	if($("#loadbenfblock").val()!="")
	{
		if($("#loadbenffiltergp").val()!="")
		{
			if($("#loadbenffiltervillage").val()!="")
			{
				var tempblock = $("#loadbenfblock").val();
				var tempgp = $("#loadbenffiltergp").val();
				var tempvillage = $("#loadbenffiltervillage").val();

				localStorage.BENF_LOAD_BLOCK= '"' + tempblock.join('", "') + '"';
				localStorage.BENF_LOAD_GP= '"' + tempgp.join('", "') + '"';
				localStorage.BENF_LOAD_VILLAGE= '"' + tempvillage.join('", "') + '"';
				$("#loadbenfmodal").modal("hide");
				
				setTimeout(function(){
					rootdetection.isDeviceRooted(function (result) {
						if(result==0)
						{
							SpinnerDialog.show("Samuday 360", "Loading Beneficiaries...", true);
							// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
							var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
							db.transaction(sqlMonitoringselectedBenef, errorCB, pageloadedsuccess);
						}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
					}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
				}, 60);

			}else{navigator.notification.alert("Please Select village", function(){}, 'Samuday 360','Done');}
		}else{navigator.notification.alert("Please Select GP", function(){}, 'Samuday 360','Done');}
	}else{navigator.notification.alert("Please Select Block", function(){}, 'Samuday 360','Done');}
}

function getMonitoringselectedBenef()
{
	if(typeof localStorage.BENF_LOAD_GP!="undefined" && localStorage.BENF_LOAD_GP!="")
	{
		setTimeout(function(){
			rootdetection.isDeviceRooted(function (result) {
				if(result==0)
				{
					SpinnerDialog.show("Samuday 360", "Loading Beneficiaries...", true);
					// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
					var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
					db.transaction(sqlMonitoringselectedBenef, errorCB, pageloadedsuccess);
				}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
			}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
		}, 60);
	}
	else{$("#loadbenfmodal").modal("show");}
}
	
function sqlMonitoringselectedBenef(sqlMonitoringselectedBeneftrans)
{
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	if(surveyworkitemmappingcode!="" && survey!="")
	{
		sqlMonitoringselectedBeneftrans.executeSql('SELECT * FROM gproads', [], function(gproadstrans, results){
			gproadssource=gproadslayer.getSource();
			gproadssource.clear();
			gproadsresult=results.rows;
			for(gproadsresultloop=0; gproadsresultloop<results.rows.length; gproadsresultloop++)
			{
				format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(gproadsresultloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					gproadssource.addFeature(featureGeom);
			}
		}, errorCB);

		sqlMonitoringselectedBeneftrans.executeSql('SELECT * FROM shroads', [], function(shroadstrans, results){
			shroadssource=shroadslayer.getSource();
			shroadssource.clear();
			shroadsresult=results.rows;
			for(shroadsresultloop=0; shroadsresultloop<results.rows.length; shroadsresultloop++)
			{
				format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(shroadsresultloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					shroadssource.addFeature(featureGeom);
			}
		}, errorCB);

		sqlMonitoringselectedBeneftrans.executeSql('SELECT * FROM villageroads', [], function(villageroadstrans, results){
			villageroadssource=villageroadslayer.getSource();
			villageroadssource.clear();
			vlroadsresult=results.rows;
			for(vlroadsresultloop=0; vlroadsresultloop<results.rows.length; vlroadsresultloop++)
			{
				format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(vlroadsresultloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					villageroadssource.addFeature(featureGeom);
			}
		}, errorCB);

		sqlMonitoringselectedBeneftrans.executeSql('SELECT DISTINCT geom, villagename FROM villageboundries', [], function(villageboundriestrans, results){
			var villageboundriessource=villageboundrieslayer.getSource();
			villageboundriessource.clear();
			var vlboundriesresult=results.rows;
			for(vlboundriesresultloop=0; vlboundriesresultloop<results.rows.length; vlboundriesresultloop++)
			{
				if(results.rows.item(vlboundriesresultloop).geom!="")
				{
					format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(vlboundriesresultloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					featureGeom.setStyle(new ol.style.Style
					({
						fill: new ol.style.Fill({ color: 'rgba(255, 255, 255, 0.0)', weight: 1 }),
						stroke: new ol.style.Stroke({ color: 'rgba(0, 0, 0, 0.3)', width: 2 }),
						image: new ol.style.Circle({ radius: 7,
							stroke: new ol.style.Stroke ({ color: 'rgba(0, 0, 0, 0.0)', width: 2 }),
							fill: new ol.style.Fill({ color: 'rgba(0, 0, 0, 0.0)' })
						}),
						text: new ol.style.Text({ text:results.rows.item(vlboundriesresultloop).villagename})
					}));
					villageboundriessource.addFeature(featureGeom);
				}
			}
		}, errorCB);
		sqlMonitoringselectedBeneftrans.executeSql('SELECT type, geom FROM landmarks', [], function(landmarkstrans, results){
			var landmarkssource=landmarkslayer.getSource();
			landmarkssource.clear();
			var landmarksresult=results.rows;
			for(landmarksloop=0; landmarksloop<results.rows.length; landmarksloop++)
			{ 
				if(results.rows.item(landmarksloop).geom!="")
				{
					format = new ol.format.WKT();
					featureGeom = format.readFeature(results.rows.item(landmarksloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					featureGeom.setStyle(getlandmartstyle(results.rows.item(landmarksloop).type));
					landmarkssource.addFeature(featureGeom);
				}
			}
			var extent = landmarkssource.getExtent();
			map.getView().fit(extent, map.getSize());
		}, errorCB);

		surveybenfdate=new Date().toISOString().slice(0, 10);;
		if(typeof localStorage.surveybenfdate!='undefined' && localStorage.surveybenfdate!=""){ surveybenfdate=CryptoJS.AES.decrypt(localStorage.surveybenfdate, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1)}
		$("#monitoringdate").html(surveybenfdate);
		sqlMonitoringselectedBeneftrans.executeSql('SELECT * FROM ms_mmp_benf_selected WHERE Datetime(fromdate) <= Datetime("'+surveybenfdate+'") AND Datetime(todate) > Datetime("'+surveybenfdate+'") AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"  AND  block IN ('+localStorage.BENF_LOAD_BLOCK+') AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+') ORDER BY housecode', [], resultMonitoringselectedBenef, errorCB);
		sqlMonitoringselectedBeneftrans.executeSql('SELECT fromsurveydate, tosurveydate FROM monitoringsurveydates WHERE surveyworkitemmappingcode=? AND surveycode=?', [surveyworkitemmappingcode, survey], sqlsurveybenflistdates, errorCB);

	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}


function resultMonitoringselectedBenef(resultMonitoringselectedBeneftrans, results)
{
	htmlcontent="";
	blitems=[];
	//blitems=results.rows;
	benfsource=benflayer.getSource();
	benfsource.clear();
	count=0;
	$("#bencount").html(results.rows.length);
	if(results.rows.length>0)
	{
		surveyworkitemstartdate=results.rows.item(0).fromdate;
		localStorage.surveyworkitemstartdate=CryptoJS.AES.encrypt('"'+surveyworkitemstartdate+'"', localStorage.employeeid);

		for(blitemsloop=0; blitemsloop<results.rows.length; blitemsloop++)
		{
			blitems.push(results.rows.item(blitemsloop));
			if(results.rows.item(blitemsloop).resondantcode!="")
			{
				if(results.rows.item(blitemsloop).status==0 || results.rows.item(blitemsloop).status==4)
				{
					count++;
					$("#bencounttodo").html(count);
					htmlcontent+='<div class="col-sm-12 card odd"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" onclick=startsurvey("'+results.rows.item(blitemsloop).resondantcode+'")>'+results.rows.item(blitemsloop).respondantname +'</h6><p class="card-text" onclick=startsurvey("'+results.rows.item(blitemsloop).resondantcode+'")>'+results.rows.item(blitemsloop).hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(results.rows.item(blitemsloop).status==1){
					htmlcontent+='<div class="col-sm-12 card even"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-open-o" style="float: none;"> </span>'+results.rows.item(blitemsloop).respondantname +'</h6><p class="card-text" >'+results.rows.item(blitemsloop).hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(results.rows.item(blitemsloop).status==2){
					htmlcontent+='<div class="col-sm-12 card even"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-o" style="float: none;"> </span>'+results.rows.item(blitemsloop).respondantname +'</h6><p class="card-text" >'+results.rows.item(blitemsloop).hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(results.rows.item(blitemsloop).status==3){
					htmlcontent+='<div class="col-sm-12 card even"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-o" style="float: none;"> </span>'+results.rows.item(blitemsloop).respondantname +'</h6><p class="card-text" >'+results.rows.item(blitemsloop).hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}

				format = new ol.format.WKT();
				if(results.rows.item(blitemsloop).geom!="" && results.rows.item(blitemsloop).geom!="undefined" && results.rows.item(blitemsloop).geom!="null" && results.rows.item(blitemsloop).geom!=null)
				{	
					var featureGeom="";
					featureGeom = format.readFeature(results.rows.item(blitemsloop).geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					//alert(blitems[blitemsloop].status);
					if(results.rows.item(blitemsloop).status==0 || results.rows.item(blitemsloop).status==4)
					{featureGeom.setStyle(todo);}
					else if(results.rows.item(blitemsloop).status==1)
					{featureGeom.setStyle(inprogress);}
					else if(results.rows.item(blitemsloop).status==2)
					{featureGeom.setStyle(submitted);}
					else if(results.rows.item(blitemsloop).status==3)
					{featureGeom.setStyle(synced);}
					
					featureGeom.setProperties({'respondentcode':results.rows.item(blitemsloop).resondantcode, 'index':blitemsloop,  'geom':results.rows.item(blitemsloop).geom});
					benfsource.addFeature(featureGeom);
				}
			}
		} 
		setTimeout(function(){ 
			$("#datapool").html(htmlcontent);
			var extent = benfsource.getExtent();
			map.getView().fit(extent, map.getSize());
		}, 3000);
		
		
	}else{
		$("#datapool").html("<hr style='background-color:white;'><h4 align='center' style='width:100%;'>No Records Found</h4>");
	}






}

function sqlsurveybenflistdates(sqlsurveybenflistdatestrans, results)
{
	datesarry=[];
	for(datesloop=0; datesloop<results.rows.length; datesloop++)
	{ datesarry.push(results.rows.item(datesloop).fromsurveydate); }
	 $("#event-cal-container").simpleCalendar({
                events: datesarry,
                selectCallback: function(date){
                	surveybenfdate=date;
                	localStorage.surveybenfdate=CryptoJS.AES.encrypt('"'+surveybenfdate+'"', localStorage.employeeid);
                	if(new Date(surveybenfdate)<new Date())
                	{getMonitoringselectedBenef();}
                	else{navigator.notification.alert("Date Should Not Be Future", function(){}, 'Samuday 360','Done');}
                    	
                    $("#event-cal-container").toggle();
                }
            });

}


// ============ *** SELECTED BENEFICIARY ENDS ***============



// ============ *** EDIT MONITORING BENEFICIARY BEGIN ***============



blitems=[];

function getMonitoringEditBeneficiarylist()
{
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqltMonitoringEditBeneficiarylist, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}
	
function sqltMonitoringEditBeneficiarylist(sqltMonitoringEditBeneficiarylisttrans)
{
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	$("#monitoringdate").html(CryptoJS.AES.decrypt(localStorage.surveybenfdate, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1));
	if(surveyworkitemmappingcode!="" && survey!="" )
	{
		sqltMonitoringEditBeneficiarylisttrans.executeSql('SELECT *, (SELECT COUNT(questioncode) FROM surveyparentresponse WHERE surveyworkitemmappingcode=? AND surveycode=? AND ms_mmp_benf_selected.resondantcode=surveyparentresponse.respondentcode  AND ms_mmp_benf_selected.fromdate=surveyparentresponse.surveydate) AS totalparentcount, (SELECT COUNT(questioncode) FROM surveychildresponse WHERE surveyworkitemmappingcode=? AND surveycode=? AND ms_mmp_benf_selected.resondantcode=surveychildresponse.respondentcode AND ms_mmp_benf_selected.fromdate=surveychildresponse.surveydate) AS totalchildcount, (SELECT COUNT(questioncode) FROM surveyparentresponse WHERE answer !="" AND answer IS NOT NULL  AND surveyworkitemmappingcode=? AND surveycode=? AND ms_mmp_benf_selected.resondantcode=surveyparentresponse.respondentcode  AND ms_mmp_benf_selected.fromdate=surveyparentresponse.surveydate) AS parentansweredcount, (SELECT COUNT(questioncode) FROM surveychildresponse WHERE answer !="" AND answer IS NOT NULL AND surveyworkitemmappingcode=? AND surveycode=? AND ms_mmp_benf_selected.resondantcode=surveychildresponse.respondentcode  AND ms_mmp_benf_selected.fromdate=surveychildresponse.surveydate) AS childansweredcount FROM ms_mmp_benf_selected WHERE Datetime(fromdate) <= Datetime(?) AND Datetime(todate) > Datetime(?) AND status="1" AND surveyworkitemmappingcode=? AND surveycode=?', [surveyworkitemmappingcode, survey, surveyworkitemmappingcode, survey, surveyworkitemmappingcode, survey, surveyworkitemmappingcode, survey, surveybenfdate, surveybenfdate, surveyworkitemmappingcode, survey], resulttMonitoringEditBeneficiarylist, errorCB);
		sqltMonitoringEditBeneficiarylisttrans.executeSql('SELECT fromsurveydate FROM monitoringsurveydates WHERE surveyworkitemmappingcode=? AND surveycode=?', [surveyworkitemmappingcode, survey], sqlEditsurveybenflistdates, errorCB);
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}

}


function sqlEditsurveybenflistdates(sqlEditsurveybenflistdatestrans, results)
{
	datesarry=[];
	for(datesloop=0; datesloop<results.rows.length; datesloop++)
	{ datesarry.push(results.rows.item(datesloop).fromsurveydate); }

	 $("#event-cal-container").simpleCalendar({
        events: datesarry,
        selectCallback: function(date){
        	surveybenfdate=date;
        	localStorage.surveybenfdate=CryptoJS.AES.encrypt('"'+surveybenfdate+'"', localStorage.employeeid);
        	if(new Date(surveybenfdate)<new Date())
        	{getMonitoringEditBeneficiarylist();}else{navigator.notification.alert("Date Should Not Be Future", function(){}, 'Samuday 360','Done');}
            	
            $("#event-cal-container").toggle();
        }
    });

}


function resulttMonitoringEditBeneficiarylist(resulttMonitoringEditBeneficiarylisttrans, results)
{
	htmlcontent="";
	blitems=[];
	//blitems=results.rows;
	//alert(blitems.length);
	$("#bencount").html(results.rows.length);
	if(results.rows.length>0)
	{
		surveyworkitemstartdate=results.rows.item(0).fromdate;
		localStorage.surveyworkitemstartdate=CryptoJS.AES.encrypt('"'+surveyworkitemstartdate+'"', localStorage.employeeid);
		//alert(surveyworkitemstartdate);
		for(blitemsloop=0; blitemsloop<results.rows.length; blitemsloop++)
		{
			blitems.push(results.rows.item(blitemsloop));
			if(results.rows.item(blitemsloop).resondantcode!="")
			{
				totalquest=parseInt(results.rows.item(blitemsloop).totalparentcount)+parseInt(results.rows.item(blitemsloop).totalchildcount);
				totalanswered=parseInt(results.rows.item(blitemsloop).parentansweredcount)+parseInt(results.rows.item(blitemsloop).childansweredcount);
				
				var empname="self";
				if(typeof results.rows.item(blitemsloop).empname!="undefined" && results.rows.item(blitemsloop).empname!="self" && results.rows.item(blitemsloop).empname!="null" && results.rows.item(blitemsloop).empname!=null)
				{empname=results.rows.item(blitemsloop).empname;}
				htmlcontent+='<div class="col-sm-12 card"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" onclick=editsurvey("'+blitems[blitemsloop].resondantcode+'") style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-open-o" style="float: none;"> </span>'+results.rows.item(blitemsloop).respondantname +'      ('+totalanswered+'/'+totalquest+')<small style="float:right; right:8px; color:#9C9C9C; padding-top: 8px; max-width:100px;"> <i class="fa fa-floppy-o" aria-hidden="true" style="display: contents; font-size: 13px; color: #0b70b3; margin-right:3px;"> &nbsp  </i>'+empname+'</small></h6><p class="card-text" onclick=editsurvey("'+results.rows.item(blitemsloop).resondantcode+'")>'+results.rows.item(blitemsloop).hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" style="margin-top: -4px;" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
			}
		}
		$("#datapool").html(htmlcontent);
	}else{
		$("#datapool").html("<hr style='background-color:white;'><h4 align='center' style='width:100%;'>No Records Found</h4>");
	}
}


// ============ *** EDIT MONITORING BENEFICIARY ENDS ***============





// ============ *** FILTER BEGINS ***============
filterstatustype=""
filtervillageblock="";
filtergpsqlparam=""

function filterLoadBlocks()
{
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlFilterLoadBlocks, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}

function sqlFilterLoadBlocks(sqlFilterLoadBlockstrans)
{
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	if(surveyworkitemmappingcode!="" && survey!=""){
		var blocksquery='SELECT DISTINCT block FROM mmpbenfi WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" '
		var buildingtypequery='SELECT DISTINCT buildingtype FROM mmpbenfi WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" '

		var path = window.location.pathname.split("/").pop();
		if(path=="bleditbeneficiary.html" || path=="editbeneficiary.html")
		{
			var tempblock = $("#block").val();
			var tempgp = $("#filtergp").val();
			var tempvillage = $("#filtervillage").val();

			if(tempblock!=""){localStorage.BENF_LOAD_BLOCK= '"' + tempblock.join('", "') + '"'};
			if(tempgp!=""){localStorage.BENF_LOAD_GP= '"' + tempgp.join('", "') + '"'};
			if(tempvillage!=""){localStorage.BENF_LOAD_VILLAGE= '"' + tempvillage.join('", "') + '"'};

		}else 
		if(path=="surveybeneficiarylist.html" || path=="blsurveybeneficiarylist.html")
		{
			var tempblock = $("#loadbenfblock").val();
			var tempgp = $("#loadbenffiltergp").val();
			var tempvillage = $("#loadbenffiltervillage").val();

			if(tempblock!=""){localStorage.BENF_LOAD_BLOCK= '"' + tempblock.join('", "') + '"'};
			if(tempgp!=""){localStorage.BENF_LOAD_GP= '"' + tempgp.join('", "') + '"'};
			if(tempvillage!=""){localStorage.BENF_LOAD_VILLAGE= '"' + tempvillage.join('", "') + '"'};
		}

		if(typeof localStorage.BENF_LOAD_BLOCK!="undefined" && localStorage.BENF_LOAD_BLOCK !=""){
			blocksquery+=' AND block IN ('+localStorage.BENF_LOAD_BLOCK+') '
			buildingtypequery+=' AND block IN ('+localStorage.BENF_LOAD_BLOCK+') '
		}
		if(typeof localStorage.BENF_LOAD_BLOCK!="undefined" && localStorage.BENF_LOAD_GP !=""){
			blocksquery+=' AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') ';
			buildingtypequery+=' AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') ';
		}
		if(typeof localStorage.BENF_LOAD_BLOCK!="undefined" && localStorage.BENF_LOAD_VILLAGE !=""){
			blocksquery+=' AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+')';
			buildingtypequery+=' AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+')';
		}
		blocksquery+=' ORDER BY block';
		buildingtypequery+=' ORDER BY buildingtype';
		sqlFilterLoadBlockstrans.executeSql(blocksquery, [], successFilterLoadBlocks, errorCB);
		sqlFilterLoadBlockstrans.executeSql(buildingtypequery, [], successFilterLoadbuildingtype, errorCB);

	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}

 function successFilterLoadBlocks(successFilterLoadBlockstrans, results)
 {
 	var path = window.location.pathname.split("/").pop();
 	var elemblock=document.getElementById('block');
 	var filterelemblock="";
 	if(path=="surveybeneficiarylist.html" || path=="blsurveybeneficiarylist.html" || path=="selectsbeneficiary.html")
 	{filterelemblock=document.getElementById('loadbenfblock');}

	for(i=0; i<results.rows.length;i++)
	{
		if(results.rows.item(i).block!="" && results.rows.item(i).block!=null)
		{
			elemblock.options[i]=new Option(results.rows.item(i).block,results.rows.item(i).block);

			if(path=="surveybeneficiarylist.html" || path=="blsurveybeneficiarylist.html"|| path=="selectsbeneficiary.html")
 			{filterelemblock.options[i]=new Option(results.rows.item(i).block,results.rows.item(i).block);}
		}
	}
 }

function successFilterLoadbuildingtype(successFilterLoadbuildingtypetrans, results)
{
	
 	elembuildingtype=document.getElementById('buildingtype');
	for(i=0; i<results.rows.length;i++)
	{ if(results.rows.item(i).buildingtype!="" && results.rows.item(i).buildingtype!=null){elembuildingtype.options[i]=new Option(results.rows.item(i).buildingtype,results.rows.item(i).buildingtype);}}
}



//=======   filter block on change  =========


function filterblockonchange(){

	var loadfiltblocktemp=$("#block").val()
	filtervillageblock= '"' + loadfiltblocktemp.join('", "') + '"';
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlFilterLoadGP, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
	
}

$("#block").on("change", function(){

	var loadfiltblocktemp=$("#block").val()
	filtervillageblock= '"' + loadfiltblocktemp.join('", "') + '"';
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlFilterLoadGP, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
	
})


$("#loadbenfblock").on("change", function(){
	
	var loadfiltblocktemp=$("#loadbenfblock").val()
	filtervillageblock= '"' + loadfiltblocktemp.join('", "') + '"';
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlFilterLoadGP, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
	
})

function sqlFilterLoadGP(sqlFilterLoadGPtrans)
{
	var path = window.location.pathname.split("/").pop();
	var filterstatus="0";
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	if(surveyworkitemmappingcode!="" && survey!=""){
		if(path=="blsurveybeneficiarylist.html" || path=="selectsbeneficiary.html"){filterstatus="0"}
		else if(path=="bleditbeneficiary.html" && path=="editbeneficiary.html"){filterstatus="1"}
		else if(path=="surveybeneficiarylist.html"){filterstatus="4"}
	
		sqlFilterLoadGPtrans.executeSql('SELECT DISTINCT grampanchayat FROM mmpbenfi WHERE status=? AND surveyworkitemmappingcode=? AND surveycode=? AND block IN ('+filtervillageblock+')  ORDER BY grampanchayat', [filterstatus, surveyworkitemmappingcode, survey], successFilterLoadgp, errorCB);
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}

function successFilterLoadgp(successFilterLoadgptrans, results)
{
	var elemfiltergp=document.getElementById('filtergp');
	var loadbenffiltergp=document.getElementById('loadbenffiltergp');
	var elemfiltervillage=document.getElementById('filtervillage');
	var loadbenffiltervillage=document.getElementById('loadbenffiltervillage');

	elemfiltergp.length=0;
	loadbenffiltergp.length=0;
	elemfiltervillage.length=0;
	loadbenffiltervillage.length=0;
	for(i=0; i<results.rows.length;i++)
	{ 
		if(results.rows.item(i).grampanchayat!="" && results.rows.item(i).grampanchayat!=null)
			{
				elemfiltergp.options[i]=new Option(results.rows.item(i).grampanchayat,results.rows.item(i).grampanchayat);
				loadbenffiltergp.options[i]=new Option(results.rows.item(i).grampanchayat,results.rows.item(i).grampanchayat);
			}
		}
}

//====== Filter GP On change =======
function filtergponchange(){
	var loadfiltgptemp=$("#filtergp").val()
	filtergpsqlparam= '"' + loadfiltgptemp.join('", "') + '"';
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlFilterLoadVillage, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
	
}

$("#filtergp").on("change", function(){
	var loadfiltgptemp=$("#filtergp").val()
	filtergpsqlparam= '"' + loadfiltgptemp.join('", "') + '"';
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlFilterLoadVillage, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
	
})

$("#loadbenffiltergp").on("change", function(){
	var loadfiltgptemp=$("#loadbenffiltergp").val()
	
	filtergpsqlparam=  '"' + loadfiltgptemp.join('", "') + '"';
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlFilterLoadVillage, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
	
})
function sqlFilterLoadVillage(sqlFilterLoadVillagetrans)
{
	var path = window.location.pathname.split("/").pop();
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	//workitem=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	filterstatus=0;
	if(surveyworkitemmappingcode!="" && survey!="")
	{
		if(path=="blsurveybeneficiarylist.html" || path=="selectsbeneficiary.html"){filterstatus="0"}
		else if(path=="bleditbeneficiary.html" && path=="editbeneficiary.html"){filterstatus="1"}
		else if(path=="surveybeneficiarylist.html"){filterstatus="4"}
		
		sqlFilterLoadVillagetrans.executeSql('SELECT DISTINCT village FROM mmpbenfi WHERE status="'+filterstatus+'" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND block IN ('+filtervillageblock+') AND grampanchayat IN ('+filtergpsqlparam+')  ORDER BY village', [], successFilterLoadVillage, errorCB);
		
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}

function successFilterLoadVillage(successFilterLoadVillagetrans, results)
{
	var elemfiltervillage=document.getElementById('filtervillage');
	var loadbenffiltervillage=document.getElementById('loadbenffiltervillage');
	elemfiltervillage.length=0;
	loadbenffiltervillage.length=0;
	for(i=0; i<results.rows.length;i++)
	{
		if(results.rows.item(i).village!="" && results.rows.item(i).village!=null)
		{
			elemfiltervillage.options[i]=new Option(results.rows.item(i).village,results.rows.item(i).villagecode);
			loadbenffiltervillage.options[i]=new Option(results.rows.item(i).village,results.rows.item(i).villagecode);
		}
	}
}

function filterApply(type)
{
	filterstatustype=type;

	var path = window.location.pathname.split("/").pop();
	if(path=="surveybeneficiarylist.html" || path=="blsurveybeneficiarylist.html")
	{
		var tempblock = $("#loadbenfblock").val();
		var tempgp = $("#loadbenffiltergp").val();
		var tempvillage = $("#loadbenffiltervillage").val();

		if(tempblock!=""){localStorage.BENF_LOAD_BLOCK= '"' + tempblock.join('", "') + '"'};
		if(tempgp!=""){localStorage.BENF_LOAD_GP= '"' + tempgp.join('", "') + '"'};
		if(tempvillage!=""){localStorage.BENF_LOAD_VILLAGE= '"' + tempvillage.join('", "') + '"'};

	}else if(path=="bleditbeneficiary.html" || path=="editbeneficiary.html")
	{
		var tempblock = $("#block").val();
		var tempgp = $("#filtergp").val();
		var tempvillage = $("#filtervillage").val();

		if(tempblock!=""){localStorage.BENF_LOAD_BLOCK= '"' + tempblock.join('", "') + '"'};
		if(tempgp!=""){localStorage.BENF_LOAD_GP= '"' + tempgp.join('", "') + '"'};
		if(tempvillage!=""){localStorage.BENF_LOAD_VILLAGE= '"' + tempvillage.join('", "') + '"'};
	}




	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlFilterApply, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
	
}


function sqlFilterApply(sqlFilterApplytrans, results)
{
	var path = window.location.pathname.split("/").pop();


	var whereconditionsvalue="";
	whereconditionskey="";
	filterquery="";
	
	var buildingtypetempval = $("#buildingtype").val();

		if(buildingtypetempval!=""){whereconditionsvalue= '"' + buildingtypetempval.join('", "') + '"'};


	
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var surveyworkitemstartdate=CryptoJS.AES.decrypt(localStorage.surveyworkitemstartdate, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	if(surveyworkitemmappingcode!="" && survey!="")
	{
		if(path=="surveybeneficiarylist.html" || path=="editbeneficiary.html")
		{
			filterquery='SELECT resondantcode, respondantname, block, grampanchayat, village, gender, housecode, hohname, relationwithhoh, occupation, dateofbirth, buildingtype, status, geom, empid, fromdate, empname, (SELECT COUNT(questioncode) FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'"  AND surveycode="'+survey+'" AND ms_mmp_benf_selected.resondantcode=surveyparentresponse.respondentcode  AND ms_mmp_benf_selected.fromdate=surveyparentresponse.surveydate) AS totalparentcount, (SELECT COUNT(questioncode) FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'"  AND surveycode="'+survey+'" AND ms_mmp_benf_selected.resondantcode=surveychildresponse.respondentcode AND ms_mmp_benf_selected.fromdate=surveychildresponse.surveydate) AS totalchildcount, (SELECT COUNT(questioncode) FROM surveyparentresponse WHERE answer !="" AND answer IS NOT NULL  AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'"  AND surveycode="'+survey+'" AND ms_mmp_benf_selected.resondantcode=surveyparentresponse.respondentcode  AND ms_mmp_benf_selected.fromdate=surveyparentresponse.surveydate) AS parentansweredcount, (SELECT COUNT(questioncode) FROM surveychildresponse WHERE answer !="" AND answer IS NOT NULL AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'"  AND surveycode="'+survey+'" AND ms_mmp_benf_selected.resondantcode=surveychildresponse.respondentcode  AND ms_mmp_benf_selected.fromdate=surveychildresponse.surveydate) AS childansweredcount FROM ms_mmp_benf_selected WHERE  fromdate ="'+surveyworkitemstartdate+'" AND status="'+filterstatustype+'" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"'	
		}else
		{
			filterquery='SELECT resondantcode, respondantname, block, grampanchayat, village, gender, hohname, relationwithhoh, occupation, buildingtype, dateofbirth, status, geom,(SELECT COUNT(questioncode) FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND mmpbenfi.resondantcode=surveyparentresponse.respondentcode) AS totalparentcount, (SELECT COUNT(questioncode) FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND mmpbenfi.resondantcode=surveychildresponse.respondentcode) AS totalchildcount, (SELECT COUNT(questioncode) FROM surveyparentresponse WHERE answer !="" AND answer IS NOT NULL  AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND mmpbenfi.resondantcode=surveyparentresponse.respondentcode) AS parentansweredcount, (SELECT COUNT(questioncode) FROM surveychildresponse WHERE answer !="" AND answer IS NOT NULL AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND mmpbenfi.resondantcode=surveychildresponse.respondentcode) AS childansweredcount FROM mmpbenfi WHERE status="'+filterstatustype+'" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"';
		}
		 
		if(typeof localStorage.BENF_LOAD_BLOCK !="undefined" && localStorage.BENF_LOAD_BLOCK !=""){filterquery+=' AND block IN ('+localStorage.BENF_LOAD_BLOCK+') '}
		if(typeof localStorage.BENF_LOAD_GP !="undefined" && localStorage.BENF_LOAD_GP !=""){filterquery+=' AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') '}
		if(typeof localStorage.BENF_LOAD_VILLAGE !="undefined" && localStorage.BENF_LOAD_VILLAGE !=""){filterquery+=' AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+')'}
	

		if($("#buildingtype").val()!="" && $("#buildingtype").val()!=null){ filterquery+=' AND buildingtype IN ('+whereconditionsvalue+')'}
		if($("#searchinput").val()!=""){filterquery+=' AND (UPPER(respondantname) LIKE "%'+$("#searchinput").val()+'%" OR UPPER(hohname) LIKE "%'+$("#searchinput").val()+'%" )'}
		
		if($("#filtermember").val()!=""){
			if($("#filtermember").val()=="ALL"){}
			else if($("#filtermember").val()=="HOH"){filterquery+=' AND Upper(relationwithhoh) ="SELF" '}
			else if($("#filtermember").val()=="NONHOH"){filterquery+=' AND Upper(relationwithhoh) != "SELF" '}
		}

		if($("#filtergender").val()!="")
		{
			if($("#filtergender").val()=="MALE"){filterquery+=' AND Upper(gender)="MALE" '}
			else if($("#filtergender").val()=="FEMALE"){filterquery+=' AND Upper(gender)="FEMALE" '}
			else if($("#filtergender").val()=="NA"){filterquery+=' AND ( gender IS NULL OR Upper(gender)="NULL" OR gender ="") '}
		}

		
		filtertrancefunction(sqlFilterApplytrans, filterquery)
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}

function filtertrancefunction(filtertrancefunctiontrans, localfilterquery){
	filtertrancefunctiontrans.executeSql(localfilterquery, [], successFilterApply, errorCB);
}

function successFilterApply(successFilterApplytrans, results)
{
	var page = window.location.pathname.split("/").pop();
	if(page=="selectsbeneficiary.html")
	{resultmsselectBeneficiarylist(successFilterApplytrans, results)}
	else if(page=="bleditbeneficiary.html")
	{resultBlEditBeneficiarylist(successFilterApplytrans, results)}
	else if(page=="blsurveybeneficiarylist.html")
	{resultBLBeneficiaryList(successFilterApplytrans, results)}
	else if(page=="editbeneficiary.html")
	{resulttMonitoringEditBeneficiarylist(successFilterApplytrans, results)}
	else if(page=="surveybeneficiarylist.html")
	{resultMonitoringselectedBenef(successFilterApplytrans, results)}
}
// ============ *** FILTER ENDS ***============


// ============ *** SEARCH BEGIN ***============

function searchbenf(type){
	filterstatustype=type;
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlSearchBenf, errorCB, pageloadedsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
	
}

function sqlSearchBenf(sqlSearchBenftrans)
{
	searchquery="";
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	surveyworkitemstartdate=CryptoJS.AES.decrypt(localStorage.surveyworkitemstartdate, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	var path = window.location.pathname.split("/").pop();

	if(surveyworkitemmappingcode !="" && survey !="")
	{
		if(path=="surveybeneficiarylist.html" || path=="editbeneficiary.html")
		{
			searchquery='SELECT * FROM ms_mmp_benf_selected WHERE fromdate ="'+surveyworkitemstartdate+'" AND status="'+filterstatustype+'" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"  AND  block IN ('+localStorage.BENF_LOAD_BLOCK+') AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+')'
		}else{
			searchquery='SELECT resondantcode, respondantname, block, grampanchayat, village, gender, hohname, relationwithhoh, occupation, dateofbirth, status, geom FROM mmpbenfi WHERE status="'+filterstatustype+'" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND  block IN ('+localStorage.BENF_LOAD_BLOCK+') AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+')'
		}

		if($("#searchinput").val()!=""){searchquery+='AND (UPPER(respondantname) LIKE "%'+$("#searchinput").val()+'%" OR UPPER(hohname) LIKE "%'+$("#searchinput").val()+'%" )'}
		sqlSearchBenftrans.executeSql(searchquery, [], successFilterApply, errorCB);
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}


// ============ *** SEARCH ENDS ***============





// ============ *** Download village data Begin*** ========
benfdownlocation={};
function loadlocations()
{
	benfdownlocation={};
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(sqlloadlocations, errorCB);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}

function sqlloadlocations(sqlloadlocationstrans)
{
	workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	sqlloadlocationstrans.executeSql("SELECT workitemscode, locationcode, locationname, locationtype FROM locations WHERE workitemscode=?",[workitemcode], function loadbendataserverdata(tranx, locationsres)
	{
		for(locationloop=0; locationloop<locationsres.rows.length; locationloop++){benfdownlocation[locationloop]=locationsres.rows.item(locationloop); }
	})
}


function insertorupdatebendata()
{
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				//db.transaction(sqlinsertorupdatebendata, errorCB,monitoringbensownloadsuccess);
				db.transaction(sqlinsertorupdatebendata, errorCB, function(trans){if(gislastdate=="" || gislastdate==null){loadgisdata();}else{monitoringbensownloadsuccess()}});
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}
//pageloadedsuccess
function sqlinsertorupdatebendata(sqlinsertorupdatebendatatrans)
{
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	// alert(JSON.stringify(loadbendata));
	var benedata=loadbendata.survey_bene;
	buildinggeomsetlist=loadbendata.buildinggeom[0];
	var path = window.location.pathname.split("/").pop();
	
	// alert(benedata.length);

	if(path=="baselineworkiteminfo.html")
	{
		for(survey_beneloop=0; survey_beneloop<benedata.length; survey_beneloop++)
		{
			survey_beneset=benedata[survey_beneloop];
			sqlinsertorupdatebendatatrans.executeSql('INSERT INTO mmpbenfimis (surveyworkitemmappingcode, surveycode,resondantcode,respondantname,gender,hohname,relationwithhoh,occupation,dateofbirth,block,grampanchayat,village, buildingcode, housecode,  buildingtype, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [surveyworkitemmappingcode, survey, survey_beneset.resondantcode, survey_beneset.respondantname, survey_beneset.gender, survey_beneset.hohname, survey_beneset.relationwithhoh, survey_beneset.occupation, survey_beneset.dateofbirth, survey_beneset.blockname,survey_beneset.gpname, survey_beneset.village, survey_beneset.buildingcode,survey_beneset.housecode, survey_beneset.buildingtype,  "0"]);
		}

		newben=loadbendata.newsurvey_bene;
		newbenlen=newbenlen;
		for(newbenloop=0; newbenloop<newbenlen; newbenloop++)
		{
			newbenunit=newben[newbenloop]
			sqlinsertorupdatebendatatrans.executeSql('INSERT INTO mmpbenfimis (surveyworkitemmappingcode, surveycode,resondantcode,respondantname,gender,hohname,relationwithhoh,occupation,dateofbirth,block,grampanchayat,village, buildingcode, housecode,  buildingtype, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [surveyworkitemmappingcode, survey, newbenunit.resondantcode, newbenunit.respondantname, newbenunit.gender, newbenunit.hohname, newbenunit.relationwithhoh, newbenunit.occupation, newbenunit.dateofbirth, newbenunit.blockname, newbenunit.gpname, newbenunit.village, newbenunit.buildingcode, newbenunit.housecode, newbenunit.buildingtype,  "0"]);
		}

	}else if(path=="monitoringworkiteminfo.html"){
		var monitoringsurveyfreqlen=monitoringsurveyfreq.length;
		var updatetime=(new Date()).toISOString();
		// alert("benedatalen ---------------   "+benedata.length);
		for(benlen=0; benlen<benedata.length; benlen++)
		{
			survey_beneset=benedata[benlen];
			sqlinsertorupdatebendatatrans.executeSql('INSERT INTO mmpbenfimis (surveyworkitemmappingcode, surveycode, resondantcode, respondantname, gender, hohname, relationwithhoh, occupation, dateofbirth, block, grampanchayat, village, buildingcode, housecode,  buildingtype, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [surveyworkitemmappingcode, survey, survey_beneset.resondantcode, survey_beneset.respondantname, survey_beneset.gender, survey_beneset.hohname, survey_beneset.relationwithhoh, survey_beneset.occupation, survey_beneset.dateofbirth, survey_beneset.blockname,survey_beneset.gpname, survey_beneset.village,survey_beneset.buildingcode,survey_beneset.housecode, survey_beneset.buildingtype, "0"]);
						
		}

		var newben=loadbendata.newsurvey_bene;
		var newbenlen=newbenlen;
		// alert("newbenlen ---------------   "+newbenlen);
		for(newbenloop=0; newbenloop<newbenlen; newbenloop++)
		{
			newbenunit=newben[newbenloop]
			sqlinsertorupdatebendatatrans.executeSql('INSERT INTO mmpbenfimis (surveyworkitemmappingcode, surveycode, resondantcode, respondantname, gender, hohname, relationwithhoh, occupation, dateofbirth, block, grampanchayat, village, buildingcode, housecode,  buildingtype, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [surveyworkitemmappingcode, survey, newbenunit.resondantcode, newbenunit.respondantname, newbenunit.gender, newbenunit.hohname, newbenunit.relationwithhoh, newbenunit.occupation, newbenunit.dateofbirth, newbenunit.blockname, newbenunit.gpname, newbenunit.village, newbenunit.buildingcode, newbenunit.housecode, newbenunit.buildingtype, "0"]);
		}
	}

	var modifiedsurvey_bene=loadbendata.modifiedsurvey_bene;
	var modifiedsurvey_benelen= modifiedsurvey_bene.length;
	// alert("fghfghfg------ "+modifiedsurvey_benelen);
	for(modifiedsurvey_beneloop=0; modifiedsurvey_beneloop<modifiedsurvey_benelen; modifiedsurvey_beneloop++)
	{
		modifiedsurvey_beneunit=loadbendata.modifiedsurvey_bene;
		sqlinsertorupdatebendatatrans.executeSql('Update mmpbenfimis SET respondantname=?, gender=?, hohname=?, relationwithhoh=?, occupation=?, dateofbirth=?, block=?, grampanchayat=?, village=?, buildingcode=?, housecode=?,  buildingtype=? WHERE resondantcode=? AND surveyworkitemmappingcode=?', [modifiedsurvey_beneunit.respondantname, modifiedsurvey_beneunit.gender, modifiedsurvey_beneunit.hohname, modifiedsurvey_beneunit.relationwithhoh, modifiedsurvey_beneunit.occupation, modifiedsurvey_beneunit.dateofbirth, modifiedsurvey_beneunit.blockname, modifiedsurvey_beneunit.gpname, modifiedsurvey_beneunit.village, modifiedsurvey_beneunit.buildingcode, modifiedsurvey_beneunit.housecode, modifiedsurvey_beneunit.buildingtype, modifiedsurvey_beneunit.resondantcode, surveyworkitemmappingcode]);
	}
	

	timestamp=new Date().toISOString();
	// lastsynced=loadbendata.lastsynced;
	if(lastsynced!="")
	{
			sqlinsertorupdatebendatatrans.executeSql('DELETE FROM syncdates WHERE surveyworkitemmapping=? AND service=?', [surveyworkitemmappingcode, "benficiarydownloadsavemis"]);
			sqlinsertorupdatebendatatrans.executeSql('INSERT INTO syncdates (service, surveyworkitemmapping, servertime, localtime, remark) VALUES (?,?,?,?,?)', ["benficiarydownloadsavemis", surveyworkitemmappingcode, lastsynced, timestamp, ""]);
	}
}


function pageloadedsuccessbenf()
{
	SpinnerDialog.hide();
	setTimeout(function(){window.location.reload();}, 60);
}

function monitoringbensownloadsuccess()
{

	navigator.notification.alert("MIS and GIS data loaded Successfully", function()
	{
		var path = window.location.pathname.split("/").pop();
		if(path=="monitoringworkiteminfo.html")
		{ 
			SpinnerDialog.hide();
			window.location.reload();
		}
		else if(path=="baselineworkiteminfo.html"){
			SpinnerDialog.hide();
			window.location.reload();
		}
	}, 'Samuday 360','Done');
	
}
// ============ *** Download village data END*** ========




// ============ *** Upload Parent and Child Responces Begin*** ========
var workitemdetailtoserver="";

function loadlocalresponces()
{
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(loadlocalresponcessql, errorCB);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}
//pageloadedsuccess

var woeitemdatesarray = JSON.parse('{"items":[]}');
var mmpcode="";
function loadlocalresponcessql(loadlocalresponcessqltrans)
{
	workitemdetailtoserver={};
	parentresponse={};
	childresponse={};

	woeitemdatesarray = JSON.parse('{"items":[]}');

	loadlocalresponcessqltrans.executeSql("SELECT * FROM surveyparentresponse",[], function(surveyparentresponsetrans, parentresult){for(parentloop=0; parentloop<parentresult.rows.length; parentloop++){parentresponse[parentloop]=parentresult.rows.item(parentloop); }},errorCB);
	loadlocalresponcessqltrans.executeSql("SELECT * FROM surveychildresponse",[], function(surveychildresponsetrans, childresult){for(childloop=0; childloop<childresult.rows.length; childloop++){childresponse[parentloop]=childresult.rows.item(parentloop); } },errorCB);
	loadlocalresponcessqltrans.executeSql("SELECT workitemcode, surveyworkitemmappingcode FROM workitems",[], function(workitemstrans, workitemdetails){
	//workitemdetailtoserver=workitemdetails.rows;

	for(workitemsloop=0; workitemsloop<workitemdetails.rows.length; workitemsloop++)
	{
			workitemdetailtoserver[workitemsloop]=workitemdetails.rows.item(workitemsloop);
			mmpcode=workitemdetails.rows.item(workitemsloop).surveyworkitemmappingcode;
			
			loadlocalresponcessqltrans.executeSql("SELECT surveyworkitemmappingcode, surveycode, fromsurveydate, tosurveydate FROM monitoringsurveydates WHERE surveyworkitemmappingcode=?",[mmpcode], function(monitoringsurveydatestrans, workitemdates){
			
			if(workitemdates.rows.length>0)
			{
				workitemdatesarray=[];
				for(wdloop=0; wdloop<workitemdates.rows.length; wdloop++){workitemdatesarray.push(workitemdates.rows.item(wdloop))}

				woeitemdatesarray['items'].push({"swmp":workitemdates.rows.item(0).surveyworkitemmappingcode , "dates":workitemdatesarray})
				//alert(JSON.stringify(woeitemdatesarray));
			}

			},errorCB);
		}

	},errorCB);

	
	selectedbenfresponse={};
	// ======= Offline (Select upload selected ben) ====
	loadlocalresponcessqltrans.executeSql("SELECT * FROM mmpbenfi  WHERE status='4'",[], function(mmpbenfitrans, selectedbenfresult){
		for(selectedbenloop=0; selectedbenloop<selectedbenfresult.rows.length; selectedbenloop++){ selectedbenfresponse[selectedbenloop]= selectedbenfresult.rows.item(selectedbenloop) }
	},errorCB);
	// ======= Offline (Select upload selected ben) ====
	setTimeout(function(){uploadsurveyresponses()},5000);
}


//========= Selected Beneneficiaries ========

function removeselectedmonitbene()
{
	setTimeout(function(){

		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(removeselectedmonitbenesql, errorCB);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}

function removeselectedmonitbenesql(removeselectedmonitbenesqltrans)
{
	removeselectedmonitbenesqltrans.executeSql('DROP TABLE IF EXISTS mmp_ms_benf');
	removeselectedmonitbenesqltrans.executeSql('CREATE TABLE IF NOT EXISTS mmp_ms_benf (surveyworkitemmappingcode, surveycode, respondantcode, fromdate, todate, status, updatedon, empid, empname)');
	var updatetime=(new Date()).toISOString();
	var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1)

	
	for(benfloop=0; benfloop<selectedbenlist.length; benfloop++)
	{
		for(itemsloop=0; itemsloop<woeitemdatesarray.items.length; itemsloop++)
		{
			if(selectedbenlist[benfloop].mappingcode==woeitemdatesarray.items[itemsloop].swmp)
			{ 
				removeselectedmonitbenesqltrans.executeSql('UPDATE mmpbenfimis SET status="0", empid=?, updatedon=? WHERE surveyworkitemmappingcode=?  AND resondantcode=?', [updatetime, selectedbenlist[benfloop].empid, selectedbenlist[benfloop].mappingcode, selectedbenlist[benfloop].respondentcode]);
				for(datesloop=0; datesloop<woeitemdatesarray.items[itemsloop].dates.length; datesloop++)
				{
					removeselectedmonitbenesqltrans.executeSql('INSERT INTO mmp_ms_benf (surveyworkitemmappingcode, surveycode, respondantcode, fromdate, todate, status, empid) VALUES (?, ?, ?, ?, ?, ?, ?)',  [selectedbenlist[benfloop].mappingcode, woeitemdatesarray.items[itemsloop].dates[datesloop].surveycode, selectedbenlist[benfloop].respondentcode, woeitemdatesarray.items[itemsloop].dates[datesloop].fromsurveydate, woeitemdatesarray.items[itemsloop].dates[datesloop].tosurveydate, "0", woeitemdatesarray.items[itemsloop].dates[datesloop].empid]);
				}
			}
		}
	}
	
	timestamp=new Date().toISOString();
	if(lastsynced!="")
	{
		removeselectedmonitbenesqltrans.executeSql('UPDATE syncdates SET servertime=?, localtime=? WHERE service=?', [lastsynced, timestamp, "sdnew"]);
	}
}

// ============ *** Upload Parent and Child Responces End*** ========



// ============ *** Downloadload Parent and Child Responces Begin*** ========
var downloadresponsedata=[];

function downloadlocalresponces()
{
	setTimeout(function(){

		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				////SpinnerDialog.show("Samuday 360", "Loading...", true);
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(downloadlocalresponcessql, errorCB);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}
//pageloadedsuccess
function downloadlocalresponcessql(downloadlocalresponcessqltrans)
{
	var monitoringsurveydate=[];
	var workitems=[];
	downloadresponsedata=[];
	downloadlocalresponcessqltrans.executeSql('UPDATE mmp_ms_benf  SET status="3" WHERE status="2" ');
	downloadlocalresponcessqltrans.executeSql('UPDATE mmpbenfimis SET status="3" WHERE status="2" ');
	
	downloadlocalresponcessqltrans.executeSql("SELECT surveyworkitemmappingcode as surveyworkitemmappingcode, fromsurveydate as surveydate FROM monitoringsurveydates",[], function(monitoringsurveydatestrans, surveydatesresult){
		for(loop=0; loop<surveydatesresult.rows.length; loop++){monitoringsurveydate.push(surveydatesresult.rows.item(loop))}

		//monitoringsurveydate=surveydatesresult.rows;

	},errorCB);

	downloadlocalresponcessqltrans.executeSql("SELECT workitemcode, surveyworkitemmappingcode, (SELECT type FROM survey WHERE survey.surveycode=workitems.surveycode) as type  FROM workitems ORDER BY surveyworkitemmappingcode",[], function(workitemstrans, surveydatesresult)
			{
				workitems=surveydatesresult.rows;
				for(var workitemsloop=0; workitemsloop<surveydatesresult.rows.length; workitemsloop++)
				{
					var freq=[];
					if(surveydatesresult.rows.item(workitemsloop).type=='MS')
					{
						for(var monitoringsurveydateloop=0; monitoringsurveydateloop<monitoringsurveydate.length; monitoringsurveydateloop++)
						{if(monitoringsurveydate[monitoringsurveydateloop].surveyworkitemmappingcode==surveydatesresult.rows.item(workitemsloop).surveyworkitemmappingcode)freq.push(monitoringsurveydate[monitoringsurveydateloop]);}
					}
					else{
						freq='{ "surveyworkitemmappingcode": "", "surveydate": ""}'
					}
					var data={workitemcode:surveydatesresult.rows.item(workitemsloop).workitemcode, surveyworkitemmappingcode:surveydatesresult.rows.item(workitemsloop).surveyworkitemmappingcode, type:surveydatesresult.rows.item(workitemsloop).type, frequency:freq}
					downloadresponsedata.push(data);
				}
			},errorCB);
	
	setTimeout(function(){downloadsurveyresponses()},2000);
}


// ============ *** Downloadload Parent and Child Responces END *** ========



// ============ *** Update Server Parent and Child Responces Begin*** ========
updateserverresponces="";

function updateserverresponcesfrom360()
{
	setTimeout(function(){
			rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(updateserverresponcessql, errorCB,addsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}
//pageloadedsuccess
function updateserverresponcessql(updateserverresponcessqltrans)
{
	
	updateserverresponcessqltrans.executeSql('DELETE FROM surveyparentresponse');
	updateserverresponcessqltrans.executeSql('DELETE FROM surveychildresponse');
	timestamp=new Date().toISOString();

	var resultlength=updateserverresponces.length;
	for(loop=0; loop<resultlength; loop++)
	{
		
		var surveyworkitemmappingcode=updateserverresponces[loop].surveyworkitemmappingcode;
		var workitemcode=updateserverresponces[loop].workitemcode;
		var surveycode=updateserverresponces[loop].surveycode;
		var surveytype=updateserverresponces[loop].type
		var bene_status=updateserverresponces[loop].bene_status;
		var parent=updateserverresponces[loop].parent;
		var child=updateserverresponces[loop].child;
		var status=updateserverresponces[loop].status;
		var bene_status=updateserverresponces[loop].bene_status
		
		if(bene_status.length>0)
		{
			if(surveytype=='BS')
			{
				for(bene_status_loop=0; bene_status_loop<bene_status.length; bene_status_loop++)
				{
					
					var temp_ben_status=bene_status[bene_status_loop].status;
					if(temp_ben_status=="2") {temp_ben_status="3"}
					updateserverresponcessqltrans.executeSql('UPDATE mmpbenfimis SET status=?, empid=?, empname=? WHERE surveyworkitemmappingcode=? AND resondantcode=?',[temp_ben_status, bene_status[bene_status_loop].surveydoneby, bene_status[bene_status_loop].empname, bene_status[bene_status_loop].surveyworkitemmappingcode, bene_status[bene_status_loop].respondantcode])
				}
			}
			else if(surveytype=='MS')
			{
				temppcc=0;
				//mmp_ms_benf
				for(bene_status_loop=0; bene_status_loop<bene_status.length; bene_status_loop++)
				{
					
					//alert(JSON.stringify(bene_status[bene_status_loop]));
					var temp_ben_status=bene_status[bene_status_loop].status;
					var temp_mmpbenfi_status=bene_status[bene_status_loop].status;
					if(temp_ben_status=="2"){temp_ben_status="3"; temp_mmpbenfi_status="3"}
					else if(temp_ben_status=="0"){temp_mmpbenfi_status="4"}
					updateserverresponcessqltrans.executeSql('UPDATE mmpbenfimis SET status=?, empid=?, empname=? WHERE surveyworkitemmappingcode=? AND resondantcode=?', [temp_mmpbenfi_status, bene_status[bene_status_loop].surveydoneby, bene_status[bene_status_loop].empname, bene_status[bene_status_loop].surveyworkitemmappingcode, bene_status[bene_status_loop].respondantcode])
					updateserverresponcessqltrans.executeSql('UPDATE mmp_ms_benf SET status=?, empid=?, empname=? WHERE surveyworkitemmappingcode=? AND respondantcode=? AND fromdate=?', [temp_ben_status, bene_status[bene_status_loop].surveydoneby, bene_status[bene_status_loop].empname, bene_status[bene_status_loop].surveyworkitemmappingcode, bene_status[bene_status_loop].respondantcode, bene_status[bene_status_loop].surveydate])
					
				}
				
			}
		}

		//===== **** Parent **** ======
		if(parent.length>0)
		{
			for(parent_loop=0; parent_loop<parent.length; parent_loop++)
			{
				updateserverresponcessqltrans.executeSql('INSERT INTO surveyparentresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, empid, UploadedFrom) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [parent[parent_loop].surveyworkitemmappingcode, parent[parent_loop].respondantcode, parent[parent_loop].parentquestioncode, parent[parent_loop].questioncode, parent[parent_loop].sectioncode, parent[parent_loop].answer, parent[parent_loop].planneddate, parent[parent_loop].status, parent[parent_loop].createdon, parent[parent_loop].surveydoneby, parent[parent_loop].UploadedFrom]);
			}
		}

		//===== **** Parent **** ======
		if(child.length>0)
		{
			for(child_loop=0; child_loop<child.length; child_loop++)
			{
				updateserverresponcessqltrans.executeSql('INSERT INTO surveyparentresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, empid, UploadedFrom) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [child[child_loop].surveyworkitemmappingcode, child[child_loop].respondantcode, child[child_loop].childquestioncode, child[child_loop].questioncode, child[child_loop].sectioncode, child[child_loop].answer, child[child_loop].planneddate, child[child_loop].status, child[child_loop].createdon, child[child_loop].surveydoneby, parent[parent_loop].UploadedFrom]);
			}
		}
		if(status.length>0)
		{
			if(surveytype=='MS')
			{
				for(status_loop=0; status_loop<status.length; status_loop++)
				{
					var tempdate=status[status_loop].fromdate.slice(0,10);
					updateserverresponcessqltrans.executeSql('UPDATE workitemsserverstatus SET open=?,  saved=?, synced=? WHERE workitemmmpcode=? AND fromdate=?', [status[status_loop].open, status[status_loop].saved, status[status_loop].synced, workitemcode, tempdate]);
				}
			}
			else if(surveytype=='BS'){
				for(status_loop=0; status_loop<status.length; status_loop++)
				{
					updateserverresponcessqltrans.executeSql('UPDATE workitemsserverstatus SET open=?,  saved=?, synced=? WHERE workitemmmpcode=?', [status[status_loop].open, status[status_loop].saved, status[status_loop].synced, workitemcode]);
				}
			}
		}
	}

	if(lastsynced!="")
	{
		updateserverresponcessqltrans.executeSql('UPDATE syncdates SET servertime=?, localtime=? WHERE service=?', [lastsynced, timestamp, "updatebeneficiarynew"]);
	}
}

// ============ *** Update Server Parent and Child Responces END *** ========

 function monirotingsuccess(){ setTimeout(function(){
 	SpinnerDialog.hide(); 
 	//userSync();
 }, 1000);}


function monitoringbenselectedben()
{
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(monitoringbenselectedbensql, errorCB, monirotingsuccess);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});			
	}, 60);
}

function monitoringbenselectedbensql(monitoringbenselectedbensqltrans)
{
	if(loadstatusbendata.length>0)
	{
		var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		var survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		var workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1)

		monitoringbenselectedbensqltrans.executeSql("SELECT surveyworkitemmappingcode as surveyworkitemmappingcode, fromsurveydate as surveydate, tosurveydate as enddate FROM monitoringsurveydates WHERE surveyworkitemmappingcode=? AND surveycode =? GROUP BY surveyworkitemmappingcode",[surveyworkitemmappingcode, survey], function(monitoringsurveydatestrans, dates)
		{
			var updatetime=(new Date()).toISOString();
			for(dateloop=0; dateloop<dates.rows.length; dateloop++)
			{
				for(bene_status_loop=0; bene_status_loop<loadstatusbendata.length; bene_status_loop++)
				{
					monitoringbenselectedbensqltrans.executeSql('INSERT INTO mmp_ms_benf (surveyworkitemmappingcode, surveycode, respondantcode, fromdate, todate, status, empid) VALUES (?, ?, ?, ?, ?, ?, ?)', [loadstatusbendata[bene_status_loop].surveyworkitemmappingcode, survey, loadstatusbendata[bene_status_loop].respondantcode, dates.rows.item(dateloop).surveydate, dates.rows.item(dateloop).enddate, "0", empidlocal]);
					monitoringbenselectedbensqltrans.executeSql('UPDATE mmpbenfimis SET status="4", empid=?, updatedon=? WHERE surveyworkitemmappingcode=? AND surveycode=? AND resondantcode=?', [empidlocal, updatetime, loadstatusbendata[bene_status_loop].surveyworkitemmappingcode, survey, loadstatusbendata[bene_status_loop].respondantcode]);
				}
			}

		},errorCB);
	}
} 


downlocation=[];

function fetchdownloadlocations()
{
	downlocation=[];
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				//db.transaction(sqlinsertorupdatebendata, errorCB,monitoringbensownloadsuccess);
				db.transaction(fetchdownloadlocationssql, errorCB);
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);
}

function fetchdownloadlocationssql(fetchlocations)
{

	var workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	fetchlocations.executeSql("SELECT locationcode, locationname, locationtype FROM locations WHERE workitemscode=?", [workitemcode], function(fetchlocationss, results){
		for(loop=0; loop<results.rows.length; loop++){downlocation.push(results.rows.item(loop))}
	});
}

function insertorupdategisbendata()
{
	setTimeout(function(){
			rootdetection.isDeviceRooted(function (result) {
			if(result==0)
			{
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(insertorupdategisbendatasql, errorCB, monitoringbensownloadsuccess);
				
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);	
}

function insertorupdategisbendatasql(gistx)
{
	var workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	var sh_roads_arr=loadbengisdata.sh_roads_arr;
	var gp_roads_arr=loadbengisdata.sh_roads_arr;
	var roadarray_vill=loadbengisdata.roadarray_vill;
	var roadarray_villBOUNDRIES=loadbengisdata.roadarray_villBOUNDRIES;
	var buildingtypegeom=loadbengisdata.buildingtypegeom;
	var buildinggeom=loadbengisdata.buildinggeom;
	// alert(loadbengisdata.buildinggeom);
	// alert(JSON.stringify(loadbengisdata.buildinggeom[0]));

	var sh_roads_arrlen=sh_roads_arr.length;
	var gp_roads_arrlen=gp_roads_arr.length;
	var loadbendataroadarray_villlen=roadarray_vill.length
	var villboundrieslen=roadarray_villBOUNDRIES.length;
	var landmarklen=loadbendata.buildingtypegeom.length;
	var buildinggeomlen=buildinggeom.length;
	// alert(buildinggeomlen);

	if(sh_roads_arrlen>0)
	{
		for(sh_roadsloop=0; sh_roadsloop<sh_roads_arrlen; sh_roadsloop++)
		{gistx.executeSql('INSERT INTO shroads(roadcode, geom) VALUES (?,?)',  [sh_roads_arr[sh_roadsloop].sh_code, sh_roads_arr[sh_roadsloop].st_astext]);}
	}

	if(gp_roads_arrlen>0)
	{
		for(gp_roadsloop=0; gp_roadsloop<gp_roads_arrlen; gp_roadsloop++)
		{gistx.executeSql('INSERT INTO gproads(roadcode, geom) VALUES (?,?)', [gp_roads_arr[gp_roadsloop].gpr_code, gp_roads_arr[gp_roadsloop].st_astext]);}
	}

	if(loadbendataroadarray_villlen>0)
	{
		for(villroadloop=0; villroadloop<loadbendataroadarray_villlen; villroadloop++)
		{
			villroadset=roadarray_vill[villroadloop]
			gistx.executeSql('INSERT INTO villageroads(roadcode, geom) VALUES (?,?)', [villroadset.road_code, villroadset.st_astext]);
		}
	}

	if(villboundrieslen>0)
	{
		for(villboundriesloop=0; villboundriesloop<villboundrieslen; villboundriesloop++)
		{
			villboundryset=roadarray_villBOUNDRIES[villboundriesloop]
			gistx.executeSql('INSERT INTO villageboundries(workitemscode, roadcode, villagename, geom) VALUES (?,?,?,?)', [workitemcode, villboundryset.road_code, villboundryset.villagename, villboundryset.st_astext]);
		}
	}

	if(landmarklen>0)
	{
		for(landmarkloop=0; landmarkloop<landmarklen; landmarkloop++)
		{
			landmarkset=buildingtypegeom[landmarkloop]
			gistx.executeSql('INSERT INTO landmarks(workitemscode, type, geom) VALUES (?,?,?)', [workitemcode, landmarkset.type, landmarkset.geom]);
		}
	}

	if(buildinggeomlen>0)
	{
		for(buildinggeomloop=0; buildinggeomloop<buildinggeomlen; buildinggeomloop++)
		{
			buildinggeomtemp=buildinggeom[buildinggeomloop];
			gistx.executeSql('INSERT INTO mmpbenfigis (gissurveyworkitemmappingcode, gisbuildingcode, geom, gisstatus) VALUES (?,?,?,?)', [surveyworkitemmappingcode, buildinggeomtemp.buildingcode, buildinggeomtemp.geom, "1"]);
		}
	}

	timestamp=new Date().toISOString();

	gistx.executeSql('DELETE FROM syncdates WHERE surveyworkitemmapping=? AND service=?', [surveyworkitemmappingcode, "loadgis"]);
	gistx.executeSql('INSERT INTO syncdates (service, surveyworkitemmapping, servertime, localtime, remark) VALUES (?,?,?,?,?)', ["loadgis", surveyworkitemmappingcode, lastsynced, timestamp, ""]);

}

mislastdate=""
gislastdate=""

//============== Load last synced time =========================
function getdownloadbentime()
{
	mislastdate="";
	gislastdate="";
	
	setTimeout(function(){
		rootdetection.isDeviceRooted(function (result)
		{
			if(result==0)
			{
				// var db = window.openDatabase("Database", "1.0", "samuday360android", 2000000);
				var db =window.sqlitePlugin.openDatabase({ name: 'samuday360android.db', location: 'default', androidDatabaseProvider: 'system' });
				db.transaction(getdownloadbentimesql, errorCB, downloaddata);
				
			}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
		}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
	}, 60);	
}

function getdownloadbentimesql(gettime)
{
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	gettime.executeSql("SELECT service, servertime FROM syncdates WHERE surveyworkitemmapping=?", [surveyworkitemmappingcode], function(getlasttime, lastresult){
		for(timeloop=0; timeloop<lastresult.rows.length; timeloop++)
		{
			if(lastresult.rows.item(timeloop).service=="benficiarydownloadsavemis"){
				mislastdate=lastresult.rows.item(timeloop).servertime;
			}else if(lastresult.rows.item(timeloop).service=="loadgis"){
				gislastdate=lastresult.rows.item(timeloop).servertime;
			}
		}
	})	
}
