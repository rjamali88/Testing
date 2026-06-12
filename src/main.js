import { renderBackground, updateCamera } from './background.js';
import { spawnEnemy, updateEnemies, renderEnemies } from './enemies.js';
import { createPlayer, renderPlayer, updatePlayer } from './player.js';
import { resize, setCanvas, state } from './state.js';
import { renderHud, renderIntro } from './ui.js';
import { clear } from './utils.js';
import { updateAutoFire, updateBullets, renderBullets } from './weapons.js';

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
let spawnTimer = 0;
let introTimer = 3;

setCanvas(canvas, ctx);

function handleResize() {
  resize(window.innerWidth, window.innerHeight);
  if (!state.player) state.player = createPlayer(state);
}

function update(time) {
  state.time = time / 1000;
  state.delta = Math.min(0.033, state.lastTime ? state.time - state.lastTime : 0);
  state.lastTime = state.time;

  if (!state.paused) {
    updatePlayer(state, state.delta);
    updateAutoFire(state);
    updateBullets(state, state.delta);
    updateEnemies(state, state.delta);
    updateCamera(state);

    spawnTimer -= state.delta;
    introTimer = Math.max(0, introTimer - state.delta);
    if (spawnTimer <= 0) {
      spawnEnemy(state, Math.random() > 0.82 ? 'brute' : 'scout');
      spawnTimer = 1.1;
    }
  }

  render();
  requestAnimationFrame(update);
}

function render() {
  clear(ctx, state.width, state.height);
  renderBackground(ctx, state);
  renderBullets(ctx, state);
  renderEnemies(ctx, state);
  renderPlayer(ctx, state);
  renderHud(ctx, state);
  if (introTimer > 0) renderIntro(ctx, state);
}

window.addEventListener('resize', handleResize);
window.addEventListener('keydown', (event) => {
  if (event.code === 'KeyP') state.paused = !state.paused;
  state.input.keys.add(event.code);
});
window.addEventListener('keyup', (event) => state.input.keys.delete(event.code));
canvas.addEventListener('pointerdown', (event) => {
  state.input.pointer.active = true;
  state.input.pointer.x = event.clientX;
  state.input.pointer.y = event.clientY;
});
canvas.addEventListener('pointermove', (event) => {
  state.input.pointer.x = event.clientX;
  state.input.pointer.y = event.clientY;
});
canvas.addEventListener('pointerup', () => {
  state.input.pointer.active = false;
});

handleResize();
requestAnimationFrame(update);
