const fs = require('fs')
// const book = {
//     title: 'Twilight Saga',
//     author: 'Chetan Bhagat',
// }
// // const bookJson = JSON.stringify(book)
// // console.log(bookJson)

// // const parsedData = JSON.parse(bookJson)
// // console.log(parsedData.author)
// // fs.writeFileSync('01json.json', bookJson)
// const a= fs.readFileSync('01json.json')
// const b = a.toString()
// const c = JSON.parse(b)
// console.log(c.title)
const v= fs.readFileSync('01json.json')
const a = v.toString()
const c = JSON.parse(a)
// console.log(c.bar_id)
c.bar_title = 'Nisha' 
c.count = 100
const cJSON = JSON.stringify(c)
fs.writeFileSync('01json.json', cJSON)




