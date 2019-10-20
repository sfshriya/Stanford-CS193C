// I've included both the universities full names and their nicknames
// use the nicknames for this assignment.  I've included the full names
// so those who aren't familiar with Bay Area universities will know
// what the names of the universities actually are.

var univArray = new Array(
	{ name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757 },
	{ name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844 },
	{ name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398 },
	{ name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468 },
	{ name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496 },
	{ name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276 },
	{ name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435 },
	{ name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450 },
	{ name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812 },
	{ name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918 }
);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayData() { 
	var collegeTableBody = document.getElementById("collegeTableBody");
	var row;
	for (i = 0; i < univArray.length; i++) {
		row = document.createElement("tr");
		nameColumn = document.createElement("td");
		maxSATColumn = document.createElement("td");
		minSATColumn = document.createElement("td");
		tuitionColumn = document.createElement("td");

		nameColumn.textContent = univArray[i].name;
		maxSATColumn.textContent = univArray[i].SATh;
		minSATColumn.textContent = univArray[i].SATl;
		tuitionColumn.textContent = "$"+numberWithCommas(univArray[i].tuition);

		 
		maxSATColumn.classList.add("textRight");
		minSATColumn.classList.add("textRight");
		tuitionColumn.classList.add("textRight");


		row.appendChild(nameColumn);
		row.appendChild(maxSATColumn);
		row.appendChild(minSATColumn);
		row.appendChild(tuitionColumn);
		collegeTableBody.appendChild(row);
	}
}

function update() { 
	var resultArray = [];
	var i;
	var isPublic = document.getElementById("public").checked;
	var isPrivate = document.getElementById("private").checked;
	var collegeTable = document.getElementById("collegeTable");
	var collegeTableBody = document.getElementById("collegeTableBody");
	var row;
	var nameColumn;
	var maxSATColumn;
	var minSATColumn;
	var tuitionColumn;
	var maxTuition = document.getElementById("maxTuiton").value;
	maxTuition = parseFloat(maxTuition);
	var maxSAT = document.getElementById("maxSAT").value;
	maxSAT = parseFloat(maxSAT);
	var minSAT = document.getElementById("minSAT").value;
	minSAT = parseFloat(minSAT);
	while (collegeTableBody.hasChildNodes()) {
		collegeTableBody.removeChild(collegeTableBody.firstChild);
	}

	for (i = 0; i < univArray.length; i++) {	
		// console.log("univArray[i].tuition",parseFloat(univArray[i].tuition))
		// console.log("maxTuition",maxTuition)
		// console.log("univArray[i].SATh",parseFloat(univArray[i].SATh))
		// console.log("maxSAT",maxSAT)
		// console.log("univArray[i].SATl",parseFloat(univArray[i].SATl))
		// console.log("minSAT",minSAT)
		if(isPrivate){
			if(univArray[i].ownership === 'private'){
				if(Number.isNaN(maxTuition) && Number.isNaN(maxSAT) && Number.isNaN(minSAT)){ 
					resultArray.push(univArray[i]);
				}
				else if(Number.isNaN(maxTuition) && Number.isNaN(minSAT)){ 
					if (parseFloat(univArray[i].SATh) <= maxSAT) {
						resultArray.push(univArray[i]);
					}
				}
				else if(Number.isNaN(maxTuition) && Number.isNaN(maxSAT)){ 
					if (parseFloat(univArray[i].SATl) >= minSAT) {
						resultArray.push(univArray[i]);
					}
				}
				else if(Number.isNaN(maxSAT) && Number.isNaN(minSAT)){ 
					if (parseFloat(univArray[i].tuition) <= maxTuition) {
						resultArray.push(univArray[i]);
					}
				}
				else if(Number.isNaN(minSAT)){ 
					if (parseFloat(univArray[i].tuition) <= maxTuition && parseFloat(univArray[i].SATh) >= maxSAT) {
						resultArray.push(univArray[i]);
					}
				}
				else if(Number.isNaN(maxSAT)){
					if (parseFloat(univArray[i].tuition) <= maxTuition && 
					 	parseFloat(univArray[i].SATl) >= minSAT) {
						resultArray.push(univArray[i]);
					}
				}
				else if(Number.isNaN(maxTuition)){
					if (parseFloat(univArray[i].SATh) <= maxSAT && 
					 	parseFloat(univArray[i].SATl) >= minSAT) {
						resultArray.push(univArray[i]);
					}
				}
				else{
					if(
						parseFloat(univArray[i].tuition) <= maxTuition && 
						parseFloat(univArray[i].SATh) <= maxSAT &&
						parseFloat(univArray[i].SATl) >= minSAT
					)
					resultArray.push(univArray[i]);
				}
			}
		}
		else if(isPublic){
			if(univArray[i].ownership === 'public'){
				if(Number.isNaN(maxTuition) && Number.isNaN(maxSAT) && Number.isNaN(minSAT)){ 
					resultArray.push(univArray[i]);
				}
				else if(Number.isNaN(maxTuition) && Number.isNaN(minSAT)){ 
					if (parseFloat(univArray[i].SATh) <= maxSAT) {
						resultArray.push(univArray[i]);
					}
				}
				else if(Number.isNaN(maxTuition) && Number.isNaN(maxSAT)){ 
					if (parseFloat(univArray[i].SATl) >= minSAT) {
						resultArray.push(univArray[i]);
					}
				}
				else if(Number.isNaN(maxSAT) && Number.isNaN(minSAT)){ 
					if (parseFloat(univArray[i].tuition) <= maxTuition) {
						resultArray.push(univArray[i]);
					}
				}
				else if(Number.isNaN(minSAT)){ 
					if (parseFloat(univArray[i].tuition) <= maxTuition && parseFloat(univArray[i].SATh) <= maxSAT) {
						resultArray.push(univArray[i]);
					}
				}
				else if(Number.isNaN(maxSAT)){
					if (parseFloat(univArray[i].tuition) <= maxTuition && 
					 	parseFloat(univArray[i].SATl) >= minSAT) {
						resultArray.push(univArray[i]);
					}
				}
				else if(Number.isNaN(maxTuition)){
					if (parseFloat(univArray[i].SATh) <= maxSAT && 
					 	parseFloat(univArray[i].SATl) >= minSAT) {
						resultArray.push(univArray[i]);
					}
				}
				else{
					if(
						parseFloat(univArray[i].tuition) <= maxTuition && 
						parseFloat(univArray[i].SATh) <= maxSAT &&
						parseFloat(univArray[i].SATl) >= minSAT
					)
					resultArray.push(univArray[i]);
				}
			}
		}
		else{
			if(Number.isNaN(maxTuition) && Number.isNaN(maxSAT) && Number.isNaN(minSAT)){ 
				resultArray.push(univArray[i]);
			}
			else if(Number.isNaN(maxTuition) && Number.isNaN(minSAT)){ 
				if (parseFloat(univArray[i].SATh) <= maxSAT) {
					resultArray.push(univArray[i]);
				}
			}
			else if(Number.isNaN(maxTuition) && Number.isNaN(maxSAT)){ 
				if (parseFloat(univArray[i].SATl) >= minSAT) {
					resultArray.push(univArray[i]);
				}
			}
			else if(Number.isNaN(maxSAT) && Number.isNaN(minSAT)){ 
				if (parseFloat(univArray[i].tuition) <= maxTuition) {
					resultArray.push(univArray[i]);
				}
			}
			else if(Number.isNaN(minSAT)){ 
				if (parseFloat(univArray[i].tuition) <= maxTuition && parseFloat(univArray[i].SATh) <= maxSAT) {
					resultArray.push(univArray[i]);
				}
			}
			else if(Number.isNaN(maxSAT)){
				if (parseFloat(univArray[i].tuition) <= maxTuition && 
					 parseFloat(univArray[i].SATl) >= minSAT) {
					resultArray.push(univArray[i]);
				}
			}
			else if(Number.isNaN(maxTuition)){
				if (parseFloat(univArray[i].SATh) <= maxSAT && 
					 parseFloat(univArray[i].SATl) >= minSAT) {
					resultArray.push(univArray[i]);
				}
			}
			else{
				if(
					parseFloat(univArray[i].tuition) <= maxTuition && 
					parseFloat(univArray[i].SATh) <= maxSAT &&
					parseFloat(univArray[i].SATl) >= minSAT
				)
				resultArray.push(univArray[i]);
			}
		}
	}

	// console.log("resultArray", resultArray);
	for (i = 0; i < resultArray.length; i++) {
		row = document.createElement("tr");
		nameColumn = document.createElement("td");
		maxSATColumn = document.createElement("td");
		minSATColumn = document.createElement("td");
		tuitionColumn = document.createElement("td"); 

		nameColumn.textContent = resultArray[i].name;
		maxSATColumn.textContent = resultArray[i].SATh;
		minSATColumn.textContent = resultArray[i].SATl;
		tuitionColumn.textContent = "$"+numberWithCommas(resultArray[i].tuition); 

		maxSATColumn.classList.add("textRight");
		minSATColumn.classList.add("textRight");
		tuitionColumn.classList.add("textRight");

		row.appendChild(nameColumn);
		row.appendChild(maxSATColumn);
		row.appendChild(minSATColumn);
		row.appendChild(tuitionColumn); 
		collegeTableBody.appendChild(row);
	}
}

