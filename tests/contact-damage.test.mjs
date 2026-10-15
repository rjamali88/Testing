// Run with: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import { createEnemy, updateEnemies } from '../src/enemies.js';
import { createPlayer } from '../src/player.js';
import { renderHud } from '../src/ui.js';

function setup(offset = 0) {
  const state = { width: 800, height: 600, score: 0, paused: false };
  state.player = createPlayer(state);
  state.enemies = [{ ...createEnemy('scout', state.player.x + offset, state.player.y), speed: 0 }];
  return state;
}

test('overlap reduces HP and the HUD renders the reduced health', () => {
  const state = setup();
  updateEnemies(state, 0);
  assert.equal(state.player.hp, 90);
  const rects = [];
  const ctx = { save() {}, restore() {}, fillText() {}, strokeRect() {},
    fillRect(...args) { rects.push(args); } };
  renderHud(ctx, state);
  assert.deepEqual(rects[1], [20, 44, 162, 12]);
});

test('circle boundary touches hit; just outside misses', () => {
  for (const [offset, hp] of [[30, 90], [30.01, 100]]) {
    const state = setup(offset);
    updateEnemies(state, 0);
    assert.equal(state.player.hp, hp);
  }
});

test('collision is checked after enemy movement', () => {
  const state = setup(31);
  state.enemies[0].speed = 100;
  updateEnemies(state, 0.02);
  assert.equal(state.player.hp, 90);
});

test('sustained contact and multiple enemies share a timed cooldown', () => {
  const state = setup();
  state.enemies.push({ ...state.enemies[0] });
  updateEnemies(state, 0);
  assert.equal(state.player.hp, 90);
  for (let i = 0; i < 44; i++) updateEnemies(state, 1 / 60);
  assert.equal(state.player.hp, 90);
  updateEnemies(state, 0.02);
  assert.equal(state.player.hp, 80);
});

test('leaving and re-entering does not bypass protection', () => {
  const state = setup();
  updateEnemies(state, 0);
  state.enemies[0].x += 100;
  updateEnemies(state, 0.25);
  state.enemies[0].x -= 100;
  updateEnemies(state, 0.25);
  assert.equal(state.player.hp, 90);
  updateEnemies(state, 0.25);
  assert.equal(state.player.hp, 80);
});

test('dead enemies do not damage and health cannot drop below zero', () => {
  const state = setup();
  state.enemies[0].hp = 0;
  updateEnemies(state, 0);
  assert.equal(state.player.hp, 100);
  state.enemies = setup().enemies;
  state.player.hp = 5;
  updateEnemies(state, 0);
  assert.equal(state.player.hp, 0);
  updateEnemies(state, 1);
  assert.equal(state.player.hp, 0);
});

test('missing player is safe and new players start without protection', () => {
  const state = setup();
  state.player.contactDamageCooldown = 0.75;
  state.player = createPlayer(state);
  updateEnemies(state, 0);
  assert.equal(state.player.hp, 90);
  state.player = null;
  assert.doesNotThrow(() => updateEnemies(state, 0.016));
});
