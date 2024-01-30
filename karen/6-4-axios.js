const axios = require("axios").default;

async function mainTask() {
    const result = await axios.get("http://localhost:3000/cars");
    console.log("GET completed.  Result object includes: ");
    console.log(result.status);
    console.log(result.data);
}

mainTask();
console.log("after main task");