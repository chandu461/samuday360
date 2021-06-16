
// ======== Toolbar Notification ==========
function userNotification()
{

}


// ========== Search Option ========
function usersearch()
{
	
}



// ========== Toolbar Filter ==========
function userFilter()
{
	$("#filtermodal").modal("show");
}


// ========== Toolbar Default Filter Load Data For BASELINE ==========
function blloadsettings()
{
	$("#loadbenfmodal").modal("show");
}


// ========== Toolbar user SYNC ==========

function usertoolbarsync(){
	 // $("#loginmodal").modal("show");
	 userSync();
}

function userSync()
{
	//syncdate();
	var networkState = navigator.connection.type;
	if(networkState!=Connection.NONE)
	{
		syncdate();
		//syncUpload();
		
	}else{ SpinnerDialog.hide(); navigator.notification.alert("Please Check You Internet Connetion", function(){}, 'Samuday 360','Done');}
}




// ========== Toolbar Refresh ==========
function userRefresh()
{
	var path = window.location.pathname.split("/").pop();
	if(path=="surveybeneficiarylist.html" || path=="editbeneficiary.html"){localStorage.surveybenfdate="";}
	window.location.reload();
	
}


function logout()
{
	navigator.notification.confirm("Do You Want To Logout !", function(results) {if(results == 1) {
		
		

	var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var userid=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		if(service!="")
		{
			SpinnerDialog.show("Samuday 360", "Logging Out...", true);
			$.ajax({
				type:"GET",
				dataType:"json",
				headers: { 'token': accessticket, 'empcode': userid, 'uuid': device.uuid },
				ContentType:"application/json",
		        url:service+"loginservice.asmx/emplogoutservice",
		        success: function(response, message, status)
				{
					SpinnerDialog.hide();
					if(status.status==200)
					{
						localStorage.clear();
						setTimeout(function(){window.location.href="index.html"}, 1000)
					}
					else if(status.status==401){
						localStorage.clear();
						setTimeout(function(){window.location.href="index.html"}, 1000)
					}
				},
				error: function(err)
				{
					SpinnerDialog.hide();
					if(err.status==401){
						localStorage.clear();
						window.location.href="index.html";
					}
					else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
				}
			})
		}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}

	}
	}, 'Samuday 360', ['Ok','Exit'] );
}

function movetohome()
{
	 navigator.notification.confirm("Do You Want Go Back To Home!", function(results) {if(results == 1) {window.location.href="home.html";} }, 'Samuday 360', ['Yes','No'] );
}


 