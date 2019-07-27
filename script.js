let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
  { id: 4, name: 'shep', email: 'shep@gmail.com'},
 ];

const name = document.querySelector('.nameBox');
const email = document.querySelector('.emailBox');
const isVIP = document.querySelector('.checkBox');
const button = document.querySelector('button');


console.log(name, email, isVIP);

let person ={};


button.addEventListener('click', (ev)=>{
  ev.preventDefault();
  let person={};
  person.name= name.value;
  person.email= email.value;
  if(isVIP.checked){
    person.isVIP= true;
  }
  customers.push(person);
})

console.log(customers);
