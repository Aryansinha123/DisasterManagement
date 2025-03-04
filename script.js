// Light/Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Login/Register Popup
const popup = document.getElementById("popup");
const openPopup = document.getElementById("open-popup");

function closePopup() {
    popup.style.display = "none";
}

openPopup.addEventListener("click", () => {
    popup.style.display = "block";
});

// Fetch Real-Time Disaster Updates (Dummy Example)
function fetchDisasterUpdates() {
    const alertsDiv = document.getElementById("alerts");
    alertsDiv.innerHTML = "⚠️ Earthquake detected in California - 10 minutes ago";
    
    setTimeout(() => {
        alertsDiv.innerHTML = "🌪️ Tornado warning issued in Texas - 5 minutes ago";
    }, 5000);
}

fetchDisasterUpdates(); // Simulating real-time updates

// Floating AI Chatbot
const chatbotBtn = document.getElementById("chatbot-btn");
const chatbox = document.getElementById("chatbox");

chatbotBtn.addEventListener("click", () => {
    chatbox.classList.toggle("hidden");
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatMessages = document.getElementById("chat-messages");
    
    if (userInput.trim() !== "") {
        const userMsg = document.createElement("p");
        userMsg.textContent = "You: " + userInput;
        chatMessages.appendChild(userMsg);

        setTimeout(() => {
            const botReply = document.createElement("p");
            botReply.textContent = "Bot: I'm still learning! Stay safe.";
            chatMessages.appendChild(botReply);
        }, 1000);
    }
    
    document.getElementById("user-input").value = "";
}
// Light/Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById("theme-toggle").textContent = 
        document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Login Popup Functionality
const loginPopup = document.getElementById("popup");
const registerPopup = document.getElementById("register-popup");
const openLoginBtn = document.getElementById("open-popup");
const openRegisterBtn = document.getElementById("open-register");
const backToLoginBtn = document.getElementById("back-to-login");

function closePopup() {
    loginPopup.style.display = "none";
}

function closeRegisterPopup() {
    registerPopup.style.display = "none";
}

// Open Login Popup
openLoginBtn.addEventListener("click", () => {
    loginPopup.style.display = "block";
    registerPopup.style.display = "none"; // Ensure register popup is hidden
});

// Open Register Popup
openRegisterBtn.addEventListener("click", () => {
    registerPopup.style.display = "block";
    loginPopup.style.display = "none"; // Hide login popup
});

// Back to Login from Register
backToLoginBtn.addEventListener("click", () => {
    loginPopup.style.display = "block";
    registerPopup.style.display = "none"; // Hide register popup
});

// Close popups when clicking outside
window.addEventListener("click", (event) => {
    if (event.target === loginPopup) closePopup();
    if (event.target === registerPopup) closeRegisterPopup();
});
