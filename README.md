# Heavenfall Asteroids

A tiny browser game inspired by **Asteroids** with a demonic player ship, angelic celestial enemies, rainbow explosions, and a geometric heaven-themed animated background of gold, white, clouds, and color bands.

Now includes an effectively infinite-feeling map with camera follow + local radar/minimap, telegraphed enemy spawns, off-screen threat indicators, auto-fire combat, elite Dread Seraph encounters, relic drops, stronger pickup magnetism, XP orb drops, level-ups, combo scoring, clearer upgrade choices, screen-shake polish, pulsing synth-style audio, a longer scrolling story intro with a pixel launch animation, and pixel-art-inspired sprites/biome animations.

## Art Direction

The chosen next-phase style is **Neo-Icon Gothic Pixel Art**:

- **Mood:** cyberpunk cathedral meets demon-pilot space opera.
- **Shape language:** chunky pixel silhouettes, stained-glass geometry, gothic HUD frames, angelic sigils, and hard neon outlines.
- **Palette:** bone white, gold, cyan, magenta, violet, and deep ink-black with biome-specific stained-glass gradients.
- **Rendering rules:** keep gameplay objects readable first, use glow/shadow sparingly for hierarchy, and reserve bright gold/cyan/magenta for interactable or dangerous elements.

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
- Start game from intro screen: `Enter`
- Restart after game over: `R`
- Choose level-up upgrades: `1` Shield, `2` Better Guns, `3` More Speed

## Notes

- On first start, browser audio may require user interaction before the synth pulse/melody begins.
