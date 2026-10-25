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


function validateUsers(dataArray) {
  if (!Array.isArray(dataArray)) {
    throw new TypeError("Данные должны быть виде массива");
  }

  for (let i = 0; i < dataArray.length; i++) {
    const user = dataArray[i];

    if (typeof user !== "object" || user === null) {
      throw new TypeError(`Элемент с индексом ${i} должен быть объектом`);
    }

    if (typeof user.id !== "number") {
      throw new TypeError(`Ошибка в элементе [${i}]: поле 'id' должно быть числом (number)`);
    }

    if (typeof user.name !== "string") {
      throw new TypeError(`Ошибка в элементе [${i}]: поле 'name' должно быть строкой (string)`);
    }

    if (typeof user.age !== "number") {
      throw new TypeError(`Ошибка в элементе [${i}]: поле 'age' должно быть числом (number)`);
    }

    if (typeof user.active !== "boolean") {
      throw new TypeError(`Ошибка в элементе [${i}]: поле 'active' должно быть логическим типом (boolean)`);
    }
  }

  return true;
}

try {
  console.log(validateUsers(users))
}catch(error){
  console.error(error.message)
}
