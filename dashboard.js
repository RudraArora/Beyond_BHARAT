window.onload = function () {
    // Redirect to the main webpage
    document.querySelector('.home-btn').onclick = function () {
        window.location.href = 'index.html'; // Change 'index.html' to your main webpage URL
    };

    // Toggle profile details visibility
    document.querySelector('.profile-btn').onclick = function () {
        const profileDetails = document.querySelector('.profile-details');
        profileDetails.classList.toggle('hidden');
    };

    // Additional button actions
    document.querySelector('.settings-btn').onclick = function () {
        alert('Settings button clicked');
    };

    document.querySelector('.notifications-btn').onclick = function () {
        alert('Notifications button clicked');
    };

    document.querySelector('.logout-btn').onclick = function () {
        alert('Logout button clicked');
    };
};
