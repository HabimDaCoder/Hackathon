function register() {
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  if (username && password) {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    document.getElementById("registerMessage").innerText = "✅ Registration successful!";
  } else {
    document.getElementById("registerMessage").innerText = "⚠️ Please fill all fields.";
  }
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && username === user.username && password === user.password) {
    window.location.href = "home.html"; 
  } else {
    document.getElementById("loginMessage").innerText = "❌ Invalid username or password.";
  }
}