function createFruitsData() {
	var fruitsData = [
		{name: "Apple", qty: 34},
		{name: "Banana", qty: 29},
		{name: "Orange", qty: 15},
		{name: "Pineapple", qty: 5},
		{name: "Mango", qty: 8},
		{name: "Grapes", qty: 89},
		{name: "Watermelon", qty: 3},
		{name: "Peach", qty: 48},
	];
	return fruitsData;
}


function findItemsOver20() {
    var fruitsData = createFruitsData();
    var results = [];
    for (var i = 0; i < fruitsData.length; i++) {
        if (fruitsData[i].qty > 20) {
            results.push(fruitsData[i]);
        }
    }
    return results;
}

function findItemsOver(threshold) {
    var fruitsData = createFruitsData();
    var results = [];
    for (var i = 0; i < fruitsData.length; i++) {
        if (fruitsData[i].qty > threshold) {
            results.push(fruitsData[i]);
        }
    }
    return results;
}

function displayResults() {
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    var itemsOver20 = findItemsOver20();
    var itemsOverThreshold = findItemsOver(15);
    for (var i = 0; i < itemsOver20.length; i++) {
        resultsDiv.innerHTML += itemsOver20[i].name + " - " + itemsOver20[i].qty + "<br>";
    }
    for (var i = 0; i < itemsOverThreshold.length; i++) {
        resultsDiv.innerHTML += itemsOverThreshold[i].name + " - " + itemsOverThreshold[i].qty + "<br>";
    }
}
function displayAllData() {
    var fruitsData = createFruitsData();
    var resultsDiv = document.getElementById("results");
    for (var i = 0; i < fruitsData.length; i++) {
        resultsDiv.innerHTML += fruitsData[i].name + " - " + fruitsData[i].qty + "<br>";
    }
    document.querySelector('button:nth-of-type(1)').disabled = true;
}

function enoughAirtime(projectedUsage, airtime) {
    const items = projectedUsage.split(",");
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i] === "call") {
        total += 1.88;
      } else if (items[i] === "data") {
        total += 12;
      } else if (items[i] === "sms") {
        total += 0.75;
      }
    }
    const remainingAirtime = airtime - total;
    return remainingAirtime > 0 ? "R" + remainingAirtime.toFixed(2) : "R0.00";
  }

  function calculateAirtime() {
    const projectedUsage = document.getElementById("projectedUsage").value;
    const airtime = parseFloat(document.getElementById("airtime").value);
    const remainingAirtime = enoughAirtime(projectedUsage, airtime);
    document.getElementById("remainingAirtime").innerHTML = remainingAirtime;
  }

  function transportFee() {
    const radios = document.getElementsByName('time');
    let price = '';
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        price = radios[i].value;
        break;
      }
    }
    switch(price){
      case "morning":
        return "R20";
      case "afternoon":
        return "R10";
      case "nightshift":
        return "MAHALA SBARI";
    }
  }

  function calculateFee() {
    const fee = transportFee();
    document.getElementById("totalFee").value = fee;
  }

  function totalPhoneBill() {
    const callsAndSms = document.getElementById("callsAndSms").value;
    const items = callsAndSms.split(", ");
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i] === "call") {
        total += 2.75;
      } else if (items[i] === "sms") {
        total += 0.65;
      }
    }
    document.getElementById("totalBill").value = "R" + total.toFixed(2);
  }