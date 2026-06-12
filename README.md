# Heavenfall Asteroids

A tiny browser game inspired by **Asteroids** with a demonic player ship, angelic celestial enemies, rainbow explosions, and a readable space-themed animated background with nebulae, star fields, distant landmarks, and smoother biome transitions.

Now includes an effectively infinite-feeling map with camera follow + local radar/minimap, telegraphed enemy spawns, off-screen threat indicators, auto-fire combat, elite Dread Seraph encounters, relic drops, eight readable space biomes, cherub/reaper/oracle enemies, enemy projectiles, Halo Blade and Chain Smite weapons, Nova Pulse and Aegis Dash abilities, Relic Magnet upgrades, stronger pickup magnetism, XP orb drops, level-ups, combo scoring, clearer upgrade choices, screen-shake polish, pulsing synth-style audio, a longer scrolling story intro with a pixel launch animation, pixel-art-inspired sprites/biome animations, slower ship handling, speed caps, expanded radar range, and a nearest-enemy guide arrow.

## Art Direction

The chosen next-phase style is **Neo-Icon Gothic Pixel Art**:

- **Mood:** cyberpunk cathedral meets demon-pilot space opera.
- **Shape language:** chunky pixel silhouettes, stained-glass geometry, gothic HUD frames, angelic sigils, and hard neon outlines.
- **Palette:** bone white, gold, cyan, magenta, violet, and deep ink-black with biome-specific stained-glass gradients.
- **Biomes:** Ice Nebula, Violet Void, Emerald Cloud, Golden Storm, Crimson Chapel, Solar Reef, Obsidian Choir, and Aurora Crypt use darker space palettes, subtle landmarks, and smooth cross-fades so enemies and pickups stay legible.
- **Rendering rules:** keep gameplay objects readable first, keep backgrounds lower contrast than enemies/pickups, use glow/shadow sparingly for hierarchy, and reserve bright gold/cyan/magenta for interactable or dangerous elements.

## Run

Open `index.html` directly in your browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Controls

- Rotate: Left/Right arrows or `A` / `D`
- Thrust: Up arrow or `W`
- Reverse thrust / brake: Down arrow or `S`
- Shoot: Space
- Toggle auto-fire: `F`
- Aegis Dash: `E` or `Shift` after choosing the dash upgrade
- Start game from intro screen: `Enter`
- Restart after game over: `R`
- Choose level-up upgrades: `1` Shield, `2` Better Guns, `3` More Speed, `4` Halo Blades, `5` Chain Smite, `6` Relic Magnet, `7` Nova Pulse, `8` Aegis Dash

## Notes

- On first start, browser audio may require user interaction before the synth pulse/melody begins.
- This prototype is a single-file Canvas game, so most iteration happens in `index.html`.
