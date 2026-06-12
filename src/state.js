export const state = {
  canvas: null,
  ctx: null,
  width: 0,
  height: 0,
  dpr: 1,
  time: 0,
  lastTime: 0,
  delta: 0,
  paused: false,
  input: {
    keys: new Set(),
    pointer: { x: 0, y: 0, active: false },
  },
  player: null,
  enemies: [],
  bullets: [],
  particles: [],
  camera: { x: 0, y: 0, shake: 0 },
  score: 0,
  biome: 'deep-space',
};

export function setCanvas(canvas, ctx) {
  state.canvas = canvas;
  state.ctx = ctx;
}

export function resize(width, height, dpr = window.devicePixelRatio || 1) {
  state.width = width;
  state.height = height;
  state.dpr = dpr;

  if (!state.canvas || !state.ctx) return;

  state.canvas.width = Math.floor(width * dpr);
  state.canvas.height = Math.floor(height * dpr);
  state.canvas.style.width = `${width}px`;
  state.canvas.style.height = `${height}px`;
  state.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
