function mobileval(mobile)
{
	if(mobile.length==10)
	{ var mob = /^[6-9]{1}[0-9]{9}$/;
		if (!mob.test(mobile))
		{return false;}
		else{ return true;}	
	}else{return false; }
}	


function emailval(email)
{
	var filter = /^([a-zA-Z0-9_\.\-])+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if (!filter.test(email))
	{return false;}
	else{return true;}

}	