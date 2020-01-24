// JavaScript Document



function ready() {
	console.log("Here!");
	var top5 = document.getElementsByTagName("app-holds-todos-card")[0];
	var logo = document.getElementsByClassName("responsiveBuff")[0];
	var cal_card = document.getElementsByClassName("schedule-card")[0];
	cal_card.setAttribute("style", "min-width:440px; min-height: 700px;");
	
	var calendar = document.getElementsByTagName("app-schedule")[0];
	var calendar_top = document.getElementsByTagName("section")[2];
	var courses= document.getElementsByClassName("schedule-clz");
	console.log(courses[1].outerHTML.aria);
	logo.src="https://github.com/MichaelWegnerCU/buffext/blob/master/newlogo.png?raw=true";
	logo.height =250;
	logo.width = 400;
	
	//var column_0 =document.getElementById('column-0');
	top5.innerHTML = `
	<div class=top5>
		<div class="newheader">
			<div class="card-header-img fas fa-bell" mat-card-avatar=""></div>\
			<div class="newheader_text">TOP 4</div>
		</div>
		<div class="t5_list">
			<ol >
  				<li><span class="summary-icon mat-icon size_control fa-calendar-check" mat-card-avatar=""></span> <a href="https://buffportal.colorado.edu/card/Buff%20Portal%20Advising" class="t5_link">Advising</a></li>
  				<li><span class="summary-icon mat-icon size_control fa-graduation-cap" mat-card-avatar=""></span><a href="https://buffportal.colorado.edu/card/Degree%20Audit" class="t5_link" >Degree Audit</a></li>
  				<li><span class="summary-icon mat-icon size_control fa-pencil-alt" mat-card-avatar=""></span><a href="https://buffportal.colorado.edu/card/CHANGE%20YOUR%20SCHEDULE" class="t5_link">Change schedule (Add Drop)</a></li>
				<li><span class="summary-icon mat-icon size_control fa-graduation-cap" mat-card-avatar=""></span><a href="https://buffportal.colorado.edu/card/Apply%20for%20Graduation" class="t5_link">Apply for graduation</a></li>
			</ol>
		</div>
	</div> 
	`;
	
	calendar.innerHTML = `<div class="NewCal_container">
	<img class="cal_outline" src="https://github.com/MichaelWegnerCU/buffext/blob/master/CalOutline.png?raw=true" alt="Calender">
	<div class="vl_control"></div>
	<div class="hl_control"></div>
	<img class="tiny_buff" src="https://github.com/MichaelWegnerCU/buffext/blob/master/BuffLogo.png?raw=true" alt="tinybuff" height="25px" width="50px">
	</div>
	`;
	calendar_top.innerHTML = ``;
 	console.log(courses);
  }

setTimeout(ready, 800);







