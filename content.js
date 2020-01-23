// JavaScript Document

function ready() {
	console.log("Here!");
	var top5 = document.getElementsByTagName("app-holds-todos-card")[0];
	//var column_0 =document.getElementById('column-0');
	top5.innerHTML = `
	<div class=top5>
		<div class="newheader">
			<div class="card-header-img fas fa-bell" mat-card-avatar=""></div>\
			<div class="newheader_text">TOP 3</div>
		</div>
		<div class="t5_list">
			<ul style="list-style-type:none;">
  				<li><span _ngcontent-fde-c6="" class="summary-icon mat-icon fal fa-calendar-check" mat-card-avatar=""></span> <a href="https://buffportal.colorado.edu/card/Buff%20Portal%20Advising" class="t5_link">Advising</a></li>
  				<li><span _ngcontent-xdi-c6="" class="summary-icon mat-icon fal fa-graduation-cap" mat-card-avatar=""></span><a href="https://buffportal.colorado.edu/card/Degree%20Audit" class="t5_link" >Degree Audit</a></li>
  				<li><span _ngcontent-xdi-c6="" class="summary-icon mat-icon fal fa-pencil-alt" mat-card-avatar=""></span><a href="https://buffportal.colorado.edu/card/CHANGE%20YOUR%20SCHEDULE" class="t5_link">Change schedule (Add Drop)</a></li>
			</ul>
		</div>
	</div> 
	`;
 
  }

setTimeout(ready, 200);

