function CountBox() {
	dateNow = new Date;
	amount = dateFuture.getTime() - dateNow.getTime() + 5;
	delete dateNow;
	if (amount < 0) {
		out = "<div class='countbox-num'><div id='countbox-days1' class='countbox-num-item'><span>0</span></div><div id='countbox-days2' class='countbox-num-item'><span>0</span></div><div id='countbox-days-text'></div></div>" +
		"<div class='countbox-space'></div>" +
		"<div class='countbox-num'><div id='countbox-hours1' class='countbox-num-item'><span>0</span></div><div id='countbox-hours2' class='countbox-num-item'><span>0</span></div><div id='countbox-hours-text'></div></div>" +
		"<div class='countbox-space'></div>" +
		"<div class='countbox-num'><div id='countbox-mins1' class='countbox-num-item'><span>0</span></div><div id='countbox-mins2' class='countbox-num-item'><span>0</span></div><div id='countbox-mins-text'></div></div>" +
		"<div class='countbox-space'></div>" +
		"<div class='countbox-num'><div id='countbox-secs1' class='countbox-num-item'><span>0</span></div><div id='countbox-secs2' class='countbox-num-item'><span>0</span></div><div id='countbox-secs-text'></div></div>";
		document.getElementById("countbox").innerHTML = out
	} else {
		days = 0;
		days1 = 0;
		days2 = 0;
		hours = 0;
		hours1 = 0;
		hours2 = 0;
		mins = 0;
		mins1 = 0;
		mins2 = 0;
		secs = 0;
		secs1 = 0;
		secs2 = 0;
		out = "";
		amount = Math.floor(amount / 1e3);
		days = Math.floor(amount / 86400);
		days1 = (days >= 10) ? days.toString().charAt(0) : '0';
		days2 = (days >= 10) ? days.toString().charAt(1) : days.toString().charAt(0);
		amount = amount % 86400;
		hours = Math.floor(amount / 3600);
		hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';
		hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
		amount = amount % 3600;
		mins = Math.floor(amount / 60);
		mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';
		mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);
		amount = amount % 60;
		secs = Math.floor(amount);
		secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';
		secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);
		out = "<div class='countbox-num'><div id='countbox-days1' class='countbox-num-item'><span>" + days1 + "</span></div><div id='countbox-days2' class='countbox-num-item'><span>" + days2 + "</span></div><div id='countbox-days-text'>дней</div></div>" +
		"<div class='countbox-space'></div>" +
		"<div class='countbox-num'><div id='countbox-hours1' class='countbox-num-item'><span>" + hours1 + "</span></div><div id='countbox-hours2' class='countbox-num-item'><span>" + hours2 + "</span></div><div id='countbox-hours-text'>часов</div></div>" +
		"<div class='countbox-space'></div>" +
		"<div class='countbox-num'><div id='countbox-mins1' class='countbox-num-item'><span>" + mins1 + "</span></div><div id='countbox-mins2' class='countbox-num-item'><span>" + mins2 + "</span></div><div id='countbox-mins-text'>минут</div></div>" +
		"<div class='countbox-space'></div>" +
		"<div class='countbox-num'><div id='countbox-secs1' class='countbox-num-item'><span>" + secs1 + "</span></div><div id='countbox-secs2' class='countbox-num-item'><span>" + secs2 + "</span></div><div id='countbox-secs-text'>секунд</div></div>";
		document.getElementById("countbox").innerHTML = out;
		setTimeout(CountBox, 1e3)
	}
}
window.onload = function(){
	month = --month;
	dateFuture = new Date(year, month, day, hour, minute, sec);
	CountBox();
}
