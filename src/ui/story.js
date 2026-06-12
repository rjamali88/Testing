import {
  biomeEntryMessages,
  bossIntroDialogue,
  endingText,
  enemyCodexEntries,
  fakeProverbs,
  introCinematic,
  loreFragments,
  relicFlavorText,
} from '../data/lore.js'

const DEFAULT_COOLDOWNS = {
  biomeEntry: 90_000,
  proverb: 180_000,
  codex: 60_000,
}

const createSeenState = () => ({
  intro: false,
  ending: false,
  biomes: new Set(),
  bosses: new Set(),
  relics: new Set(),
  enemies: new Set(),
  fragments: new Set(),
  lastShownAt: new Map(),
})

export function createStorySystem({
  now = () => Date.now(),
  cooldowns = DEFAULT_COOLDOWNS,
  chance = Math.random,
} = {}) {
  const state = createSeenState()

  const shouldShow = (key, cooldown = 0) => {
    const current = now()
    const previous = state.lastShownAt.get(key) ?? -Infinity

    if (current - previous < cooldown) {
      return false
    }

    state.lastShownAt.set(key, current)
    return true
  }

  const once = (bucket, id) => {
    if (bucket.has(id)) {
      return false
    }

    bucket.add(id)
    return true
  }

  return {
    getIntro() {
      if (state.intro) {
        return []
      }

      state.intro = true
      return introCinematic
    },

    getBiomeEntry(biomeId) {
      if (!biomeEntryMessages[biomeId] || !once(state.biomes, biomeId)) {
        return null
      }

      if (!shouldShow('biomeEntry', cooldowns.biomeEntry)) {
        return null
      }

      return biomeEntryMessages[biomeId]
    },

    getBossIntro(bossId) {
      if (!bossIntroDialogue[bossId] || !once(state.bosses, bossId)) {
        return []
      }

      return bossIntroDialogue[bossId]
    },

    maybeGetProverb(triggerChance = 0.08) {
      if (chance() > triggerChance || !shouldShow('proverb', cooldowns.proverb)) {
        return null
      }

      return fakeProverbs[Math.floor(chance() * fakeProverbs.length)]
    },

    getRelicFlavor(relicId) {
      if (!relicFlavorText[relicId] || !once(state.relics, relicId)) {
        return null
      }

      return relicFlavorText[relicId]
    },

    getEnemyCodexEntry(enemyId) {
      if (!enemyCodexEntries[enemyId] || !once(state.enemies, enemyId)) {
        return null
      }

      if (!shouldShow('codex', cooldowns.codex)) {
        return null
      }

      return enemyCodexEntries[enemyId]
    },

    getEnding() {
      if (state.ending) {
        return []
      }

      state.ending = true
      return endingText
    },

    unlockLoreFragment(fragmentId) {
      const fragment = loreFragments.find(({ id }) => id === fragmentId)

      if (!fragment || !once(state.fragments, fragmentId)) {
        return null
      }

      return fragment
    },

    getUnlockedLoreFragments() {
      return loreFragments.filter(({ id }) => state.fragments.has(id))
    },

    reset() {
      const fresh = createSeenState()
      Object.assign(state, fresh)
    },
  }
}

export function formatStoryLines(lines) {
  if (!lines) {
    return ''
  }

  return Array.isArray(lines) ? lines.join('\n') : lines
}
