localStorage.service="http://13.235.142.85/samuday/";
//"http://localhost:1234/samuday_pen/samuday/"
//"http://192.168.0.4:1234/samuday_pen/samuday/";

validations=[]; // Validation Master ARRAY
questiontypes=[]; // Question Master ARRAY
questionoptions=[]; // Question Options
sh_roads_arr=[]; // State Roads Master ARRAY
gp_roads_arr=[]; // GP Roads Master ARRAY
workitems=[]; // List of Workitems
loadbendata=[];// load Beneficiary

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
function syncLoad()
{
	//console.log({empid:"51623721", lastsynced:downloadservertime});
	$.ajax({
		//url:localStorage.service+'getworkitems',
		url:"http://182.18.162.51/SG/downloadservice.asmx/empworkitemdetails",
		type:"GET",
		dataType:"json",
		// jsonp:"callback",
		// async:true,
		data:{empid:localStorage.employeeid, lastsynced:downloadservertime, uuid:device.uuid},
		ContentType:"application/json",
		success: function(response, message, status)
		{
			//console.log(response[0].getsinglevaldtls[0]);
			if(response.length)
			{
			 	if(status.status==200)
				{
					//console.log(response[0].getsinglevaldtls);
					if(response[0].getsinglevaldtls.length>0)
					{
						lastsynced=response[0].getsinglevaldtls[0].lastsynced;
						questiontypes=response[0].getsinglevaldtls[0].questiontypes;
						sh_roads_arr=response[0].getsinglevaldtls[0].sh_roads_arr;
						gp_roads_arr=response[0].getsinglevaldtls[0].gp_roads_arr;
					}
					if(response[0].getalldtls.length>0)
					{
						workitems=response[0].getalldtls;
					}
					syncDownload();

					// UPLOAD & DOWNLOAD Response
				}
				//navigator.notification.alert(response.message, function(){}, 'Samuday 360','Done');
			}
			//else{navigator.notification.alert("No Items To Update", function(){}, 'Samuday 360','Done');}
			
			// upload responces from local to server
			loadlocalresponces()
		},
		error: function(err)
		{
			SpinnerDialog.hide();
			navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');
			// $("#sheduleing").modal("hide");
		}
	});
}



// function syncUpload()
// {
	
// }




function loadbendataserverdata(tx, results)
{
	$.ajax({
		url:localStorage.service+'downloadbeneficiary',
		type:"POST",
		dataType:"json",
		//jsonp:"callback",
		async:true,
		data:{locations:JSON.stringify(results.rows), uuid:device.uuid},
		//ContentType:"application/json",
		success: function(response, message, status)
		{
			loadbendata=response;
			//console.log(loadbendata);
			insertorupdatebendata();
		},
		error: function(err)
		{
			SpinnerDialog.hide();
			navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');
		}
	})
}







// function uploadsurveyresponses(tx)
// {
// 	data={empid:"51623721", lastsynced:uploadservertime, parentresponse:parentresponse, childresponse:childresponse, monitoringbenf:selectedmonitoringbenflist}	
// 	$.ajax({
// 		url:'http://13.235.142.85/samuday/get360data',
// 		type:"post",
// 		//dataType:"json",
// 		//jsonp:"callback",
// 		async:true,
// 		data:data,
// 		//ContentType:"application/json",
// 		success: function(response, message, status)
// 		{
// 			if(status.status==200)
// 			{
// 				timestamp=(new Date().toISOString());
// 				lastsynced=response.lastsynced;
// 				tx.executeSql('UPDATE syncdates SET uploadservertime ="'+lastsynced+'", uploadlocaltime ="'+timestamp+'"');		
// 				syncLoad();
// 				// navigator.notification.alert("Response Saved", function(){}, 'Samuday 360','Done');
// 			}
// 		},
// 		error: function(err)
// 		{
// 			SpinnerDialog.hide();
// 			navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');
// 		}
// 	})
// }

//loaddatasss


// 51607968 - 6 surveys
// 51623721 - 2 surveys
// same work items attached to them
// 51636843
// 51660439
// 51618348


parentresponse='';
childresponse='';
surveydatesms='';
selectedbenfresponse='';
selectedbenlist="";
function uploadsurveyresponses()
{
	data=JSON.stringify({empid:localStorage.employeeid, lastsynced:uploadservertime, uuid:device.uuid, parentresponse:JSON.stringify(parentresponse), childresponse:JSON.stringify(childresponse), surveydata:JSON.stringify(selectedbenfresponse)});
	//alert(data);
	$.ajax({
        contentType: "application/json;",
        data: data,
        dataType: "json",
        type: "POST",
        url: "http://182.18.162.51/sg/uploadservice.asmx/sdnew",
        //success: function (data) {
		success: function(response, message, status)
		{
			if(status.status==200)
			{ 
				if(response[0].employebenelist.length>0){
					selectedbenlist=response[0].employebenelist;
					removeselectedmonitbene()
				}
				downloadlocalresponces();
				// // navigator.notification.alert("Response Saved", function(){}, 'Samuday 360','Done');
			}
		},
		error: function(err)
		{
			SpinnerDialog.hide();
			navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');
		}
	})
}

// function uploadsurveyresponses() {
//            data=JSON.stringify({empid:"51623721", lastsynced:uploadservertime, parentresponse:JSON.stringify(parentresponse), childresponse:JSON.stringify(childresponse), surveydata:"Not Need"});
//             $.ajax({
//                 contentType: "application/json;",
//                 data: data,
//                 dataType: "json",
//                 type: "POST",
//                 url: "http://182.18.162.51/sg/uploadservice.asmx/sd",
//                 success: function (data) {
//                     alert("success");
//                     if(status.status==200)
// 			{
// 				downloadlocalresponces();
// // 				// // navigator.notification.alert("Response Saved", function(){}, 'Samuday 360','Done');
//  			}
//                 },
//                 error: function (err) {
//                     alert(err);
//                 }
//             });
//         }


// $.ajax({
//                 contentType: "application/json;",
//                 data: JSON.stringify(myarray),
//                 dataType: "text",
//                 type: "POST",
//                 url: "statusservice.asmx/updatebeneficiarynew",
//                 success: function (data) {
//                     alert("success");
//                 },
//                 error: function (err) {
//                     alert(err);
//                 }
//             });

function downloadsurveyresponses()
{

	data=JSON.stringify({empid:localStorage.employeeid, uuid:device.uuid, lastsynced:uploadservertime, updatedata: JSON.stringify(downloadresponsedata)})
	//alert(data);
	$.ajax({
		contentType: "application/json;",
        data: data,
       	dataType: "json",
        type: "POST",
        url: "http://182.18.162.51/sg/statusservice.asmx/updatebeneficiarynew",
        success: function(response, message, status)
		{
			
			if(status.status==200)
			{
				//console.log(response)
				updateserverresponces=response;
				updateserverresponcesfrom360();
				//navigator.notification.alert("Synced Successfully", function(){}, 'Samuday 360','Done');	
			}
		},
		error: function(err)
		{
			SpinnerDialog.hide();
			navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');
		}
	})
}