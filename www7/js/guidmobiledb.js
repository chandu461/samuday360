//======== Insert data Loaded Start ===========
function guidmobileinsert()
{
	SpinnerDialog.show("Samuday 360", "Saving data .....", true);
    var db = window.openDatabase("Database", "1.0", "samudayguid", 200000);
    db.transaction(guidmobileinsertsql, errorCB, guidinsertsuccess);
}

function guidmobileinsertsql(tx)
{	
	tx.executeSql('DROP TABLE IF EXISTS guideblockboundaries');
	tx.executeSql('DROP TABLE IF EXISTS guidegpboundaries');
	tx.executeSql('DROP TABLE IF EXISTS guidegproads');
	tx.executeSql('DROP TABLE IF EXISTS guideshroads');
	tx.executeSql('DROP TABLE IF EXISTS guidesurvey_bene');
	tx.executeSql('DROP TABLE IF EXISTS guidevillageboundaries');
	tx.executeSql('DROP TABLE IF EXISTS guidevillageroads');

	tx.executeSql('CREATE TABLE IF NOT EXISTS guideblockboundaries(name, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS guidegpboundaries(name, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS guidegproads(name, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS guideshroads(name, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS guidesurvey_bene(resondantcode, respondantname, hohname, relationwithhoh, dateofbirth, gender, idtype, idnumber, buildingcode, housecode, blockname, gpname, village, occupation, buildingtype, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS guidevillageboundaries(name, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS guidevillageroads(name, geom)');
	
	for(blockboundariesloop=0; blockboundariesloop<blockboundaries.length; blockboundariesloop++)
	{if(blockboundaries[blockboundariesloop].block_name!="" && blockboundaries[blockboundariesloop].geom!=""){tx.executeSql('INSERT INTO guideblockboundaries (name, geom) VALUES (?, ?)', [blockboundaries[blockboundariesloop].block_name, blockboundaries[blockboundariesloop].geom]);}}

	for(gpboundariesloop=0; gpboundariesloop<gpboundaries.length; gpboundariesloop++)
	{if(gpboundaries[gpboundariesloop].gp_name!="" && gpboundaries[gpboundariesloop].geom!=""){tx.executeSql('INSERT INTO guidegpboundaries (name, geom) VALUES (?, ?)', [gpboundaries[gpboundariesloop].gp_name, gpboundaries[gpboundariesloop].geom]);}}

	for(gproadsloop=0; gproadsloop<gproads.length; gproadsloop++)
	{if(gproads[gproadsloop].gpr_code!="" && gproads[gproadsloop].geom!=""){tx.executeSql('INSERT INTO guidegproads (name, geom) VALUES (?, ?)', [gproads[gproadsloop].gpr_code, gproads[gproadsloop].geom]);}}
	
	for(shroadsloop=0; shroadsloop<shroads.length; shroadsloop++)
	{if(shroads[shroadsloop].sh_code!="" && shroads[shroadsloop].geom!=""){tx.executeSql('INSERT INTO guideshroads (name, geom) VALUES (?, ?)', [shroads[shroadsloop].sh_code, shroads[shroadsloop].geom]);}}

	for(villageboundariesloop=0; villageboundariesloop<villageboundaries.length; villageboundariesloop++)
	{if(villageboundaries[villageboundariesloop].village_name!="" && villageboundaries[villageboundariesloop].geom!=""){tx.executeSql('INSERT INTO guidevillageboundaries (name, geom) VALUES (?, ?)', [villageboundaries[villageboundariesloop].village_name, villageboundaries[villageboundariesloop].geom]);}}
	
	for(villageroadsloop=0; villageroadsloop<villageroads.length; villageroadsloop++)
	{if(villageroads[villageroadsloop].road_code!="" && villageroads[villageroadsloop].geom!=""){tx.executeSql('INSERT INTO guidevillageroads (name, geom) VALUES (?, ?)', [villageroads[villageroadsloop].road_code, villageroads[villageroadsloop].geom]);}}

	for(survey_beneloop=0; survey_beneloop<survey_bene.length; survey_beneloop++)
	{tx.executeSql('INSERT INTO guidesurvey_bene (resondantcode, respondantname, hohname, relationwithhoh, dateofbirth, gender, idtype, idnumber, buildingcode, housecode, blockname, gpname, village, occupation, buildingtype, geom) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [survey_bene[survey_beneloop].resondantcode, survey_bene[survey_beneloop].respondantname, survey_bene[survey_beneloop].hohname, survey_bene[survey_beneloop].relationwithhoh, survey_bene[survey_beneloop].dateofbirth, survey_bene[survey_beneloop].gender, survey_bene[survey_beneloop].idtype, survey_bene[survey_beneloop].idnumber, survey_bene[survey_beneloop].buildingcode, survey_bene[survey_beneloop].housecode, survey_bene[survey_beneloop].blockname, survey_bene[survey_beneloop].gpname, survey_bene[survey_beneloop].village, survey_bene[survey_beneloop].occupation, survey_bene[survey_beneloop].buildingtype, survey_bene[survey_beneloop].geom]);}
}

function guidinsertsuccess(tx)
{
	SpinnerDialog.hide();
	navigator.notification.alert("Loaded Successfully", function(){window.location.href="gusermapguid.html"}, 'Samuday 360','Done');
}

//  ERROR CallBack function     
function errorCB(err)
{
	SpinnerDialog.hide();
	var message= "Error processing SQL: "+err.code+"\n"+"Error Message:"+err.message;
	navigator.notification.alert(message, function(){}, 'Samuday 360','Done');
}


//======== Insert data Loaded End ===========



//========  Loaded local data Start ===========
function rendermap()
{
    var db = window.openDatabase("Database", "1.0", "samudayguid", 200000);
    db.transaction(maprendersearch, errorCB, guidmapsuccess);
}

function maprendersearch(tx)
{
	tx.executeSql('CREATE TABLE IF NOT EXISTS guideblockboundaries(name, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS guidegpboundaries(name, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS guidegproads(name, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS guideshroads(name, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS guidesurvey_bene(resondantcode, respondantname, hohname, relationwithhoh, dateofbirth, gender, idtype, idnumber, buildingcode, housecode, blockname, gpname, village, occupation, buildingtype, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS guidevillageboundaries(name, geom)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS guidevillageroads(name, geom)');

	tx.executeSql('SELECT name, geom FROM guideblockboundaries', [], function(tx, result)
	{
		var WKTpoly=result.rows;
    	var format = new ol.format.WKT();
		guideblockboundariessource=blockboundarieslayer.getSource();
		guideblockboundariessource.clear();
		if(WKTpoly.length>0)
		{
			for (var i=0;i<WKTpoly.length;i++)
			{   
				featureGeom = format.readFeature(WKTpoly[i].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				featureGeom.setStyle(
					new ol.style.Style
					({
						fill: new ol.style.Fill({  color: 'rgba(64,64, 64, 0.05)', weight: 1 }),
					    stroke: new ol.style.Stroke({  color: 'rgb(100,100,100)',  width: 1 }),
					    image: new ol.style.Circle({
					    	radius: 7,
					        stroke: new ol.style.Stroke({ color: 'rgb(160,160,160)', width: 1 }),
					        fill: new ol.style.Fill ({ color: 'rgba(55,22, 22, 0.5)' })
						}),
						text:new ol.style.Text({text:WKTpoly[i].name})
					})
				);
				guideblockboundariessource.addFeature(featureGeom);	
			}
		}
	}, errorCB);

	tx.executeSql('SELECT name, geom FROM guidegpboundaries', [], function(tx, result)
	{
		var WKTpoly=result.rows;
    	var format = new ol.format.WKT();
		guidegpboundariessource=gpboundarieslayer.getSource();
		guidegpboundariessource.clear();
		if(WKTpoly.length>0)
		{
			for (var i=0;i<WKTpoly.length;i++)
			{   
				featureGeom = format.readFeature(WKTpoly[i].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				featureGeom.setStyle(
					new ol.style.Style
					({
						fill: new ol.style.Fill({  color: 'rgba(75,0, 130, 0.05)', weight: 1 }),
					    stroke: new ol.style.Stroke({  color: 'rgb(75,0, 130)',  width: 1, lineDash: [20,50] }),
					    image: new ol.style.Circle({
					    	radius: 7,
					        stroke: new ol.style.Stroke({ color: 'rgb(160,160,160)', width: 1 }),
					        fill: new ol.style.Fill ({ color: 'rgba(55,22, 22, 0.5)' })
						}),
						text:new ol.style.Text({text:WKTpoly[i].name})
					})
				);
				guidegpboundariessource.addFeature(featureGeom);	
			}
		}
	}, errorCB);

	tx.executeSql('SELECT name, geom FROM guidegproads', [], function(tx, result)
	{
		var WKTpoly=result.rows;
    	var format = new ol.format.WKT();
		gproadssource=gproadslayer.getSource();
		gproadssource.clear();
		if(WKTpoly.length>0)
		{
			for (var i=0;i<WKTpoly.length;i++)
			{   
				featureGeom = format.readFeature(WKTpoly[i].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				featureGeom.setStyle(guidgproadstyle);
				gproadssource.addFeature(featureGeom);	
			}
		}
	}, errorCB);
	tx.executeSql('SELECT name, geom FROM guideshroads', [], function(tx, result)
	{
		var WKTpoly=result.rows;
    	var format = new ol.format.WKT();
		shroadssource=shroadslayer.getSource();
		shroadssource.clear();
		if(WKTpoly.length>0)
		{
			for (var i=0;i<WKTpoly.length;i++)
			{   
				featureGeom = format.readFeature(WKTpoly[i].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				featureGeom.setStyle(guidshroadstyle);
				shroadssource.addFeature(featureGeom);	
			}
		}
	}, errorCB);

	tx.executeSql('SELECT name, geom FROM guidevillageboundaries', [], function(tx, result){
		var WKTpoly=result.rows;
    	var format = new ol.format.WKT();
		villageboundariessource=villageboundarieslayer.getSource();
		villageboundariessource.clear();
		if(WKTpoly.length>0)
		{
			for (var i=0;i<WKTpoly.length;i++)
			{   
				featureGeom = format.readFeature(WKTpoly[i].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				featureGeom.setStyle(
					new ol.style.Style
					({
						fill: new ol.style.Fill({  color: 'rgba(44,232, 113, 0.05)', weight: 1 }),
					    stroke: new ol.style.Stroke({  color: 'rgb(44,232, 113,)',  width: 1, lineDash: [1,10]}),
					    image: new ol.style.Circle({
					    	radius: 7,
					        stroke: new ol.style.Stroke({ color: 'rgb(160,160,160)', width: 1 }),
					        fill: new ol.style.Fill ({ color: 'rgba(55,22, 22, 0.5)' })
						}),
						text:new ol.style.Text({text:WKTpoly[i].name})
					})
				);
				featureGeom.setProperties({'name':WKTpoly[i].name, 'geom':WKTpoly[i].geom});
				villageboundariessource.addFeature(featureGeom);	
			}
		}
	}, errorCB);

	tx.executeSql('SELECT name, geom FROM guidevillageroads', [], function(tx, result){

		var WKTpoly=result.rows;
    	var format = new ol.format.WKT();
		villageroadssource=villageroadslayer.getSource();
		villageroadssource.clear();
		if(WKTpoly.length>0)
		{
			for (var i=0;i<WKTpoly.length;i++)
			{   
				featureGeom = format.readFeature(WKTpoly[i].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
				featureGeom.setStyle(villageroadsstyle);
				villageroadssource.addFeature(featureGeom);	
			}
		}
	}, errorCB);
	tx.executeSql('SELECT resondantcode, respondantname, hohname, relationwithhoh, dateofbirth, gender, idtype, idnumber, buildingcode, housecode, blockname, gpname, village, occupation, buildingtype, geom FROM guidesurvey_bene', [], function(tx, result){
		blitems=result.rows;
		var WKTpoly=result.rows;
		var format = new ol.format.WKT();
		survey_bensource=survey_benlayer.getSource();
		survey_bensource.clear();

		if(WKTpoly.length>0)
		{
			for (var i=0;i<WKTpoly.length;i++)
			{   
				if(WKTpoly[i].geom!="null" && WKTpoly[i].geom!=null)
				{
					featureGeom = format.readFeature(WKTpoly[i].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					featureGeom.setStyle(survey_benstyle);
					featureGeom.setProperties({'respondentcode':WKTpoly[i].resondantcode, 'index':i});
					survey_bensource.addFeature(featureGeom);	
				}
			}
			map.getView().fit(survey_bensource.getExtent(), map.getSize());
		}else{
			navigator.notification.confirm("No data loaded ! \r\nDo you want to load data ?", function(results) {if(results == 1) {window.location.href="gusermapguidloaddata.html";} }, 'Samuday 360', ['Yes','No'] );
		}

		
	}, errorCB);


	tx.executeSql('SELECT DISTINCT buildingtype FROM guidesurvey_bene', [], function(tx, result){
		
		var elemfiltergp=document.getElementById('guidebuildingtype');
		elemfiltergp.length=0;
		for (var i=0;i<result.rows.length;i++)
		{
			sbloop=i+1;
			elemfiltergp.options[sbloop]=new Option(result.rows[i].buildingtype,result.rows[i].buildingtype);
		}
	}, errorCB);
}

function guidmapsuccess(tx)
{
	SpinnerDialog.hide();
}

//========  Loaded local data END ===========


//============  Layer styles start =============

var guidshroadstyle = new ol.style.Style
({
	fill: new ol.style.Fill({  color: 'rgba(255,69, 0, 0.05)', weight: 1 }),
    stroke: new ol.style.Stroke({  color: 'rgb(255,69, 0)',  width: 3 }),
    image: new ol.style.Circle({
    	radius: 7,
        stroke: new ol.style.Stroke({ color: 'rgb(160,160,160)', width: 1 }),
        fill: new ol.style.Fill ({ color: 'rgba(55,22, 22, 0.5)' })
	})
});

var guidgproadstyle = new ol.style.Style
({
	fill: new ol.style.Fill({  color: 'rgba(204,204, 0, 0.05)', weight: 1 }),
    stroke: new ol.style.Stroke({  color: 'rgb(204,204, 0)',  width: 2 }),
    image: new ol.style.Circle({
    	radius: 7,
        stroke: new ol.style.Stroke({ color: 'rgb(160,160,160)', width: 1 }),
        fill: new ol.style.Fill ({ color: 'rgba(55,22, 22, 0.5)' })
	})
});

var villageroadsstyle = new ol.style.Style
({
	fill: new ol.style.Fill({  color: 'rgba(183,109, 12, 0.05)', weight: 1 }),
    stroke: new ol.style.Stroke({  color: 'rgb(183,109, 12)',  width: 1 }),
    image: new ol.style.Circle({
    	radius: 7,
        stroke: new ol.style.Stroke({ color: 'rgb(160,160,160)', width: 1 }),
        fill: new ol.style.Fill ({ color: 'rgba(55,22, 22, 0.5)' })
	})
});

var survey_benstyle=new ol.style.Style
({
	fill: new ol.style.Fill({  color: 'rgba(64,64, 64, 0.05)', weight: 1 }),
    stroke: new ol.style.Stroke({  color: 'rgb(100,100,100)',  width: 1 }),
    image: new ol.style.Circle({
    	radius: 7,
        stroke: new ol.style.Stroke({ color: 'rgb(160,160,160)', width: 1 }),
        fill: new ol.style.Fill ({ color: 'rgba(55,22, 22, 0.5)' })
	})
});
//============  Layer styles  =============



function guidsearch(){

	guidequerystring="SELECT resondantcode, respondantname, hohname, relationwithhoh, dateofbirth, gender, idtype, idnumber, buildingcode, housecode, blockname, gpname, village, occupation, buildingtype, geom FROM guidesurvey_bene ";
	if($("#guiderespondentcode").val()!=""){
		guidequerystring+="WHERE resondantcode = '"+$("#guiderespondentcode").val()+"'";
	}
	else if($("#guidebuildingcode").val()!=""){
		guidequerystring+="WHERE buildingcode = '"+$("#guidebuildingcode").val()+"'";
	}
	else if($("#guidename").val()!=""){
		guidequerystring+="WHERE UPPER(respondantname) LIKE UPPER('%"+$("#guidename").val()+"%') OR UPPER(hohname) LIKE  UPPER('%"+$("#guidename").val()+"%')";
	}
	else if($("#guidebuildingtype").val()!=""){
		guidequerystring+="WHERE buildingtype = '"+$("#guidebuildingtype").val()+"'";
	}

	SpinnerDialog.show("Samuday 360", "Applying filter.....", true);
    var db = window.openDatabase("Database", "1.0", "samudayguid", 200000);
    db.transaction(searchsql, errorCB, guidmapsuccess);
}

function searchsql(tx)
{
	tx.executeSql(guidequerystring, [], function(tx, result){
		
		var WKTpoly=result.rows;
		var format = new ol.format.WKT();
		resultsource=resultlayers.getSource();
		resultsource.clear();
		if(WKTpoly.length>0)
		{
			for (var i=0;i<WKTpoly.length;i++)
			{   
				if(WKTpoly[i].geom!="null" && WKTpoly[i].geom!=null)
				{
					featureGeom = format.readFeature(WKTpoly[i].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
					resultsource.addFeature(featureGeom);	
				}
			}
		}

		map.getView().fit(resultsource.getExtent(), map.getSize());
		$("#filtermodal").modal("hide");
	}, errorCB);
}