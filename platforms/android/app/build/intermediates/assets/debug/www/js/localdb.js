monitoringsurveyfreq=[];
// ============= layer styles ==================



//-- Label Text in style----
//text: new ol.style.Text({ text:feature.get('respondentcode')})
// textAlign: 'center',
// textBaseline: 'middle',
//font: '12px Verdana',




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
		SpinnerDialog.show("Samuday 360", "Syncing...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
    	db.transaction(sqlsyncdate, errorCB, syncLoad);
	}, 60);
}

	
function sqlsyncdate(tx)
{
	tx.executeSql('CREATE TABLE IF NOT EXISTS syncdates (remark, uploadservertime, uploadlocaltime, downloadservertime, downloadlocaltime)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS workitems (workitemcode,  workitemname, workitemdesc, workitemtype, parentworkitemcode, planstartdate, planenddate, actualstartdate, primaryowner, percentagecompleted, displayorder, surveyworkitemmappingcode, target, createdby, surveycode, frequncy)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS monitoringsurveydates (surveyworkitemmappingcode, surveycode, startdate, enddate, frequency, fromsurveydate, tosurveydate, status, createddate)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS locations (workitemscode, locationcode, locationname, locationtype)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS survey (workitemscode, surveycode, surveyname, surveydesc, sectorcode, questionsetcode, createdby, createdon, type, frequency, startdate, enddate, programcode, interventioncode)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS mmpbenfi (surveyworkitemmappingcode, surveycode,resondantcode,respondantname,gender,hohname,relationwithhoh,occupation,dateofbirth,block,grampanchayat,village, buildingcode, housecode,  buildingtype, geom, surveydate, updatedon, empid, status)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS mmp_ms_benf (surveyworkitemmappingcode, surveycode, respondantcode, fromdate, todate, status, updatedon, empid)');
	tx.executeSql('CREATE VIEW IF NOT EXISTS ms_mmp_benf_selected AS SELECT mmpbenfi.surveyworkitemmappingcode, mmpbenfi.surveycode, mmpbenfi.resondantcode, mmp_ms_benf.empid, mmpbenfi.respondantname, mmpbenfi.gender, mmpbenfi.hohname, mmpbenfi.relationwithhoh, mmpbenfi.occupation, mmpbenfi.dateofbirth, mmpbenfi.block, mmpbenfi.grampanchayat, mmpbenfi.village, mmpbenfi.buildingcode, mmpbenfi.housecode,  mmpbenfi.buildingtype, mmpbenfi.geom, mmp_ms_benf.fromdate, mmp_ms_benf.todate, mmp_ms_benf.status FROM mmp_ms_benf LEFT JOIN mmpbenfi ON mmp_ms_benf.respondantcode=mmpbenfi.resondantcode AND mmp_ms_benf.surveyworkitemmappingcode=mmpbenfi.surveyworkitemmappingcode AND mmp_ms_benf.surveycode=mmpbenfi.surveycode');
	tx.executeSql('CREATE TABLE IF NOT EXISTS questiontypes (questiontypecode, questiontype)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS questions (workitemscode, surveycode, sectioncode, sectiondisplayorder INTEGER, questiondisplayorder INTEGER,  questioncode, questiontext, sectionname, validationtypecode, questiontypecode, questiontype, haschildquestion, parentquestion, conditionvalue, controltype, questionlevel, hasoptions, optionid, childquestionconditionid, helptext, frequencyofquestions, numberoftimes, frequencystartdate, sectorcode, programcode, interventioncode, categoryid, suggestivetext)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS questionoptions (workitemscode, surveycode, questioncode, displaytext, displayvalue, displayorder INTEGER)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS surveyparentresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, syncedon, empid)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS surveychildresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, syncedon, empid)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS validations (workitemscode, surveycode, validationtypecode, questioncode, validationtypename, allowedvalues, violationmessage)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS workitemsserverstatus(workitemmmpcode, target, fromdate, open, saved, submitted, synced)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS shroads(roadcode, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS gproads(roadcode, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS villageroads(roadcode, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS villageboundries(workitemscode,roadcode, villagename, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS landmarks(workitemscode, type, geom)');
	//tx.executeSql('ALTER TABLE mmpbenfi ADD updatedon');
	// var updatedon=new Date().toISOString();	
	// tx.executeSql('UPDATE mmpbenfi SET updatedon="'+updatedon+'"');
	//console.log('SELECT uploadservertime, uploadlocaltime, downloadservertime, downloadlocaltime FROM syncdates');
	tx.executeSql('SELECT uploadservertime, uploadlocaltime, downloadservertime, downloadlocaltime FROM syncdates',[], function(tx, results){if(results.rows.length>0){
		uploadservertime=results.rows[0].uploadservertime;
		uploadlocaltime=results.rows[0].uploadlocaltime;
		downloadservertime=results.rows[0].downloadservertime;
		downloadlocaltime=results.rows[0].downloadlocaltime;
	}else{tx.executeSql('INSERT INTO syncdates (remark) VALUES ("row")');}});
	//SpinnerDialog.hide();
}



function syncUpload()
{
	var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
    db.transaction(sqlsyncUpload, errorCB, uploadsurveyresponsesavedSuccessfully);		
}
function uploadsurveyresponsesavedSuccessfully(tx, results)
{
	uploadsurveyresponses(tx)
}
function preparentdata1(tx, results){parentresponse=results.rows;}
function prechilddata1(tx, results){childresponse=results.rows;}
function uploadmonitoringbenf(tx, results){selectedmonitoringbenflist=results.rows;}
function sqlsyncUpload(tx)
{
	//uploadservertime
	uploadlocaltime=(new Date()).toISOString();
	// console.log(uploadlocaltime);
	// tx.executeSql('CREATE TABLE IF NOT EXISTS syncdates (uploadservertime, uploadlocaltime, downloadservertime, downloadlocaltime)');

	if(uploadlocaltime=="")
	{
		tx.executeSql('SELECT surveyworkitemmappingcode, surveycode, resondantcode, housecode, hohname FROM mmpbenfi WHERE status="4"', [], uploadmonitoringbenf, errorCB);
		tx.executeSql('SELECT * FROM surveyparentresponse WHERE status="2"', [], preparentdata1, errorCB);
		tx.executeSql('SELECT * FROM surveychildresponse WHERE status="2"', [], prechilddata1, errorCB);
	}
	else{
		tx.executeSql('SELECT surveyworkitemmappingcode, surveycode, resondantcode, housecode, hohname FROM mmpbenfi WHERE  Datetime(updatedon) <= Datetime("'+uploadlocaltime+'") AND status IN ("4","2")', [], uploadmonitoringbenf, errorCB);
		tx.executeSql('SELECT * FROM surveyparentresponse WHERE  Datetime(createdon) <= Datetime("'+uploadlocaltime+'") AND status="2"', [], preparentdata1, errorCB);
		tx.executeSql('SELECT * FROM surveychildresponse WHERE  Datetime(createdon) <= Datetime("'+uploadlocaltime+'") AND status="2"', [], prechilddata1, errorCB);	
	}
}



// Create OR Update DATABASE
function syncDownload()
{
	setTimeout(function(){
		////SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
    	db.transaction(addValidationMaster, errorCB);
	}, 60);
}

//  ERROR CallBack function     
function errorCB(err)
{
	SpinnerDialog.hide();
	var message= "Error processing SQL: "+err.code+"\n"+"Error Message:"+err.message
	
	navigator.notification.alert(message, function(){}, 'Samuday 360','Done');
}

//  IF all the Data
function addsuccess()
{
	var path = window.location.pathname.split("/").pop();
	
	navigator.notification.alert("Synced Successfully", function(){
		SpinnerDialog.hide();
		if(path=="index.html"){
			$("#loginform").hide();
			$("#verificationform").hide();
			$("#setpinform").show();
			$("#enterpinform").hide();
			$("#attendanceform").hide();
		}else{setTimeout(function(){window.location.reload();SpinnerDialog.hide();},100)}
	}, 'Samuday 360','Done');
}

// Create OR Update ValidationMaster
function addValidationMaster(tx)
{
	
	questiontypesarry=questiontypes.length;
	//tx.executeSql('TRUNCATE TABLE questiontypes');
	if(questiontypesarry>0)
	{
		for(loop=0; loop<questiontypesarry; loop++)
		{tx.executeSql('INSERT INTO questiontypes (questiontypecode, questiontype) VALUES ("'+questiontypes[loop].questiontypecode+'", "'+questiontypes[loop].questiontype+'")');}	
	}
	
	sh_roads_arrlen=sh_roads_arr.length;
	if(sh_roads_arrlen>0)
	{
		for(sh_roadsloop=0; sh_roadsloop<sh_roads_arrlen; sh_roadsloop++)
		{tx.executeSql('INSERT INTO shroads(roadcode, geom) VALUES ("'+sh_roads_arr[sh_roadsloop].sh_code+'", "'+sh_roads_arr[sh_roadsloop].st_astext+'")');}
	}

	gp_roads_arrlen=gp_roads_arr.length;
	if(gp_roads_arrlen>0)
	{
		for(gp_roadsloop=0; gp_roadsloop<gp_roads_arrlen; gp_roadsloop++)
		{tx.executeSql('INSERT INTO gproads(roadcode, geom) VALUES ("'+gp_roads_arr[gp_roadsloop].gpr_code+'", "'+gp_roads_arr[gp_roadsloop].st_astext+'")');}
	}

	addWorkItems(tx);
}

function addWorkItems(tx)
{	
	workitemsarry=workitems.length;
	timestamp=new Date().toISOString();
	//questiontypesarry
	if(workitemsarry>0)
	{
		for(loop=0; loop<workitemsarry; loop++)
		{ 
			workitemset=workitems[loop].workitems[0];
			//console.log(workitems[loop].workitems)
			if(workitems[loop].workitems.length>0)
			{
			surveyset=workitems[loop].survey[0];
			if(surveyset.type=="MS")
			{
				msdate = new Date(workitemset.startdate.slice(0,10));
				enddate= new Date(workitemset.endddate.slice(0,10));
				msfrequency=parseInt(workitemset.frequncy);

				msdates=[]
				lastdate = msdate.toISOString().slice(0,10);
				var mscount=0;
				while(enddate>=msdate)
				{
					msdate.setDate(msdate.getDate() + msfrequency);
					
					if(parseInt((enddate-msdate) / (1000 * 60 * 60 * 24), 10)>=0)
					{
						msdates.push(lastdate)
						tx.executeSql('INSERT INTO monitoringsurveydates (surveyworkitemmappingcode, surveycode, startdate, enddate, frequency, fromsurveydate, tosurveydate, status, createddate) VALUES("'+workitemset.surveyworkitemmappingcode+'", "'+workitemset.surveycode+'", "'+workitemset.startdate+'", "'+workitemset.endddate+'", "'+workitemset.frequncy+'", "'+lastdate+'", "'+msdate.toISOString().slice(0,10)+'", "1",  "'+timestamp+'")');
						tx.executeSql('INSERT INTO workitemsserverstatus(workitemmmpcode, target, fromdate, open, saved, submitted, synced) VALUES ("'+workitemset.wrkitem+'", "'+workitems[loop].status[0].target+'", "'+lastdate+'", "'+workitems[loop].status[0].open+'", "'+workitems[loop].status[0].saved+'", "'+workitems[loop].status[0].submitted+'", "'+workitems[loop].status[0].synced+'")');
						mscount++;
					}
					lastdate = msdate.toISOString().slice(0,10);
				}
				if(mscount==0){
					msdates.push(workitemset.startdate.slice(0,10))
					tx.executeSql('INSERT INTO monitoringsurveydates (surveyworkitemmappingcode, surveycode, startdate, enddate, frequency, fromsurveydate, tosurveydate, status, createddate) VALUES("'+workitemset.surveyworkitemmappingcode+'", "'+workitemset.surveycode+'", "'+workitemset.startdate+'", "'+workitemset.endddate+'", "'+workitemset.frequncy+'", "'+workitemset.startdate.slice(0,10)+'", "'+workitemset.endddate.slice(0,10)+'", "1",  "'+timestamp+'")');
					tx.executeSql('INSERT INTO workitemsserverstatus(workitemmmpcode, target, fromdate, open, saved, submitted, synced) VALUES ("'+workitemset.wrkitem+'", "'+workitems[loop].status[0].target+'", "'+workitemset.startdate.slice(0,10)+'", "'+workitems[loop].status[0].open+'", "'+workitems[loop].status[0].saved+'", "'+workitems[loop].status[0].submitted+'", "'+workitems[loop].status[0].synced+'")');
				}
			}
			else{
				tx.executeSql('INSERT INTO workitemsserverstatus(workitemmmpcode, target, open, saved, submitted, synced) VALUES ("'+workitemset.wrkitem+'", "'+workitems[loop].status[0].target+'", "'+workitems[loop].status[0].open+'", "'+workitems[loop].status[0].saved+'", "'+workitems[loop].status[0].submitted+'", "'+workitems[loop].status[0].synced+'")');
			}

			validations=workitems[loop].validations;
			validationarray=validations.length;
			if(validationarray>0)
			{
				for(validationloop=0; validationloop<validationarray; validationloop++)
				{tx.executeSql('INSERT INTO validations (workitemscode, surveycode, validationtypecode, questioncode, validationtypename, allowedvalues, violationmessage) VALUES ("'+workitemset.wrkitem+'", "'+surveyset.surveycode+'", "'+validations[validationloop].validationtypecode+'", "'+validations[validationloop].questioncode+'", "'+validations[validationloop].validationtypename+'", "'+validations[validationloop].allowedvalues+'", "'+validations[validationloop].violationmessage+'")');}
			}
			
			questionoptions=workitems[loop].questionoptions;
			questionoptionsarray=questionoptions.length;
			if(questionoptionsarray>0)
			{
				for(qoloop=0; qoloop<questionoptionsarray; qoloop++)
				{tx.executeSql('INSERT INTO questionoptions (workitemscode, surveycode, questioncode, displaytext, displayvalue, displayorder) VALUES ("'+workitemset.wrkitem+'", "'+surveyset.surveycode+'", "'+questionoptions[qoloop].questioncode+'", "'+questionoptions[qoloop].displaytext+'", "'+questionoptions[qoloop].displayvalue+'", "'+questionoptions[qoloop].displayorder+'")');}
			}

			tx.executeSql('INSERT INTO workitems (workitemcode, workitemname, workitemdesc, workitemtype, parentworkitemcode, planstartdate, planenddate, actualstartdate, primaryowner, percentagecompleted, displayorder, surveyworkitemmappingcode, target, createdby, surveycode, frequncy) VALUES ("'+workitemset.wrkitem+'", "'+workitemset.workitemname+'", "'+workitemset.workitemdesc+'", "'+workitemset.workitemtype+'", "'+workitemset.parentworkitemcode+'", "'+workitemset.planstartdate+'", "'+workitemset.planenddate+'", "'+workitemset.actualstartdate+'", "'+workitemset.primaryowner+'", "'+workitemset.percentagecompleted+'", "'+workitemset.displayorder+'", "'+workitemset.surveyworkitemmappingcode+'", "'+workitemset.target+'", "'+workitemset.createdby+'", "'+workitemset.surveycode+'", "'+workitemset.frequncy+'")');
			if(workitemset.surveycode!=null && workitemset.surveycode!="null" && workitemset.surveycode!="")
			{
				tx.executeSql('INSERT INTO survey (workitemscode, surveycode, surveyname, surveydesc, sectorcode, questionsetcode, createdby, createdon, type, frequency, startdate, enddate, programcode, interventioncode) VALUES ("'+workitemset.wrkitem+'", "'+surveyset.surveycode+'", "'+surveyset.surveyname+'", "'+surveyset.surveydesc+'", "'+surveyset.sectorcode+'", "'+surveyset.questionsetcode+'", "'+surveyset.createdby+'", "'+surveyset.createdon+'", "'+surveyset.type+'", "'+surveyset.frequency+'", "'+surveyset.startdate+'", "'+surveyset.enddate+'", "'+surveyset.programcode+'", "'+surveyset.interventioncode+'")');
			}
			for(locationloop=0; locationloop< workitems[loop].locations.length; locationloop++)
			{
				tx.executeSql('INSERT INTO locations (workitemscode, locationcode, locationname,locationtype) VALUES ("'+workitemset.wrkitem+'", "'+workitems[loop].locations[locationloop].locationcode+'", "'+workitems[loop].locations[locationloop].locationname+'", "'+workitems[loop].locations[locationloop].locationtype+'")');
			}
			for(questionloop=0; questionloop<workitems[loop].questions.length; questionloop++)
			{
				questionset=workitems[loop].questions[questionloop];
				tx.executeSql('INSERT INTO questions (workitemscode, surveycode, sectioncode, sectiondisplayorder, questiondisplayorder, questioncode, questiontext, sectionname, validationtypecode, questiontypecode, questiontype, haschildquestion, parentquestion, conditionvalue, controltype, questionlevel, hasoptions, optionid, childquestionconditionid, helptext, frequencyofquestions, numberoftimes, frequencystartdate, sectorcode, programcode, interventioncode, categoryid, suggestivetext) VALUES ("'+workitemset.wrkitem+'", "'+surveyset.surveycode+'", "'+questionset.sectorcode+'", "'+questionset.sectiondisplayorder+'", "'+questionset.questiondisplayorder+'", "'+questionset.questioncode+'", "'+questionset.questiontext+'", "'+questionset.sectionname+'", "'+questionset.validationtypecode+'", "'+questionset.questiontypecode+'", "'+questionset.questiontype+'", "'+questionset.haschildquestion+'", "'+questionset.parentquestion+'", "'+questionset.conditionvalue+'", "'+questionset.controltype+'", "'+questionset.questionlevel+'", "'+questionset.hasoptions+'", "'+questionset.optionid+'", "'+questionset.childquestionconditionid+'", "'+questionset.helptext+'", "'+questionset.frequencyofquestions+'", "'+questionset.numberoftimes+'", "'+questionset.frequencystartdate+'", "'+questionset.sectorcode+'", "'+questionset.programcode+'", "'+questionset.interventioncode+'", "'+questionset.categoryid+'", "'+questionset.suggestivetext+'")');
			}
			
			}
		}	
	}

	tx.executeSql('UPDATE syncdates SET uploadservertime="'+lastsynced+'", uploadlocaltime="'+timestamp+'", downloadservertime="'+lastsynced+'", downloadlocaltime="'+timestamp+'"');
	//console.log('UPDATE syncdates SET downloadservertime="'+lastsynced+'", downloadlocaltime="'+timestamp+'"');
}


//  ================== *** SYNC END   ***  ====================





// ================  *** WORK ITEMS BEGAIN ***	 =============

function getWorkItemList()
{
	setTimeout(function(){
		SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlGetWorkItemList, errorCB, pageloadedsuccess);
	}, 60);
}
function pageloadedsuccess()
{
	SpinnerDialog.hide();
}
function sqlGetWorkItemList(tx)
{
	tx.executeSql('SELECT workitemcode, workitemname, planstartdate, actualstartdate, surveyworkitemmappingcode, surveycode, (SELECT surveyname FROM survey WHERE survey.surveycode=workitems.surveycode) as surveyname, (SELECT type FROM survey WHERE survey.surveycode=workitems.surveycode) as type, displayorder,  frequncy FROM workitems ORDER BY displayorder DESC', [], resultWorkItemList, errorCB);
}


function resultWorkItemList(tx, results)
{
	populateWorkItems(results);
	tx.executeSql('SELECT workitemscode, locationname  FROM locations', [], resultLocationList, errorCB);	
}

function resultLocationList(tx, results)
{
	resultlocation=results.rows
	uniqueNames = [];
	dataarray=[]
	for(i = 0; i< resultlocation.length; i++)
	{    
    	if(uniqueNames.indexOf(resultlocation[i].workitemscode) === -1)
    	{ uniqueNames.push(resultlocation[i].workitemscode); dataarray.push(array=[]);}     
	}

	
	for(i = 0; i< resultlocation.length; i++)
	{
		dataarray[uniqueNames.indexOf(resultlocation[i].workitemscode)].push(resultlocation[i].locationname);
	}

	for(i = 0; i< uniqueNames.length; i++)
	{
		string="";
		for(stringloop=0; stringloop<3; stringloop++){if( typeof dataarray[i][stringloop] !="undefined"){string+=dataarray[i][stringloop]+",";}}
		count="";
		if(dataarray[i].length-3 >0){string+= " +";string+= dataarray[i].length-3;}
		//console.log(string)
		document.getElementById(uniqueNames[i]).innerHTML=string;
	}

}	
// ================  *** WORK ITEMS END *** =============




// ============== *** Monitoring Work Item Info BEGAIN *** ==============

function getWorkItemDetails()
{
	//localStorage.surveybenfdate="";
	localStorage.surveyworkitemstartdate="";
	setTimeout(function(){
		SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlGetWorkItemDetails, errorCB, pageloadedsuccess);
	}, 60);
}
	
function sqlGetWorkItemDetails(tx)
{
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);

	tx.executeSql('SELECT * FROM workitems WHERE workitemcode="'+workitemcode+'"', [], resultWorkItemDetails, errorCB);
	tx.executeSql('SELECT fromsurveydate, tosurveydate FROM monitoringsurveydates WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"', [], sqlmonitoringlistdates, errorCB);
}





function sqlmonitoringlistdates(tx, results)
{
	monitoringsurveyfreq=results.rows;
	datesarry=[];
	var freqtable="<table class='table' style='width: 100%;'><tr><th>SNo.</th><th>From</th><th>To</th></tr><tbody>";
	for(datesloop=0; datesloop<results.rows.length; datesloop++)
	{
		var sno=datesloop+1;
		freqtable+="<tr><td>"+sno+"</td><td>"+results.rows[datesloop].fromsurveydate+"</td><td>"+results.rows[datesloop].tosurveydate+"</td><tr>";
		datesarry.push(new Date(results.rows[datesloop].fromsurveydate).toISOString().slice(0, 10));
	}
	freqtable+="</tboby></table>"
		var path = window.location.pathname.split("/").pop();
	
		if(path=="monitoringworkiteminfo.html")
		{
	 		$("#event-cal-container").simpleCalendar({
                events: datesarry,
                // eventsInfo: ['John\'s Birthday', 'Janet\'s Marriage','Graduation Day', 'Final Exams !'],
                selectCallback: function(date){
                	surveybenfdate=date;
                	localStorage.surveybenfdate=CryptoJS.AES.encrypt('"'+surveybenfdate+'"', "Samuday360");
                	if(new Date(surveybenfdate)<new Date())
                	{getWorkItemDetails();}
                	else{navigator.notification.alert("Date Should Not Be Future", function(){}, 'Samuday 360','Done');}
                    	
                    $("#event-cal-container").toggle();
                }
            });
            $("#surveyfreq").html("<h5>Survey frequency</h5>"+freqtable);
	 	}
}

function resultWorkItemDetails(tx, results)
{
	populateWorkItemDetails(results);
	var path = window.location.pathname.split("/").pop();
	tx.executeSql('SELECT * FROM survey WHERE workitemscode="'+results.rows[0].workitemcode+'" AND surveycode="'+results.rows[0].surveycode+'"', [], resultSurveyDetails, errorCB);
	var surveybenfdate=(new Date()).toISOString().slice(0,10);
	if(path=="monitoringworkiteminfo.html")
	{
		tx.executeSql('Select count(*) as count FROM mmpbenfi WHERE surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" AND surveycode="'+results.rows[0].surveycode+'"', [], function(tx, resul){if(resul.rows[0].count>0){$("#downloadben").hide()}else{$("#downloadben").show()}}, errorCB);
		if(typeof localStorage.surveybenfdate=="undefined" || localStorage.surveybenfdate=="")
		{
			//surveybenfdate=(new Date()).toISOString().slice(0,10);
			localStorage.surveybenfdate=CryptoJS.AES.encrypt('"'+surveybenfdate+'"', "Samuday360");
		}
		else {
			surveybenfdate=CryptoJS.AES.decrypt(localStorage.surveybenfdate, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
			$("#monitoringdate").html(surveybenfdate);
		}
		tx.executeSql('SELECT COUNT(resondantcode) AS target, (SELECT COUNT(resondantcode) FROM ms_mmp_benf_selected WHERE status="0"  AND  surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" AND ( Datetime(fromdate) <= Datetime("'+surveybenfdate+'") AND Datetime(todate) > Datetime("'+surveybenfdate+'") ) ) AS open, (SELECT COUNT(resondantcode) FROM ms_mmp_benf_selected WHERE status="1"  AND surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" AND empid="'+localStorage.employeeid+'" AND ( Datetime(fromdate) <= Datetime("'+surveybenfdate+'") AND Datetime(todate) > Datetime("'+surveybenfdate+'") ) ) AS inprogress, (SELECT COUNT(resondantcode) FROM ms_mmp_benf_selected WHERE status="2"  AND surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" AND empid="'+localStorage.employeeid+'" AND ( Datetime(fromdate) <= Datetime("'+surveybenfdate+'") AND Datetime(todate) > Datetime("'+surveybenfdate+'") ) ) AS submitted, (SELECT COUNT(resondantcode) FROM ms_mmp_benf_selected WHERE status="3"  AND surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" AND empid="'+localStorage.employeeid+'" AND ( Datetime(fromdate) <= Datetime("'+surveybenfdate+'") AND Datetime(todate) > Datetime("'+surveybenfdate+'") ) ) AS synced FROM mmpbenfi WHERE  surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'"', [], surveyStataticsDetails, errorCB);
		tx.executeSql('SELECT fromsurveydate FROM monitoringsurveydates WHERE surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" AND ( Datetime(fromsurveydate) <= Datetime("'+surveybenfdate+'") AND Datetime(tosurveydate) > Datetime("'+surveybenfdate+'"))', [], 
				function(tx, fromsurveydateresult)
				{
					if(fromsurveydateresult.rows.length>0)
					{
						tx.executeSql('SELECT * FROM workitemsserverstatus WHERE workitemmmpcode="'+results.rows[0].workitemcode+'" AND fromdate ="'+fromsurveydateresult.rows[0].fromsurveydate+'"', [], function(tx, statusresult)
						{
							if(results.rows.length>0)
							{
								$("#totaltargetcount").html(statusresult.rows[0].target);
								$("#totalopencount").html(statusresult.rows[0].open);
								$("#totalinprogresscount").html(statusresult.rows[0].saved);
								//$("#totalsubmitedcount").html(statusresult.rows.);
								$("#totalsyncedcount").html(statusresult.rows[0].synced);
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
		//'SELECT fromsurveydate FROM monitoringsurveydates WHERE surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" AND ( Datetime(fromsurveydate) <= Datetime("'+surveybenfdate+'") AND Datetime(tosurveydate) > Datetime("'+surveybenfdate+'") )'
		// console.log('SELECT * FROM workitemsserverstatus WHERE workitemmmpcode="'+results.rows[0].workitemcode+'" AND Datetime(fromdate)=Datetime(SELECT fromsurveydate FROM monitoringsurveydates WHERE surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" AND ( Datetime(fromsurveydate) <= Datetime("'+surveybenfdate+'") AND Datetime(tosurveydate) > Datetime("'+surveybenfdate+'")))');
		//console.log(surveystartdate);
		
		// console.log(results.rows[0])
	}	
	else if(path=="baselineworkiteminfo.html")
	{
		tx.executeSql('SELECT COUNT(status) AS count FROM mmpbenfi WHERE surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" AND surveycode="'+results.rows[0].surveycode+'"', [], function(tx, resul){if(resul.rows[0].count>0){$("#downloadben").hide()}else{$("#downloadben").show()}}, errorCB);
		tx.executeSql('SELECT COUNT(resondantcode) AS target, (SELECT COUNT(resondantcode) FROM mmpbenfi WHERE status="0"  AND surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" ) AS open, (SELECT COUNT(resondantcode) FROM mmpbenfi WHERE status="1"  AND surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" AND empid="'+localStorage.employeeid+'" ) AS inprogress, (SELECT COUNT(resondantcode) FROM mmpbenfi WHERE status="2"  AND surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" AND empid="'+localStorage.employeeid+'" ) AS submitted, (SELECT COUNT(resondantcode) FROM mmpbenfi WHERE status="3"  AND surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" AND empid="'+localStorage.employeeid+'" ) AS synced FROM mmpbenfi WHERE  surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'"', [], surveyStataticsDetails, errorCB);
		// tx.executeSql('SELECT COUNT(resondantcode) AS target, (SELECT COUNT(resondantcode) FROM mmpbenfi WHERE status="0"  AND surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" ) AS open, (SELECT COUNT(resondantcode) FROM mmpbenfi WHERE status="1"  AND surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" ) AS inprogress, (SELECT COUNT(resondantcode) FROM mmpbenfi WHERE status="2"  AND surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" ) AS submitted, (SELECT COUNT(resondantcode) FROM mmpbenfi WHERE status="3"  AND surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'" ) AS synced FROM mmpbenfi WHERE  surveycode="'+results.rows[0].surveycode+'" AND surveyworkitemmappingcode="'+results.rows[0].surveyworkitemmappingcode+'"', [], surveyStataticsDetails, errorCB);
	
		tx.executeSql('SELECT * FROM workitemsserverstatus WHERE workitemmmpcode="'+results.rows[0].workitemcode+'"', [], function(tx, statusresult)
		{
			//console.log(results.rows);
			if(results.rows.length>0)
			{
				$("#totaltargetcount").html(statusresult.rows[0].target);
				$("#totalopencount").html(statusresult.rows[0].open);
				$("#totalinprogresscount").html(statusresult.rows[0].saved);
				//$("#totalsubmitedcount").html(statusresult.rows.);
				$("#totalsyncedcount").html(statusresult.rows[0].synced);
				if(statusresult.rows[0].saved>0){$("#workitemeditben").attr("disabled", false);}else{$("#workitemeditben").attr("disabled", true);}
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
		tx.executeSql('SELECT locationname FROM locations WHERE workitemscode="'+results.rows[0].workitemcode+'"', [], resultLocaitionDetails, errorCB);
}

function resultSurveyDetails(tx, results)
{
	populateSurveyDetails(results);	
}

function resultLocaitionDetails(tx, results)
{
	populateLocaitionDetails(results);	
}

function surveyStataticsDetails(tx, results)
{
	$("#targetcount").html(results.rows[0].target);
	$("#opencount").html(results.rows[0].open);
	$("#inprogresscount").html(results.rows[0].inprogress);
	$("#submitedcount").html(results.rows[0].submitted);
	$("#syncedcount").html(results.rows[0].synced);

	// Total
	if(results.rows[0].target!="0")
	{$("#totaltargetcount").html(results.rows[0].target);}

	$("#totalsubmitedcount").html(results.rows[0].submitted)

	if(results.rows[0].target>0){$("#downloadben").attr("disabled", true);}else{$("#downloadben").attr("disabled", false);}
	if(results.rows[0].open>0){$("#workitemsurveyben").attr("disabled", false);}else{$("#workitemsurveyben").attr("disabled", true);}
	if(results.rows[0].inprogress>0){$("#workitemeditben").attr("disabled", false);}else{$("#workitemeditben").attr("disabled", true);}
	if(path="monitoringworkiteminfo.html"){
		if(results.rows[0].target>0){$("#msaddbeneficiary").attr("disabled", false);}else{$("#msaddbeneficiary").attr("disabled", true);}
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
		//SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
    	db.transaction(sqlSurveyQuestions, errorCB, pageloadedsuccess);	
	}, 60);	
}
	
function sqlSurveyQuestions(tx)
{
	workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	// console.log('SELECT questioncode, displaytext, displayvalue, displayorder FROM questionoptions WHERE workitemscode="'+workitemcode+'" AND surveycode="'+survey+'" ORDER BY questioncode, displayorder ');
	tx.executeSql('SELECT questioncode, displaytext, displayvalue, displayorder FROM questionoptions WHERE workitemscode="'+workitemcode+'" AND surveycode="'+survey+'" ORDER BY questioncode, displayorder ', [], resultSurveyQuestionsOptions, errorCB);
	tx.executeSql('SELECT workitemname, ( SELECT surveyname FROM survey WHERE surveycode="'+survey+'") as surveyname FROM workitems WHERE workitemcode="'+workitemcode+'"',[], function(tx, results){$("#workitemtitle").html(results.rows[0].workitemname+' - '+results.rows[0].surveyname)},errorCB);
}
 



function resultSurveyQuestionsOptions(tx, results)
{
	optionQuestions=[];
	questionsOptions=[];
	qoptions=results.rows;
	qoptionslen=qoptions.length;
	for(qoploop=0; qoploop<qoptionslen; qoploop++)
	{
		if(optionQuestions.indexOf(qoptions[qoploop].questioncode) === -1){
			emptyarray=[];
			optionQuestions.push(qoptions[qoploop].questioncode);
			questionsOptions.push(emptyarray);
		}
	}

	for(qoparrayloop=0; qoparrayloop<qoptionslen; qoparrayloop++)
	{
		var questionindex=optionQuestions.indexOf(qoptions[qoparrayloop].questioncode)
		if(questionindex!== -1)
		{
			entity=[];
			entity.push(qoptions[qoparrayloop].displaytext);
			entity.push(qoptions[qoparrayloop].displayvalue);
			// entity.push(qoptions[qoparrayloop].questioncode);
			questionsOptions[questionindex].push(entity)
		}
	}

	workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	tx.executeSql('SELECT validationtypecode, questioncode, validationtypename, allowedvalues, violationmessage FROM validations WHERE workitemscode="'+workitemcode+'" AND surveycode="'+survey+'" ORDER BY questioncode', [], validationquestionresult, errorCB);
	tx.executeSql('SELECT sectioncode, questioncode, questiontext, sectionname, validationtypecode, questiontypecode, questiontype, haschildquestion, parentquestion, conditionvalue, controltype, hasoptions, helptext, suggestivetext FROM questions WHERE workitemscode="'+workitemcode+'" AND surveycode="'+survey+'" ORDER BY sectiondisplayorder, questiondisplayorder', [], resultSurveyQuestions, errorCB);



}

function validationquestionresult(tx, validationresult){
	 validations=validationresult.rows;
	 validationslen=validations.length;
	 validationsdistquestions=[];
	 questionsvalidation=[];
	for(validationdistq=0; validationdistq<validationslen; validationdistq++)
	{
		if(validationsdistquestions.indexOf(validations[validationdistq].questioncode)<0)
		{validationsdistquestions.push(validations[validationdistq].questioncode); questionsvalidation.push([])}
	}
	for(validationarray=0; validationarray<validationslen; validationarray++)
	{
		questionsvalidation[validationsdistquestions.indexOf(validations[validationarray].questioncode)].push(validations[validationarray]);
	}
	//  console.log(validationsdistquestions);
	// console.log(questionsvalidation);	

}


function resultSurveyQuestions(tx, results)
{
	surveyquestions=[];
	surveyquestionnumber=[];
	surveysections=[];
	childparentquestion=[]; 
	childquestions=[];
	childquestionconditions=[];
	onlyparentquestions=[];
	// sectioncode
	// questioncode
	// questiontext
	// sectionname
	// validationtypecode
	// questiontypecode // 1/2/3/4.. (input/select...)
	// questiontype  // parent / child
	// haschildquestion
	// parentquestion
	// conditionvalue
	// controltype
	// hasoptions
	// helptext
	// suggestivetext

	surveyquestioncust=results.rows;
	surveyquestioncustlen=surveyquestioncust.length;
	for(questloop=0; questloop<surveyquestioncustlen; questloop++)
	{
		
		question=[];
		if(surveyquestioncust[questloop].haschildquestion==1)
		{ 
			childparentquestion.push(surveyquestioncust[questloop].questioncode);
			childquestionconditions.push([]);
		}
		question.push(surveyquestioncust[questloop].questioncode);
		question.push(surveyquestioncust[questloop].questiontext);
		question.push(surveyquestioncust[questloop].questiontype); // parent / child
		question.push(surveyquestioncust[questloop].questiontypecode); // 1/2/3/4.. (input/select...)
		question.push(surveyquestioncust[questloop].hasoptions);
		question.push(surveyquestioncust[questloop].sectionname);
		question.push(surveyquestioncust[questloop].validationtypecode);
		question.push(surveyquestioncust[questloop].helptext);
		question.push(surveyquestioncust[questloop].suggestivetext);
		question.push(surveyquestioncust[questloop].sectioncode);
		surveyquestions.push(question);
		surveyquestionnumber.push(surveyquestioncust[questloop].questioncode);
		if(surveyquestioncust[questloop].questiontype=='P'){
			onlyparentquestions.push(surveyquestioncust[questloop].questioncode);
		}
		if(surveysections.indexOf(surveyquestioncust[questloop].sectionname)===-1)
		{
			if(surveyquestioncust[questloop].sectionname!=null && surveyquestioncust[questloop].sectionname!="null" && surveyquestioncust[questloop].sectionname!="")
			{
				surveysections.push(surveyquestioncust[questloop].sectionname)
			}
		}
	}

	if(childparentquestion.length>0){
		for(questloop=0; questloop<surveyquestioncustlen; questloop++)
		{
			qindex=childparentquestion.indexOf(surveyquestioncust[questloop].parentquestion);
			if(qindex>=0)
			{
				tempcond=[surveyquestioncust[questloop].questioncode, surveyquestioncust[questloop].conditionvalue , surveyquestioncust[questloop].parentquestion]
				//console.log(tempcond);
				childquestions.push(surveyquestioncust[questloop].questioncode);
				childquestionconditions[qindex].push(tempcond);
			}
		}
	}

	// console.log(surveyquestions)
	// console.log(surveyquestionnumber);
	// console.log(onlyparentquestions);
	// console.log(surveysections)
	// console.log(childparentquestion)
	// console.log(childquestions);
	// console.log(childquestionconditions)
	surveyQuestionshtml();
}





function saveSurveyResponse()
{
	var processmag="Updating Response";
	if(surveyresponsesavetype==1){processmag="Saving Response..."}else{processmag="Submiting Response..."}
	setTimeout(function(){
		SpinnerDialog.show("Samuday 360", processmag, true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
    	db.transaction(sqlsaveSurveyResponse, errorCB, responsesavedSuccessfully);	
	}, 60);		
}

function responsesavedSuccessfully(tx, results)
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
function sqlsaveSurveyResponse(tx)
{
	var path = window.location.pathname.split("/").pop();
	var surveydate="";
	var date="";
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	var respondantcode=CryptoJS.AES.decrypt(localStorage.respondantcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	var workitem=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	if(typeof localStorage.surveybenfdate!="undefined" && localStorage.surveybenfdate!="")
	{surveydate=CryptoJS.AES.decrypt(localStorage.surveybenfdate, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);}
	else{surveydate=(new Date()).toISOString().slice(0,10);}

	if(typeof localStorage.surveyworkitemstartdate!="undefined" && localStorage.surveyworkitemstartdate!="")
	{date=CryptoJS.AES.decrypt(localStorage.surveyworkitemstartdate, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);}
	else{date=(new Date()).toISOString().slice(0,10);}

	var survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	//alert(surveyworkitemmappingcode+"  "+respondantcode+"  "+surveydate+"  "+date+"  "+survey);
	

	if(path=="editsurveypage.html" || path=="surveypage.html")
	{
		tx.executeSql('DELETE FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1" AND surveydate="'+date+'"');
		tx.executeSql('DELETE FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1" AND surveydate="'+date+'"');
	}else if(path=="bleditsurveypage.html" || path=="blsurveypage.html"){
		tx.executeSql('DELETE FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1"');
		tx.executeSql('DELETE FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1"');
	}
	timestamp =new Date().toISOString();
	//surveyresponsesavetype

	for(surveyparentresponseloop=0; surveyparentresponseloop<surveyparentresponse.length; surveyparentresponseloop++)
	{
		tx.executeSql('INSERT INTO surveyparentresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, empid) VALUES ("'+surveyparentresponse[surveyparentresponseloop][0]+'", "'+surveyparentresponse[surveyparentresponseloop][1]+'", "'+surveyparentresponse[surveyparentresponseloop][2]+'", "'+surveyparentresponse[surveyparentresponseloop][3]+'", "'+surveyparentresponse[surveyparentresponseloop][5]+'", "'+surveyparentresponse[surveyparentresponseloop][4]+'", "'+date+'", "'+surveyresponsesavetype+'", "'+timestamp+'", "'+localStorage.employeeid+'")');
	}
	//surveyparentresponse

	for(surveychildresponseloop=0; surveychildresponseloop<surveychildresponse.length; surveychildresponseloop++)
	{
		tx.executeSql('INSERT INTO surveychildresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, empid) VALUES ("'+surveychildresponse[surveychildresponseloop][0]+'", "'+surveychildresponse[surveychildresponseloop][1]+'", "'+surveychildresponse[surveychildresponseloop][2]+'", "'+surveychildresponse[surveychildresponseloop][3]+'", "'+surveychildresponse[surveychildresponseloop][5]+'", "'+surveychildresponse[surveychildresponseloop][4]+'", "'+date+'", "'+surveyresponsesavetype+'", "'+timestamp+'", "'+localStorage.employeeid+'")');
	}
 	var updatetime=(new Date()).toISOString();
 	
 	if(path=="bleditsurveypage.html" || path=="blsurveypage.html")
 	{ tx.executeSql('UPDATE mmpbenfi SET status="'+surveyresponsesavetype+'", empid="'+localStorage.employeeid+'", updatedon="'+updatetime+'" WHERE surveyworkitemmappingcode ="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND resondantcode="'+respondantcode+'"');
	}else if(path=="editsurveypage.html" || path=="surveypage.html")
	{ tx.executeSql('UPDATE mmp_ms_benf SET status="'+surveyresponsesavetype+'", empid="'+localStorage.employeeid+'" WHERE Datetime(fromdate) <= Datetime("'+surveydate+'") AND Datetime(todate) > Datetime("'+surveydate+'") AND surveyworkitemmappingcode ="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND respondantcode="'+respondantcode+'"');}
	

	if(surveyresponsesavetype==1){
		if(path=="surveypage.html")
		{
			tx.executeSql('SELECT open, saved FROM workitemsserverstatus WHERE workitemmmpcode="'+workitem+'" AND fromdate ="'+date+'"', [], function(tx, countresult)
			{
				var tempsaved=parseInt(countresult.rows[0].saved) + 1;
				var tempopen=0
				if(countresult.rows[0].open>0)
				{tempopen=parseInt(countresult.rows[0].open) - 1;}
				tx.executeSql('update workitemsserverstatus SET open="'+tempopen+'", saved="'+tempsaved+'" WHERE workitemmmpcode="'+workitem+'" AND fromdate ="'+date+'"')
			},errorCB);
		}else  if(path=="blsurveypage.html"){
			tx.executeSql('SELECT open, saved FROM workitemsserverstatus WHERE workitemmmpcode="'+workitem+'"', [], function(tx, countresult)
			{
				var tempsaved=parseInt(countresult.rows[0].saved) + 1;
				var tempopen=0
				if(countresult.rows[0].open>0)
				{tempopen=parseInt(countresult.rows[0].open) - 1;}
				tx.executeSql('update workitemsserverstatus SET open="'+tempopen+'", saved="'+tempsaved+'" WHERE workitemmmpcode="'+workitem+'"')
			},errorCB);
		}
	}else if(surveyresponsesavetype==2){

		if(path=="surveypage.html")
		{
			tx.executeSql('SELECT open FROM workitemsserverstatus WHERE workitemmmpcode="'+workitem+'" AND fromdate ="'+date+'"', [], function(tx, countresult)
			{
				var tempopen=0
				if(countresult.rows[0].open>0)
				{tempopen=parseInt(countresult.rows[0].open) - 1;}
				tx.executeSql('update workitemsserverstatus SET open="'+tempopen+'" WHERE workitemmmpcode="'+workitem+'" AND fromdate ="'+date+'"')
			},errorCB);
		}else  if(path=="blsurveypage.html"){
			tx.executeSql('SELECT open FROM workitemsserverstatus WHERE workitemmmpcode="'+workitem+'"', [], function(tx, countresult)
			{
				var tempopen=0
				if(countresult.rows[0].open>0)
				{tempopen=parseInt(countresult.rows[0].open) - 1;}
				tx.executeSql('update workitemsserverstatus SET open="'+tempopen+'" WHERE workitemmmpcode="'+workitem+'"')
			},errorCB);
		}

	}
	//surveychildresponse
}

// ============= ***  Survey Page END *** ==================



// ============= ***  Survey Page BEGINS *** ==================

function preloadSurveyResponse()
{
	setTimeout(function(){ 
		SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
    	db.transaction(sqlpreSurveyResponse, errorCB, pageloadedsuccess);
	}, 60);
			
}

function sqlpreSurveyResponse(tx)
{
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	respondantcode=CryptoJS.AES.decrypt(localStorage.respondantcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	tx.executeSql('SELECT * FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1"', [], preparentdata, errorCB);
	tx.executeSql('SELECT * FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1"', [], prechilddata, errorCB);
}

function preparentdata(tx, results)
{
	parentdata=results.rows;
	for(parentdataloop=0; parentdataloop<parentdata.length; parentdataloop++)
	{
		questinfo=surveyquestions[surveyquestionnumber.indexOf(parentdata[parentdataloop].questioncode)]

		if(questinfo[3]==2 || questinfo[3]==3 || questinfo[3]==4)
		{
			tempdata="";
			checkboxradio=document.getElementsByName(questinfo[0])
			tempdata=parentdata[parentdataloop].answer.split(",")
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
			elem=document.getElementById(parentdata[parentdataloop].questioncode)
			elem.value=parentdata[parentdataloop].answer;
			changeaction(elem);
		}
		else{
			elem=document.getElementById(parentdata[parentdataloop].questioncode)
			elem.value=parentdata[parentdataloop].answer;
			changeaction(elem);
		}
	}
}

function prechilddata(tx, results)
{
	childdata=results.rows
	for(childdataloop=0; childdataloop<childdata.length; childdataloop++)
	{
		questinfo=surveyquestions[surveyquestionnumber.indexOf(childdata[childdataloop].questioncode)]

		if(questinfo[3]==2 || questinfo[3]==3 || questinfo[3]==4)
		{
			tempdata="";
			checkboxradio=document.getElementsByName(questinfo[0])
			tempdata=childdata[childdataloop].answer.split(",");
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
			elem=document.getElementById(childdata[childdataloop].questioncode)
			elem.value=childdata[childdataloop].answer;
		}
		else{
			elem=document.getElementById(childdata[childdataloop].questioncode)
			elem.value=childdata[childdataloop].answer;
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
		SpinnerDialog.show("Samuday 360", processmag, true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
    	db.transaction(sqlsaveEditSurveyResponse, errorCB, responseEditsavedSuccessfully);
	}, 60);
			
}
function responseEditsavedSuccessfully(tx, results)
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
function sqlsaveEditSurveyResponse(tx)
{
	path = window.location.pathname.split("/").pop();
	var surveydate="";
	var date="";
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	var respondantcode=CryptoJS.AES.decrypt(localStorage.respondantcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	var workitem=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);

	if(typeof localStorage.surveybenfdate!="undefined" && localStorage.surveybenfdate!="")
	{surveydate=CryptoJS.AES.decrypt(localStorage.surveybenfdate, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);}
	else{surveydate=(new Date()).toISOString().slice(0,10);}

	if(typeof localStorage.surveyworkitemstartdate!="undefined" && localStorage.surveyworkitemstartdate!="")
	{date=CryptoJS.AES.decrypt(localStorage.surveyworkitemstartdate, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);}
	else{date=(new Date()).toISOString().slice(0,10);}

	var survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	if(path=="editsurveypage.html" || path=="surveypage.html")
	{
		tx.executeSql('DELETE FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1" AND surveydate="'+date+'"');
		tx.executeSql('DELETE FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1" AND surveydate="'+date+'"');
	}else if(path=="bleditsurveypage.html" || path=="blsurveypage.html"){
		tx.executeSql('DELETE FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1"');
		tx.executeSql('DELETE FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND respondentcode="'+respondantcode+'" AND status="1"');
	}
	//date=new Date().toISOString().substring(0, 10);
	timestamp =new Date().toISOString();
	//surveyresponsesavetype

	for(surveyparentresponseloop=0; surveyparentresponseloop<surveyparentresponse.length; surveyparentresponseloop++)
	{
		tx.executeSql('INSERT INTO surveyparentresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, empid) VALUES ("'+surveyparentresponse[surveyparentresponseloop][0]+'", "'+surveyparentresponse[surveyparentresponseloop][1]+'", "'+surveyparentresponse[surveyparentresponseloop][2]+'", "'+surveyparentresponse[surveyparentresponseloop][3]+'", "'+surveyparentresponse[surveyparentresponseloop][5]+'", "'+surveyparentresponse[surveyparentresponseloop][4]+'", "'+date+'", "'+surveyresponsesavetype+'", "'+timestamp+'", "'+localStorage.employeeid+'")');
	}
	//surveyparentresponse

	for(surveychildresponseloop=0; surveychildresponseloop<surveychildresponse.length; surveychildresponseloop++)
	{
		tx.executeSql('INSERT INTO surveychildresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, empid) VALUES ("'+surveychildresponse[surveychildresponseloop][0]+'", "'+surveychildresponse[surveychildresponseloop][1]+'", "'+surveychildresponse[surveychildresponseloop][2]+'", "'+surveychildresponse[surveychildresponseloop][3]+'", "'+surveychildresponse[surveychildresponseloop][5]+'", "'+surveychildresponse[surveychildresponseloop][4]+'", "'+date+'", "'+surveyresponsesavetype+'", "'+timestamp+'", "'+localStorage.employeeid+'")');
	}
	var updatetime=(new Date()).toISOString();

	if(path=="bleditsurveypage.html" || path=="blsurveypage.html")
 	{ tx.executeSql('UPDATE mmpbenfi SET status="'+surveyresponsesavetype+'", empid="'+localStorage.employeeid+'", updatedon="'+updatetime+'" WHERE surveyworkitemmappingcode ="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND resondantcode="'+respondantcode+'"');
	}else if(path=="editsurveypage.html" || path=="surveypage.html")
	{tx.executeSql('UPDATE mmp_ms_benf SET status="'+surveyresponsesavetype+'", empid="'+localStorage.employeeid+'" WHERE Datetime(fromdate) <= Datetime("'+surveydate+'") AND Datetime(todate) > Datetime("'+surveydate+'") AND surveyworkitemmappingcode ="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND respondantcode="'+respondantcode+'"');}
	

	

	if(surveyresponsesavetype==2){
		if(path=="editsurveypage.html")
		{
			tx.executeSql('SELECT saved FROM workitemsserverstatus WHERE workitemmmpcode="'+workitem+'" AND fromdate ="'+date+'"', [], function(tx, countresult)
			{
				var tempsaved=parseInt(countresult.rows[0].saved) - 1;
				tx.executeSql('update workitemsserverstatus SET saved="'+tempsaved+'" WHERE workitemmmpcode="'+workitem+'" AND fromdate ="'+date+'"')
			},errorCB);
		}else  if(path=="bleditsurveypage.html"){
			tx.executeSql('SELECT saved FROM workitemsserverstatus WHERE workitemmmpcode="'+workitem+'"', [], function(tx, countresult)
			{
				var tempsaved=parseInt(countresult.rows[0].saved) - 1;
				tx.executeSql('update workitemsserverstatus SET saved="'+tempsaved+'" WHERE workitemmmpcode="'+workitem+'"')
			},errorCB);
		}
	}
	//surveychildresponse
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
					SpinnerDialog.show("Samuday 360", "Loading...", true);
					var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
			    	db.transaction(sqlBLBeneficiaryList, errorCB, pageloadedsuccess);
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
			SpinnerDialog.show("Samuday 360", "Loading Beneficiaries...", true);
			var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
	    	db.transaction(sqlBLBeneficiaryList, errorCB, pageloadedsuccess);
		}, 30);
	}
	else{$("#loadbenfmodal").modal("show");}
}
	
function sqlBLBeneficiaryList(tx)
{
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	tx.executeSql('SELECT * FROM gproads', [], function(tr, results){
		gproadssource=gproadslayer.getSource();
		gproadssource.clear();
		gproadsresult=results.rows;
		for(gproadsresultloop=0; gproadsresultloop<gproadsresult.length; gproadsresultloop++)
		{
			format = new ol.format.WKT();
				featureGeom = format.readFeature(gproadsresult[gproadsresultloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				//featureGeom.setStyle(style);
				//featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
				gproadssource.addFeature(featureGeom);
		}
	}, errorCB);

	tx.executeSql('SELECT * FROM shroads', [], function(tr, results){
		shroadssource=shroadslayer.getSource();
		shroadssource.clear();
		shroadsresult=results.rows;
		for(shroadsresultloop=0; shroadsresultloop<shroadsresult.length; shroadsresultloop++)
		{
			format = new ol.format.WKT();
				featureGeom = format.readFeature(shroadsresult[shroadsresultloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				//featureGeom.setStyle(style);
				//featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
				shroadssource.addFeature(featureGeom);
		}
	}, errorCB);

	tx.executeSql('SELECT * FROM villageroads', [], function(tr, results){
		villageroadssource=villageroadslayer.getSource();
		villageroadssource.clear();
		vlroadsresult=results.rows;
		for(vlroadsresultloop=0; vlroadsresultloop<vlroadsresult.length; vlroadsresultloop++)
		{
			format = new ol.format.WKT();
				featureGeom = format.readFeature(vlroadsresult[vlroadsresultloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				//featureGeom.setStyle(style);
				//featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
				villageroadssource.addFeature(featureGeom);
		}
	}, errorCB);

	tx.executeSql('SELECT DISTINCT geom, villagename FROM villageboundries', [], function(tr, results){
		var villageboundriessource=villageboundrieslayer.getSource();
		villageboundriessource.clear();
		var vlboundriesresult=results.rows;
		for(vlboundriesresultloop=0; vlboundriesresultloop<vlboundriesresult.length; vlboundriesresultloop++)
		{
			if(vlboundriesresult[vlboundriesresultloop].geom!="")
			{
				format = new ol.format.WKT();
				featureGeom = format.readFeature(vlboundriesresult[vlboundriesresultloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				featureGeom.setStyle(new ol.style.Style
				({
					fill: new ol.style.Fill({ color: 'rgba(255, 255, 255, 0.0)', weight: 1 }),
					stroke: new ol.style.Stroke({ color: 'rgba(0, 0, 0, 0.3)', width: 2 }),
					image: new ol.style.Circle({ radius: 7,
						stroke: new ol.style.Stroke ({ color: 'rgba(0, 0, 0, 0.0)', width: 2 }),
						fill: new ol.style.Fill({ color: 'rgba(0, 0, 0, 0.0)' })
					}),
					text: new ol.style.Text({ text:vlboundriesresult[vlboundriesresultloop].villagename})
				}));
				villageboundriessource.addFeature(featureGeom);
			}
		}
	}, errorCB);

	tx.executeSql('SELECT type, geom FROM landmarks', [], function(tr, results){
		var landmarkssource=landmarkslayer.getSource();
		landmarkssource.clear();
		var landmarksresult=results.rows;
		for(landmarksloop=0; landmarksloop<landmarksresult.length; landmarksloop++)
		{ 
			//console.log(landmarksresult[landmarksloop].type)
			if(landmarksresult[landmarksloop].geom!="")
			{
				format = new ol.format.WKT();
				featureGeom = format.readFeature(landmarksresult[landmarksloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				featureGeom.setStyle(getlandmartstyle(landmarksresult[landmarksloop].type));
				landmarkssource.addFeature(featureGeom);
			}
		}
		var extent = landmarkssource.getExtent();
		map.getView().fit(extent, map.getSize());
	}, errorCB);

	tx.executeSql('SELECT resondantcode, respondantname, block, grampanchayat, village, gender, housecode, hohname, relationwithhoh, occupation, dateofbirth, status, geom FROM mmpbenfi WHERE surveyworkitemmappingcode ="'+surveyworkitemmappingcode+'" AND  surveycode="'+survey+'" AND  block IN ('+localStorage.BENF_LOAD_BLOCK+') AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+') ORDER BY status', [], resultBLBeneficiaryList, errorCB);
}


function resultBLBeneficiaryList(tx, results)
{
	htmlcontent="";
	blitems=results.rows;
	benfsource=benflayer.getSource();
	benfsource.clear();
	count=0;
	$("#bencount").html(blitems.length);
	if(blitems.length>0)
	{
		for(blitemsloop=0; blitemsloop<blitems.length; blitemsloop++)
		{
			if(blitems[blitemsloop].resondantcode!="")
			{
				if(blitems[blitemsloop].status==0)
				{
					count++; $("#bencounttodo").html(count);
					htmlcontent+='<div class="col-sm-12 card odd" ><div class="card-body"><h6 class="card-title" onclick=startsurvey("'+blitems[blitemsloop].resondantcode+'")>'+blitems[blitemsloop].respondantname +'</h6><p class="card-text" onclick=startsurvey("'+blitems[blitemsloop].resondantcode+'")>'+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(blitems[blitemsloop].status==1){
					htmlcontent+='<div class="col-sm-12 card even"><div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-open-o" style="float: none;"> </span>'+blitems[blitemsloop].respondantname +'</h6><p class="card-text" >'+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(blitems[blitemsloop].status==2){
					htmlcontent+='<div class="col-sm-12 card even"><div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-o" style="float: none;"> </span>'+blitems[blitemsloop].respondantname +'</h6><p class="card-text" >'+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(blitems[blitemsloop].status==3){
					htmlcontent+='<div class="col-sm-12 card even"><div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-o" style="float: none;"> </span>'+blitems[blitemsloop].respondantname +'</h6><p class="card-text" >'+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}





				else{
					
				}
				if(blitems[blitemsloop].resondantcode!="" && blitems[blitemsloop].geom!="undefined" && blitems[blitemsloop].geom!="")
				{

					format = new ol.format.WKT();
					var featureGeom="";
					featureGeom = format.readFeature(blitems[blitemsloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
					
					if(blitems[blitemsloop].status==0 || blitems[blitemsloop].status==4)
					{featureGeom.setStyle(todo);}
					else if(blitems[blitemsloop].status==1)
					{featureGeom.setStyle(inprogress);}
					else if(blitems[blitemsloop].status==2)
					{featureGeom.setStyle(submitted);}
					else if(blitems[blitemsloop].status==3)
					{featureGeom.setStyle(synced);}
					
					//console.log(featureGeom.get('respondentcode'));

					benfsource.addFeature(featureGeom);
				}else{}
			}
		}
		var extent = benfsource.getExtent();
		map.getView().fit(extent, map.getSize());
		
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
		SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlBlEditBeneficiarylist, errorCB, pageloadedsuccess);
	}, 60);
}
	
function sqlBlEditBeneficiarylist(tx)
{
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	tx.executeSql('SELECT resondantcode, respondantname, block, grampanchayat, village, gender, housecode, hohname, relationwithhoh, occupation, dateofbirth, geom FROM mmpbenfi WHERE status="1" AND surveycode="'+survey+'" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'"', [], resultBlEditBeneficiarylist, errorCB); 
}


function resultBlEditBeneficiarylist(tx, results)
{
	htmlcontent="";
	blitems=results.rows;
	$("#bencount").html(blitems.length);
	for(blitemsloop=0; blitemsloop<blitems.length; blitemsloop++)
	{

		if(blitems[blitemsloop].resondantcode!="")
		{
			htmlcontent+='<div class="col-sm-12 card odd" ><div class="card-body"><h6 class="card-title" onclick=editsurvey("'+blitems[blitemsloop].resondantcode+'") style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-open-o" style="float: none;"> </span>'+blitems[blitemsloop].respondantname+'</h6><p class="card-text" onclick=editsurvey("'+blitems[blitemsloop].resondantcode+'")>'+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
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
					SpinnerDialog.show("Samuday 360", "Loading Beneficiaries...", true);
					var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
					db.transaction(sqlmsselectBeneficiarylist, errorCB, pageloadedsuccess);
				}, 60);

			}else{navigator.notification.alert("Please Select village", function(){}, 'Samuday 360','Done');}
		}else{navigator.notification.alert("Please Select GP", function(){}, 'Samuday 360','Done');}
	}else{navigator.notification.alert("Please Select Block", function(){}, 'Samuday 360','Done');}
}







blitems=[];

function getmsselectBeneficiarylist()
{
	
	if(typeof localStorage.BENF_LOAD_GP!="undefined" && localStorage.BENF_LOAD_GP!="")
	{
		setTimeout(function(){
		SpinnerDialog.show("Samuday 360", "Loading Beneficiaries...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlmsselectBeneficiarylist, errorCB, pageloadedsuccess);
	}, 30);
	}
	else{$("#loadbenfmodal").modal("show");}
		
}
	
function sqlmsselectBeneficiarylist(tx)
{
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
		
	tx.executeSql('SELECT * FROM gproads', [], function(tr, results){
		gproadssource=gproadslayer.getSource();
		gproadssource.clear();
		gproadsresult=results.rows;
		for(gproadsresultloop=0; gproadsresultloop<gproadsresult.length; gproadsresultloop++)
		{
			format = new ol.format.WKT();
				featureGeom = format.readFeature(gproadsresult[gproadsresultloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				//featureGeom.setStyle(style);
				//featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
				gproadssource.addFeature(featureGeom);
		}
	}, errorCB);

	tx.executeSql('SELECT * FROM shroads', [], function(tr, results){
		shroadssource=shroadslayer.getSource();
		shroadssource.clear();
		shroadsresult=results.rows;
		for(shroadsresultloop=0; shroadsresultloop<shroadsresult.length; shroadsresultloop++)
		{
			format = new ol.format.WKT();
				featureGeom = format.readFeature(shroadsresult[shroadsresultloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				//featureGeom.setStyle(style);
				//featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
				shroadssource.addFeature(featureGeom);
		}
	}, errorCB);

	tx.executeSql('SELECT * FROM villageroads', [], function(tr, results){
		villageroadssource=villageroadslayer.getSource();
		villageroadssource.clear();
		vlroadsresult=results.rows;
		for(vlroadsresultloop=0; vlroadsresultloop<vlroadsresult.length; vlroadsresultloop++)
		{
			format = new ol.format.WKT();
				featureGeom = format.readFeature(vlroadsresult[vlroadsresultloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				//featureGeom.setStyle(style);
				//featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
				villageroadssource.addFeature(featureGeom);
		}
	}, errorCB);

	tx.executeSql('SELECT DISTINCT geom, villagename FROM villageboundries', [], function(tr, results){
		var villageboundriessource=villageboundrieslayer.getSource();
		villageboundriessource.clear();
		var vlboundriesresult=results.rows;
		for(vlboundriesresultloop=0; vlboundriesresultloop<vlboundriesresult.length; vlboundriesresultloop++)
		{
			if(vlboundriesresult[vlboundriesresultloop].geom!="")
			{
				format = new ol.format.WKT();
				featureGeom = format.readFeature(vlboundriesresult[vlboundriesresultloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				featureGeom.setStyle(new ol.style.Style
				({
					fill: new ol.style.Fill({ color: 'rgba(255, 255, 255, 0.0)', weight: 1 }),
					stroke: new ol.style.Stroke({ color: 'rgba(0, 0, 0, 0.3)', width: 2 }),
					image: new ol.style.Circle({ radius: 7,
						stroke: new ol.style.Stroke ({ color: 'rgba(0, 0, 0, 0.0)', width: 2 }),
						fill: new ol.style.Fill({ color: 'rgba(0, 0, 0, 0.0)' })
					}),
					text: new ol.style.Text({ text:vlboundriesresult[vlboundriesresultloop].villagename})
				}));
				villageboundriessource.addFeature(featureGeom);
			}
		}
	}, errorCB);
	tx.executeSql('SELECT type, geom FROM landmarks', [], function(tr, results){
		var landmarkssource=landmarkslayer.getSource();
		landmarkssource.clear();
		var landmarksresult=results.rows;
		for(landmarksloop=0; landmarksloop<landmarksresult.length; landmarksloop++)
		{ 
			if(landmarksresult[landmarksloop].geom!="")
			{
				format = new ol.format.WKT();
				featureGeom = format.readFeature(landmarksresult[landmarksloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				featureGeom.setStyle(getlandmartstyle(landmarksresult[landmarksloop].type));
				landmarkssource.addFeature(featureGeom);
			}
		}
		var extent = landmarkssource.getExtent();
		map.getView().fit(extent, map.getSize());
	}, errorCB);

	tx.executeSql('SELECT resondantcode, respondantname, hohname, housecode, block, grampanchayat, village, gender, hohname, relationwithhoh, occupation, dateofbirth, geom, status FROM mmpbenfi WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"  AND  block IN ('+localStorage.BENF_LOAD_BLOCK+') AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+') AND status="0"', [], resultmsselectBeneficiarylist, errorCB); 
}


function resultmsselectBeneficiarylist(tx, results)
{
	htmlcontent="";
	blitems=results.rows;
	benfsource=benflayer.getSource();
	benfsource.clear();
	$("#bencount").html(blitems.length);
	if(blitems.length>0)
	{
		for(blitemsloop=0; blitemsloop<blitems.length; blitemsloop++)
		{
			if(blitems[blitemsloop].resondantcode!="" && blitems[blitemsloop].geom!="undefined")
			{
				if(blitems[blitemsloop].status==0 || blitems[blitemsloop].status==4)
				{
					htmlcontent+='<div class="col-sm-12 card add"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" onclick=selectcard("'+blitemsloop+'","'+blitems[blitemsloop].resondantcode+'")>'+blitems[blitemsloop].respondantname+'</h6><p class="card-text" onclick=selectcard("'+blitemsloop+'","'+blitems[blitemsloop].resondantcode+'")> HoH -  '+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(blitems[blitemsloop].status==1){
					htmlcontent+='<div class="col-sm-12 card even" style="background-color:#c2c2c2"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-open-o" style="float: none;"> </span>'+blitems[blitemsloop].respondantname+'</h6><p class="card-text" > HoH -  '+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(blitems[blitemsloop].status==2){
					htmlcontent+='<div class="col-sm-12 card even" style="background-color:#c2c2c2"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-o" style="float: none;"> </span>'+blitems[blitemsloop].respondantname+'</h6><p class="card-text" > HoH -  '+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(blitems[blitemsloop].status==3){
					htmlcontent+='<div class="col-sm-12 card even" style="background-color:#c2c2c2"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-o" style="float: none;"> </span>'+blitems[blitemsloop].respondantname+'</h6><p class="card-text" > HoH -  '+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}


				format = new ol.format.WKT();
				var featureGeom="";
				if(typeof blitems[blitemsloop].geom!="undefined" && blitems[blitemsloop].geom!="")
				{
					featureGeom = format.readFeature(blitems[blitemsloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					if(blitems[blitemsloop].status==0 || blitems[blitemsloop].status==4)
					{featureGeom.setStyle(todo);}
					else if(blitems[blitemsloop].status==1)
					{featureGeom.setStyle(inprogress);}
					else if(blitems[blitemsloop].status==2)
					{featureGeom.setStyle(submitted);}
					else if(blitems[blitemsloop].status==3)
					{featureGeom.setStyle(synced);}

					featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
					benfsource.addFeature(featureGeom);
				}
			}
		}
		if(benfsource.getFeatures().length>0)
		{
			var extent = benfsource.getExtent();
			map.getView().fit(extent, map.getSize());
		}
	}
	else{
		htmlcontent="<hr style='background-color:white;'><h4 align='center' style='width:100%;'>No Records Found</h4>";
	}

	$("#datapool").html(htmlcontent);
}




//--------  Save selected  -------------



function saveSelectedBenf()
{
	setTimeout(function(){
		SpinnerDialog.show("Samuday 360", "Saving Selected...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlGetMSurveyDates, errorCB, saveSelectedBenfsuccess);
	}, 60);
}

function sqlGetMSurveyDates(tx)
{
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	tx.executeSql('SELECT fromsurveydate, tosurveydate FROM monitoringsurveydates WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"', [], sqlSaveSelectedBenfUpdate, errorCB);
}


 

function saveSelectedBenfsuccess(tx)
{
	SpinnerDialog.hide();
	navigator.notification.alert("Your Selection Is Saved", function(){getmsselectBeneficiarylist()}, 'Samuday 360','Done');
	$("#beneficiaryadd").hide();
	$("#beneficiaryaddcontinue").show()	
}

	
function sqlSaveSelectedBenfUpdate(tx, results)
{
	msdates=results.rows;
	msdateslen=results.rows.length;
	var updatetime=(new Date()).toISOString();
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	for(benlen=0; benlen<selectedbeneficiaryarray.length; benlen++)
	{
		tx.executeSql('UPDATE mmpbenfi SET status="4", empid="'+localStorage.employeeid+'", updatedon="'+updatetime+'" WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND resondantcode="'+selectedbeneficiaryarray[benlen]+'"');
		for(msdatesloop=0; msdatesloop<msdateslen; msdatesloop++)
		{
			tx.executeSql('INSERT INTO mmp_ms_benf (surveyworkitemmappingcode, surveycode, respondantcode, fromdate, todate, status, empid) VALUES("'+surveyworkitemmappingcode+'", "'+survey+'", "'+selectedbeneficiaryarray[benlen]+'", "'+msdates[msdatesloop].fromsurveydate+'", "'+msdates[msdatesloop].tosurveydate+'", "0", "'+localStorage.employeeid+'")');
		}			
	}
	$("#datapool").html("");
	tx.executeSql('SELECT resondantcode, respondantname, block, grampanchayat, village, gender, housecode, hohname, relationwithhoh, occupation, dateofbirth, geom FROM mmpbenfi WHERE status="0" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"', [], resultmsselectBeneficiarylist, errorCB); 
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
					SpinnerDialog.show("Samuday 360", "Loading Beneficiaries...", true);
					var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
					db.transaction(sqlMonitoringselectedBenef, errorCB, pageloadedsuccess);
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
			SpinnerDialog.show("Samuday 360", "Loading Beneficiaries...", true);
			var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
			db.transaction(sqlMonitoringselectedBenef, errorCB, pageloadedsuccess);
		}, 60);
	}
	else{$("#loadbenfmodal").modal("show");}
}
	
function sqlMonitoringselectedBenef(tx)
{
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);

	tx.executeSql('SELECT * FROM gproads', [], function(tr, results){
		gproadssource=gproadslayer.getSource();
		gproadssource.clear();
		gproadsresult=results.rows;
		for(gproadsresultloop=0; gproadsresultloop<gproadsresult.length; gproadsresultloop++)
		{
			format = new ol.format.WKT();
				featureGeom = format.readFeature(gproadsresult[gproadsresultloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				//featureGeom.setStyle(style);
				//featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
				gproadssource.addFeature(featureGeom);
		}
	}, errorCB);

	tx.executeSql('SELECT * FROM shroads', [], function(tr, results){
		shroadssource=shroadslayer.getSource();
		shroadssource.clear();
		shroadsresult=results.rows;
		for(shroadsresultloop=0; shroadsresultloop<shroadsresult.length; shroadsresultloop++)
		{
			format = new ol.format.WKT();
				featureGeom = format.readFeature(shroadsresult[shroadsresultloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				//featureGeom.setStyle(style);
				//featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
				shroadssource.addFeature(featureGeom);
		}
	}, errorCB);

	tx.executeSql('SELECT * FROM villageroads', [], function(tr, results){
		villageroadssource=villageroadslayer.getSource();
		villageroadssource.clear();
		vlroadsresult=results.rows;
		for(vlroadsresultloop=0; vlroadsresultloop<vlroadsresult.length; vlroadsresultloop++)
		{
			format = new ol.format.WKT();
				featureGeom = format.readFeature(vlroadsresult[vlroadsresultloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				//featureGeom.setStyle(style);
				//featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
				villageroadssource.addFeature(featureGeom);
		}
	}, errorCB);

	tx.executeSql('SELECT DISTINCT geom, villagename FROM villageboundries', [], function(tr, results){
		var villageboundriessource=villageboundrieslayer.getSource();
		villageboundriessource.clear();
		var vlboundriesresult=results.rows;
		for(vlboundriesresultloop=0; vlboundriesresultloop<vlboundriesresult.length; vlboundriesresultloop++)
		{
			if(vlboundriesresult[vlboundriesresultloop].geom!="")
			{
				format = new ol.format.WKT();
				featureGeom = format.readFeature(vlboundriesresult[vlboundriesresultloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				featureGeom.setStyle(new ol.style.Style
				({
					fill: new ol.style.Fill({ color: 'rgba(255, 255, 255, 0.0)', weight: 1 }),
					stroke: new ol.style.Stroke({ color: 'rgba(0, 0, 0, 0.3)', width: 2 }),
					image: new ol.style.Circle({ radius: 7,
						stroke: new ol.style.Stroke ({ color: 'rgba(0, 0, 0, 0.0)', width: 2 }),
						fill: new ol.style.Fill({ color: 'rgba(0, 0, 0, 0.0)' })
					}),
					text: new ol.style.Text({ text:vlboundriesresult[vlboundriesresultloop].villagename})
				}));
				villageboundriessource.addFeature(featureGeom);
			}
		}
	}, errorCB);
	tx.executeSql('SELECT type, geom FROM landmarks', [], function(tr, results){
		var landmarkssource=landmarkslayer.getSource();
		landmarkssource.clear();
		var landmarksresult=results.rows;
		for(landmarksloop=0; landmarksloop<landmarksresult.length; landmarksloop++)
		{ 
			if(landmarksresult[landmarksloop].geom!="")
			{
				format = new ol.format.WKT();
				featureGeom = format.readFeature(landmarksresult[landmarksloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				featureGeom.setStyle(getlandmartstyle(landmarksresult[landmarksloop].type));
				landmarkssource.addFeature(featureGeom);
			}
		}
		var extent = landmarkssource.getExtent();
		map.getView().fit(extent, map.getSize());
	}, errorCB);

	surveybenfdate=new Date().toISOString().slice(0, 10);;
	if(typeof localStorage.surveybenfdate!='undefined' && localStorage.surveybenfdate!=""){ surveybenfdate=CryptoJS.AES.decrypt(localStorage.surveybenfdate, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1)}
	$("#monitoringdate").html(surveybenfdate);
	//console.log(surveybenfdate);
	tx.executeSql('SELECT * FROM ms_mmp_benf_selected WHERE Datetime(fromdate) <= Datetime("'+surveybenfdate+'") AND Datetime(todate) > Datetime("'+surveybenfdate+'") AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"  AND  block IN ('+localStorage.BENF_LOAD_BLOCK+') AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+') ORDER BY status', [], resultMonitoringselectedBenef, errorCB);
	tx.executeSql('SELECT fromsurveydate, tosurveydate FROM monitoringsurveydates WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"', [], sqlsurveybenflistdates, errorCB);
}


function resultMonitoringselectedBenef(tx, results)
{
	htmlcontent="";
	blitems=results.rows;
	benfsource=benflayer.getSource();
	benfsource.clear();
	count=0;
	$("#bencount").html(blitems.length);
	if(blitems.length>0)
	{
		surveyworkitemstartdate=blitems[0].fromdate;
		localStorage.surveyworkitemstartdate=CryptoJS.AES.encrypt('"'+surveyworkitemstartdate+'"', "Samuday360");

		for(blitemsloop=0; blitemsloop<blitems.length; blitemsloop++)
		{
			if(blitems[blitemsloop].resondantcode!="")
			{
				if(blitems[blitemsloop].status==0 || blitems[blitemsloop].status==4)
				{
					count++;
					$("#bencounttodo").html(count);
					htmlcontent+='<div class="col-sm-12 card odd"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" onclick=startsurvey("'+blitems[blitemsloop].resondantcode+'")>'+blitems[blitemsloop].respondantname +'</h6><p class="card-text" onclick=startsurvey("'+blitems[blitemsloop].resondantcode+'")>'+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(blitems[blitemsloop].status==1){
					htmlcontent+='<div class="col-sm-12 card even"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-open-o" style="float: none;"> </span>'+blitems[blitemsloop].respondantname +'</h6><p class="card-text" >'+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(blitems[blitemsloop].status==2){
					htmlcontent+='<div class="col-sm-12 card even"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-o" style="float: none;"> </span>'+blitems[blitemsloop].respondantname +'</h6><p class="card-text" >'+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}else if(blitems[blitemsloop].status==3){
					htmlcontent+='<div class="col-sm-12 card even"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-o" style="float: none;"> </span>'+blitems[blitemsloop].respondantname +'</h6><p class="card-text" >'+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}

				format = new ol.format.WKT();
				var featureGeom="";
				featureGeom = format.readFeature(blitems[blitemsloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				
				if(blitems[blitemsloop].status==0 || blitems[blitemsloop].status==4)
				{featureGeom.setStyle(todo);}
				else if(blitems[blitemsloop].status==1)
				{featureGeom.setStyle(inprogress);}
				else if(blitems[blitemsloop].status==2)
				{featureGeom.setStyle(submitted);}
				else if(blitems[blitemsloop].status==3)
				{featureGeom.setStyle(synced);}
				
				featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
				benfsource.addFeature(featureGeom);
			}
		} 
		var extent = benfsource.getExtent();
		map.getView().fit(extent, map.getSize());
		$("#datapool").html(htmlcontent);
	}else{
		surveyworkitemstartdate="";
		localStorage.surveyworkitemstartdate="";
		$("#datapool").html("<hr style='background-color:white;'><h4 align='center' style='width:100%;'>No Records Found</h4>");
	}






}

function sqlsurveybenflistdates(tx, results)
{
	datesarry=[];
	for(datesloop=0; datesloop<results.rows.length; datesloop++)
	{ datesarry.push(results.rows[datesloop].fromsurveydate); }
	 $("#event-cal-container").simpleCalendar({
                events: datesarry,
                // eventsInfo: ['John\'s Birthday', 'Janet\'s Marriage','Graduation Day', 'Final Exams !'],
                selectCallback: function(date){
                	surveybenfdate=date;
                	localStorage.surveybenfdate=CryptoJS.AES.encrypt('"'+surveybenfdate+'"', "Samuday360");
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
		SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqltMonitoringEditBeneficiarylist, errorCB, pageloadedsuccess);
	}, 60);
}
	
function sqltMonitoringEditBeneficiarylist(tx)
{
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	$("#monitoringdate").html(CryptoJS.AES.decrypt(localStorage.surveybenfdate, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1));
	tx.executeSql('SELECT *, (SELECT COUNT(questioncode) FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND ms_mmp_benf_selected.resondantcode=surveyparentresponse.respondentcode  AND ms_mmp_benf_selected.fromdate=surveyparentresponse.surveydate) AS totalparentcount, (SELECT COUNT(questioncode) FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND ms_mmp_benf_selected.resondantcode=surveychildresponse.respondentcode AND ms_mmp_benf_selected.fromdate=surveychildresponse.surveydate) AS totalchildcount, (SELECT COUNT(questioncode) FROM surveyparentresponse WHERE answer !="" AND answer IS NOT NULL  AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND ms_mmp_benf_selected.resondantcode=surveyparentresponse.respondentcode  AND ms_mmp_benf_selected.fromdate=surveyparentresponse.surveydate) AS parentansweredcount, (SELECT COUNT(questioncode) FROM surveychildresponse WHERE answer !="" AND answer IS NOT NULL AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND ms_mmp_benf_selected.resondantcode=surveychildresponse.respondentcode  AND ms_mmp_benf_selected.fromdate=surveychildresponse.surveydate) AS childansweredcount FROM ms_mmp_benf_selected WHERE Datetime(fromdate) <= Datetime("'+surveybenfdate+'") AND Datetime(todate) > Datetime("'+surveybenfdate+'") AND status="1" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"', [], resulttMonitoringEditBeneficiarylist, errorCB);
	tx.executeSql('SELECT fromsurveydate FROM monitoringsurveydates WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"', [], sqlEditsurveybenflistdates, errorCB);


}


function sqlEditsurveybenflistdates(tx, results)
{
	datesarry=[];
	for(datesloop=0; datesloop<results.rows.length; datesloop++)
	{ datesarry.push(results.rows[datesloop].fromsurveydate); }

	 $("#event-cal-container").simpleCalendar({
                events: datesarry,
                // eventsInfo: ['John\'s Birthday', 'Janet\'s Marriage','Graduation Day', 'Final Exams !'],
                selectCallback: function(date){
                	surveybenfdate=date;
                	localStorage.surveybenfdate=CryptoJS.AES.encrypt('"'+surveybenfdate+'"', "Samuday360");
                	if(new Date(surveybenfdate)<new Date())
                	{getMonitoringEditBeneficiarylist();}else{navigator.notification.alert("Date Should Not Be Future", function(){}, 'Samuday 360','Done');}
                    	
                    $("#event-cal-container").toggle();
                }
            });

}


function resulttMonitoringEditBeneficiarylist(tx, results)
{
	htmlcontent="";
	blitems=results.rows;
	$("#bencount").html(blitems.length);
	if(blitems.length>0)
	{
		surveyworkitemstartdate=blitems[0].fromdate;
		localStorage.surveyworkitemstartdate=CryptoJS.AES.encrypt('"'+surveyworkitemstartdate+'"', "Samuday360");
		//alert(surveyworkitemstartdate);
		for(blitemsloop=0; blitemsloop<blitems.length; blitemsloop++)
		{
			if(blitems[blitemsloop].resondantcode!="")
			{
				totalquest=blitems[blitemsloop].totalparentcount+blitems[blitemsloop].totalchildcount;
				totalanswered=blitems[blitemsloop].parentansweredcount+blitems[blitemsloop].childansweredcount;  
			htmlcontent+='<div class="col-sm-12 card"  id="'+blitemsloop+'"> <div class="card-body"><h6 class="card-title" onclick=editsurvey("'+blitems[blitemsloop].resondantcode+'") style="white-space: nowrap; overflow: auto;"> <span class="fa fa-envelope-open-o" style="float: none;"> </span>'+blitems[blitemsloop].respondantname +'      ('+totalanswered+'/'+totalquest+')</h6><p class="card-text" onclick=editsurvey("'+blitems[blitemsloop].resondantcode+'")>'+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
			}
		}
		$("#datapool").html(htmlcontent);
	}else{
		surveyworkitemstartdate="";
		localStorage.surveyworkitemstartdate="";
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
		//SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlFilterLoadBlocks, errorCB, pageloadedsuccess);
	}, 60);
}

function sqlFilterLoadBlocks(tx)
{
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	//workitem=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	tx.executeSql('SELECT DISTINCT block FROM mmpbenfi WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"', [], successFilterLoadBlocks, errorCB);
	tx.executeSql('SELECT DISTINCT buildingtype FROM mmpbenfi WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"', [], successFilterLoadbuildingtype, errorCB);
}
 function successFilterLoadBlocks(tx, results)
 {
 	var path = window.location.pathname.split("/").pop();
 	var elemblock=document.getElementById('block');
 	var filterelemblock="";
 	if(path=="surveybeneficiarylist.html" || path=="blsurveybeneficiarylist.html" || path=="selectsbeneficiary.html")
 	{filterelemblock=document.getElementById('loadbenfblock');}

	for(i=0; i<results.rows.length;i++)
	{
		if(results.rows[i].block!="" && results.rows[i].block!=null)
		{
			elemblock.options[i]=new Option(results.rows[i].block,results.rows[i].block);

			if(path=="surveybeneficiarylist.html" || path=="blsurveybeneficiarylist.html"|| path=="selectsbeneficiary.html")
 			{filterelemblock.options[i]=new Option(results.rows[i].block,results.rows[i].block);}
		}
	}
 }

function successFilterLoadbuildingtype(tx, results)
 {
 	elembuildingtype=document.getElementById('buildingtype');
	for(i=0; i<results.rows.length;i++)
	{ if(results.rows[i].block!="" && results.rows[i].block!=null){elembuildingtype.options[i]=new Option(results.rows[i].block,results.rows[i].block);}}
 }

$("#block").on("change", function(){
	var loadfiltblocktemp=$("#block").val()
	filtervillageblock= '"' + loadfiltblocktemp.join('", "') + '"';
	setTimeout(function(){
		SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlFilterLoadGP, errorCB, pageloadedsuccess);
	}, 60);
	
})

$("#loadbenfblock").on("change", function(){
	
	var loadfiltblocktemp=$("#loadbenfblock").val()
	filtervillageblock= '"' + loadfiltblocktemp.join('", "') + '"';
	setTimeout(function(){
		SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlFilterLoadGP, errorCB, pageloadedsuccess);
	}, 60);
	
})

function sqlFilterLoadGP(tx)
{
	var path = window.location.pathname.split("/").pop();
	var filterstatus="0";
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	//workitem=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	if(path=="blsurveybeneficiarylist.html" || path=="selectsbeneficiary.html"){filterstatus="0"}
	else if(path=="bleditbeneficiary.html" && path=="editbeneficiary.html"){filterstatus="1"}
	else if(path=="surveybeneficiarylist.html"){filterstatus="4"}
	tx.executeSql('SELECT DISTINCT grampanchayat FROM mmpbenfi WHERE status="'+filterstatus+'" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND block IN ('+filtervillageblock+')', [], successFilterLoadgp, errorCB);	
}

function successFilterLoadgp(tx, results)
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
		if(results.rows[i].grampanchayat!="" && results.rows[i].grampanchayat!=null)
			{
				elemfiltergp.options[i]=new Option(results.rows[i].grampanchayat,results.rows[i].grampanchayat);
				loadbenffiltergp.options[i]=new Option(results.rows[i].grampanchayat,results.rows[i].grampanchayat);
			}
		}
}


$("#filtergp").on("change", function(){
	var loadfiltgptemp=$("#filtergp").val()
	filtergpsqlparam= '"' + loadfiltgptemp.join('", "') + '"';
	setTimeout(function(){
		SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlFilterLoadVillage, errorCB, pageloadedsuccess);
	}, 60);
	
})

$("#loadbenffiltergp").on("change", function(){
	var loadfiltgptemp=$("#loadbenffiltergp").val()
	filtergpsqlparam= '"' + loadfiltgptemp.join('", "') + '"';
	setTimeout(function(){
		SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlFilterLoadVillage, errorCB, pageloadedsuccess);
	}, 60);
	
})
function sqlFilterLoadVillage(tx)
{
	var path = window.location.pathname.split("/").pop();
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	//workitem=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	if(path=="blsurveybeneficiarylist.html" || path=="selectsbeneficiary.html"){filterstatus="0"}
	else if(path=="bleditbeneficiary.html" && path=="editbeneficiary.html"){filterstatus="1"}
	else if(path=="surveybeneficiarylist.html"){filterstatus="4"}

	tx.executeSql('SELECT DISTINCT village FROM mmpbenfi WHERE status="'+filterstatus+'" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND block IN ('+filtervillageblock+') AND grampanchayat IN ('+filtergpsqlparam+')', [], successFilterLoadVillage, errorCB);	
}

function successFilterLoadVillage(tx, results)
{
	var elemfiltervillage=document.getElementById('filtervillage');
	var loadbenffiltervillage=document.getElementById('loadbenffiltervillage');
	elemfiltervillage.length=0;
	loadbenffiltervillage.length=0;
	for(i=0; i<results.rows.length;i++)
	{
		if(results.rows[i].village!="" && results.rows[i].village!=null)
		{
			elemfiltervillage.options[i]=new Option(results.rows[i].village,results.rows[i].villagecode);
			loadbenffiltervillage.options[i]=new Option(results.rows[i].village,results.rows[i].villagecode);
		}
	}
}

function filterApply(type)
{
	filterstatustype=type;
	setTimeout(function(){
		SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlFilterApply, errorCB, pageloadedsuccess);
	}, 60);
	
}


function sqlFilterApply(tx, results)
{
	var tempblock = $("#block").val();
	var tempgp = $("#filtergp").val();
	var tempvillage = $("#filtervillage").val();
	
	localStorage.BENF_LOAD_BLOCK='';
	localStorage.BENF_LOAD_GP='';
	localStorage.BENF_LOAD_VILLAGE='';

	if(tempblock!=""){localStorage.BENF_LOAD_BLOCK= '"' + tempblock.join('", "') + '"'};
	if(tempgp!=""){localStorage.BENF_LOAD_GP= '"' + tempgp.join('", "') + '"'};
	if(tempvillage!=""){localStorage.BENF_LOAD_VILLAGE= '"' + tempvillage.join('", "') + '"'};

	whereconditionsvalue="";
	whereconditionskey="";
	filterquery="";
	
	var path = window.location.pathname.split("/").pop();
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	var survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	var surveyworkitemstartdate=CryptoJS.AES.decrypt(localStorage.surveyworkitemstartdate, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	if(path=="surveybeneficiarylist.html" || path=="editbeneficiary.html")
	{
		filterquery='SELECT * FROM ms_mmp_benf_selected WHERE fromdate ="'+surveyworkitemstartdate+'" AND status="'+filterstatustype+'" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"'	
	}else
	{
		filterquery='SELECT resondantcode, respondantname, block, grampanchayat, village, gender, hohname, relationwithhoh, occupation, dateofbirth, status, geom FROM mmpbenfi WHERE status="'+filterstatustype+'" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"';
	}
	
	// AND  block IN ('+localStorage.BENF_LOAD_BLOCK+') AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+')
	// 
	if(typeof localStorage.BENF_LOAD_BLOCK !="undefined" && localStorage.BENF_LOAD_BLOCK !=""){filterquery+=' AND block IN ('+localStorage.BENF_LOAD_BLOCK+') '}
	if(typeof localStorage.BENF_LOAD_GP !="undefined" && localStorage.BENF_LOAD_GP !=""){filterquery+=' AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') '}
	if(typeof localStorage.BENF_LOAD_VILLAGE !="undefined" && localStorage.BENF_LOAD_VILLAGE !=""){filterquery+=' AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+')'}
	
// 	if(whereconditionsvalue.length>0)
// 	{ 
// // 		// whereinvalue="(";
// // 		// for(whereinloop=0; whereinloop<whereconditionsvalue.length; whereinloop++){
// // 		// 	if(whereinloop==0){whereinvalue+='"'+whereconditionsvalue[whereinloop]+'"';}
// // 		// 	else {whereinvalue+=', "'+whereconditionsvalue[whereinloop]+'"'}
// // 		// }
// // 		// whereinvalue+=")";
// // jj

// 		// whereinvalue= '"' + whereconditionsvalue.join('", "') + '"';
	
// 		// {filterquery+='AND '+whereconditionskey+' IN ('+whereinvalue+') '}
// 	}

// 	if($("#buildingtype").val()!="" && $("#buildingtype").val()!=null){ filterquery+=' AND buildingtype="'+$("#buildingtype").val()+'"'}
	
// 	if($("#filterorderby").val()!="" && $("#filterorderby").val()!=null){filterquery+=' ORDER BY "'+$("#filterorderby").val()	+'"'}
	//console.log(filterquery);
	
	
	filtertrancefunction(tx, filterquery)
}
function filtertrancefunction(tx, localfilterquery){
	tx.executeSql(localfilterquery, [], successFilterApply, errorCB);
}

function successFilterApply(tx, results)
{
	var page = window.location.pathname.split("/").pop();
	if(page=="selectsbeneficiary.html")
	{resultmsselectBeneficiarylist(tx, results)}
	else if(page=="bleditbeneficiary.html")
	{resultBlEditBeneficiarylist(tx, results)}
	else if(page=="blsurveybeneficiarylist.html")
	{resultBLBeneficiaryList(tx, results)}
	else if(page=="editbeneficiary.html")
	{resulttMonitoringEditBeneficiarylist(tx, results)}
	else if(page=="surveybeneficiarylist.html")
	{resultMonitoringselectedBenef(tx, results)}
}
// ============ *** FILTER ENDS ***============


// ============ *** SEARCH BEGIN ***============

function searchbenf(type){
	filterstatustype=type;
	setTimeout(function(){
		SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlSearchBenf, errorCB, pageloadedsuccess);
	}, 60);
	
}

function sqlSearchBenf(tx)
{
	searchquery="";
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	surveyworkitemstartdate=CryptoJS.AES.decrypt(localStorage.surveyworkitemstartdate, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	var path = window.location.pathname.split("/").pop();
	if(path=="surveybeneficiarylist.html" || path=="editbeneficiary.html")
	{
		searchquery='SELECT * FROM ms_mmp_benf_selected WHERE fromdate ="'+surveyworkitemstartdate+'" AND status="'+filterstatustype+'" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'"  AND  block IN ('+localStorage.BENF_LOAD_BLOCK+') AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+')'
	}else{
		searchquery='SELECT resondantcode, respondantname, block, grampanchayat, village, gender, hohname, relationwithhoh, occupation, dateofbirth, status, geom FROM mmpbenfi WHERE status="'+filterstatustype+'" AND surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND  block IN ('+localStorage.BENF_LOAD_BLOCK+') AND  grampanchayat IN ('+localStorage.BENF_LOAD_GP+') AND  village IN ('+localStorage.BENF_LOAD_VILLAGE+')'
	}

	if($("#searchinput").val()!=""){searchquery+='AND (UPPER(respondantname) LIKE "%'+$("#searchinput").val()+'%" OR UPPER(hohname) LIKE "%'+$("#searchinput").val()+'%" )'}
	tx.executeSql(searchquery, [], successFilterApply, errorCB);
}


// ============ *** SEARCH ENDS ***============





// ============ *** Download village data Begin*** ========

function loadlocations()
{
	setTimeout(function(){
		SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlloadlocations, errorCB);
	}, 60);
}

function sqlloadlocations(tx)
{
	workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	tx.executeSql("SELECT workitemscode, locationcode, locationname, locationtype FROM locations WHERE workitemscode='"+workitemcode+"'",[], loadbendataserverdata)
}

function insertorupdatebendata()
{
	setTimeout(function(){
		////SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(sqlinsertorupdatebendata, errorCB,monitoringbensownloadsuccess);
	}, 60);
}
//pageloadedsuccess
function sqlinsertorupdatebendata(tx)
{
	var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	var benedata=loadbendata.survey_bene;
	buildinggeomsetlist=loadbendata.buildinggeom[0];
	var path = window.location.pathname.split("/").pop();

	if(path=="baselineworkiteminfo.html")
	{
		for(survey_beneloop=0; survey_beneloop<benedata.length; survey_beneloop++)
		{
			survey_beneset=benedata[survey_beneloop];
			tx.executeSql('INSERT INTO mmpbenfi (surveyworkitemmappingcode, surveycode,resondantcode,respondantname,gender,hohname,relationwithhoh,occupation,dateofbirth,block,grampanchayat,village, buildingcode, housecode,  buildingtype, geom, status) VALUES ("'+surveyworkitemmappingcode+'", "'+survey+'", "'+survey_beneset.resondantcode+'", "'+survey_beneset.respondantname+'", "'+survey_beneset.gender+'", "'+survey_beneset.hohname+'", "'+survey_beneset.relationwithhoh+'", "'+survey_beneset.occupation+'", "'+survey_beneset.dateofbirth+'", "'+survey_beneset.blockname+'","'+survey_beneset.gpname+'", "'+survey_beneset.village+'","'+survey_beneset.buildingcode+'","'+survey_beneset.housecode +'", "'+survey_beneset.buildingtype +'", "'+buildinggeomsetlist[survey_beneset.buildingcode]+'",  "0")');
		}
	}else if(path=="monitoringworkiteminfo.html"){
		var monitoringsurveyfreqlen=monitoringsurveyfreq.length;
		var updatetime=(new Date()).toISOString();

		for(benlen=0; benlen<benedata.length; benlen++)
		{
			survey_beneset=benedata[benlen];
				// console.log(survey_beneset);
				// console.log([survey_beneset.buildingcode]);
				// console.log(buildinggeomsetlist);
				// console.log(buildinggeomsetlist[survey_beneset.buildingcode]);
			tx.executeSql('INSERT INTO mmpbenfi (surveyworkitemmappingcode, surveycode,resondantcode,respondantname,gender,hohname,relationwithhoh,occupation,dateofbirth,block,grampanchayat,village, buildingcode, housecode,  buildingtype, geom, status) VALUES ("'+surveyworkitemmappingcode+'", "'+survey+'", "'+survey_beneset.resondantcode+'", "'+survey_beneset.respondantname+'", "'+survey_beneset.gender+'", "'+survey_beneset.hohname+'", "'+survey_beneset.relationwithhoh+'", "'+survey_beneset.occupation+'", "'+survey_beneset.dateofbirth+'", "'+survey_beneset.blockname+'","'+survey_beneset.gpname+'", "'+survey_beneset.village+'","'+survey_beneset.buildingcode+'","'+survey_beneset.housecode +'", "'+survey_beneset.buildingtype +'", "'+buildinggeomsetlist[survey_beneset.buildingcode]+'",  "0")');
			// for(msdatesloop=0; msdatesloop<monitoringsurveyfreqlen; msdatesloop++)
			// {
			// 	tx.executeSql('INSERT INTO mmp_ms_benf (surveyworkitemmappingcode, surveycode, respondantcode, fromdate, todate, status) VALUES("'+surveyworkitemmappingcode+'", "'+survey+'", "'+survey_beneset.resondantcode+'", "'+monitoringsurveyfreq[msdatesloop].fromsurveydate+'", "'+monitoringsurveyfreq[msdatesloop].tosurveydate+'", "0")');
			// }			
		}
	}

	var loadbendataroadarray_villlen=loadbendata.roadarray_vill.length
	for(villroadloop=0; villroadloop<loadbendataroadarray_villlen; villroadloop++)
	{
		villroadset=loadbendata.roadarray_vill[villroadloop]
		tx.executeSql('INSERT INTO villageroads(roadcode, geom) VALUES ("'+villroadset.road_code+'", "'+villroadset.st_astext+'")');
	}

	var villboundrieslen=loadbendata.roadarray_villBOUNDRIES.length;
	for(villboundriesloop=0; villboundriesloop<villboundrieslen; villboundriesloop++)
	{
		villboundryset=loadbendata.roadarray_villBOUNDRIES[villboundriesloop]
		if(typeof villboundryset!="undefined")
		{
			tx.executeSql('INSERT INTO villageboundries(workitemscode,roadcode, villagename, geom) VALUES ("'+workitemcode+'", "'+villboundryset.road_code+'", "'+villboundryset.villagename+'", "'+villboundryset.st_astext+'")');
		}
	}
	var landmarklen=loadbendata.buildingtypegeom.length;
	for(landmarkloop=0; landmarkloop<landmarklen; landmarkloop++)
	{
		landmarkset=loadbendata.buildingtypegeom[landmarkloop]
		tx.executeSql('INSERT INTO landmarks(workitemscode, type, geom) VALUES ("'+workitemcode+'", "'+landmarkset.type+'", "'+landmarkset.geom+'")');
	}
	////tx.executeSql('UPDATE workitemsserverstatus SET open="'+loadbendata.status.saved+'", submitted="'+loadbendata.status.submitted+'", synced="'+loadbendata.status.synced+'" WHERE workitemmmpcode="'+surveyworkitemmappingcode+'"');
}


function pageloadedsuccessbenf()
{
	SpinnerDialog.hide();
	setTimeout(function(){window.location.reload();}, 60);
}

function monitoringbensownloadsuccess()
{
	var path = window.location.pathname.split("/").pop();

	if(path=="monitoringworkiteminfo.html")
	{ downloadstatusdata();}
	else if(path=="baselineworkiteminfo.html"){
		SpinnerDialog.hide();
		userSync();
		//window.location.reload();
	}
	
}
// ============ *** Download village data END*** ========





// ============ *** Upload Parent and Child Responces Begin*** ========


function loadlocalresponces()
{
	setTimeout(function(){
		////SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(loadlocalresponcessql, errorCB);
	}, 60);
}
//pageloadedsuccess
function loadlocalresponcessql(tx)
{
	tx.executeSql("SELECT * FROM surveyparentresponse",[], function(tx, parentresult){parentresponse=parentresult.rows},errorCB);
	tx.executeSql("SELECT * FROM surveychildresponse",[], function(tx, childresult){childresponse=childresult.rows},errorCB);
	tx.executeSql("SELECT surveyworkitemmappingcode, surveycode, resondantcode, empid FROM mmpbenfi  WHERE status='4'",[], function(tx, selectedbenfresult){selectedbenfresponse=selectedbenfresult.rows},errorCB);
	setTimeout(function(){uploadsurveyresponses()},1000);
}


//========= Selected Beneneficiaries ========

function removeselectedmonitbene()
{
	setTimeout(function(){
		////SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(removeselectedmonitbenesql, errorCB);
	}, 60);
}

function removeselectedmonitbenesql(tx)
{
	tx.executeSql('SELECT surveyworkitemmappingcode, fromsurveydate, tosurveydate FROM monitoringsurveydates', [], function (tx, monitoringsurveydateslist){
		var updatetime=(new Date()).toISOString();


		for(benloop=0; benloop<selectedbenlist.length; benloop++)
		{ 
			tx.executeSql('UPDATE mmpbenfi SET status="0", empid="'+selectedbenlist[benloop].empid+'", updatedon="'+updatetime+'" WHERE surveyworkitemmappingcode="'+selectedbenlist[benloop].mappingcode+'"  AND resondantcode="'+selectedbenlist[benloop].respondentcode+'"');
			for(datesloop=0; datesloop<monitoringsurveydateslist.rows.length; datesloop++)
			{
				if(monitoringsurveydateslist.rows[datesloop].surveyworkitemmappingcode==selectedbenlist[benloop].mappingcode)
				{
					tx.executeSql('DELETE FROM mmp_ms_benf WHERE surveyworkitemmappingcode="'+selectedbenlist[benloop].mappingcode+'" AND respondantcode="'+selectedbenlist[benloop].respondentcode+'" AND fromdate="'+monitoringsurveydateslist.rows[datesloop].fromsurveydate+'"');
				}
			}
		}

	}, errorCB);

}

// ============ *** Upload Parent and Child Responces End*** ========



// ============ *** Downloadload Parent and Child Responces Begin*** ========
var downloadresponsedata=[];

function downloadlocalresponces()
{
	setTimeout(function(){
		////SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(downloadlocalresponcessql, errorCB);
	}, 60);
}
//pageloadedsuccess
function downloadlocalresponcessql(tx)
{
	var monitoringsurveydate=[];
	var workitems=[];
	downloadresponsedata=[];
	tx.executeSql('UPDATE mmp_ms_benf  SET status="3" WHERE status="2" ');
	tx.executeSql('UPDATE mmpbenfi SET status="3" WHERE status="2" ');
	tx.executeSql("SELECT surveyworkitemmappingcode as surveyworkitemmappingcode, fromsurveydate as surveydate FROM monitoringsurveydates GROUP BY surveyworkitemmappingcode",[], function(tx, surveydatesresult){monitoringsurveydate=surveydatesresult.rows;},errorCB);
	tx.executeSql("SELECT workitemcode, surveyworkitemmappingcode, (SELECT type FROM survey WHERE survey.surveycode=workitems.surveycode) as type  FROM workitems ORDER BY surveyworkitemmappingcode",[], function(tx, surveydatesresult)
			{
				workitems=surveydatesresult.rows;
				for(var workitemsloop=0; workitemsloop<workitems.length; workitemsloop++)
				{
					var freq=[];
					if(workitems[workitemsloop].type=='MS')
					{
						for(var monitoringsurveydateloop=0; monitoringsurveydateloop<monitoringsurveydate.length; monitoringsurveydateloop++)
						{if(monitoringsurveydate[monitoringsurveydateloop].surveyworkitemmappingcode==workitems[workitemsloop].surveyworkitemmappingcode)freq.push(monitoringsurveydate[monitoringsurveydateloop]);}
					}
					else{
						freq='{ "surveyworkitemmappingcode": "", "surveydate": ""}'
					}
					var data={workitemcode:workitems[workitemsloop].workitemcode, surveyworkitemmappingcode:workitems[workitemsloop].surveyworkitemmappingcode, type:workitems[workitemsloop].type, frequency:freq}
					downloadresponsedata.push(data);
				}
			},errorCB);
	
	setTimeout(function(){downloadsurveyresponses()},1000);
}


// ============ *** Downloadload Parent and Child Responces END *** ========



// ============ *** Update Server Parent and Child Responces Begin*** ========
updateserverresponces="";

function updateserverresponcesfrom360()
{
	setTimeout(function(){
		////SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(updateserverresponcessql, errorCB,addsuccess);
	}, 60);
}
//pageloadedsuccess
function updateserverresponcessql(tx)
{
	// tx.executeSql('DROP TABLE surveyparentresponse');
	// tx.executeSql('DROP TABLE surveychildresponse');
	// tx.executeSql('CREATE TABLE IF NOT EXISTS surveyparentresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, syncedon, empid)');
	// tx.executeSql('CREATE TABLE IF NOT EXISTS surveychildresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, syncedon, empid)');

	var resultlength=updateserverresponces.length;
	//console.log(resultlength)
	for(loop=0; loop<resultlength; loop++)
	{
		//console.log(updateserverresponces[loop]);
		
		var surveyworkitemmappingcode=updateserverresponces[loop].surveyworkitemmappingcode;
		var workitemcode=updateserverresponces[loop].workitemcode;
		var surveycode=updateserverresponces[loop].surveycode;
		var surveytype=updateserverresponces[loop].type
		var bene_status=updateserverresponces[loop].bene_status;
		var parent=updateserverresponces[loop].parent;
		var child=updateserverresponces[loop].child;
		var status=updateserverresponces[loop].status;
		var bene_status=updateserverresponces[loop].bene_status
		//console.log(bene_status);
		//===== **** Bene Status **** ======
		//console.log(bene_status);
		if(bene_status.length>0)
		{
			if(surveytype=='BS')
			{
				for(bene_status_loop=0; bene_status_loop<bene_status.length; bene_status_loop++)
				{
					var temp_ben_status=bene_status[bene_status_loop].status;
					if(temp_ben_status=="2") {temp_ben_status="3"}
					tx.executeSql('UPDATE mmpbenfi SET status="'+temp_ben_status+'", empid="'+bene_status[bene_status_loop].surveydoneby+'" WHERE surveyworkitemmappingcode="'+bene_status[bene_status_loop].surveyworkitemmappingcode+'" AND resondantcode="'+bene_status[bene_status_loop].respondantcode+'"')
				}
			}
			else if(surveytype=='MS')
			{
				for(bene_status_loop=0; bene_status_loop<bene_status.length; bene_status_loop++)
				{
					var temp_ben_status=bene_status[bene_status_loop].status;
					if(temp_ben_status=="2"){temp_ben_status="3"}
					tx.executeSql('UPDATE mmpbenfi SET status="'+temp_ben_status+'", empid="'+bene_status[bene_status_loop].surveydoneby+'" WHERE surveyworkitemmappingcode="'+bene_status[bene_status_loop].surveyworkitemmappingcode+'" AND resondantcode="'+bene_status[bene_status_loop].respondantcode+'"')
					tx.executeSql('UPDATE mmp_ms_benf SET status="'+temp_ben_status+'", empid="'+bene_status[bene_status_loop].surveydoneby+'" WHERE surveyworkitemmappingcode="'+bene_status[bene_status_loop].surveyworkitemmappingcode+'" AND respondantcode="'+bene_status[bene_status_loop].respondantcode+'" AND fromdate="'+bene_status[bene_status_loop].surveydate+'"')
				}
			}
		}

		//===== **** Parent **** ======
		if(parent.length>0)
		{
			tx.executeSql('DELETE FROM surveyparentresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'" ');
			for(parent_loop=0; parent_loop<parent.length; parent_loop++)
			{
				tx.executeSql('INSERT INTO surveyparentresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, empid) VALUES ("'+parent[parent_loop].surveyworkitemmappingcode+'", "'+parent[parent_loop].respondantcode+'", "'+parent[parent_loop].parentquestioncode+'", "'+parent[parent_loop].questioncode+'", "'+parent[parent_loop].sectioncode+'", "'+parent[parent_loop].answer+'", "'+parent[parent_loop].planneddate+'", "'+parent[parent_loop].status+'", "'+parent[parent_loop].createdon+'", "'+parent[parent_loop].surveydoneby+'")');
			}
		}

		//===== **** Parent **** ======
		if(child.length>0)
		{
			tx.executeSql('DELETE FROM surveychildresponse WHERE surveyworkitemmappingcode="'+surveyworkitemmappingcode+'"');
			for(child_loop=0; child_loop<child.length; child_loop++)
			{
				tx.executeSql('INSERT INTO surveyparentresponse (surveyworkitemmappingcode, respondentcode, parentquestion, questioncode, sectioncode, answer, surveydate, status, createdon, empid) VALUES ("'+child[child_loop].surveyworkitemmappingcode+'", "'+child[child_loop].respondantcode+'", "'+child[child_loop].childquestioncode+'", "'+child[child_loop].questioncode+'", "'+child[child_loop].sectioncode+'", "'+child[child_loop].answer+'", "'+child[child_loop].planneddate+'", "'+child[child_loop].status+'", "'+child[child_loop].createdon+'", "'+child[child_loop].surveydoneby+'")');
			}
		}
		if(status.length>0)
		{
			if(surveytype=='MS')
			{
				for(status_loop=0; status_loop<status.length; status_loop++)
				{	//fromdate 
					// console.log('UPDATE workitemsserverstatus SET open="'+status[status_loop].open+'",  saved="'+status[status_loop].saved+'", synced="'+status[status_loop].synced+'" WHERE workitemmmpcode="'+workitemcode+'"');
					//console.log(status[status_loop].fromdate)
					var tempdate=status[status_loop].fromdate.slice(0,10);
					//console.log('UPDATE workitemsserverstatus SET open="'+status[status_loop].open+'",  saved="'+status[status_loop].saved+'", synced="'+status[status_loop].synced+'" WHERE workitemmmpcode="'+workitemcode+'" AND fromdate="'+tempdate+'"');
					tx.executeSql('UPDATE workitemsserverstatus SET open="'+status[status_loop].open+'",  saved="'+status[status_loop].saved+'", synced="'+status[status_loop].synced+'" WHERE workitemmmpcode="'+workitemcode+'" AND fromdate="'+tempdate+'"');
				}
			}
			else if(surveytype=='BS'){
				for(status_loop=0; status_loop<status.length; status_loop++)
				{
					//console.log('UPDATE workitemsserverstatus SET open="'+status[status_loop].open+'",  saved="'+status[status_loop].saved+'", synced="'+status[status_loop].synced+'" WHERE workitemmmpcode="'+workitemcode+'"');
					tx.executeSql('UPDATE workitemsserverstatus SET open="'+status[status_loop].open+'",  saved="'+status[status_loop].saved+'", synced="'+status[status_loop].synced+'" WHERE workitemmmpcode="'+workitemcode+'"');
				}
			}
		}
	}

}

// ============ *** Update Server Parent and Child Responces END *** ========

 function monirotingsuccess(){ setTimeout(function(){SpinnerDialog.hide(); userSync();}, 1000);}


function monitoringbenselectedben()
{
	setTimeout(function(){
		////SpinnerDialog.show("Samuday 360", "Loading...", true);
		var db = window.openDatabase("Database", "1.0", "PROTAX", 2000000);
		db.transaction(monitoringbenselectedbensql, errorCB, monirotingsuccess);
	}, 60);
}

function monitoringbenselectedbensql(tx)
{
	if(loadstatusbendata.length>0)
	{
		var surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
		var survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
		var workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);

		tx.executeSql("SELECT surveyworkitemmappingcode as surveyworkitemmappingcode, fromsurveydate as surveydate, tosurveydate as enddate FROM monitoringsurveydates WHERE surveyworkitemmappingcode='"+surveyworkitemmappingcode+"' AND surveycode ='"+survey+"' GROUP BY surveyworkitemmappingcode",[], function(tx, dates)
		{
			var updatetime=(new Date()).toISOString();
			for(dateloop=0; dateloop<dates.rows.length; dateloop++)
			{
				for(bene_status_loop=0; bene_status_loop<loadstatusbendata.length; bene_status_loop++)
				{
					tx.executeSql('INSERT INTO mmp_ms_benf (surveyworkitemmappingcode, surveycode, respondantcode, fromdate, todate, status, empid) VALUES("'+loadstatusbendata[bene_status_loop].surveyworkitemmappingcode+'", "'+survey+'", "'+loadstatusbendata[bene_status_loop].respondantcode+'", "'+dates.rows[dateloop].surveydate+'", "'+dates.rows[dateloop].enddate+'", "0", "'+localStorage.employeeid+'")');
					tx.executeSql('UPDATE mmpbenfi SET status="4", empid="'+localStorage.employeeid+'", updatedon="'+updatetime+'" WHERE surveyworkitemmappingcode="'+loadstatusbendata[bene_status_loop].surveyworkitemmappingcode+'" AND surveycode="'+survey+'" AND resondantcode="'+loadstatusbendata[bene_status_loop].respondantcode+'"');
				}
			}

		},errorCB);
	}
} 
