users=[
    {userId:1,firstName:'harshit',gender:'male'},
    {userId:2,firstName:'raaj',gender:'male'},
    {userId:3,firstName:'drek',gender:'male'}
]

// const [user1,user2,user3]=users;
// console.log(user1);

const [{firstName},,{gender}]=users;
console.log(firstName);
console.log(gender);