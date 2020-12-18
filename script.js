console.log("Twoja przeglądarka to: " + navigator.appCodeName);
console.log("urzadzenie to: " + navigator.platform);
console.log("jezyk to: " + navigator.language);
console.log("wtyczka Java: " + navigator.javaEnabled());
console.log("szczegolowe informacje: " + navigator.userAgent);
console.log("cooki jest: " + navigator.cookieEnabled);
console.log("Polaczenie z internetem: " + navigator.onLine);

function spr(){
	var UserAgent = navigator.userAgent;
	if (UserAgent.indexOf("Firefox") > -1) {
		document.write("Firefox");
	} else if (UserAgent.indexOf("Opera") > -1 || UserAgent.indexOf("OPR") > -1) {
		document.write("Opera");
	} else if (UserAgent.indexOf("Edge") > -1) {
		document.write("Edge");
	} else if (UserAgent.indexOf("Chrome") > -1) {
		document.write("Chrome");
	} else if (UserAgent.indexOf("Safari") > -1) {
		document.write("Safari");
	} else {
		window.location.href = unknown.html;;
		console.error("unknown")
	}
}
spr()