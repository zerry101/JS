const band={
    bandName:"led Zepplin",
    famousSong:"stairway to heaven",
    year:1987,
    anotherFamousSong:"kashmir"
};

// const bandName=band.bandName;
// const famousSong=band.famousSong;
// bandName="queen";
// console.log(bandName,famousSong);
// console.log(bandName);


const {bandName,famousSong,...restProps} = band;
console.log(bandName);
console.log(restProps);
// assigning bandName variable value into var1 comment above two line code then run this 
const {bandName:var1,famousSong:var2}=  band;
console.log(var1);

