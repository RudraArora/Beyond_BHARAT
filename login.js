document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const snackbar = document.getElementById("snackbar");

    function showSnackbar(message, success = true) {
        snackbar.textContent = message;
        snackbar.style.backgroundColor = success ? "#4CAF50" : "#f44336"; // Green for success, Red for failure
        snackbar.className = "show";
        setTimeout(() => {
            snackbar.className = snackbar.className.replace("show", "");
        }, 3000); // The snackbar will disappear after 3 seconds
    }

    registerLink.onclick = () => {
        wrapper.classList.add('active');
    };

    loginLink.onclick = () => {
        wrapper.classList.remove('active');
    };

    // Login form submission handler
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        const role = loginForm.querySelector('input[name="role"]:checked').value;

        // Retrieve the stored user data from local storage
        const storedUser = JSON.parse(localStorage.getItem(username));

        if (storedUser && storedUser.password === password && storedUser.role === role) {
            showSnackbar("Login successful!", true);
            // Redirect to dashboard after a short delay
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1500);
        } else {
            showSnackbar("Invalid username, password, or role.", false);
        }
    });

    // Signup form submission handler
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = signupForm.querySelector('input[name="username"]').value;
        const email = signupForm.querySelector('input[name="email"]').value;
        const password = signupForm.querySelector('input[name="password"]').value;
        const role = signupForm.querySelector('input[name="role"]:checked').value;

        // Store user data in local storage
        const user = {
            username: username,
            email: email,
            password: password,
            role: role
        };
        localStorage.setItem(username, JSON.stringify(user));
        showSnackbar("Sign up successful!", true);

        // Redirect to login after a short delay
        setTimeout(() => {
            loginLink.click();
        }, 1500);
    });

    // Toggle between login and sign up
    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        wrapper.classList.add('register-mode');
    });

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        wrapper.classList.remove('register-mode');
    });
});