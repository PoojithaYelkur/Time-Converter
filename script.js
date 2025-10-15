const hoursInput = document.getElementById('hoursInput');
const minutesInput = document.getElementById('minutesInput');
const convertBtn = document.getElementById('convertBtn');
const timeInSeconds = document.getElementById('timeInSeconds');
const errorMsg = document.getElementById('errorMsg');

convertBtn.addEventListener('click', () => {
  const hours = hoursInput.value.trim();
  const minutes = minutesInput.value.trim();

  if (hours === '' || minutes === '') {
    errorMsg.textContent = 'Please enter both hours and minutes';
    timeInSeconds.textContent = '';
  } else {
    const seconds = Number(hours) * 3600 + Number(minutes) * 60;
    timeInSeconds.textContent = seconds;
    errorMsg.textContent = '';
  }
});
