let username = prompt("Enter your name");

function greetUser(name) {
    if (name === "" || name === null) {
        name = "Guest";
    }

    let message = "Welcome " + name + "! Click an image to view the recipe.";

    let greeting = document.createElement("p");
    greeting.textContent = message;

    document.body.insertBefore(greeting, document.querySelector(".pastry-container"));
}

greetUser(username);
