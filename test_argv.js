const text_a1 = require("./text_a1");
const scripts_obj = {
    'text_a1': text_a1
}
let argumens = process.argv.splice(2);
// console.log("传递的参数", argumens);
for (let key in scripts_obj) {
    if (argumens.includes(key)) {
        scripts_obj[key]()
    }
}