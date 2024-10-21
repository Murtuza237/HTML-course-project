function bookAppointment(mentorName) {
    alert("Booking appointment with " + mentorName);
    // You can redirect to a booking form or handle booking logic here
    // Example: window.location.href = "/booking-page.html?mentor=" + encodeURIComponent(mentorName);
}
function toggleRoadmap(roadmapId) {
    const roadmap = document.getElementById(roadmapId);
    const allRoadmaps = document.querySelectorAll('.roadmap');

    // Hide all other roadmaps
    allRoadmaps.forEach(function (rm) {
        if (rm !== roadmap) {
            rm.style.display = 'none';
        }
    });

    // Toggle the selected roadmap
    if (roadmap.style.display === 'none' || roadmap.style.display === '') {
        roadmap.style.display = 'block';
    } else {
        roadmap.style.display = 'none';
    }
}

// Smooth scroll when "Get Started" button is clicked
document.querySelector('.cta-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.features').scrollIntoView({
        behavior: 'smooth'
    });
});

// Highlight the active link in the navigation menu based on scroll position
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('class');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Show alert when clicking on the "Career Interest Assessment" card
document.querySelectorAll('.card a')[0].addEventListener('click', function (e) {
    alert("Career Interest Assessment will help you discover your strengths!");
});

document.getElementById('login-btn').addEventListener('click', function() {
    // Assuming user successfully logs in
    localStorage.setItem('isLoggedIn', 'true');  // Set the login status to true
    window.location.href = 'mentor-2.html';         // Redirect to the homepage after login
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to check the login status
    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';  // Check if the user is logged in
        const authSection = document.getElementById('auth-section'); // Get the section to update

        // Clear any existing content in the auth section
        authSection.innerHTML = '';

        if (isLoggedIn) {
            // If logged in, show the profile icon
            authSection.innerHTML = `
                <a href="profile.html">
                    <img src="profile.jpeg" alt="Profile Icon" class="profile-icon">
                </a>
            `;
        } else {
            // If not logged in, show the login button
            authSection.innerHTML = `
                <a href="login.html" class="login-btn">Login</a>
            `;
        }
    }

    // Run the checkLoginStatus function when the page loads
    checkLoginStatus();
});

document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-btn');

    if (loginButton) {
        // If login button exists, add event listener
        loginButton.addEventListener('click', function() {
            // Assuming user successfully logs in
            localStorage.setItem('isLoggedIn', 'true');  // Set the login status to true
            window.location.href = 'mentor-2.html';         // Redirect to the homepage after login
        });
    }
});
