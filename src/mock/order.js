const Mock = require('mockjs');
const Random = Mock.Random
Random.cword(3, 5)
Random.dataImage('90x90', 'Mock.js')
// let shop = Mock.Random.cword(3, 5)
// let image = Mock.Random.dataImage('90x90', 'Mock.js')
const order = Mock.mock({
  status:1,
  "data|10":[
    {
      'id|+1':1,
      'shop':'@cword(3,5)',
      'picture':'@dataImage("90x90", "Mock.js")',
      'product':'@cword(3,5)',
      'price|10-100':18,
      "ifCommented|1-2": true
    }
  ]
})
// console.log(order)
export default order