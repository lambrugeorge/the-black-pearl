/* The Black Pearl */

function navigate(startingCoords, destinationCoords) {
  var startingLocation = {
    location: "Port Constanta RO",
    coordinates: [44.176189, 28.674159]
  };

  var destination = {
    location: "North Atlantic Ocean",
    coordinates: [35.177758, -37.504961]
  };

  var latitudeDifference = destination.coordinates[0] - startingLocation.coordinates[0];
  var longitudeDifference = destination.coordinates[1] - startingLocation.coordinates[1];

  return {
    startingLocation: startingLocation.location,
    destinationLocation: destination.location,
    latitudeDifference: latitudeDifference,
    longitudeDifference: longitudeDifference
  };
}

var result = navigate();
console.log("Starting Location: " + result.startingLocation);
console.log("Destination Location: " + result.destinationLocation);
console.log("Latitude Difference: " + result.latitudeDifference);
console.log("Longitude Difference: " + result.longitudeDifference);

var routeJournal = [
  {
    location: "Port Constanta RO",
    coordinates: [44.176189, 28.674159],
    date: "01.01.2023"
  },
  {
    location: "Port Üsküdar TR",
    coordinates: [41.037128, 29.029593],
    date: "04.01.2023"
  },
  {
    location: "Port Pireu GR",
    coordinates: [37.938732, 23.634470],
    date: "07.01.2023"
  },
  {
    location: "Port TCB-Barcelona ES",
    coordinates: [41.347617, 2.164708],
    date: "11.01.2023"
  },
  {
    location: "Port Rotterdam NL",
    coordinates: [51.949346, 4.148536],
    date: "15.01.2023"
  },
  {
    location: "North Atlantic Ocean",
    coordinates: [35.177758, -37.504961],
    date: "24.01.2023"
  }
];

function getLocations(routeJournal) {
  var locations = routeJournal.map(function(item) {
    return item.location;
  });
  return locations;
}

var locationsList = getLocations(routeJournal);
console.log("Locations along the route: " + locationsList);

var detailedRouteJournal = [
  {
    location: "Port Constanta RO",
    coordinates: [44.176189, 28.674159],
    date: "01.01.2023",
    otherInfo: [
      "Constanta Aquarium",
      "Armenian Church of Saint Mary",
      "Greek Church"
    ]
  },
  {
    location: "Port Üsküdar TR",
    coordinates: [41.037128, 29.029593],
    date: "04.01.2023",
    otherInfo: [
      "Maiden's Tower (Kız Kulesi)",
      "Kısıklı Palace",
      "Mihrimah Sultan Mosque"
    ]
  },
  {
    location: "Port Pireu GR",
    coordinates: [37.938732, 23.634470],
    date: "07.01.2023",
    otherInfo: [
      "Acropolis of Athens",
      "Olympieion",
      "Parthenon"
    ]
  },
  {
    location: "Port TCB-Barcelona ES",
    coordinates: [41.347617, 2.164708],
    date: "11.01.2023",
    otherInfo: [
      "National Art Museum of Catalonia",
      "Montjuïc Castle",
      "La Boqueria Market"
    ]
  },
  {
    location: "Port Rotterdam NL",
    coordinates: [51.949346, 4.148536],
    date: "15.01.2023",
    otherInfo: [
      "Rotterdam Zoo",
      "Erasmus Bridge",
      "Cube Houses"
    ]
  },
  {
    location: "North Atlantic Ocean",
    coordinates: [35.177758, -37.504961],
    date: "24.01.2023",
    otherInfo: "Middle of the Ocean"
  }
];

function findRecord(routeJournal, searchDate) {
  var filteredRecords = routeJournal.filter(function(item) {
    return item.date === searchDate;
  });

  var otherDetails = filteredRecords.map(function(item) {
    return item.otherInfo;
  });

  return otherDetails;
}

var availableDates = "Available dates: 01.01.2023, 04.01.2023, 07.01.2023, 11.01.2023, 15.01.2023, 24.01.2023";
var searchDate = prompt("Enter the date to find tourist attractions:\n" + availableDates);

if (availableDates.includes(searchDate)) {
  var attractionDetails = findRecord(detailedRouteJournal, searchDate);
  console.log("Tourist attractions details for " + searchDate + ":");
  console.log(attractionDetails.join(", "));
} else {
  console.log("Invalid date entered. " + availableDates);
}

var crewDatabase = [
{
  Name: "Captain John Smith",
  Age: "40 years old",
  Position: "Ship Captain",
},
{
  Name: "Emily Turner",
  Age: "30 years old",
  Position: "First Officer"
},
{
  Name: "David Parker",
  Age: "35 years old",
  Position: "Deck Officer"
},

{
  Name: "Sarah Baker",
  Age: "28 years old",
  Position: "Sailor"
},

{
  Name: "John Reynolds",
  Age: "32 years old",
  Position: "Sailor"
},

{
  Name: "Jessica Foster",
  Age: "29 years old",
  Position: "Chief Engineer"
},

{
  Name: "Michael Adams",
  Age: "34 years old",
  Position: "Engineer"
},

{
  Name: "Rachel Campbell",
  Age: "27 years old",
  Position: "Cook"
},

{
  Name: "Matthew Hayes",
  Age: "31 years old",
  Position: "Steward"
},

{
  Name: "Olivia White",
  Age: "25 years old",
  Position: "Safety and Rescue Officer"
}
]

function yesOrNoQuestion() {
  var answer = prompt("Would you like to find the crew's average age? (Yes or No)");
  if (answer.toLowerCase() === "yes") {
    return "It will be displayed";
  } else if (answer.toLowerCase() === 'no') {
    return "Age will not be displayed";
  } else {
    alert("Please enter 'Yes' or 'No'");
  }
}

var result = yesOrNoQuestion();
console.log(result);

if (result === "It will be displayed") {
  var crewAges = [40, 30, 35, 28, 32, 29, 34, 27, 31, 25];
  var totalAges = crewAges.reduce(function (acc, age) {
    return acc + age;
  }, 0
);

  var numberOfMembers = crewAges.length;
  var averageAge = totalAges / numberOfMembers;

  console.log("The crew's average age is: " + averageAge);
}

var ports = ["Port Constanta RO", "Port Üsküdar TR", "Port Pireu GR", "Port TCB-Barcelona ES", "Port Rotterdam NL", "North Atlantic Ocean"];

const weatherConditions = {
  "Port Constanta RO": {
    temperature: 28,
    conditions: "Sunny",
    humidity: 50
  },
  "Port Üsküdar TR": {
    temperature: 30,
    conditions: "Partly Cloudy",
    humidity: 60
  },
  "Port Pireu GR": {
    temperature: 25,
    conditions: "Light Rain",
    humidity: 70
  },
  "Port TCB-Barcelona ES": {
    temperature: 32,
    conditions: "Hot and Sunny",
    humidity: 45
  },
  "Port Rotterdam NL": {
    temperature: 20,
    conditions: "Overcast",
    humidity: 55
  },
  "North Atlantic Ocean": {
    temperature: 15,
    conditions: "Cloudy",
    humidity: 65
  }
};

ports.forEach(function(port) {
  const weatherAtPort = weatherConditions[port];
  if (weatherAtPort) {
    console.log("Weather conditions at " + port + ":");
    console.log("Temperature: " + weatherAtPort.temperature + "°C");
    console.log("Conditions: " + weatherAtPort.conditions);
    console.log("Humidity: " + weatherAtPort.humidity + "%\n");
  } else {
    console.log("We do not have information about the weather at " + port + ".\n");
  }
});


