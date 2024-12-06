// This will determine if a function is sucessfully executed
const ExecutionSuccess = false; // Change this as necessary

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

async function WaitExecute() {
    try {
        // If the execution is successful
        const result = await ExecuteTime();
        console.log(result);
    } catch (e) {
        // If the execution is unsuccessful
        console.log(`Fetch Failed: ${e}`);
    } finally {
        // If the execution is done whether successful or not
        console.log("Execution done.")
    }
}

WaitExecute();