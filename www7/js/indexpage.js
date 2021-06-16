//-----Page Level var

temppagenav=0;

downloadservertime =""
// Login button ON CLICK action (Authentication process)
$("#loginbutton").on('click', function(){
	
	SpinnerDialog.show("Samuday 360", "Verifying user ...", true);
	
	
	localStorage.utilmedium=CryptoJS.AES.encrypt('"https://182.18.181.115:4433/"', device.uuid);
	//localStorage.utilmedium=CryptoJS.AES.encrypt('"http://182.18.181.115:8087/"', device.uuid);
	//localStorage.utilmedium=CryptoJS.AES.encrypt('"http://182.18.162.51/sg/"', device.uuid);
	//localStorage.utilmedium=CryptoJS.AES.encrypt('"https://10.99.18.180:4433/"', device.uuid);
	// localStorage.utilmedium=CryptoJS.AES.encrypt('"http://10.99.18.180:90/Samudayandroid/"', device.uuid);
	
	
	var networkState = navigator.connection.type;

	var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	if(emailval($("#loginusername").val()))
	{
		if($("#loginpwd").val()!="")
		{
			if(networkState!=Connection.NONE)
			{
				
				if(service!="")
				{
					empid=$("#loginusername").val();

					var empid="";
					
					if($("#loginusername").val()=="user1@hcl.com") {empid="51636763";}
					else if($("#loginusername").val()=="user2@hcl.com") {empid="51686937";}
					else if($("#loginusername").val()=="user3@hcl.com") {empid="51623721";}
					else if($("#loginusername").val()=="user4@hcl.com") {empid="51636841";}
					else if($("#loginusername").val()=="user5@hcl.com") {empid="51636843";}
					else if($("#loginusername").val()=="user6@hcl.com") {empid="51636844";}
					
					
					data={username:empid, password:$("#loginpwd").val(), uuid:device.uuid, lastsynced:downloadservertime, version:device.version, manufacturer:device.manufacturer, model:device.model, platform:device.platform};


					$.ajax({
						url: service+"loginservice.asmx/EMPloginservice",
						type:"GET",
						dataType:"json",
						data:data,
						cache: false,
						ContentType:"application/json",
						success: function(response, message, status)
						{
							SpinnerDialog.hide();
							var path = window.location.pathname.split("/").pop();

							if(status.status==200)
							{
								if(response[0].getempoveralllist[0].Msg=="Login Success")
								{
									$("#loginusername").val("");
									$("#loginpwd").val("");
									
									if(path=="home.html")
									{
										localStorage.ticket=CryptoJS.AES.encrypt('"'+response[0].getempoveralllist[0].authtoken+'"', localStorage.employeeid);
										$("#loginmodal").modal("hide");
										attgeolocation();
									}if(path=="gusermapguidloaddata.html"){

										localStorage.ticket=CryptoJS.AES.encrypt('"'+response[0].getempoveralllist[0].authtoken+'"', localStorage.employeeid);
										$("#loginmodal").modal("hide");
										
										if(guserloadingstatus=='blocks'){loadblocks();}
										if(guserloadingstatus=='gps'){loadgp();}
										if(guserloadingstatus=='village'){loadVillage();}

									}
									else{

										localStorage.employeeid=CryptoJS.AES.encrypt('"'+response[0].getempoveralllist[0].EmployeeCode+'"', device.uuid);
										localStorage.username=CryptoJS.AES.encrypt('"'+response[0].getempoveralllist[0].EmpName+'"', localStorage.employeeid);
										localStorage.email=CryptoJS.AES.encrypt('"'+$("#loginusername").val()+'"', localStorage.employeeid);
										//****** auth token *****
										localStorage.ticket=CryptoJS.AES.encrypt('"'+response[0].getempoveralllist[0].authtoken+'"', localStorage.employeeid);	
										localStorage.designation=CryptoJS.AES.encrypt('"'+response[0].getempoveralllist[0].Designation+'"', localStorage.employeeid);
										localStorage.role=CryptoJS.AES.encrypt('"'+response[0].getempoveralllist[0].Role+'"', localStorage.employeeid);
										
										syncdate();
									}
								}
								else if(response[0].getempoveralllist[0].Msg=="UUID mismatch"){
									navigator.notification.alert("Please login from registered device", function(){}, 'Samuday 360','Done');
								}

								else if(response[0].getempoveralllist[0].Msg=="Login faild") {
									navigator.notification.alert("Sorry..! your not authorized", function(){}, 'Samuday 360','Done');
								}
								else if(response[0].getempoveralllist[0].Msg=="Check Credentials") {
									navigator.notification.alert("Please check your Credentials", function(){}, 'Samuday 360','Done');
								}
								else if(response[0].getempoveralllist[0].Msg=="this device is already registered with another user")
								{
									navigator.notification.alert("This device is already registered with another user", function(){}, 'Samuday 360','Done');
								}	
							}
						},
						error: function(err)
						{
							//alert(JSON.stringify(err));
							SpinnerDialog.hide();
							if(status==401){$("#loginmodal").modal("show")}
							navigator.notification.alert("Please try again", function(){SpinnerDialog.hide();}, 'Samuday 360','Done');
							return false;
						}
					});
				}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
			}else{ SpinnerDialog.hide(); navigator.notification.alert("Please check your internet connetion", function(){SpinnerDialog.hide();}, 'Samuday 360','Done');}
		}else{$("#loginpwd").focus(); navigator.notification.alert("Please enter password" , function(){SpinnerDialog.hide();}, 'Samuday 360','Done');}
	}else{$("#loginusername").focus(); navigator.notification.alert("Please enter valid email ID", function(){SpinnerDialog.hide();}, 'Samuday 360','Done');}

})




// Login process. used for attendance (in verification Process)
$("#verificationmobilebutton").on('click', function(){
	if(emailval($("#loginemail").val())==true){
		if(mobileval($("#loginmobile").val())==true){

			$("#loginform").hide();

			if(mailMobileVerification($("#loginemail").val(), $("#loginmobile").val()))
			{
				// Mobile uuid test value 1234
				localStorage.uuid=1234;
				navigator.notification.alert("Please Contact Admin To Update" , function(){}, 'Samuday 360','Done');
				$("#loginform").show();
				$("#verificationform").hide();
			}
			else{
				navigator.notification.alert("Please Enter Valid Details" , function(){}, 'Samuday 360','Done');
				$("#loginform").hide();
				$("#verificationform").show();
			}

			$("#enterpinform").hide();
			$("#attendanceform").hide(); 
			$("#enterpinform").hide();
			$("#attendanceform").hide();

		}else{$("#loginmobile").focus(); navigator.notification.alert("Please Enter Valid Mobile Number" , function(){}, 'Samuday 360','Done');}
	}else{$("#loginemail").focus(); navigator.notification.alert("Please Enter valid E-mail" , function(){}, 'Samuday 360','Done');}

})




// Set PIN to login offline button ON CLICK action (Authentication process)

$("#setpinbutton").on('click', function(){
	if($("#loginpin").val()!="" && $("#loginpin").val().length==4){
		if($("#loginconfirmpin").val()!="" && $("#loginconfirmpin").val().length==4){
			if($("#loginconfirmpin").val()==$("#loginpin").val())
			{
				localStorage.securitycode=$("#loginpin").val()
				window.location.href="home.html";
				$("#loginform").hide();
				$("#verificationform").hide();
				$("#setpinform").hide();
				$("#enterpinform").show();
				$("#attendanceform").hide();
			}else{ navigator.notification.alert("Confirm PIN Don't Match" , function(){}, 'Samuday 360','Done');}
		}else{ navigator.notification.alert("Please Enter 4 - Digit Confirm PIN" , function(){}, 'Samuday 360','Done');}
	}else{ navigator.notification.alert("Please Enter 4 - Digit PIN" , function(){}, 'Samuday 360','Done');}

})




// Offline Login Button, PIN Validation (in verification Process)
$("#enterpinbutton").on('click', function(){
	if($("#loginsetpin").val()!="" && $("#loginsetpin").val().length==4){
		if(localStorage.securitycode==$("#loginsetpin").val())
		{window.location.href="home.html";}
		else{ navigator.notification.alert("Please Enter Valid PIN" , function(){}, 'Samuday 360','Done');}

	}else{ navigator.notification.alert("Please Enter 4 - Digit PIN" , function(){}, 'Samuday 360','Done');}

})



// Attendance Form Submit Form Action
$("#attendancebutton").on('click', function(){
	if($("#attendanceempid").val()!=""){
		if(localStorage.employeeid==$("#attendanceempid").val())
		{
			if(typeof localStorage.uuid=="undefined" || localStorage.uuid=="")
			{
				$("#loginform").hide();
				$("#verificationform").show();
			}
			else{
				navigator.notification.alert("Hi User...!  Your are Logged" , function(){}, 'Samuday 360','Done');
				verifyUser()
			}

			$("#setpinform").hide();
			$("#attendanceform").hide();
			temppagenav=1
		}else{
			navigator.notification.alert("Please Enter Valid Employee ID" , function(){}, 'Samuday 360','Done');
		}
	}else{ navigator.notification.alert("Please Enter Employee ID" , function(){}, 'Samuday 360','Done');}

})


//==================================================================================

// Attendance icon action (open attendance form)
$("#attendanceicon").on('click', function(){

	$("#loginform").hide();
	$("#verificationform").hide();
	$("#setpinform").hide();
	$("#enterpinform").hide();
	$("#attendanceform").show();
})



// Attendance icon action (open attendance form)
$("#attendanceiconinpin").on('click', function(){

	$("#loginform").hide();
	$("#verificationform").hide();
	$("#setpinform").hide();
	$("#enterpinform").hide();
	$("#attendanceform").show();
})



// Loggin icon action (open attendance form)
$("#logginicon").on('click', function(){

	$("#loginform").show();
	$("#verificationform").hide();
	$("#setpinform").hide();
	$("#enterpinform").hide();
	$("#attendanceform").hide();
})






// ========= Verify User Already Loggedin / Not ========
function verifyUser()
{
	if(typeof localStorage.securitycode=="undefined" || localStorage.securitycode=="")
	{
		$("#loginform").show();
		$("#verificationform").hide();
		$("#setpinform").hide();
		$("#enterpinform").hide();
		$("#attendanceform").hide();
	}else{

		$("#loginform").hide();
		$("#verificationform").hide();
		$("#setpinform").hide();
		$("#enterpinform").show();
		$("#attendanceform").hide();
	}
}


$("#resetpin").on("click", function(){
	value = confirm("Do You Want To Reset PIN!");
	if(value==true){
		localStorage.securitycode="";
		window.location.reload();
	}
	else{}
})


function mailMobileVerification(email, mobile)
{
	if(localStorage.email==email)
	{ return true;}
	else{return false;}
}







// ========= Attendance Login Service ============

//==========  Attendance login location Start =============
var attlongitude="";
var attlatitude="";
function attgeolocation()
{
	if($("#empsapid").val()!="")
	{
		SpinnerDialog.show("Samuday 360", "Computing Location", true);
		navigator.geolocation.getCurrentPosition(attgeosuccess, attongeoError, { maximumAge: 5000, timeout: 7000, enableHighAccuracy: true });
	}else{navigator.notification.alert("Please Enter SAP ID", function(){}, 'Samuday 360','Done');}
}
	
	
var attgeosuccess = function(position) {
		SpinnerDialog.hide();
		attlongitude = position.coords.latitude;
    	attlatitude= position.coords.longitude;
    	employeeattendance();
		
};

function attongeoError(error) {SpinnerDialog.hide(); navigator.notification.alert("GPS Problem", function(){}, 'Samuday 360','Done');}

//==========  Attendance login location End =============

function employeeattendance()
{
	var networkState = navigator.connection.type;
	if(attlongitude!="")
	{
		if(networkState!=Connection.NONE)
		{
			var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

			SpinnerDialog.show("Samuday 360", "Logging.....", true);
			$.ajax({
				url:service+"loginservice.asmx/EMPattendanceservice",
				type:"GET",
				dataType:"json",
				headers: { 'token': accessticket, 'empcode': empidlocal, uuid: device.uuid },
				data:{empcode:$("#empsapid").val(), uuid:device.uuid, longitude:attlongitude, latitude:attlatitude},
				ContentType:"application/json",
				success: function(response, message, status)
				{
					SpinnerDialog.hide();
					if(status.status=="200")
					{
						if(response[0].getempoveralllist[0].status_code=="200")
						{
							$("#attendancemodal").modal("hide");
							$("#empsapid").val("");
							localStorage.attendancecount=CryptoJS.AES.decrypt(response[0].getempoveralllist[0].count, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
							navigator.notification.alert(response[0].getempoveralllist[0].Msg, function(){}, 'Samuday 360','Done');
							if((parseInt(response[0].getempoveralllist[0].count)%2)==0){
								$("#attendancemodalbtn").html("Login");
							}
							else
							{$("#attendancemodalbtn").html("Logout");}
						}else{
							navigator.notification.alert(response[0].getempoveralllist[0].Msg, function(){}, 'Samuday 360','Done');
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
		}else{navigator.notification.alert("Please check you Internet connection", function(){}, 'Samuday 360','Done');}
	}else{
		attgeolocation();
	}
}

function showPrompt() {
        navigator.notification.prompt('Do you want to clear UUID of '+ $("#clearuuidmodalempsapid").val(), onPrompt, 'Samuday 360', ['Ok','Exit'] );
}


 function onPrompt(results) {
   if (results.buttonIndex == 1) {clearempuuid()} 
   else { $("#clearuuidmodal").modal("hide")}
 }

function clearempuuid()
{
	var networkState = navigator.connection.type;
	if($("#clearuuidmodalempsapid").val()!="")
	{
		if(networkState!=Connection.NONE)
		{

			var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
			
			SpinnerDialog.show("Samuday 360", "Updating.....", true);
			$.ajax({
				url:service+"loginservice.asmx/ClearIMEIdetails",
				type:"GET",
				dataType:"json",
				headers: { 'token': accessticket, 'empcode': empidlocal, uuid: device.uuid },
				data:{empid:$("#clearuuidmodalempsapid").val()},
				ContentType:"application/json",
				success: function(response, message, status)
				{
					$("#clearuuidmodal").modal("hide");
					$("#clearuuidmodalempsapid").val("");
					SpinnerDialog.hide();
					$("#clearuuidmodalempsapid").val();
					
					if(status.status=="200")
					{
						if(response.status_code=="200")
						{
							navigator.notification.alert(response[0].getempoveralllist[0].Msg, function(){}, 'Samuday 360','Done');
						}else{
							navigator.notification.alert(response[0].getempoveralllist[0].Msg, function(){}, 'Samuday 360','Done');
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
		}else{navigator.notification.alert("Please check you Internet connection", function(){}, 'Samuday 360','Done');}
	}else{
		navigator.notification.alert("Please enter SAP ID", function(){}, 'Samuday 360','Done');
	}
}