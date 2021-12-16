let flights = {
  flights: [
    {
      flights: "Air Canada 8099",
      departure: "7:30",
    },
    {
      flights: "United Airlines 6115",
      departure: "10:30",
    },
    {
      flights: "WestJet 6456",
      departure: "12:30",
    },
    {
      flights: "Delta 3833",
      departure: "15:00",
    },
  ],
};
let filteredFlights = null;

filterFlights = () => {
  let filterValue = document.getElementById("inputTime").value;
  let pattern = /((1[0-2]|0?[1-9]):([0-5][0-9]))/;
  //    ?([AaPp][Mm])
  let result = pattern.test(filterValue);
  if (result) {
    let filterValueInMin =
      parseInt(filterValue.split(":")[0]) * 60 +
      parseInt(filterValue.split(":")[1]);
    document.getElementById("data").innerHTML =
      "Following filghts are available.";
    filteredFlights = flights.flights.filter((flight) => {
      let time = flight.departure;
      let timeInMin =
        parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]);
      return Math.abs(timeInMin - filterValueInMin) < 300;
    });
    if (filteredFlights.length === 0) {
      document.getElementById("data").innerHTML = "No flights found.";
      document.getElementById("para").innerHTML = "";
    } else {
      document.getElementById("para").innerHTML = "";
      filteredFlights.forEach((flight) => {
        let para = document.createElement("p");
        let node = document.createTextNode(
          `${flight.flights} ${flight.departure}`
        );
        para.appendChild(node);
        var element = document.getElementById("para");
        element.appendChild(para);
      });
    }
  } else {
    document.getElementById("data").innerHTML = "Please select correct format.";
  }
};
