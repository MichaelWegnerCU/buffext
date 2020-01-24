// JavaScript Document



function ready() {
	console.log("Here!");
	var top5 = document.getElementsByTagName("app-holds-todos-card")[0];
	var logo = document.getElementsByClassName("responsiveBuff")[0];
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
			<div class="newheader_text">TOP 3</div>
		</div>
		<div class="t5_list">
			<ul >
  				<li><span _ngcontent-fde-c6="" class="summary-icon mat-icon size_control fa-calendar-check" mat-card-avatar=""></span> <a href="https://buffportal.colorado.edu/card/Buff%20Portal%20Advising" class="t5_link">Advising</a></li>
  				<li><span _ngcontent-xdi-c6="" class="summary-icon mat-icon size_control fa-graduation-cap" mat-card-avatar=""></span><a href="https://buffportal.colorado.edu/card/Degree%20Audit" class="t5_link" >Degree Audit</a></li>
  				<li><span _ngcontent-xdi-c6="" class="summary-icon mat-icon size_control fa-pencil-alt" mat-card-avatar=""></span><a href="https://buffportal.colorado.edu/card/CHANGE%20YOUR%20SCHEDULE" class="t5_link">Change schedule (Add Drop)</a></li>
			</ul>
		</div>
	</div> 
	`;
	
	calendar.innerHTML = `I am going to put the calendar here`;
	calendar_top.innerHTML = ``;
 	console.log(courses);
  }

setTimeout(ready, 800);

