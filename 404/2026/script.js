const input = document.getElementById('videoUpload');
const video = document.getElementById('video');
const empty = document.getElementById('empty');
const fileName = document.getElementById('fileName');
const speedEl = document.getElementById('speed');
const cycleEl = document.getElementById('cycle');
const achievementEl = document.getElementById('achievement');
const message = document.getElementById('message');
const status = document.getElementById('status');
const reset = document.getElementById('reset');

let objectUrl = null;
let speed = 1;
let cycling = false;
let unlocked = false;

input.addEventListener('change', () => {
  const file = input.files[0];
  if (!file) return;
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  objectUrl = URL.createObjectURL(file);
  video.src = objectUrl;
  video.load();
  empty.hidden = true;
  fileName.textContent = file.name;
  message.textContent = 'Video loaded! Press Space to start the cycle.';
  status.textContent = 'LOADED';
  speed = 1;
  cycling = false;
  updateUI();
});

function updateUI() {
  speedEl.textContent = `${speed}×`;
  cycleEl.textContent = cycling ? 'ON' : 'OFF';
  achievementEl.textContent = unlocked ? '🏆 11× MASTER' : '🔒 Locked';
}

async function toggleCycle() {
  if (!video.src) {
    message.textContent = 'Upload a video first!';
    return;
  }
  cycling = !cycling;
  if (cycling) {
    try { await video.play(); } catch (_) {}
    message.textContent = 'Cycle ON — press S to increase speed.';
    status.textContent = 'PLAYING';
  } else {
    video.pause();
    message.textContent = 'Cycle OFF — press Space to start again.';
    status.textContent = 'PAUSED';
  }
  updateUI();
}

function increaseSpeed() {
  if (!video.src) {
    message.textContent = 'Upload a video first!';
    return;
  }
  if (speed < 11) speed = Math.min(11, speed + 1);
  video.playbackRate = speed;
  if (speed === 11 && !unlocked) {
    unlocked = true;
    message.textContent = '🏆 ACHIEVEMENT UNLOCKED: 11× MASTER!';
    status.textContent = 'ACHIEVEMENT';
  } else {
    message.textContent = `Speed increased to ${speed}×!`;
  }
  updateUI();
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    toggleCycle();
  }
  if (event.key.toLowerCase() === 's' && !event.repeat) {
    increaseSpeed();
  }
});

reset.addEventListener('click', () => {
  speed = 1;
  unlocked = false;
  video.playbackRate = 1;
  message.textContent = video.src ? 'Speed reset to 1×. Press S to climb again.' : 'Upload a video to begin.';
  status.textContent = video.src ? 'READY' : 'READY';
  updateUI();
});

video.addEventListener('ended', () => {
  if (cycling) {
    video.currentTime = 0;
    video.play().catch(() => {});
  }
});

updateUI();
