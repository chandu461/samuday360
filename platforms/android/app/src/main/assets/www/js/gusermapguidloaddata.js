guserloadingstatus='blocks';
function loadblocks()
{
	setTimeout(function(){
		var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		guserloadingstatus='blocks';
		var networkState = navigator.connection.type;
		if(networkState!=Connection.NONE)
		{
			SpinnerDialog.show("Samuday 360", "Loading blocks.....", true);

			$.ajax({
				url:service+"mapsandmatches.asmx/loadblocks",
				type:"GET",
				dataType:"json",
				headers: { 'token': accessticket, 'empcode': empidlocal, uuid: device.uuid },
				data:{},
				ContentType:"application/json",
				success: function(response, message, status)
				{
					SpinnerDialog.hide();
					var elemfiltergp=document.getElementById('selectblock');
					elemfiltergp.length=0;
					document.getElementById('selectgp').length=0;
					document.getElementById('selectvillage').length=0;
					elemfiltergp.options[0]=new Option("Select","");

					if(status.status=="200")
					{
						for(sbloop=0 ; sbloop<response.length; sbloop++)
						{
							j=sbloop;
							elemfiltergp.options[j+1]=new Option(response[sbloop].blockname,response[sbloop].blockcode);
						}
					}
				},
				error: function(err)
				{
					SpinnerDialog.hide();
					if(err.status==401){$("#loginmodal").modal("show");}
					else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
				}
			});
		}else{ SpinnerDialog.hide(); navigator.notification.alert("Please check your Internet connetion", function(){SpinnerDialog.hide();}, 'Samuday 360','Done');}
	}, 400);
}

function loadgp()
{
	var networkState = navigator.connection.type;
	if($("#selectblock").val()!="")
	{
		if(networkState!=Connection.NONE)
		{

			var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			guserloadingstatus='gps';

			SpinnerDialog.show("Samuday 360", "Loading Grampanchayat.....", true);
			$.ajax({
				url:service+"mapsandmatches.asmx/loadgps",
				type:"GET",
				dataType:"json",
				headers: { 'token': accessticket, 'empcode': empidlocal, uuid: device.uuid },
				data:{block:$("#selectblock").val()},
				ContentType:"application/json",
				success: function(response, message, status)
				{
					SpinnerDialog.hide();

					var elemfiltergp=document.getElementById('selectgp');
					elemfiltergp.length=0;
					elemfiltergp.options[0]=new Option("Select","");
					document.getElementById('selectvillage').length=0;

					if(status.status=="200")
					{	
						for(sbloop=0 ; sbloop<response.length; sbloop++)
						{
							j=sbloop;
							elemfiltergp.options[j+1]=new Option(response[sbloop].gpname,response[sbloop].gpcode);
						}	
					}
				},
				error: function(err)
				{
					SpinnerDialog.hide();
					if(err.status==401){$("#loginmodal").modal("show");}
					else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
				}
			});
		}else{ SpinnerDialog.hide(); navigator.notification.alert("Please check your Internet connetion", function(){SpinnerDialog.hide();}, 'Samuday 360','Done');}
	}
}


function loadVillage()
{
	var networkState = navigator.connection.type;
	if($("#selectblock").val()!="" && $("#selectgp").val()!="")
	{
		if(networkState!=Connection.NONE)
		{
			var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			guserloadingstatus='village';
			
			SpinnerDialog.show("Samuday 360", "Loading Villages.....", true);
			$.ajax({
				url:service+"mapsandmatches.asmx/loadvillages",
				type:"GET",
				dataType:"json",
				headers: { 'token': accessticket, 'empcode': empidlocal, uuid: device.uuid },
				data:{block:$("#selectblock").val(), gp:$("#selectgp").val()},
				ContentType:"application/json",
				success: function(response, message, status)
				{
					SpinnerDialog.hide();

					var elemfiltergp=document.getElementById('selectvillage');
					elemfiltergp.length=0;
					elemfiltergp.options[0]=new Option("Select","");
					if(status.status=="200")
					{
						for(sbloop=0 ; sbloop<response.length; sbloop++)
						{
							j=sbloop;
							elemfiltergp.options[j+1]=new Option(response[sbloop].Villagename,response	[sbloop].Villagecode);
						}
						
					}
				},
				error: function(err)
				{
					SpinnerDialog.hide();
					if(err.status==401){$("#loginmodal").modal("show");}
					else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
				}
			});
		}else{ SpinnerDialog.hide(); navigator.notification.alert("Please check your Internet connetion", function(){SpinnerDialog.hide();}, 'Samuday 360','Done');}
	}
}




function loadguiddata()
{
	if($("#selectblock").val()!="")
	{
		if($("#selectgp").val()!="")
		{
			if($("#selectvillage").val()!="")
			{
				var networkState = navigator.connection.type;
				if(networkState!=Connection.NONE)
				{
					var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
					var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
					var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

					SpinnerDialog.show("Samuday 360", "Loading data.....", true);
					$.ajax({
						url:service+"mapsandmatches.asmx/mapsandmatchesservice",
						type:"GET",
						dataType:"json",
						headers: { 'token': accessticket, 'empcode': empidlocal, uuid: device.uuid },
						data:{block:$("#selectblock option:selected" ).text(), gp:$("#selectgp option:selected").text(), village:$("#selectvillage option:selected").text()},
						ContentType:"application/json",
						success: function(response, message, status)
						{
							SpinnerDialog.hide();

							if(status.status=="200")
							{
								blockboundaries=response[0].getblockboundarieslist;
								gpboundaries=response[0].getgpboundarieslist;
								gproads=response[0].getgproadslist;
								shroads=response[0].getshroadslist;
								villageboundaries=response[0].getvillageboundarieslist;
								villageroads=response[0].getvillageroadslist;
								survey_bene=response[0].getsurveybenelist;
								if(survey_bene.length>0)
								{setTimeout(function(){guidmobileinsert()}, 100);}
								else{navigator.notification.alert("No respondents to load", function(){}, 'Samuday 360','Done');}
							}
						},
						error: function(err)
						{
							SpinnerDialog.hide();
							if(err.status==401){$("#loginmodal").modal("show");}
							else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
						}
					});
				}else{ SpinnerDialog.hide(); navigator.notification.alert("Please check your Internet connetion", function(){SpinnerDialog.hide();}, 'Samuday 360','Done');}
			}else{navigator.notification.alert("Please select village", function(){}, 'Samuday 360','Done');}
		}else{navigator.notification.alert("Please select grampanchayat", function(){}, 'Samuday 360','Done');}
	}else{navigator.notification.alert("Please select block", function(){}, 'Samuday 360','Done');}
}