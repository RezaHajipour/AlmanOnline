const { createUser } = require("./db");

const registrationInfo = {
    first_name: "ye",
    last_name: "ye",
    email: "ye@mail.com",
    password_hash: "123",
};

createUser(registrationInfo).then((registeredUser) => {
    // here you should NOT see yoyo123 anywhere!
    console.log("registeredUser", registeredUser);
});
