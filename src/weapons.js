import { hit } from './utils.js';

export function firePrimary(state) {
  const player = state.player;
  if (!player || player.cooldown > 0) return;

  state.bullets.push({
    x: player.x,
    y: player.y - player.radius,
    radius: 4,
    vy: -560,
    damage: player.damage,
    color: '#fef08a',
  });
  player.cooldown = player.fireRate;
}

export function updateAutoFire(state) {
  if (state.input.keys.has('Space') || state.input.pointer.active) {
    firePrimary(state);
  }
}

export function updateBullets(state, dt) {
  for (const bullet of state.bullets) {
    bullet.y += bullet.vy * dt;

    for (const enemy of state.enemies) {
      if (enemy.hp > 0 && hit(bullet, enemy)) {
        enemy.hp -= bullet.damage;
        bullet.dead = true;
        if (enemy.hp <= 0) state.score += enemy.score;
        break;
      }
    }
  }

  state.bullets = state.bullets.filter((bullet) => !bullet.dead && bullet.y > -bullet.radius);
}

export function renderBullets(ctx, state) {
  for (const bullet of state.bullets) {
    ctx.fillStyle = bullet.color;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
