document.addEventListener("DOMContentLoaded", function () {
    const loginPopup = document.getElementById("popup");
    const registerPopup = document.getElementById("register-popup");
    const openLoginBtn = document.getElementById("open-popup");
    const openRegisterBtn = document.getElementById("open-register");
    const backToLoginBtn = document.getElementById("back-to-login");
    const closeBtns = document.querySelectorAll(".close");
    const loginBtn = loginPopup.querySelector("button"); // Select login button
    const registerBtn = registerPopup.querySelector("button"); // Select register button

    // Create success message element
    const successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    document.body.appendChild(successMessage); // Append message to the body
    successMessage.style.display = "none"; // Hide initially

    // Function to show success message
    function showSuccessMessage(message) {
        successMessage.textContent = message;
        successMessage.style.display = "block";

        // Hide success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    }

    // Function to open login popup
    openLoginBtn.addEventListener("click", function () {
        loginPopup.style.display = "block";
    });

    // Function to open register popup
    openRegisterBtn.addEventListener("click", function () {
        loginPopup.style.display = "none";
        registerPopup.style.display = "block";
    });

    // Function to go back to login popup
    backToLoginBtn.addEventListener("click", function () {
        registerPopup.style.display = "none";
        loginPopup.style.display = "block";
    });

    // Function to close popups when clicking on close buttons
    closeBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            loginPopup.style.display = "none";
            registerPopup.style.display = "none";
        });
    });

    // Close popups when clicking outside of them
    window.addEventListener("click", function (event) {
        if (event.target === loginPopup) {
            loginPopup.style.display = "none";
        }
        if (event.target === registerPopup) {
            registerPopup.style.display = "none";
        }
    });

    // Handle login button click
    loginBtn.addEventListener("click", function () {
        loginPopup.style.display = "none"; // Hide login popup
        showSuccessMessage("Login Successful!"); // Show login success message
    });

    // Handle register button click
    registerBtn.addEventListener("click", function () {
        registerPopup.style.display = "none"; // Hide register popup
        showSuccessMessage("Registration Successful!"); // Show register success message
    });
});

// api integration for fetching weather data
let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");

check.addEventListener("click", () => {
    let key = `bd4ea33ecf905116d12af172e008dbae`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + "')";

        data.weather.forEach(items => {
            weatherDescription.innerText = items.description;
            if (items.id < 250) {
                tempIcon.src = `tempicons/storm.svg`;
            } else if (items.id < 350) {
                tempIcon.src = `tempicons/drizzle.svg`;
            } else if (items.id < 550) {
                tempIcon.src = `tempicons/snow.svg`;
            } else if (items.id < 650) {
                tempIcon.src = `tempicons/rain.svg`;
            } else if (items.id < 800) {
                tempIcon.src = `tempicons/atmosphere.svg`;
            } else if (items.id === 800) {
                tempIcon.src = `tempicons/sun.svg`;
            } else if (items.id > 800) {
                tempIcon.src = `tempicons/clouds.svg`;
            }
        })

        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;

        humidity.innerText = `Humidity ${data.main.humidity}`;
        latitude.innerText = `Latitude ${data.coord.lat}`;
        longitude.innerText = `Latitude ${data.coord.lon}`;

    })
    country.value = "";
    city.value = "";
})

document.addEventListener("DOMContentLoaded", function () {
    const assistantBtn = document.getElementById("assistant-btn");
    const chatBox = document.getElementById("chat-box");
    const closeChat = document.getElementById("close-chat");
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const sendMsg = document.getElementById("send-msg");
    const container = document.getElementById("container");

    // Open Chat Box & Shift Weather Card
    assistantBtn.addEventListener("click", function () {
        chatBox.style.right = "-200px";
        document.body.classList.add("chat-active");
    });

    // Close Chat Box & Reset Weather Card
    closeChat.addEventListener("click", function () {
        chatBox.style.right = "-320px";
        document.body.classList.remove("chat-active");
    });

    // Send Message
    sendMsg.addEventListener("click", function () {
        sendMessage();
    });

    // Press Enter to Send Message
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === "") return;

        // Add User Message
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user");
        userMessage.innerText = message;
        chatBody.appendChild(userMessage);

        chatInput.value = "";

        // Scroll to Bottom
        chatBody.scrollTop = chatBody.scrollHeight;

        // Simulated Bot Response
        setTimeout(() => {
            const botMessage = document.createElement("div");
            botMessage.classList.add("chat-message", "bot");
            botMessage.innerText = "I'm still learning! 😊";
            chatBody.appendChild(botMessage);

            // Scroll to Bottom
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
});

document.getElementById("assistant-btn").addEventListener("click", function () {
    document.body.classList.add("chat-active"); // Show chat box
});

document.getElementById("close-chat").addEventListener("click", function () {
    document.body.classList.remove("chat-active"); // Hide chat box
});
