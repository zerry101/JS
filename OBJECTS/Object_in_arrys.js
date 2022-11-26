users=[
    {userId:1,firstName:'harshit',gender:'male'},
    {userId:2,firstName:'raaj',gender:'male'},
    {userId:3,firstName:'drek',gender:'male'}
]
// console.log(use);
for(let user of users)
{
    console.log(Object.values(user));
}