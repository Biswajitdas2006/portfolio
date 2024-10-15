var typed = new Typed(".multiple-text",{
    strings : ["Web Developer", "writter","Gamer"],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
})


const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme from localStorage
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('.header').classList.add('dark-mode');
    toggleButton.innerHTML = "<i class='bx bx-sun'></i>"; // Sun icon for light theme
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.header').classList.toggle('dark-mode');
    
    // Toggle the icon
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = "<i class='bx bx-sun'></i>"; // Sun icon for light theme
        localStorage.setItem('theme', 'dark'); // Save the theme
    } else {
        toggleButton.innerHTML = "<i class='bx bx-moon'></i>"; // Moon icon for dark theme
        localStorage.setItem('theme', 'light'); // Save the theme
    }
});
