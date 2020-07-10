//======== Page Level Var ========

questioncount=2
answercount=0


surveyworkitemmappingcode=''; // Survey workitem Mapping code
respondantcode=''; // Respondent code

surveyparentresponse=[]; // Collection of parent response
surveychildresponse=[];  // Collection of child response

surveyresponsesavetype="";// Save or Sumbit

// ====== Screen Height =========
screenheight=parseInt(screen.height)-260
$("#sectionscontent").height(screenheight);

// ======== Save Button Action============
$("#surveysave").on("click", function(){

	savecount=count();
	if(savecount>0){
		response=confirm("Do You Want To Save "+ savecount +" / "+questioncount);
		if(response==true){
			navigator.notification.alert("Saved Successfully", function(){}, 'Samuday 360','Done');
		}
	}else{navigator.notification.alert("Please Answer At Least One Question", function(){}, 'Samuday 360','Done');}
})

// ======== Submit Button Action============


function count()
{
	answercount=0
	for(loop=1; loop<3; loop++)
	{
		if($("#"+loop).val()!=""){
			answercount++;
			//console.log(answercount);
		}
	}
	return answercount;
}





// ========= Survey Questions Html  BEGANS  ==========

function surveyQuestionshtml()
{

	surveyresponsesavetype="";
	// optionQuestions
	// questionsOptions

	tabbtn="";
	for(sectionbtnloop=0; sectionbtnloop<surveysections.length; sectionbtnloop++)
	{
		
			if(sectionbtnloop==0)
			{tabbtn+= '<button class="tablinks active" onclick=openCity(event,"'+sectionbtnloop+'") style="width:'+100/surveysections.length+'%">'+surveysections[sectionbtnloop]+'</button>'}
			else {tabbtn+= '<button class="tablinks" onclick=openCity(event,"'+sectionbtnloop+'") style="width:'+100/surveysections.length+'%">'+surveysections[sectionbtnloop]+'</button>'}
		
	}
	$("#sectionsbtns").html(tabbtn);

	sectionindex=0
	surveyquestionslen=surveyquestions.length;
	sectioncontent='<div id="0" class="tabcontent" style="overflow-y: scroll;  overflow-x: hidden; display:block;">'
	for(surveyquestionsloop=0; surveyquestionsloop<surveyquestionslen; surveyquestionsloop++)
	{
		if(surveysections[sectionindex]!=surveyquestions[surveyquestionsloop][5])
		{
			if(surveyquestions[surveyquestionsloop][5]!=null && surveyquestions[surveyquestionsloop][5]!="null" && surveyquestions[surveyquestionsloop][5]!="")
			{
				sectionindex++;
				sectioncontent+='</div><div id="'+sectionindex+'" class="tabcontent" style="overflow-y: scroll;  overflow-x: hidden;">';
			}
		}
		
		// Question hide / show depending on Child / Parent
		if(surveyquestions[surveyquestionsloop][2]=='P'){sectioncontent+='<div class="form-group">'}
		else if(surveyquestions[surveyquestionsloop][2]=='C'){sectioncontent+='<div class="form-group" id="'+surveyquestions[surveyquestionsloop][0]+'div" style="display:none">'}

		//Label Validation
		if(surveyquestions[surveyquestionsloop][6]=='0'){sectioncontent+='<label for="name"> '+surveyquestions[surveyquestionsloop][1]+'</label>' }
		else{sectioncontent+='<label for="name"><span class="mandate">* </span> '+surveyquestions[surveyquestionsloop][1]+'</label>' }

		//numeric pad for numbers
		var tempinputtype="text";
		var validationsdistquestionsindex=validationsdistquestions.indexOf(surveyquestions[surveyquestionsloop][0])
	
		if(validationsdistquestionsindex>=0){
			for(validatioloop=0; validatioloop<questionsvalidation[validationsdistquestionsindex].length; validatioloop++)
			{
				if(questionsvalidation[validationsdistquestionsindex][validatioloop].validationtypename=="Numeric"){tempinputtype="number"}
			}
		}
		if(surveyquestions[surveyquestionsloop][3]=='1')
		{console.log(tempinputtype);
			sectioncontent+='<input type="'+tempinputtype+'" class="form-control" id="'+surveyquestions[surveyquestionsloop][0]+'"'
			if(childparentquestion.indexOf(surveyquestions[surveyquestionsloop][0])>=0)
			{sectioncontent+='onclick=changeaction(this)><span id="'+surveyquestions[surveyquestionsloop][0]+'err" class="err" ></span></div>'}else{sectioncontent+='><span id="'+surveyquestions[surveyquestionsloop][0]+'err" class="err" ></span></div>'}
			}
		else if(surveyquestions[surveyquestionsloop][3]=='2'){
			//optionQuestions.indexof(surveyquestions[surveyquestionsloop][0])
			tempoptsarray=questionsOptions[optionQuestions.indexOf(surveyquestions[surveyquestionsloop][0])];
			for(temploop=0; temploop<tempoptsarray.length; temploop++)
			{
				sectioncontent+='<label class="form-control form-control-label"><input type="radio" class="form-control-radio"  value="'+tempoptsarray[temploop][0]+'" name="'+surveyquestions[surveyquestionsloop][0]+'" id="'+surveyquestions[surveyquestionsloop][0]+'" '
				if(childparentquestion.indexOf(surveyquestions[surveyquestionsloop][0])>=0)
				{sectioncontent+='onclick=changeaction(this) /><span>'+tempoptsarray[temploop][1]+'</span></label>'}else{sectioncontent+='><span>'+tempoptsarray[temploop][1]+'</span></label>'}
			}
			sectioncontent+='<span id="'+surveyquestions[surveyquestionsloop][0]+'err" class="err" ></span></div>';
		}
		else if(surveyquestions[surveyquestionsloop][3]=='3'){
			//optionQuestions.indexof(surveyquestions[surveyquestionsloop][0])
			tempoptsarray=questionsOptions[optionQuestions.indexOf(surveyquestions[surveyquestionsloop][0])];
			tempoptsarray=tempoptsarray[0][0].split(",");
			
			for(temploop=0; temploop<tempoptsarray.length; temploop++)
			{
				sectioncontent+='<label class="form-control form-control-label"><input type="radio" class="form-control-radio"  value="'+tempoptsarray[temploop]+'" name="'+surveyquestions[surveyquestionsloop][0]+'" id="'+surveyquestions[surveyquestionsloop][0]+'"'
				if(childparentquestion.indexOf(surveyquestions[surveyquestionsloop][0])>=0)
				{sectioncontent+='onclick=changeaction(this) ><span>'+tempoptsarray[temploop]+'</span></label>'}else{sectioncontent+='><span>'+tempoptsarray[temploop]+'</span></label>'}

			}
			sectioncontent+='<span id="'+surveyquestions[surveyquestionsloop][0]+'err" class="err" ></span></div>';
		}
		else if(surveyquestions[surveyquestionsloop][3]=='4'){
			//optionQuestions.indexof(surveyquestions[surveyquestionsloop][0])
			tempoptsarray=questionsOptions[optionQuestions.indexOf(surveyquestions[surveyquestionsloop][0])];
			for(temploop=0; temploop<tempoptsarray.length; temploop++)
			{
				sectioncontent+='<label class="form-control form-control-label"><input type="checkbox" class="form-control-radio"  value="'+tempoptsarray[temploop][0]+'" id="'+surveyquestions[surveyquestionsloop][0]+ temploop+'"'

				if(childparentquestion.indexOf(surveyquestions[surveyquestionsloop][0])>=0)
				{sectioncontent+='onclick=changeaction(this) ><span>'+tempoptsarray[temploop][1]+'</span></label>'}else{sectioncontent+='><span>'+tempoptsarray[temploop][1]+'</span></label>'}
			}
			sectioncontent+='<span id="'+surveyquestions[surveyquestionsloop][0]+'err" class="err" ></span></div>';
		}
		else if(surveyquestions[surveyquestionsloop][3]=='5'){
			//optionQuestions.indexof(surveyquestions[surveyquestionsloop][0])
			tempoptsarray=questionsOptions[optionQuestions.indexOf(surveyquestions[surveyquestionsloop][0])];
			for(temploop=0; temploop<tempoptsarray.length; temploop++)
			{
				sectioncontent+='<label class="form-control form-control-label"><input type="range" class="form-control-radio" min="0" max="10"  value="'+tempoptsarray[temploop][0]+'" id="'+surveyquestions[surveyquestionsloop][0]+ temploop+'"'
				if(childparentquestion.indexOf(surveyquestions[surveyquestionsloop][0])>=0)
				{sectioncontent+='onChange=changeaction(this) ><span>'+tempoptsarray[temploop][1]+'</span></label>'}else{sectioncontent+='><span>'+tempoptsarray[temploop][1]+'</span></label>'}
			}
			sectioncontent+='<span id="'+surveyquestions[surveyquestionsloop][0]+'err" class="err" ></span></div>';
		}
		else if(surveyquestions[surveyquestionsloop][3]=='6'){
			//optionQuestions.indexof(surveyquestions[surveyquestionsloop][0])
			sectioncontent+='<select  class="form-control" name="'+surveyquestions[surveyquestionsloop][0]+'" id="'+surveyquestions[surveyquestionsloop][0]+'" onChange=changeaction(this)>';
			tempoptsarray=questionsOptions[optionQuestions.indexOf(surveyquestions[surveyquestionsloop][0])];
			for(temploop=0; temploop<tempoptsarray.length; temploop++)
			{
				sectioncontent+='<option value="'+tempoptsarray[temploop][0]+'">'+tempoptsarray[temploop][1]+'</option>'
			}
			sectioncontent+='<span id="'+surveyquestions[surveyquestionsloop][0]+'err" class="err" ></span></div>';
		}
		else if(surveyquestions[surveyquestionsloop][3]=='7'){
			sectioncontent+='<input type="date" class="form-control" id="'+surveyquestions[surveyquestionsloop][0]+'"'

			if(childparentquestion.indexOf(surveyquestions[surveyquestionsloop][0])>=0)
				{sectioncontent+='onChange=changeaction(this) ><span id="'+surveyquestions[surveyquestionsloop][0]+'err" class="err" ></span></div>'}else{sectioncontent+='/><span id="'+surveyquestions[surveyquestionsloop][0]+'err" class="err" ></span></div>'}
		}
		else if(surveyquestions[surveyquestionsloop][3]=='8'){
			sectioncontent+='<select  class="form-control"  name="'+surveyquestions[surveyquestionsloop][0]+'" id="'+surveyquestions[surveyquestionsloop][0]+'" onChange=changeaction(this)  multiple>';
			tempoptsarray=questionsOptions[optionQuestions.indexOf(surveyquestions[surveyquestionsloop][0])];
			for(temploop=0; temploop<tempoptsarray.length; temploop++)
			{
				sectioncontent+='<option value="'+tempoptsarray[temploop][0]+'">'+tempoptsarray[temploop][1]+'</option>'
			}
			sectioncontent+='</select><span id="'+surveyquestions[surveyquestionsloop][0]+'err" class="err" ></span></div>';
		}

	}
	sectioncontent+='</div><div class="form-group" align="center"><button type="button" class="btn btn-warning" onClick="savesurvey()">Save</button><button type="button" class="btn" onClick="submitsurvey()">Submit</button></div>';
	$("#sectionscontent").html(sectioncontent);
	preloadSurveyResponse() // Fetch SAVED data
}


function changeaction(elem)
{
	questvalue=elem.value
	tempindex=childparentquestion.indexOf(elem.id)
	if(tempindex>=0)
	{
		chlidq=childquestionconditions[tempindex];
		for(childloop=0; childloop<chlidq.length; childloop++)
		{
			if(questvalue==chlidq[childloop][1])
			{
				document.getElementById(chlidq[childloop][0]+'div').style.display="";
			}else{document.getElementById(chlidq[childloop][0]+'div').style.display="none";}
		}
	}
	
}




// ========= Survey Questions Html  BEGANS  ==========

// =========  SUBMIT SURVEYED DATA  BEGANS========
errid="";
function submitsurvey()
{
$(".err").html("");
surveyresponsesavetype=2;
surveyparentresponse=[];
surveychildresponse=[];
// optionQuestions=[]; // questions having options
// questionsOptions=[]; // Option of questions in optionQuestions

// surveyquestions=[]; // Collection of questions (with all info required)
// surveyquestionnumber=[]; // Collection of questions (with only question number)
// onlyparentquestions=[]; // Collection of Parent questions (with only question number)
// surveysections=[]; // Question Section name


// childparentquestion=[];  //Collection of Parent Questions
// childquestions=[]; // Collection of child questions
// childquestionconditions=[]; //Collection of condition for child questions

	try
	{
		for(parentloop=0; parentloop<onlyparentquestions.length; parentloop++)
		{
			surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
			respondantcode=CryptoJS.AES.decrypt(localStorage.respondantcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
			parent=surveyquestions[surveyquestionnumber.indexOf(onlyparentquestions[parentloop])]

			errid=parent[0];

			parentcheckedvalues=[]
			if(parent[3]==2 || parent[3]==3 || parent[3]==4)
			{
				checkboxradio=document.getElementsByName(parent[0])
				for(checkboxradioloop=0; checkboxradioloop<checkboxradio.length; checkboxradioloop++)
				{
					if(checkboxradio[checkboxradioloop].checked)
					{ parentcheckedvalues.push(checkboxradio[checkboxradioloop].value) }
				}
				surveyparentresponse.push([surveyworkitemmappingcode, respondantcode, parent[0], parent[0], parentcheckedvalues, parent[9]])
			}
			else if(parent[3]==8 )
			{
				parentcheckedvalues=document.getElementById(parent[0]).value;
				surveyparentresponse.push([surveyworkitemmappingcode, respondantcode, parent[0], parent[0], parentcheckedvalues, parent[9]])
			}
			else{surveyparentresponse.push([surveyworkitemmappingcode, respondantcode, parent[0], parent[0], document.getElementById(parent[0]).value, parent[9]]);}


			//Question Validation	
			if(parent[6]!=0)
			{

				// validationsdistquestions
				// questionsvalidation
				//console.log(validationsdistquestions);
				var validindex=validationsdistquestions.indexOf(parent[0])
				// console.log(validindex);

				if(validindex>=0)
				{//console.log(questionsvalidation[validindex]);
					for(validloop=0; validloop<questionsvalidation[validindex].length; validloop++)
					{
						questionvalids=questionsvalidation[validindex][validloop].validationtypename;
						validquestionanswer=document.getElementById(parent[0]).value;
						if(validquestionanswer!="")
						{
							if(questionvalids=="Numeric"){
								if(isNaN(validquestionanswer)){throw questionsvalidation[validindex][validloop].violationmessage}
							}
							else if(questionvalids=="Decimal"){

							}
							else if(questionvalids=="Range"){
								var valrange=questionsvalidation[validindex][validloop].allowedvalues.split("-");
								if(validquestionanswer>=parseInt(valrange[0]) &&  validquestionanswer<=parseInt(valrange[1])){}
								else{throw questionsvalidation[validindex][validloop].violationmessage}
							}
							else if(questionvalids=="DigitCount"){
								var valrange=questionsvalidation[validindex][validloop].allowedvalues.split("-")
								if(validquestionanswer.length>=parseInt(valrange[0]) && validquestionanswer.length<=parseInt(valrange[1])){}
								else{throw questionsvalidation[validindex][validloop].violationmessage}
							}
							else if(questionvalids=="AlphaNumeric"){
								if(!validquestionanswer.match(/[a-zA-Z0-9 ]*$/)){throw questionsvalidation[validindex][validloop].violationmessage;}

							}
							else if(questionvalids=="MaxLength"){
								if(validquestionanswer.length>questionsvalidation[validindex][validloop].allowedvalues){throw questionsvalidation[validindex][validloop].violationmessage}
							}
							else if(questionvalids=="Characters"){
								if(!validquestionanswer.match(/[a-zA-Z ]*$/)){throw questionsvalidation[validindex][validloop].violationmessage;}
							}
						}
						else{throw questionsvalidation[validindex][validloop].violationmessage;}
						// console.log(questionsvalidation[validindex][validloop]);
					}
				}
				
				// if(parent[3]==2 || parent[3]==3 || parent[3]==4)
				// {
				// 	if(parentcheckedvalues.lenght>0){ }else{break;navigator.notification.alert("Please Select "+parent[1], function(){}, 'Samuday 360','Done');}
				// }
				// else if(parent[3]==8 )
				// {
				// 	if(parentcheckedvalues.lenght>0){ }else{break;navigator.notification.alert("Please Select "+parent[1], function(){}, 'Samuday 360','Done');}
				// }
				// else{
				// 	if(document.getElementById(parent[0]).value!=""){ }else{break; navigator.notification.alert("Please Select "+parent[1], function(){}, 'Samuday 360','Done');}
				// }
			}

			childparentquestionindex=childparentquestion.indexOf(parent[0])
				
			if(childparentquestionindex>=0)
			{childvalidation(childparentquestion.indexOf(parent[0]), parent[3])}

		}

		saveEditSurveyResponse();
	}
	  catch(err){
		
		$(".err").html("");
      	$("#"+errid+"err").html(err);
	  	$("#"+errid).focus();

	  	//console.log(err);
	  	//navigator.notification.alert(err, function(){}, 'Samuday 360','Done');
	}
}


function childvalidation(parentindex, parentquestiontype)
{
	if(parentindex>=0)
	{
		childconditions=childquestionconditions[parentindex];
		
		checkedvalues=[]
		if(parentquestiontype==2 || parentquestiontype==3 || parentquestiontype==4)
		{
			checkboxradio=document.getElementsByName(childconditions[0][2])
			for(checkboxradioloop=0; checkboxradioloop<checkboxradio.length; checkboxradioloop++)
			{
				if(checkboxradio[checkboxradioloop].checked)
				{
					checkedvalues.push(checkboxradio[checkboxradioloop].value)
					
				}
			}
		}
		else if(parentquestiontype==8 )
		{
			checkedvalues=document.getElementById(childconditions[0][2]).value;
			
		}
		else{checkedvalues.push(document.getElementById(childconditions[0][2]).value)}
		parentvalue=document.getElementsByName(childconditions[0][2]).value;
		for(childconditionsloop=0; childconditionsloop<childconditions.length; childconditionsloop++)
		{

			if(checkedvalues.indexOf(childconditions[childconditionsloop][1])>=0)
			{
				surveyquestionnumber.indexOf(childconditions[childconditionsloop][0]);
				child=surveyquestions[surveyquestionnumber.indexOf(childconditions[childconditionsloop][0])];

				errid=child[0];
				childcheckedvalues=[]
				if(child[3]==2 || child[3]==3 || child[3]==4)
				{
					checkboxradio=document.getElementsByName(child[0])
					for(checkboxradioloop=0; checkboxradioloop<checkboxradio.length; checkboxradioloop++)
					{
						if(checkboxradio[checkboxradioloop].checked)
						{ childcheckedvalues.push(checkboxradio[checkboxradioloop].value) }
					}
					surveychildresponse.push([surveyworkitemmappingcode, respondantcode, child[0], child[0], childcheckedvalues, child[9]])
				}
				else if(parent[3]==8 )
				{
					parentcheckedvalues=document.getElementById(child[0]).value;
					surveychildresponse.push([surveyworkitemmappingcode, respondantcode, child[0], child[0], childcheckedvalues, child[9]])
				}
				else{ surveychildresponse.push([surveyworkitemmappingcode, respondantcode, child[0], child[0], document.getElementById(child[0]).value, child[9]]);}



				
				if(child[6]!=0)
				{


					// validationsdistquestions
					// questionsvalidation
					//console.log(validationsdistquestions);
					var validindex=validationsdistquestions.indexOf(child[0])
					// console.log(validindex);

					if(validindex>=0)
					{//console.log(questionsvalidation[validindex]);
						for(validloop=0; validloop<questionsvalidation[validindex].length; validloop++)
						{
							questionvalids=questionsvalidation[validindex][validloop].validationtypename;
							validquestionanswer=document.getElementById(child[0]).value;
							if(validquestionanswer!="")
							{
								if(questionvalids=="Numeric"){
									if(!isNaN(validquestionanswer)){throw questionsvalidation[validindex][validloop].violationmessage}
								}
								else if(questionvalids=="Decimal"){

								}
								else if(questionvalids=="Range"){
									var valrange=questionsvalidation[validindex][validloop].allowedvalues.split("-");
									if(validquestionanswer>=parseInt(valrange[0]) &&  validquestionanswer<=parseInt(valrange[1])){}
									else{throw questionsvalidation[validindex][validloop].violationmessage}
								}
								else if(questionvalids=="DigitCount"){
									var valrange=questionsvalidation[validindex][validloop].allowedvalues.split("-")
									if(validquestionanswer.length>=parseInt(valrange[0]) && validquestionanswer.length<=parseInt(valrange[1])){}
									else{throw questionsvalidation[validindex][validloop].violationmessage}
								}
								else if(questionvalids=="AlphaNumeric"){
									if(validquestionanswer.match(/^[a-zA-Z0-9 ]*$/)){throw questionsvalidation[validindex][validloop].violationmessage;}

								}
								else if(questionvalids=="MaxLength"){
									if(validquestionanswer.length>questionsvalidation[validindex][validloop].allowedvalues){throw questionsvalidation[validindex][validloop].violationmessage}
								}
								else if(questionvalids=="Characters"){
									if(validquestionanswer.match(/^[a-zA-Z ]*$/)){throw questionsvalidation[validindex][validloop].violationmessage;}
								}
							}
							else{throw questionsvalidation[validindex][validloop].violationmessage;}
							// console.log(questionsvalidation[validindex][validloop]);
						}
					}


					// if(child[3]==2 || child[3]==3 || child[3]==4)
					// {
					// 	if(parentcheckedvalues.lenght>0){ }else{break; navigator.notification.alert("Please Select "+child[1], function(){}, 'Samuday 360','Done');}
					// }
					// else if(child[3]==8 )
					// {
					// 	if(parentcheckedvalues.lenght>0){ }else{break; navigator.notification.alert("Please Select "+child[1], function(){}, 'Samuday 360','Done');}
					// }
					// else{
					// 	if(document.getElementById(child[0]).value!=""){ }else{break; navigator.notification.alert("Please Enter "+child[1], function(){}, 'Samuday 360','Done');}
					// }
				}
			}
		}
	}
}

//  ==========  SUBMIT SURVEYED DATA ENDS==========


//  ==========  SAVE SURVEYED DATA BEGANS ===========



function savesurvey()
{

surveyresponsesavetype=1;
surveyparentresponse=[];
surveychildresponse=[];
// optionQuestions=[]; // questions having options
// questionsOptions=[]; // Option of questions in optionQuestions

// surveyquestions=[]; // Collection of questions (with all info required)
// surveyquestionnumber=[]; // Collection of questions (with only question number)
// onlyparentquestions=[]; // Collection of Parent questions (with only question number)
// surveysections=[]; // Question Section name


// childparentquestion=[];  //Collection of Parent Questions
// childquestions=[]; // Collection of child questions
// childquestionconditions=[]; //Collection of condition for child questions

	try
	{
		for(parentloop=0; parentloop<onlyparentquestions.length; parentloop++)
		{
			surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
			respondantcode=CryptoJS.AES.decrypt(localStorage.respondantcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
			parent=surveyquestions[surveyquestionnumber.indexOf(onlyparentquestions[parentloop])]

			errid=parent[0];

			parentcheckedvalues=[]
			if(parent[3]==2 || parent[3]==3 || parent[3]==4)
			{
				checkboxradio=document.getElementsByName(parent[0])
				for(checkboxradioloop=0; checkboxradioloop<checkboxradio.length; checkboxradioloop++)
				{
					if(checkboxradio[checkboxradioloop].checked)
					{ parentcheckedvalues.push(checkboxradio[checkboxradioloop].value) }
				}
				surveyparentresponse.push([surveyworkitemmappingcode, respondantcode, parent[0], parent[0], parentcheckedvalues, parent[9]])
			}
			else if(parent[3]==8 )
			{
				parentcheckedvalues=document.getElementById(parent[0]).value;
				surveyparentresponse.push([surveyworkitemmappingcode, respondantcode, parent[0], parent[0], parentcheckedvalues, parent[9]])
			}
			else{surveyparentresponse.push([surveyworkitemmappingcode, respondantcode, parent[0], parent[0], document.getElementById(parent[0]).value, parent[9]]);}


			//Question Validation	
			if(parent[6]!=0)
			{

				// validationsdistquestions
				// questionsvalidation
				//console.log(validationsdistquestions);
				var validindex=validationsdistquestions.indexOf(parent[0])
				// console.log(validindex);

				if(validindex>=0)
				{//console.log(questionsvalidation[validindex]);
					for(validloop=0; validloop<questionsvalidation[validindex].length; validloop++)
					{
						questionvalids=questionsvalidation[validindex][validloop].validationtypename;
						validquestionanswer=document.getElementById(parent[0]).value;
						if(validquestionanswer!="")
						{
							if(questionvalids=="Numeric"){
								if(isNaN(validquestionanswer)){throw questionsvalidation[validindex][validloop].violationmessage}
							}
							else if(questionvalids=="Decimal"){

							}
							else if(questionvalids=="Range"){
								var valrange=questionsvalidation[validindex][validloop].allowedvalues.split("-");
								if(validquestionanswer>=parseInt(valrange[0]) &&  validquestionanswer<=parseInt(valrange[1])){}
								else{throw questionsvalidation[validindex][validloop].violationmessage}
							}
							else if(questionvalids=="DigitCount"){
								var valrange=questionsvalidation[validindex][validloop].allowedvalues.split("-")
								if(validquestionanswer.length>=parseInt(valrange[0]) && validquestionanswer.length<=parseInt(valrange[1])){}
								else{throw questionsvalidation[validindex][validloop].violationmessage}
							}
							else if(questionvalids=="AlphaNumeric"){
								if(!validquestionanswer.match(/[a-zA-Z0-9 ]*$/)){throw questionsvalidation[validindex][validloop].violationmessage;}

							}
							else if(questionvalids=="MaxLength"){
								if(validquestionanswer.length>questionsvalidation[validindex][validloop].allowedvalues){throw questionsvalidation[validindex][validloop].violationmessage}
							}
							else if(questionvalids=="Characters"){
								if(!validquestionanswer.match(/[a-zA-Z ]*$/)){throw questionsvalidation[validindex][validloop].violationmessage;}
							}
						}
						else{throw questionsvalidation[validindex][validloop].violationmessage;}
						// console.log(questionsvalidation[validindex][validloop]);
					}
				}
				
				// if(parent[3]==2 || parent[3]==3 || parent[3]==4)
				// {
				// 	if(parentcheckedvalues.lenght>0){ }else{break;navigator.notification.alert("Please Select "+parent[1], function(){}, 'Samuday 360','Done');}
				// }
				// else if(parent[3]==8 )
				// {
				// 	if(parentcheckedvalues.lenght>0){ }else{break;navigator.notification.alert("Please Select "+parent[1], function(){}, 'Samuday 360','Done');}
				// }
				// else{
				// 	if(document.getElementById(parent[0]).value!=""){ }else{break; navigator.notification.alert("Please Select "+parent[1], function(){}, 'Samuday 360','Done');}
				// }
			}

			childparentquestionindex=childparentquestion.indexOf(parent[0])
				
			if(childparentquestionindex>=0)
			{childvalidation(childparentquestion.indexOf(parent[0]), parent[3])}

		}

		saveEditSurveyResponse();
	}
	  catch(err){
		
		$(".err").html("");
      	$("#"+errid+"err").html(err);
	  	$("#"+errid).focus();

	  	//console.log(err);
	  	//navigator.notification.alert(err, function(){}, 'Samuday 360','Done');
	}

}


function saveChildValidation(parentindex, parentquestiontype)
{
	if(parentindex>=0)
	{
		childconditions=childquestionconditions[parentindex];
		
		checkedvalues=[]
		if(parentquestiontype==2 || parentquestiontype==3 || parentquestiontype==4)
		{
			checkboxradio=document.getElementsByName(childconditions[0][2])
			for(checkboxradioloop=0; checkboxradioloop<checkboxradio.length; checkboxradioloop++)
			{
				if(checkboxradio[checkboxradioloop].checked)
				{
					checkedvalues.push(checkboxradio[checkboxradioloop].value)
					
				}
			}
		}
		else if(parentquestiontype==8 )
		{
			checkedvalues=document.getElementById(childconditions[0][2]).value;
			
		}
		else{checkedvalues.push(document.getElementById(childconditions[0][2]).value)}
		parentvalue=document.getElementsByName(childconditions[0][2]).value;
		for(childconditionsloop=0; childconditionsloop<childconditions.length; childconditionsloop++)
		{

			if(checkedvalues.indexOf(childconditions[childconditionsloop][1])>=0)
			{
				surveyquestionnumber.indexOf(childconditions[childconditionsloop][0]);
				child=surveyquestions[surveyquestionnumber.indexOf(childconditions[childconditionsloop][0])];

				errid=child[0];
				childcheckedvalues=[]
				if(child[3]==2 || child[3]==3 || child[3]==4)
				{
					checkboxradio=document.getElementsByName(child[0])
					for(checkboxradioloop=0; checkboxradioloop<checkboxradio.length; checkboxradioloop++)
					{
						if(checkboxradio[checkboxradioloop].checked)
						{ childcheckedvalues.push(checkboxradio[checkboxradioloop].value) }
					}
					surveychildresponse.push([surveyworkitemmappingcode, respondantcode, child[0], child[0], childcheckedvalues, child[9]])
				}
				else if(parent[3]==8 )
				{
					parentcheckedvalues=document.getElementById(child[0]).value;
					surveychildresponse.push([surveyworkitemmappingcode, respondantcode, child[0], child[0], childcheckedvalues, child[9]])
				}
				else{ surveychildresponse.push([surveyworkitemmappingcode, respondantcode, child[0], child[0], document.getElementById(child[0]).value, child[9]]);}



				
				if(child[6]!=0)
				{


					// validationsdistquestions
					// questionsvalidation
					//console.log(validationsdistquestions);
					var validindex=validationsdistquestions.indexOf(child[0])
					// console.log(validindex);

					if(validindex>=0)
					{//console.log(questionsvalidation[validindex]);
						for(validloop=0; validloop<questionsvalidation[validindex].length; validloop++)
						{
							questionvalids=questionsvalidation[validindex][validloop].validationtypename;
							validquestionanswer=document.getElementById(child[0]).value;
							if(validquestionanswer!="")
							{
								if(questionvalids=="Numeric"){
									if(!isNaN(validquestionanswer)){throw questionsvalidation[validindex][validloop].violationmessage}
								}
								else if(questionvalids=="Decimal"){

								}
								else if(questionvalids=="Range"){
									var valrange=questionsvalidation[validindex][validloop].allowedvalues.split("-");
									if(validquestionanswer>=parseInt(valrange[0]) &&  validquestionanswer<=parseInt(valrange[1])){}
									else{throw questionsvalidation[validindex][validloop].violationmessage}
								}
								else if(questionvalids=="DigitCount"){
									var valrange=questionsvalidation[validindex][validloop].allowedvalues.split("-")
									if(validquestionanswer.length>=parseInt(valrange[0]) && validquestionanswer.length<=parseInt(valrange[1])){}
									else{throw questionsvalidation[validindex][validloop].violationmessage}
								}
								else if(questionvalids=="AlphaNumeric"){
									if(validquestionanswer.match(/^[a-zA-Z0-9 ]*$/)){throw questionsvalidation[validindex][validloop].violationmessage;}

								}
								else if(questionvalids=="MaxLength"){
									if(validquestionanswer.length>questionsvalidation[validindex][validloop].allowedvalues){throw questionsvalidation[validindex][validloop].violationmessage}
								}
								else if(questionvalids=="Characters"){
									if(validquestionanswer.match(/^[a-zA-Z ]*$/)){throw questionsvalidation[validindex][validloop].violationmessage;}
								}
							}
							else{throw questionsvalidation[validindex][validloop].violationmessage;}
							// console.log(questionsvalidation[validindex][validloop]);
						}
					}


					// if(child[3]==2 || child[3]==3 || child[3]==4)
					// {
					// 	if(parentcheckedvalues.lenght>0){ }else{break; navigator.notification.alert("Please Select "+child[1], function(){}, 'Samuday 360','Done');}
					// }
					// else if(child[3]==8 )
					// {
					// 	if(parentcheckedvalues.lenght>0){ }else{break; navigator.notification.alert("Please Select "+child[1], function(){}, 'Samuday 360','Done');}
					// }
					// else{
					// 	if(document.getElementById(child[0]).value!=""){ }else{break; navigator.notification.alert("Please Enter "+child[1], function(){}, 'Samuday 360','Done');}
					// }
				}
			}
		}
	}
}


//  ========   Save Ends ===========




