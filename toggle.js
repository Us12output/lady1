// Themes cycle: Default (red) → Dark → Light → Default
const themes = ['', 'dark-mode', 'light-mode'];
const themeIcons  = ['🔴', '🌙', '☀️'];
const themeLabels = ['Auto', 'Dark', 'Light'];

let currentThemeIndex = 0;

function toggleTheme() {
    // Remove current theme class
    document.body.classList.remove('dark-mode', 'light-mode');

    // Move to next theme
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    // Apply new theme
    if (themes[currentThemeIndex]) {
        document.body.classList.add(themes[currentThemeIndex]);
    }

    // Update icon and label
    document.getElementById('themeIcon').textContent  = themeIcons[currentThemeIndex];
    document.getElementById('themeLabel').textContent = themeLabels[currentThemeIndex];

    // Save preference in localStorage
    localStorage.setItem('clockTheme', currentThemeIndex);
}

// Page load par saved theme apply karen
function loadSavedTheme() {
    const saved = localStorage.getItem('clockTheme');
    if (saved !== null) {
        currentThemeIndex = parseInt(saved);
        document.body.classList.remove('dark-mode', 'light-mode');
        if (themes[currentThemeIndex]) {
            document.body.classList.add(themes[currentThemeIndex]);
        }
        document.getElementById('themeIcon').textContent  = themeIcons[currentThemeIndex];
        document.getElementById('themeLabel').textContent = themeLabels[currentThemeIndex];
    }
}

// Page load hone par run karen
document.addEventListener('DOMContentLoaded', loadSavedTheme);