
// This will determine if a function is sucessfully executed
const ExecutionSuccess = true; // Change this as necessary

async function ExecuteTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ExecutionSuccess) {
                resolve("Execution Successful!")
            } else {
                reject("Server Inactive"); // Sample error message
            }
        },1000) // Wait 1 second
    });
}

ExecuteTime()
    .then((result) => {
        // If async execution is successful
        console.log(result);
    })
    .catch((error) => {
        // If async execution is unsuccessful
        console.log(`Execution Fail: ${error}`);
    })
    .finally(() => {
        // If async execution is done whether successful or not
        console.log("Execution done.");
    });