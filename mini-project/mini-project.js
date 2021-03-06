let data = [
  {
    name: {
      prefix: "Mr.",
      first: "Christopher",
      last: "Justice",
      middle: "Daniel",
      suffix: ""
    },
    age: 28,
    birthday: {
      month: 5,
      day: 21,
      year: 1989
    },
    birthplace: {
      country: "United States",
      state: "Florida",
      city: "Hollywood"
    },
    married: true,
    gender: 1,
    pets: [
      "Buster", 
      "Penny"
    ],
    children: [
      {
        name: "Caleb",
        age: 0.58,
        gender: 1
      }
    ]                        
  },
  {
    name: {
      prefix: "Mr.",
      first: "Leandro",
      last: "Silva",
      middle: "",
      suffix: ""
    },
    age: 33,
    birthday: {
      month: 10,
      day: 9,
      year: 1983
    },
    birthPlace: {
      country: "Brazil",
      state: "RJ",
      city: "Rio de Janeiro"
    },
    married: true,
    gender: 1,
    pets: [],
    children: []
  },
  {
    name: {
      preffix: "Mr",
      first: "Lucio",
      last: "Ordonez",
      middle: "S",
      suffix: ""
    },
    age: 35,
    birthday: {
      month: 09, 
      day: 15,
      year: 1981
    },
    birthPlace: {
      country: "Ecuador",
      state: "Guayas",
      city: "Guayaquil"
    },
    married: true,
    gender:  1,
    pets: [
      "Wiggly"
    ],
    children: [
      {
        name: "Adelynn",
        age: 4,
        gender: 2
      },
      {
        name: "Isaac",
        age: 0.66,
        gender: 1
      }
    ]
  }
];

function getPerson(index) {
  return data[index];
}
//console.log(getPerson(0));

function fullName(index) { 
  if (data[index].name.middle === "") {
    return data[index].name.first + " " + data[index].name.last;
  } else {
    return data[index].name.first +  " " + data[index].name.middle + " " + data[index].name.last;
  }
}
//console.log(fullName(2));

function formattedBirthday(birthday, anyDelimiter = "/") {
  //birthday =  getPerson(0).birthday = { month: 5, day: 21, year: 1989 }
  // return birthday.month + "-" + birthday.day + "-" + birthday.year;
  //anyDelimiter = "."
  if (anyDelimiter.length > 1) {
    throw new Error("Only 1 character is allowed!");
  }
  if (anyDelimiter.length === 0) {
    anyDelimiter = "/"
  }
  return birthday.month + anyDelimiter + birthday.day + anyDelimiter + birthday.year;
}
//console.log(formattedBirthday(getPerson(0).birthday,""));

// old function before changing to object paramter

// function getPersonByName(fName, lName, mName = "") {
//   let person;
//   // name === "leandro"
//   data.forEach(function (el) {
//     // console.log(el.name.first);
//     // console.log(el.name.first, fName);
//     // console.log(el.name.middle, mName);
//     if (el.name.first.toLowerCase() === fName.toLowerCase() && el.name.last.toLowerCase() === lName.toLowerCase() && el.name.middle.toLowerCase() === mName.toLowerCase() ) {
//       // console.log(el);
//       person = el;
//     } 
//   });
//   if (person === undefined) {
//     throw new Error("This person does not exist");
//   }
//   return person;
// }
// console.log(getPersonByName("Lucio","Ordonez","S"));


function getPersonByName(name) {
  let person;
  console.log(name);

   if (name.first === undefined) {
      throw new Error("First name required");
  }

  if (name.middle === undefined) {
    name.middle = "";
  }

 
  
  // name === "leandro"
  data.forEach(function (el) {
    // console.log(name.middle);

    if (el.name.first.toLowerCase() === name.first.toLowerCase()) {
      person = el;
    } else {
      return;
    }
    if (name.last) {
      if (el.name.last.toLowerCase() === name.last.toLowerCase()) {
        person = el;
      } else {
        person = undefined
        return;
      }
    }

    if (name.middle) {
      if (el.name.middle.toLowerCase() === name.middle.toLowerCase()) {
        person = el;
      } else {
        person = undefined
        return;
      }
    }

  
    // if (el.name.first.toLowerCase() === name.first.toLowerCase() 
    //     && el.name.last.toLowerCase() === name.last.toLowerCase() 
    //     && el.name.middle.toLowerCase() === name.middle.toLowerCase() ) {
    //   // console.log(el);
    //   person = el;
    // } 
  });
  if (person === undefined) {
    throw new Error("This person does not exist");
  }
  return person;
}
console.log(getPersonByName({
  first: "Leandro",
  last: "Silva",
  middle: ""
}));














