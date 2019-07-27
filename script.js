let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
  { id: 4, name: 'shep', email: 'shep@gmail.com'},
 ];

const name = document.querySelector('.nameBox');
const email = document.querySelector('.emailBox');
const isVIP = document.querySelector('.checkBox');
const button = document.querySelector('button');
const listOfName = document.querySelector('#nameList');



console.log(name, email, isVIP);

let person ={};



button.addEventListener('click', (ev)=>{
  ev.preventDefault();
  let person={};
  person.name= name.value;
  person.email= email.value;
  let ul = document.createElement('UL')
  let li = document.createElement('LI')
  let button2 = document.createElement('BUTTON')
  let spanName = document.createElement('span')
  let spanBtn = document.createElement('span')

  button2.innerHTML = 'Destroy'
  spanName.setAttribute('class', 'nameList')
  spanBtn.setAttribute('class', 'deletList')
  li.setAttribute('class', 'background')

  li.appendChild(spanName)
  li.appendChild(spanBtn)
  spanBtn.appendChild(button2)
  ul.appendChild(li)
  listOfName.appendChild(ul)
  console.log(li)
  // li.innerHTML = `${name.value} (${email.value})`

  li.appendChild(document.createTextNode(`${name.value} (${email.value})`));
  document.querySelector('.deletList').style.cssFloat = 'right';
  // li.appendChild(button2)
  if(isVIP.checked){
    person.isVIP= true;
    document.querySelector('.background').style.backgroundColor = 'blue'

  }
  customers.push(person);


})



buttonDelete.addEventListener('click', ev => {
  ev.target.parentNode.parentNode.removeChild(ev)

  console.log('hi')
})

console.log(customers);
