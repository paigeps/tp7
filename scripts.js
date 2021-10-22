function loadFileInto(fromFile, whereTo) {

	// 1. creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// 2. defines the GET/POST method, the source, and the async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// 3. provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

			document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

		} else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

			console.log("Error: " + this.responseText);

		}

	} // end ajax.onreadystatechange function

	// 4. let's go -- initiate request and process the responses
	ajax.send();
}

window.onload = function() {
  
  newheader = document.querySelector("#titlebanner h1");
  
  newheader.style.color = "CornflowerBlue";
  newheader.style.textShadow = "0px 8px 8px #ffffff";
  
  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("dontshow");
  }
  
  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("dontshow");
  }
  
  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("dontshow");
  }
  
  document.querySelector("#titlebanner h1").onclick = function() {
    document.querySelector("#titlebanner h1").style.color = "Black";
  }
  
  document.querySelector("#footer").innerHTML += "<p>Paige was here for TP6!</p>"
  
  loadFileInto("ingredients.html", "#ingredients ul")
  loadFileInto("equipment.html", "#equipment ul")
  loadFileInto("directions.html", "#directions ol")
}