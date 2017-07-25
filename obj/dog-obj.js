//  Make a `dogs` array that holds ‘dog’ objects. Each ‘dog’ should include:
// dog
//   breed: string
//   age: number
//   name: string
//   gender: number
//   appearance: object
//     eyeColor: string
//     coatColors: array (of strings)
//     size: object
//       width: number
//       height: number
//   dogYearsToHumanYears: function (expects: nothing , returns: a number)
//   owner: object (a pointer to the specific 'person' from our Monday code day)
// ran: function (should be false on first run, then true on every subsequent run)
// ```
 
// hint for `ran` and `dogYearsToHumanYears`, use `this` to access members that belong to the same object:


let dogs = [
  {
    dog: {
      breed: "German shepard mix",
      age: 2,
      name: "Buster",
      gender: 1,
      appearance: {
        eyeColor: "Brown",
        coatColors: [
          "brown",
          "black"
        ],
        size: {
          width: 12,
          height: 24
        }
      }
    }
  },
  {
    dog: {
      breed: "Harrier mix",
      age: 1,
      name: "Penny",
      gender: 2,
      appearance: {
        eyeColor: "Brown",
        coatColors: [
          "brown",
          "white"
        ],
        size: {
          width: 12,
          height: 20
        }
      }
    } 
  },
  {
    dogYearsToHumanYears: function() {
      return this;
    }
  }
]
console.log(dogs[0]);



// solution ------------------------

function dogYearsToHumanYears() {
  return this.age * 7;
}

let dogs = [
  {
    breed: "German shepard mix",
    age: 2,
    name: "Buster",
    gender: 1,
    appearance: {
      eyeColor: "Brown",
      coatColors: [
        "brown",
        "black"
      ],
      size: {
        width: 12,
        height: 24
      }
    },
    dogYearsToHumanYears
  },
  {
    breed: "Harrier mix",
    age: 1,
    name: "Penny",
    gender: 2,
    appearance: {
      eyeColor: "Brown",
      coatColors: [
        "brown",
        "white"
      ],
      size: {
        width: 12,
        height: 20
      }
    },
    dogYearsToHumanYears
  } 
]
console.log( dogs[0].dogYearsToHumanYears() );


