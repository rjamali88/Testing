export function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function hit(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const radius = (a.radius || 0) + (b.radius || 0);
  return dx * dx + dy * dy <= radius * radius;
}

export function mixHex(a, b, amount = 0.5) {
  const t = clamp(amount, 0, 1);
  const left = parseInt(a.replace('#', ''), 16);
  const right = parseInt(b.replace('#', ''), 16);
  const ar = (left >> 16) & 255;
  const ag = (left >> 8) & 255;
  const ab = left & 255;
  const br = (right >> 16) & 255;
  const bg = (right >> 8) & 255;
  const bb = right & 255;
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `#${((1 << 24) + (rr << 16) + (rg << 8) + rb).toString(16).slice(1)}`;
}

export function clear(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
}

export function circle(ctx, x, y, radius, fill) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.fill();
}
