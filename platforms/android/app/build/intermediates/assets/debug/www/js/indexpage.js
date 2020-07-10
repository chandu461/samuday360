// loginform
// loginbutton

// verificationform
// verificationmobilebutton

// setpinform
// setpinbutton

// enterpinform
// enterpinbutton

// attendanceform
// attendancebutton


//-----Page Level var

temppagenav=0;

 


// Login button ON CLICK action (Authentication process)
$("#loginbutton").on('click', function(){



	if(emailval($("#loginusername").val())==true){
		if($("#loginpwd").val()!=""){
			var networkState = navigator.connection.type;
			if(networkState!=Connection.NONE)
			{ 
				var empid="";
				if($("#loginusername").val()=="user1@hcl.com") {empid="51636763";}
				else if($("#loginusername").val()=="user2@hcl.com") {empid="51686937";}
				else if($("#loginusername").val()=="user3@hcl.com") {empid="51623721";}
				var deviceuuid=device.uuid;
				$.ajax({
					//url:localStorage.service+'getworkitems',
					url:"http://182.18.162.51/sg/loginservice.asmx/EMPloginservice",
					type:"GET",
					dataType:"json",
					// jsonp:"callback",
					// async:true,
					data:{username:empid, password:$("#loginpwd").val(), uuid:deviceuuid, lastsynced:downloadservertime},
					ContentType:"application/json",
					success: function(response, message, status)
					{
						if(status.status==200)
						{
							if(response[0].getempoveralllist[0].Msg=="Login Success")
							{
								localStorage.employeeid=empid;
								localStorage.username=response[0].getempoveralllist[0].EmpName;
								localStorage.email=$("#loginusername").val();
								
								////syncdate()
								//syncUpload();
								//SpinnerDialog.show("Samuday 360", "Loading...", true);
								
								syncdate();
								//======== Show PIN =======
								// $("#loginform").hide();
								// $("#verificationform").hide();
								// $("#setpinform").show();
								// $("#enterpinform").hide();
								// $("#attendanceform").hide();
								//======== Show PIN =======

								//syncUpload();
								
								//syncLoad();

								// if(typeof localStorage.uuid=="undefined" || localStorage.uuid=="")
								// {
								// 	$("#verificationform").hide();
								// 	$("#setpinform").show();
								// }else{
								// 	$("#verificationform").hide();
								// 	$("#setpinform").show();
								// }
								// temppagenav=0
								}
								else if(response[0].getempoveralllist[0].Msg=="UUID mismatch"){
									navigator.notification.alert("Please Login From Registered", function(){}, 'Samuday 360','Done');
								}
								else if(response[0].getempoveralllist[0].Msg=="Login faild") {
									navigator.notification.alert("Please Ckeck your Credentials", function(){}, 'Samuday 360','Done');
								}
								
							}
				
				},
				error: function(err)
				{
					SpinnerDialog.hide();
					navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');
					return false;
					// $("#sheduleing").modal("hide");
				}
			});



			}else{ SpinnerDialog.hide(); navigator.notification.alert("Please Check You Internet Connetion", function(){}, 'Samuday 360','Done');}
		}else{$("#loginpwd").focus(); navigator.notification.alert("Please Enter Password" , function(){}, 'Samuday 360','Done');}
	}else{$("#loginusername").focus(); navigator.notification.alert("Please Enter User ID", function(){}, 'Samuday 360','Done');}

})




// Login process. used for attendance (in verification Process)
$("#verificationmobilebutton").on('click', function(){
	if(emailval($("#loginemail").val())==true){
		if(mobileval($("#loginmobile").val())==true){

			$("#loginform").hide();
			//$("#verificationform").hide();
			
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
			//$("#verificationform").hide();
			//$("#setpinform").hide();
			$("#enterpinform").hide();
			$("#attendanceform").hide(); 
			$("#enterpinform").hide();
			$("#attendanceform").hide();

		}else{$("#loginmobile").focus(); navigator.notification.alert("Please Enter Valid Mobile Number" , function(){}, 'Samuday 360','Done');}
	}else{$("#loginemail").focus(); navigator.notification.alert("Please Enter Valid E-mail" , function(){}, 'Samuday 360','Done');}

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
			}else{ navigator.notification.alert("Please PIN Don't Match" , function(){}, 'Samuday 360','Done');}
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
			//$("#loginform").hide();

			if(typeof localStorage.uuid=="undefined" || localStorage.uuid=="")
			{
				$("#loginform").hide();
				$("#verificationform").show();
			}
			else{
				alert();
				navigator.notification.alert("Hi User...!  Your are Logged" , function(){}, 'Samuday 360','Done');
				verifyUser()
				//$("#loginform").show();
				//$("#verificationform").hide();
			}

			$("#setpinform").hide();
			//$("#enterpinform").hide();
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
		// localStorage.email="";
		// localStorage.securityword="";
		// localStorage.mobile="";
		// localStorage.employeeid="";
		// localStorage.usercode="";
		window.location.reload();
	}
	else{}
})



//========== Login Verification Service ========
function loginService(user, pass)
{

	empid="";
	if($("#loginusername").val()=="user1@hcl.com") {empid="51636763";}
	else if($("#loginusername").val()=="user2@hcl.com") {empid="51686937";}
	else if($("#loginusername").val()=="user3@hcl.com") {empid="51623721";}
	
	$.ajax({
		//url:localStorage.service+'getworkitems',
		url:"http://182.18.162.51/sg/loginservice.asmx/EMPloginservice",
		type:"GET",
		dataType:"json",
		// jsonp:"callback",
		// async:true,
		data:{username:empid, password:$("#loginpwd").val(), uuid:device.uuid, lastsynced:downloadservertime},
		ContentType:"application/json",
		success: function(response, message, status)
		{
			//alert(JSON.stringify(response));
			if(status.status==200)
			{
				if(response[0].getempoveralllist[0].Msg=="Login Success")
				{
					localStorage.username=response[0].getempoveralllist[0].EmpName;
					return true;
				}
				else if(response[0].getempoveralllist[0].Msg=="UUID mismatch"){
					navigator.notification.alert("Please Login From Registered", function(){}, 'Samuday 360','Done');
					return false;
				}
				else if(response[0].getempoveralllist[0].Msg=="Login faild") {
					navigator.notification.alert("Please Ckeck your Credentials", function(){}, 'Samuday 360','Done');
					return false;
				}
				
			}
		},
		error: function(err)
		{
			SpinnerDialog.hide();
			navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');
			return false;
			// $("#sheduleing").modal("hide");
		}
	});

	
}



function mailMobileVerification(email, mobile)
{
	if(localStorage.email==email)
	{ return true;}
	else{return false;}
}