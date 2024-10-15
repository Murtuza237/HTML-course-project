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
