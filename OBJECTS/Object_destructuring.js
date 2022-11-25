const band={
    bandName:"led Zepplin",
    famousSong:"stairway to heaven",
};

// const bandName=band.bandName;
// const famousSong=band.famousSong;
// bandName="queen";
// console.log(bandName,famousSong);
// console.log(bandName);


const {bandName,famousSong} = band;
console.log(bandName);

// assigning bandName variable value into var1 comment above two line code then run this 
const {bandName:var1,famousSong:var2}=band;
console.log(var1);
