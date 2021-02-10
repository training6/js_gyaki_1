

  let newObject = {
    string: 'somestring',
    number: 42,
    boolean: false,
    arr: [
      1,
      2,
      3,
      4,
      (objInarr = {
        first: 2,
        second: "Wednesday",
        third: true,
      }),
    ],
    object: {
      hello: "What's up?",
      number: 6,
    },
  };

    function investigateObject(obj) {
        for (let value of Object.values(obj)) {
        if (typeof value === "object") {
          console.log("ez egy object");
        } else {
          console.log("ez nem egy object");
        }
      }
    }
      investigateObject(newObject);
    

/*
//switch
 for (const key in newObject) {
   switch (typeof newObject[key]) {
     case "string":
       console.log(`${key} is string`);
       break;
       case "boolean":
         console.log(`${key} is boolean`);
         break;
         case "object":
          console.log(`${key} is object`); 
          break;
          case "number":
            console.log(`${key} is number`); 
            break;
   }
 }
*/

