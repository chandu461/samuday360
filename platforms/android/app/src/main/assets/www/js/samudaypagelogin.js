



$("#loginbutton").on('click', function(){

	$('#loginbutton').prop('disabled', true);
	var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	var userid=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var email=CryptoJS.AES.decrypt(localStorage.email, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	SpinnerDialog.show("Samuday 360", "Verifying user ...", true);
	if(emailval($("#loginusername").val())){
		if($("#loginpwd").val()!=""){
			var networkState = navigator.connection.type;
			if(networkState!=Connection.NONE)
			{ 
				empid=$("#loginusername").val();

				// var empid="";
					
				// if($("#loginusername").val()=="user1@hcl.com") {empid="51636763";}
				// else if($("#loginusername").val()=="user2@hcl.com") {empid="51686937";}
				// else if($("#loginusername").val()=="user3@hcl.com") {empid="51623721";}
				// else if($("#loginusername").val()=="user4@hcl.com") {empid="51636841";}
				// else if($("#loginusername").val()=="user5@hcl.com") {empid="51636843";}
				// else if($("#loginusername").val()=="user6@hcl.com") {empid="51636844";}
					
				
				data={username:empid, password:$("#loginpwd").val(), uuid:device.uuid, lastsynced:downloadservertime, version:device.version, manufacturer:device.manufacturer, model:device.model, platform:device.platform};


				var deviceuuid=device.uuid;
				$.ajax({
					url:service+"loginservice.asmx/EMPloginservice",
					type:"POST",
					dataType:"json",
					cache: false,
					data:data,
					ContentType:"application/json",
					success: function(response, message, status)
					{
						//****** auth token *****
						localStorage.ticket=CryptoJS.AES.encrypt('"'+response[0].getempoveralllist[0].authtoken+'"', localStorage.employeeid);
						
						SpinnerDialog.hide();

						$("#loginmodal").modal("hide");
						
						if(status.status==200)
						{
							if(response[0].getempoveralllist[0].Msg=="Login Success")
							{
								$("#loginusername").val("");
								$("#loginpwd").val("");

								if(uploadstatusmethodname=="syncing"){    userSync()}
								else if(uploadstatusmethodname=="downloaddata"){   downloaddata()}
								else if(uploadstatusmethodname=="downloadstatusdata"){ downloadstatusdata()}
								else if(uploadstatusmethodname=="loadmsselectBeneficiarylist"){ loadmsselectBeneficiarylist()  }
								else if(uploadstatusmethodname=="createbeneficiaryinserver"){ createbeneficiaryinserver()}
								else if(uploadstatusmethodname=="selectloadselectbenffilterApply"){ selectloadselectbenffilterApply()}


							}
							else if(response[0].getempoveralllist[0].Msg=="UUID mismatch"){
								navigator.notification.alert("Please login from registered device", function(){$("#loginmodal").modal("show");}, 'Samuday 360','Done');
							}
							else if(response[0].getempoveralllist[0].Msg=="Login faild") {
								navigator.notification.alert("Sorry..! your not authorized", function(){$("#loginmodal").modal("show");}, 'Samuday 360','Done');
							}
							else if(response[0].getempoveralllist[0].Msg=="Check Credentials") {
								navigator.notification.alert("Please check your Credentials", function(){}, 'Samuday 360','Done');
							}
							else if(response[0].getempoveralllist[0].Msg=="this device is already registered with another user"){
								navigator.notification.alert("This device is already registered with another user", function(){$("#loginmodal").modal("show");}, 'Samuday 360','Done');
							}
								
						}
						$('#loginbutton').prop('disabled', false);
				
					},
					error: function(err)
					{
						$("#loginmodal").modal("show");
						SpinnerDialog.hide();
						navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');
						$('#loginbutton').prop('disabled', false);
						SpinnerDialog.hide();
						return false;
					}
				});

			}else{ SpinnerDialog.hide(); navigator.notification.alert("Please check your internet connetion", function(){SpinnerDialog.hide(); $('#loginbutton').prop('disabled', false);}, 'Samuday 360','Done');}
		}else{$("#loginpwd").focus(); navigator.notification.alert("Please enter password" , function(){SpinnerDialog.hide(); $('#loginbutton').prop('disabled', false);}, 'Samuday 360','Done');}
	}else{$("#loginusername").focus(); navigator.notification.alert("Please enter valid email ID", function(){ SpinnerDialog.hide(); $('#loginbutton').prop('disabled', false);}, 'Samuday 360','Done');}

})
