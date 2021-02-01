const person = {name: 'Saimun', age: 22, job: 'facebook', gfName:'asha', adress: 'patuakhali', phone: '0877886', friend:['saimun emon','saimun']};

 
 const { phone } = person;

 const complexObject = {
     name: 'saimun',
     info: {
           adress: 'kola para',
           leader: 'vai'
     }
 }
 const  {leader} = complexObject.info;

// const age = person.age;
// const phone = person.phone;
// const gfName = person.gfName;
// console.log( phone, gfName, adress); 


const friend = [ 'saimun', 'aminul', 'munna', 'salam', 'kalam', 'alam'];
const [cotoFriend, nextFriend, browserFriend] = friend;
// console.log(cotoFriend, nextFriend, browserFriend); 
// console.log(browserFriend);