const users =[
  {
    id: 1,
    name: "Alex",
    age: 25,
    active:false
  },
  {
    id: 2,
    name: "Maria",
    age: 17,
    active:true
}
]

for (let user of users){
  if (user.active == true){
    console.log(user)
  }
}

let usersName = []
for (let user of users){
    usersName.push(user.name)
}
console.log(usersName.join(', '))

//решил не повторяться
function filterUsers(users){
  for(let user of users){
    if(user.id == 1){
      console.log(user)
    }
  }
}

filterUsers(users)