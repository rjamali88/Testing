import { clamp } from './utils.js';

export function createPlayer(state) {
  return {
    x: state.width / 2,
    y: state.height * 0.72,
    radius: 16,
    speed: 320,
    hp: 100,
    maxHp: 100,
    damage: 1,
    fireRate: 0.18,
    cooldown: 0,
    upgrades: [],
  };
}

export function damagePlayer(player, amount) {
  player.hp = clamp(player.hp - amount, 0, player.maxHp);
}

export function applyUpgrade(player, upgrade) {
  player.upgrades.push(upgrade);

  if (upgrade.type === 'damage') player.damage += upgrade.amount;
  if (upgrade.type === 'speed') player.speed += upgrade.amount;
  if (upgrade.type === 'maxHp') {
    player.maxHp += upgrade.amount;
    player.hp = player.maxHp;
  }
}

export function updatePlayer(state, dt) {
  const player = state.player;
  if (!player) return;

  let dx = 0;
  let dy = 0;
  if (state.input.keys.has('ArrowLeft') || state.input.keys.has('KeyA')) dx -= 1;
  if (state.input.keys.has('ArrowRight') || state.input.keys.has('KeyD')) dx += 1;
  if (state.input.keys.has('ArrowUp') || state.input.keys.has('KeyW')) dy -= 1;
  if (state.input.keys.has('ArrowDown') || state.input.keys.has('KeyS')) dy += 1;

  if (dx || dy) {
    const length = Math.hypot(dx, dy);
    player.x += (dx / length) * player.speed * dt;
    player.y += (dy / length) * player.speed * dt;
  }

  player.x = clamp(player.x, player.radius, state.width - player.radius);
  player.y = clamp(player.y, player.radius, state.height - player.radius);
  player.cooldown = Math.max(0, player.cooldown - dt);
}

export function renderPlayer(ctx, state) {
  const player = state.player;
  if (!player) return;

  ctx.save();
  ctx.translate(player.x, player.y);
  ctx.fillStyle = '#67e8f9';
  ctx.strokeStyle = '#e0f2fe';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, -22);
  ctx.lineTo(17, 18);
  ctx.lineTo(0, 10);
  ctx.lineTo(-17, 18);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}
