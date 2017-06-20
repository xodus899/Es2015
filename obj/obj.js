 //create an obj with str num and array

 let obj = {
     num: 1,
     str: "Hello",
     arr: [
         1,
         2,
         3
     ]
 };

 console.log(obj);
 console.log(obj.str.toLowerCase());



// create an object  that returns tonight from this => console.log(sing.in.the[0].the.mighty[1].theLionSleeps);

 let sing = {
   in: {
     the:
     [
       {
       the: {
         mighty:
         [
           0,
           {
             theLionSleeps: "tonight"
           }
         ]
       }
       }
     ]
   }
 };

 console.log(sing.in.the[0].the.mighty[1].theLionSleeps);


// create an object that returns  console.log(sing.in.the[0].the.mighty[1].theLionSleeps.tonight()); //!!!!

 let sing = {
   in: {
     the:
     [
       {
       the: {
         mighty:
         [
           0,
           {
             theLionSleeps: {
               tonight: function () {
                 return "!!!!";
               }
             }
           }
         ]
       }
       }
     ]
   }
 };

 console.log(sing.in.the[0].the.mighty[1].theLionSleeps.tonight()); //!!!!

// create an object that returns console.log(sing.in.the[0].the.mighty[1].theLionSleeps.tonight()()); //!!!!

let sing = {
  in: {
    the:
    [
      {
       the: {
         mighty:
         [
           0,
           {
            theLionSleeps: {
              tonight: function () {
                return function () {
                  return("!!!!");
                }
              }
            }
           }
         ]
       }
      }
    ]
  }
};

console.log(sing.in.the[0].the.mighty[1].theLionSleeps.tonight()()); //!!!!