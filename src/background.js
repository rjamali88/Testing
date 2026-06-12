import { circle } from './utils.js';

const stars = Array.from({ length: 120 }, (_, index) => ({
  x: (index * 97) % 1000,
  y: (index * 193) % 1000,
  radius: 0.6 + (index % 4) * 0.35,
  speed: 8 + (index % 5) * 6,
}));

export function updateCamera(state) {
  const player = state.player;
  if (!player) return;

  state.camera.x += (player.x - state.width / 2 - state.camera.x) * 0.04;
  state.camera.y += (player.y - state.height / 2 - state.camera.y) * 0.04;
  state.camera.shake *= 0.9;
}

export function renderBackground(ctx, state) {
  const gradient = ctx.createLinearGradient(0, 0, 0, state.height);
  gradient.addColorStop(0, '#020617');
  gradient.addColorStop(1, '#111827');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, state.width, state.height);

  for (const star of stars) {
    const x = (star.x - state.camera.x * 0.08 + state.width * 10) % state.width;
    const y = (star.y + state.time * star.speed - state.camera.y * 0.04) % state.height;
    circle(ctx, x, y, star.radius, 'rgba(226, 232, 240, 0.72)');
  }
}
