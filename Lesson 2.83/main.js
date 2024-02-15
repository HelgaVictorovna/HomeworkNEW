




const looser = {
  Eva: {
    age: 25,
    isAdmin: true,
    sayHello(name) {
      console.log(`Hello ${name}`)
    }

  }

}
console.log(looser.Eva)
looser.Eva.sayHello('Max')



const users = [
  {
    name: 'Olga',
    age: 42,
    isAdmin: true
  },
  {
    name: 'Ivan',
    age: 62,
    isAdmin: false
  },
  {
    name: 'Mike',
    age: 44,
    isAdmin: false
  },
  {
    name: 'Alex',
    age: 32,
    isAdmin: false
  }
]

for (let i = 0; i <= users.length; i++) {
  let notAdmin=0;
  if (users.isAdmin === false) {
    notAdmin = notAdmin + 1    
  }
  console.log(notAdmin)
  
}




