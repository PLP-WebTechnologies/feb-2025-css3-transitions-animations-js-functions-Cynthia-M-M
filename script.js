const toggleBtn = document.getElementById('toggleMode');
const modeStatus = document.getElementById('modeStatus');
const animateBtn = document.getElementById('animateBtn');

// Apply dark mode
function setDarkModePreference(isDark) {
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  document.body.classList.toggle('dark-mode', isDark);
  modeStatus.textContent = isDark ? 'On' : 'Off';
}

// On page load
window.onload = () => {
  const darkPref = localStorage.getItem('darkMode') === 'enabled';
  setDarkModePreference(darkPref);
};

// Toggle button event
toggleBtn.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark-mode');
  setDarkModePreference(isDark);
});

// Animate button on click
animateBtn.addEventListener('click', () => {
  animateBtn.classList.remove('animate');
  void animateBtn.offsetWidth;
  animateBtn.classList.add('animate');
});
