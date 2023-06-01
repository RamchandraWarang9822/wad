function handleRegistration(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const userDetails = {
        username: username,
        password: password
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    window.location.href = "login.html";
}

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (userDetails && userDetails.username === username && userDetails.password === password) {
        window.location.href = "details.html";
    } else {
        alert("Invalid username or password");
    }
}

function displayUserDetails() {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (userDetails) {
        const userDetailsDiv = document.getElementById("userDetails");

        userDetailsDiv.innerHTML = `
        <p><strong>Username:</strong> ${userDetails.username}</p>
        <p><strong>Password:</strong> ${userDetails.password}</p>
      `;
    } else {
        window.location.href = "login.html";
    }
}

const registrationForm = document.getElementById("registrationForm");
const loginForm = document.getElementById("loginForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", handleRegistration);
}

if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
}

if (window.location.href.includes("details.html")) {
    displayUserDetails();
}
