const fs = require("fs");
const readline = require("readline");
const crypto = require("crypto");
const path = require("path");

const readlineinstance = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log("\nPlease Enter Your Name and Password to create your Profile");

readlineinstance.question("Enter Name : ", (Name) => {
    readlineinstance.question("Enter Password :", (password) => {
        const haspassword = crypto.createHash("sha256").update(password).digest("hex")

        fs.writeFile("./profile.txt", `${Name}\n${haspassword}`, (err) => {
            if (err) {
                console.error(err);
            }
            console.log("\nProfile Created Successfully");

            console.log("\n Now you can login to your Account :")

            readlineinstance.question("\n Please Enter Your Password to Login :", (Password) => {
                const haspassword = crypto.createHash("sha256").update(Password).digest("hex");

                fs.readFile("./profile.txt", "utf-8", (err, data) => {
                    if (err) {
                        console.error(err);
                    }

                    const lines = data.split("\n");

                    if (haspassword == lines[1]) {
                        console.log("Loged in Successfully !");
                    }
                    else {
                        console.log("Please Enter valid Password to Login...! try again")
                    }

                })
                readlineinstance.close();
            })

        })

    })
});





