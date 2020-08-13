const nodeModule = require('./node-module');
const modifyModule = require('./modify-module');
console.log(nodeModule); // An object that contain static string in foo property.
console.log(nodeModule.get()); // You can get current foo value by public function.


