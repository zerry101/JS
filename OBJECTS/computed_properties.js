const person = {
    name: "zishan",
    age: 22,
    hobbies: ["guitar", "sleeping"] 
  };

  const key1 = "objkey1";
  const key2 = "objkey2";

  const value1 = "myvalue1";
  const value2 = "myvalue2";

  const obj = { 
    [key1]:value1,
    [key2]:value2
  }

//   Here key1 and key2 are global variables and now we want to treat its value that is objkey1 and objkey2 as key of obj object In order to do this we need to embed the variables key1 and key2 in [](square brackets)
  console.log(obj);

  console.log(Object.keys(obj));