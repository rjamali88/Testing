import { rand } from './utils.js';

export const enemyTypes = {
  scout: { radius: 14, speed: 75, hp: 2, color: '#fb7185', score: 10 },
  brute: { radius: 24, speed: 38, hp: 8, color: '#f97316', score: 35 },
};

export function createEnemy(type, x, y) {
  const definition = enemyTypes[type] || enemyTypes.scout;
  return { type, x, y, ...definition };
}

export function spawnEnemy(state, type = 'scout') {
  const x = rand(24, Math.max(24, state.width - 24));
  const y = -32;
  state.enemies.push(createEnemy(type, x, y));
}

export function updateEnemies(state, dt) {
  for (const enemy of state.enemies) {
    const target = state.player || { x: enemy.x, y: state.height };
    const angle = Math.atan2(target.y - enemy.y, target.x - enemy.x);
    enemy.x += Math.cos(angle) * enemy.speed * dt;
    enemy.y += Math.sin(angle) * enemy.speed * dt;
  }

  state.enemies = state.enemies.filter((enemy) => enemy.y < state.height + enemy.radius && enemy.hp > 0);
}

export function renderEnemies(ctx, state) {
  for (const enemy of state.enemies) {
    ctx.save();
    ctx.translate(enemy.x, enemy.y);
    ctx.fillStyle = enemy.color;
    ctx.beginPath();
    ctx.arc(0, 0, enemy.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}
