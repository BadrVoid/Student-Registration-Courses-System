document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector("form");

  if (registerForm && document.getElementById("reg-name")) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.getElementById("reg-name").value.trim();
      const studentId = document.getElementById("reg-id").value.trim();
      const email = document.getElementById("reg-email").value.trim();
      const pass = document.getElementById("reg-pass").value;
      const confirmPass = document.getElementById("reg-confirm-pass").value;

      if (!fullName || !studentId || !email || !pass || !confirmPass) {
        alert("Please fill in all required fields.");
        return;
      }

      if (!/^\d+$/.test(studentId)) {
        alert("University Student ID must contain numbers only.");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid academic email address.");
        return;
      }

      if (pass.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
      }

      if (pass !== confirmPass) {
        alert("Passwords do not match.");
        return;
      }

      alert("Account created successfully! Redirecting to login...");

      window.location.href = "index.html";
    });
  }

  const loginForm = document.querySelector("form");

  if (loginForm && document.getElementById("login-id")) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const loginId = document.getElementById("login-id").value.trim();
      const loginPass = document.getElementById("login-pass").value;

      if (!loginId || !loginPass) {
        alert("Please enter both your University ID and Password.");
        return;
      }

      // Admin Login
      if (loginId === "admin") {
        if (loginPass === "admin123") {
          localStorage.setItem(
            "wec_currentUser",
            JSON.stringify({
              role: "admin",
              id: "admin",
            }),
          );

          window.location.href = "admin-dashboard.html";
        } else {
          alert("Invalid Administrator password.");
        }

        return;
      }

      // Student Login
      if (!/^\d+$/.test(loginId)) {
        alert("University Student ID must contain numbers only.");
        return;
      }

      if (loginPass.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
      }

      window.location.href = "student-dashboard.html";
    });
  }
});
