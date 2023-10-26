document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const username = loginForm.elements.username.value;
        const password = loginForm.elements.password.value;

        // Implement your authentication logic here (e.g., check against a database or hard-coded values).
        // For simplicity, we'll check if the username and password match.
        if (username === "user" && password === "password") {
            alert("Login successful!");

            // You can redirect to another page or perform other actions here.
            window.location.href = "LoggedUserHome.html"; // Replace with the desired URL
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    
    // A basic function to check user credentials (for demonstration purposes)
    function authenticateUser(username, password) {
        // Replace this with your own authentication logic (e.g., database lookup)
        // For simplicity, hard-coded values are used here.
        const validUsername = "user";
        const validPassword = "password";

        return username === validUsername && password === validPassword;
    }
});
