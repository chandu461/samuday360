
uploadstatusmethodname="";

validations=[]; // Validation Master ARRAY
questiontypes=[]; // Question Master ARRAY
questionoptions=[]; // Question Options
sh_roads_arr=[]; // State Roads Master ARRAY
gp_roads_arr=[]; // GP Roads Master ARRAY
workitems=[]; // List of Workitems
loadbendata=[];// load Beneficiary
colsedworkitems=[];

// ===== UPLOAD INFO var
parentresponse=[];
childresponse=[];
selectedmonitoringbenflist=[];

//====  SYNC DATES ====
uploadservertime="";
uploadlocaltime="";
downloadservertime="";
downloadlocaltime="";
lastsynced="";
updatedworkitems=[];
function syncLoad()
{
	rootdetection.isDeviceRooted(function (result) {
		if(result==0)
		{
			uploadstatusmethodname="syncing";
			updatedworkitems=[];
			lastsynced="";
			var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);

			var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			if(service!="")
			{
				$.ajax({
					url:service+"downloadservice.asmx/empworkitemdetails",
					type:"GET",
					dataType:"json",
					cache: false,
					headers: { 'token': accessticket, 'empcode': empidlocal, uuid: device.uuid },
					data:{empid:empidlocal, lastsynced:downloadservertime, uuid:device.uuid},
					ContentType:"application/json",
					success: function(response, message, status)
					{
						if(status.status==200)
						{
							//if(response.length>0)
							if(response[0].getalldtls.length>0)
							{
								if(response[0].getsinglevaldtls.length>0)
								{
									lastsynced=response[0].getsinglevaldtls[0].lastsynced;
									questiontypes=response[0].getsinglevaldtls[0].questiontypes;
									// sh_roads_arr=response[0].getsinglevaldtls[0].sh_roads_arr;
									// gp_roads_arr=response[0].getsinglevaldtls[0].gp_roads_arr;
									colsedworkitems=response[0].closedworkitemsdata;
								}
								if(response[0].getalldtls.length>0)
								{
									workitems=response[0].getalldtls;
								}
								// if(response[0].workitemsupdatedata.length>0)
								// {
									updatedworkitems=response[0].workitemsupdatedata;
								// }
								syncDownload();

								// UPLOAD & DOWNLOAD Response
							}
							else{ loadlocalresponces(); }
						}
						else if(status.status==401){SpinnerDialog.hide(); $("#loginmodal").modal("show")}	
					},
					error: function(err)
					{
						//alert(1)
						//alert(JSON.stringify(err));
						if(err.status==401){$("#loginmodal").modal("show");}
						else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
						SpinnerDialog.hide();
					}
				});
			}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
		}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
	}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
}



function loadbendataserverdata(tx, results)
{
	rootdetection.isDeviceRooted(function (result) {
		if(result==0)
		{
			var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			var userid=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

			if(service!="")
			{
				$.ajax({
					url:service+'downloadbeneficiary',
					type:"POST",
					dataType:"json",
					cache: false,
					//jsonp:"callback",
					headers: { 'token': accessticket, 'empcode': userid, uuid: device.uuid },
					async:true,
					data:{locations:JSON.stringify(results.rows), uuid:device.uuid},
					//ContentType:"application/json",
					success: function(response, message, status)
					{
						if(status.status==200)
						{
							loadbendata=response;
							insertorupdatebendata();
						}
						else if(status.status==401){SpinnerDialog.hide(); $("#loginmodal").modal("show")}
					},
					error: function(err)
					{
						SpinnerDialog.hide();
						if(err.status==401){$("#loginmodal").modal("show")}
						else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
					}
				})
			}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
		}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
	}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
}




parentresponse='';
childresponse='';
surveydatesms='';
selectedbenfresponse='';
selectedbenlist="";
function uploadsurveyresponses()
{
	lastsynced="";
	var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var data=JSON.stringify({empid:empidlocal, lastsynced:uploadservertime, uuid:device.uuid, parentresponse:JSON.stringify(parentresponse), childresponse:JSON.stringify(childresponse), surveydata:JSON.stringify(workitemdetailtoserver), selectedben:JSON.stringify(selectedbenfresponse)});
	var uuidd=device.uuid;
	var serviceurl=service+"uploadservice.asmx/sdnew";
	
	rootdetection.isDeviceRooted(function (result) {
		if(result==0)
		{
			//data= JSON.stringify({ "empid": "51636763", "lastsynced": "", "parentresponse": "{}", "childresponse": "{}", "selectedben": "{}", "surveydata": "{\"0\":{\"surveyworkitemmappingcode\":\"719\",\"workitemcode\":\"448\"}}" })
			if(service!="")
			{
				setTimeout( function(){

				$.ajax({
				url:serviceurl,
                contentType: "application/json;",
                data: data,
                headers: { 'token': accessticket, 'empcode': empidlocal, 'uuid': uuidd},
                dataType: "json",
                cache: false,
                type: "POST",
                //async:false,
                success: function (response, message, status)
				{
						if(status.status==200)
						{
							lastsynced=response[0].lastsynced;
							if(response[0].employebenelist.length>0){
								selectedbenlist=response[0].employebenelist;
								removeselectedmonitbene()
							}
							downloadlocalresponces();
						}
						else if(status.status==401){SpinnerDialog.hide();$("#loginmodal").modal("show")}
				},
				error: function(err)
				{
						// alert(JSON.stringify(err));
						SpinnerDialog.hide();
						if(err.status==401){$("#loginmodal").modal("show")}
						else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
				}
			})
			},2000)
			}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
		}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
	}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
}



function downloadsurveyresponses()
{
	lastsynced="";
	rootdetection.isDeviceRooted(function (result) {
		if(result==0)
		{
			var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);

			var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

			data=JSON.stringify({empid:empidlocal, uuid:device.uuid, lastsynced:uploadservertime, updatedata: JSON.stringify(downloadresponsedata)});
			if(service!="")
			{
				$.ajax({
					contentType: "application/json;",
			        data: data,
			       	dataType: "json",
			       	cache: false,
			       	headers: { 'token': accessticket, 'empcode': empidlocal, uuid: device.uuid },
			        type: "POST",
			        url: service+"statusservice.asmx/updatebeneficiarynew",
			        success: function(response, message, status)
					{
						if(status.status==200)
						{
							lastsynced=response[0].lastsynced;
							updateserverresponces=response;
							updateserverresponcesfrom360();
						}
						else if(status.status==401){SpinnerDialog.hide();$("#loginmodal").modal("show")}
					},
					error: function(err)
					{
						// alert(3);
					// 	alert(JSON.stringify(err));
						SpinnerDialog.hide();
						if(err.status==401){$("#loginmodal").modal("show")}
						else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
					}
				})
			}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
		}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
	}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
}



//================ workitem dowload IN Ajax =========================================
	// sh_roads_arr=response[0].getsinglevaldtls[0].sh_roads_arr;
	// gp_roads_arr=response[0].getsinglevaldtls[0].gp_roads_arr;

//================= workitem dowload Local DB  =============================

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


//=========================== Download benefi Ajax ===================================

//=========================== Download benefi Local DB ===================================

	// var loadbendataroadarray_villlen=loadbendata.roadarray_vill.length
	// for(villroadloop=0; villroadloop<loadbendataroadarray_villlen; villroadloop++)
	// {
	// 	villroadset=loadbendata.roadarray_vill[villroadloop]
	// 	sqlinsertorupdatebendatatrans.executeSql('INSERT INTO villageroads(roadcode, geom) VALUES (?,?)', [villroadset.road_code, villroadset.st_astext]);
	// }

	// var villboundrieslen=loadbendata.roadarray_villBOUNDRIES.length;
	// for(villboundriesloop=0; villboundriesloop<villboundrieslen; villboundriesloop++)
	// {
	// 	villboundryset=loadbendata.roadarray_villBOUNDRIES[villboundriesloop]
	// 	if(typeof villboundryset!="undefined")
	// 	{
	// 		sqlinsertorupdatebendatatrans.executeSql('INSERT INTO villageboundries(workitemscode, roadcode, villagename, geom) VALUES (?,?,?,?)', [workitemcode, villboundryset.road_code, villboundryset.villagename, villboundryset.st_astext]);
	// 	}
	// }
	// var landmarklen=loadbendata.buildingtypegeom.length;
	// for(landmarkloop=0; landmarkloop<landmarklen; landmarkloop++)
	// {
	// 	landmarkset=loadbendata.buildingtypegeom[landmarkloop]
	// 	sqlinsertorupdatebendatatrans.executeSql('INSERT INTO landmarks(workitemscode, type, geom) VALUES (?,?,?)', [workitemcode, landmarkset.type, landmarkset.geom]);
	// }

	
	// sqlinsertorupdatebendatatrans.executeSql('DELETE FROM syncdates WHERE surveyworkitemmapping=? AND service=?', [surveyworkitemmappingcode, "benficiarydownloadsavegis"]);
	// sqlinsertorupdatebendatatrans.executeSql('INSERT INTO syncdates (service, surveyworkitemmapping, servertime, localtime, remark) VALUES (?,?,?,?,?)', ["benficiarydownloadsavegis", surveyworkitemmappingcode, lastsynced, timestamp, ""]);