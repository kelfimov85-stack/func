let names = ["John", "Tom", "Jack", "Jim"]
let numbers = [12, -45, 78, -23, 288, 103]

names.filter((value) => {
  if (value.includes("J") && value.length > 3){
    console.log("Hi " + value)
  }
})

let func = numbers.filter((value) => value > 100 && value % 2 == 0)
console.log(func)