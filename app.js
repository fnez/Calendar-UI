$(document).ready(function() {

		var fullDate = [];
		var calendarDays = [];
		var daysOfTheWeek = [];
		var dayNumbers = [];
		var month = [];
		var unavailableDates = [
			  "09-09-2015",
			  "09-10-2015",
			  "09-15-2015",
			  "09-18-2015",
			  "10-03-2015",
			  "10-7-2015",
			  "10-16-2015",
			  "10-24-2015",
			  "10-28-2015",
			  "11-05-2015",
			  "11-08-2015",
			  "11-17-2015",
			  "11-29-2015",
			  "12-03-2015",
			  "12-05-2015",
			  "12-10-2015",
			  "12-14-2015",
			  "12-24-2015",
			  ];


		for(i=0; i<500; i++) {
		// add a day
		var date = new Date();
		date.setDate(date.getDate() + i);

		var dd = date.getDate();
		var mm = date.getMonth()+1;  //January is 0!`
		var yyyy = date.getFullYear();
		if (dd < 10) {
			dd = "0" + dd;
		}
		if (mm < 10) {
			mm = "0" + mm;
		}
		
		var today = mm+'-'+dd+'-'+yyyy;
		fullDate.push(today);
		dayNumbers.push(dd);
		calendarDays.push(today);
		var n = date.getDay();
		var day = "";
		switch(n) {
			case 0: day = "Sun";
			break;
			case 1: day = "Mon";
			break;
			case 2: day = "Tue";
			break;
			case 3: day = "Wed";
			break;
			case 4: day = "Thu";
			break;
			case 5: day = "Fri";
			break;
			case 6: day = "Sat";
			break;
		}

		daysOfTheWeek.push(day);
		}
		var week = 0;
		$("#next").on("click", function() {
			week = week + 7;
			$("#prev").show();
			$("#weekDays").html("");
			$("#weekNums").html("");

			for (i=week; i<week + 7; i++) {
			$("#weekDays").append('<li>'+ daysOfTheWeek[i] +'</li>');
				if($.inArray(fullDate[i], unavailableDates)!== -1) {
					$("#weekNums").append('<li class="unavailable">'+ fullDate[i] +'</li>');
				}

				else {
				$("#weekNums").append('<li>'+ fullDate[i] +'</li>');
				}
			}
		});

		$("#prev").on("click", function() {
			week = week - 7;
			$("#weekDays").html("");
			$("#weekNums").html("");
			if(week == 0 ) {
				$("#prev").hide();
			}
			for (i=week; i<week + 7; i++) {
			$("#weekDays").append('<li>'+ daysOfTheWeek[i] +'</li>');
				if($.inArray(fullDate[i], unavailableDates)!== -1) {
					$("#weekNums").append('<li class="unavailable">'+ fullDate[i] +'</li>');
				}

				else {
				$("#weekNums").append('<li>'+ fullDate[i] +'</li>');
				}
			}
		});

		for (i=week; i<week + 7; i++) {
			$("#prev").hide();
			$("#weekDays").append('<li>'+ daysOfTheWeek[i] +'</li>');
				if($.inArray(fullDate[i], unavailableDates)!== -1) {
					$("#weekNums").append('<li class="unavailable">'+ fullDate[i] +'</li>');
				}

				else {
				$("#weekNums").append('<li>'+ fullDate[i] +'</li>');
				}
			}
	});