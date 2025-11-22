function greetUser(name, callback) {
    console.log("Hello " + name);   // First message

    callback();
}

function showEndMessage() {
    console.log("Welcome to the course!");   // Final message
}

greetUser("Shashank", showEndMessage);
