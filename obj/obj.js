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

// // create an object that returns It goes on and on, and on, and on 

// // from this => console.log(sing.in.the[0].the.move[1].neverEnds);

let sing;

sing = {
  in: {
    the:[
      {
      the: {
          move: [
            "index 0",
            {
            neverEnds: "It goes on and on and on and on"
            }
          ]
        }
      }      
    ]
  }
}

console.log(sing.in.the[0].the.move[1].neverEnds);

// create an object that returns It goes on and on, and on, and on 

// from this => console.log(sing.in.the[0].the.move[1].neverEnds();

let sing1;

sing1 = {
  in: {
    the:[
      {
      the: {
          move: [
            "index 0",
            {
            neverEnds: function(){
              return "it goes on and on and on and on!"
              }
            }
          ]
        }
      }      
    ]
  }
}

console.log(sing1.in.the[0].the.move[1].neverEnds());

// from this => console.log(sing.in.the[0].the.move[1].neverEnds()();

let sing2;

sing2 = {
  in: {
    the:[
      {
      the: {
          move: [
            "index 0",
            {
            neverEnds: function(){
              return function() {
                return "it goes on and on and on and on!!"
              }
              }
            }
          ]
        }
      }      
    ]
  }
}

console.log(sing2.in.the[0].the.move[1].neverEnds()());





// // create an object that returns It goes on and on, and on, and on 

// // from this => console.log(sing.in.the[3].the.move[4].neverEnds);

let sing3;

sing3 = {
  in: {
   the: [
     0,
     1,
     2,
     {
       the: {
         move: [
           0,
           1,
           2,
           3,
           {
             neverEnds: "It goes on and on and on and on!!!"
           }
         ]
       }
     }
    ] 
  }
}

console.log(sing3.in.the[3].the.move[4].neverEnds);

// // create an object that returns It goes on and on, and on, and on 

// // from this => console.log(sing.in.the[3].the.move[4].neverEnds);

let sing4;

sing4 = {
  in: {
   the: [
     0,
     1,
     2,
     {
       the: {
         move: [
           0,
           1,
           2,
           3,
           {
             neverEnds: function(){
               return "it goes on and on and on and on!!!!"
             }
           }
         ]
       }
     }
    ] 
  }
}

console.log(sing4.in.the[3].the.move[4].neverEnds());

// // create an object that returns It goes on and on, and on, and on 

// // from this => console.log(sing.in.the[3].the.move[4].neverEnds);

let sing5;

sing5 = {
  in: {
   the: [
     0,
     1,
     2,
     {
       the: {
         move: [
           0,
           1,
           2,
           3,
           {
             neverEnds: function(){
               return function(){
                 return "It goes on and on and on and on!!!!!"
               }
             }
           }
         ]
       }
     }
    ] 
  }
}

console.log(sing5.in.the[3].the.move[4].neverEnds()());

// // create an object that returns It goes on and on, and on, and on 

// // from this => console.log(sing.in.the[3].the.move[4].neverEnds()()());

let sing6;

sing6 = {
  in: {
   the: [
     0,
     1,
     2,
     {
       the: {
         move: [
           0,
           1,
           2,
           3,
           {
             neverEnds: function(){
               return function(){
                 return function() {
                   return "It goes on and on and on and on!!!!!!"
                 }
               }
             }
           }
         ]
       }
     }
    ] 
  }
}

console.log(sing6.in.the[3].the.move[4].neverEnds()()());
