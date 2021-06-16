
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

function syncLoad()
{
	uploadstatusmethodname="syncing";

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
					if(response.length)
					{
						if(response[0].getsinglevaldtls.length>0)
						{
							lastsynced=response[0].getsinglevaldtls[0].lastsynced;
							questiontypes=response[0].getsinglevaldtls[0].questiontypes;
							sh_roads_arr=response[0].getsinglevaldtls[0].sh_roads_arr;
							gp_roads_arr=response[0].getsinglevaldtls[0].gp_roads_arr;
							colsedworkitems=response[0].closedworkitemsdata;
						}
						if(response[0].getalldtls.length>0)
						{
							workitems=response[0].getalldtls;
						}
						syncDownload();

						// UPLOAD & DOWNLOAD Response
					}
			
					loadlocalresponces()
				}
				else if(status.status==401){SpinnerDialog.hide(); $("#loginmodal").modal("show")}	
			},
			error: function(err)
			{
				if(err.status==401){$("#loginmodal").modal("show");}
				else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
				SpinnerDialog.hide();
			}
		});
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}



function loadbendataserverdata(tx, results)
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
}



parentresponse='';
childresponse='';
surveydatesms='';
selectedbenfresponse='';
selectedbenlist="";
function uploadsurveyresponses()
{

	var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	data=JSON.stringify({empid:empidlocal, lastsynced:uploadservertime, uuid:device.uuid, parentresponse:JSON.stringify(parentresponse), childresponse:JSON.stringify(childresponse), surveydata:JSON.stringify(workitemdetailtoserver), selectedben:JSON.stringify(selectedbenfresponse)});
	//alert(data);
	if(service!="")
	{
		$.ajax({
	        contentType: "application/json;",
	        data: data,
	        dataType: "json",
	        cache: false,
	        type: "POST",
	        headers: { 'token': accessticket, 'empcode': empidlocal, uuid: device.uuid },
	        url: service+"uploadservice.asmx/sdnew",
	        success: function(response, message, status)
			{
				if(status.status==200)
				{
					//alert(response[0].employebenelist.length);
					if(response[0].employebenelist.length>0){
						selectedbenlist=response[0].employebenelist;
						removeselectedmonitbene();
					}
					downloadlocalresponces();
				}
				else if(status.status==401){SpinnerDialog.hide();$("#loginmodal").modal("show")}
			},
			error: function(err)
			{
				//alert(JSON.stringify(err));
				SpinnerDialog.hide();
				if(err.status==401){$("#loginmodal").modal("show")}
				else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
			}
		})
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}


function downloadsurveyresponses()
{
	var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	data=JSON.stringify({empid:empidlocal, uuid:device.uuid, lastsynced:uploadservertime, updatedata: JSON.stringify(downloadresponsedata)});
	//alert(data);
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
					updateserverresponces=response;
					updateserverresponcesfrom360();
				}
				else if(status.status==401){SpinnerDialog.hide();$("#loginmodal").modal("show")}
			},
			error: function(err)
			{
				SpinnerDialog.hide();
				if(err.status==401){$("#loginmodal").modal("show")}
				else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
			}
		})
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
}