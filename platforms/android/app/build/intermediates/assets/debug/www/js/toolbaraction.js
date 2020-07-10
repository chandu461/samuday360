
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
	value = confirm("Do You Want To Logout!");
	if(value==true){
		localStorage.clear();
		window.location.href="index.html";
	}
	else{}
}

function movetohome()
{
	value = confirm("Do You Want Go Back To Home!");
	if(value==true){
		window.location.href="home.html";
	}
}