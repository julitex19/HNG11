document.addEventListener('DOMContentLoaded', function() {
    const updateTime = () => {
        const now = new Date();
        document.getElementById('currentTimeUTC').innerText = now.toUTCString().split(' ')[4];
        document.getElementById('currentDay').innerText = now.toLocaleDateString('en-US', { weekday: 'long' });
    };

    updateTime();
    setInterval(updateTime, 60000);

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
