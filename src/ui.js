export function renderHud(ctx, state) {
  const player = state.player;

  ctx.save();
  ctx.font = '16px system-ui, sans-serif';
  ctx.fillStyle = '#e5e7eb';
  ctx.fillText(`Score ${state.score}`, 20, 30);

  if (player) {
    ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
    ctx.fillRect(20, 44, 180, 12);
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(20, 44, 180 * (player.hp / player.maxHp), 12);
    ctx.strokeStyle = '#e5e7eb';
    ctx.strokeRect(20, 44, 180, 12);
  }

  renderRadar(ctx, state);
  renderOverlay(ctx, state);
  ctx.restore();
}

export function renderRadar(ctx, state) {
  const size = 92;
  const x = state.width - size - 20;
  const y = 20;

  ctx.strokeStyle = 'rgba(226, 232, 240, 0.5)';
  ctx.strokeRect(x, y, size, size);
  ctx.fillStyle = 'rgba(15, 23, 42, 0.45)';
  ctx.fillRect(x, y, size, size);

  ctx.fillStyle = '#fb7185';
  for (const enemy of state.enemies) {
    ctx.fillRect(x + (enemy.x / state.width) * size - 1, y + (enemy.y / state.height) * size - 1, 2, 2);
  }
}

export function renderIntro(ctx, state) {
  ctx.save();
  ctx.textAlign = 'center';
  ctx.fillStyle = '#e0f2fe';
  ctx.font = '700 28px system-ui, sans-serif';
  ctx.fillText('Canvas Game', state.width / 2, state.height * 0.34);
  ctx.font = '16px system-ui, sans-serif';
  ctx.fillText('WASD / arrows to move, Space to fire', state.width / 2, state.height * 0.34 + 34);
  ctx.restore();
}

export function renderOverlay(ctx, state) {
  if (!state.paused) return;

  ctx.fillStyle = 'rgba(2, 6, 23, 0.6)';
  ctx.fillRect(0, 0, state.width, state.height);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#f8fafc';
  ctx.font = '700 24px system-ui, sans-serif';
  ctx.fillText('Paused', state.width / 2, state.height / 2);
}
