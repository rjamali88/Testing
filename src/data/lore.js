export const introCinematic = [
  'The moon cracked first.',
  'Then the old roads learned to breathe.',
  'You carry a dull blade, a stolen map, and a debt no grave will take.',
  'Walk softly. The world is listening.',
]

export const biomeEntryMessages = {
  ashfen: 'Ashfen: where fires drown and the reeds remember screams.',
  glasswood: 'Glasswood: every branch is a blade pretending to be a tree.',
  marrowsteppe: 'Marrow Steppe: the wind counts ribs before names.',
  saltcrypt: 'Saltcrypt: tides go in alive and come back wearing bells.',
  crownforge: 'Crownforge: the mountain still hammers crowns for dead kings.',
}

export const bossIntroDialogue = {
  mireSaint: [
    'Kneel, little spark.',
    'The swamp has room for one more prayer.',
  ],
  glassWitch: [
    'Do not blink.',
    'I have hidden knives in every reflection.',
  ],
  boneKhan: [
    'Your shadow looks strong.',
    'I will ride it after you fall.',
  ],
  drownedArchivist: [
    'Hush now.',
    'Let me file your last breath with the others.',
  ],
  emberRegent: [
    'At last, a subject who still burns.',
    'Come. Prove you are more than smoke.',
  ],
}

export const fakeProverbs = [
  'A lantern fears the honest moth.',
  'Never trade boots with a pilgrim who floats.',
  'The third crow lies. The fourth charges interest.',
  'A locked door is only a wall with ambition.',
  'If the well sings back, drink elsewhere.',
  'Old coins spend best in new graves.',
]

export const relicFlavorText = {
  crackedHalo: 'Warm to the touch. Guilty, somehow.',
  mothKey: 'Opens no door twice and no wound once.',
  kingsAsh: 'It settles upward when no one is watching.',
  bellOfSilt: 'Rings only under water, or under oath.',
  thornCompass: 'Points toward the choice you keep avoiding.',
  widowLantern: 'Its flame leans away from liars.',
}

export const enemyCodexEntries = {
  bogling: 'Small, mean, and mostly teeth. Travels in giggling knots.',
  glassHart: 'A beautiful mistake that learned to charge.',
  marrowVulture: 'Waits for weakness, then negotiates with gravity.',
  brineWight: 'A sailor-shaped apology from the sea.',
  forgeImp: 'Steals sparks, curses anvils, dies loudly.',
  oathKnight: 'Armor full of promises. None of them kind.',
}

export const endingText = [
  'The final crown breaks without a sound.',
  'Dawn returns slowly, embarrassed by its absence.',
  'Some debts are paid. Some are only given kinder names.',
  'You leave by the old road, and this time it lets you go.',
]

export const loreFragments = [
  {
    id: 'fragment-old-road',
    title: 'The Old Road',
    unlock: 'Reach any third biome.',
    text: 'The road was built before maps. Cartographers only discovered it by following lost people home.',
  },
  {
    id: 'fragment-first-crown',
    title: 'The First Crown',
    unlock: 'Defeat one boss without using a relic.',
    text: 'The first crown was not worn. It was nailed above a door to keep kings out.',
  },
  {
    id: 'fragment-moon-splinter',
    title: 'Moon Splinter',
    unlock: 'Collect three lunar relics.',
    text: 'Every splinter hums the same note. Stand too close and your bones hum back.',
  },
  {
    id: 'fragment-last-bell',
    title: 'The Last Bell',
    unlock: 'Enter the Saltcrypt twice.',
    text: 'The last bell was cast from anchors, wedding rings, and one saint who refused to melt.',
  },
  {
    id: 'fragment-ember-lineage',
    title: 'Ember Lineage',
    unlock: 'Reach the final boss.',
    text: 'The regents never inherited fire. They borrowed it from the mountain and renamed the theft tradition.',
  },
]

export default {
  introCinematic,
  biomeEntryMessages,
  bossIntroDialogue,
  fakeProverbs,
  relicFlavorText,
  enemyCodexEntries,
  endingText,
  loreFragments,
}
