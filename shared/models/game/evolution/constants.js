export const CTT_PARAMETER = (i => ({
  ANIMAL: 1 << i++
  , SELF: 1 << i++
  , ENEMY: 1 << i++
  , LINK: 1 << i++
  , ONEWAY: 1 << i++
  , PLANT: 1 << i++
  , PARASITE: 1 << i++
}))(0);

export const CARD_TARGET_TYPE = {
  ANIMAL_SELF: CTT_PARAMETER.ANIMAL + CTT_PARAMETER.SELF
  , ANIMAL_ENEMY: CTT_PARAMETER.ANIMAL + CTT_PARAMETER.ENEMY
  , LINK_SELF: CTT_PARAMETER.ANIMAL + CTT_PARAMETER.SELF + CTT_PARAMETER.LINK
  , LINK_SELF_ONEWAY: CTT_PARAMETER.ANIMAL + CTT_PARAMETER.SELF + CTT_PARAMETER.LINK + CTT_PARAMETER.ONEWAY
  , LINK_ENEMY: CTT_PARAMETER.ANIMAL + CTT_PARAMETER.ENEMY + CTT_PARAMETER.LINK
  , PLANT: CTT_PARAMETER.PLANT
  , PLANT_LINK: CTT_PARAMETER.PLANT + CTT_PARAMETER.LINK
  , PLANT_PARASITE: CTT_PARAMETER.PLANT + CTT_PARAMETER.PARASITE
  , LINK_SELF_PLANT: CTT_PARAMETER.LINK
};

export const CARD_SOURCE = {
  DECK: 'DECK'
  , HAND: 'HAND'
};

export const TRAIT_TARGET_TYPE = {
  ANIMAL: 'ANIMAL'
  , TRAIT: 'TRAIT'
  , TWO_TRAITS: 'TWO_TRAITS'
  , PLANT: 'PLANT'
  , NONE: 'NONE'
};

export const TRAIT_COOLDOWN_PLACE = {
  ANIMAL: 'ANIMAL'
  , PLAYER: 'PLAYER'
  , GAME: 'GAME'
  , TRAIT: 'TRAIT'
  , PLANT: 'PLANT'
};

export const TRAIT_COOLDOWN_DURATION = {
  ACTIVATION: 'ACTIVATION'
  , ROUND: 'ROUND'
  , TWO_TURNS: 'TWO_ROUNDS'
  , TURN: 'PHASE'
};

export const TRAIT_COOLDOWN_LINK = {
  EATING: 'EATING'
  , TAKE_SHELL: 'TAKE_SHELL'
};

/**
 * @readonly
 * @enum {string}
 */
export const TRAIT_ANIMAL_FLAG = {
  HIBERNATED: 'HIBERNATED'
  , POISONED: 'POISONED'
  , SHELL: 'SHELL'
  , REGENERATION: 'REGENERATION'
  , PARALYSED: 'PARALYSED'
  , SHY: 'SHY'
  , IN_COVER: 'IN_COVER'
};

export const ANIMAL_DEATH_REASON = {
  STARVE: 'STARVE'
  , KILL: 'KILL'
  , POISON: 'POISON'
  , NEOPLASM: 'NEOPLASM'
};

export const HUNT_FLAG = {
  FEED_FROM_KILL: 'FEED_FROM_KILL'
  , FEED_SCAVENGERS: 'FEED_SCAVENGERS'
  , FEED_FROM_PLANT: 'FEED_FROM_PLANT'
  , FEED_FROM_TAIL_LOSS: 'FEED_FROM_TAIL_LOSS'
  , FEED_ATTACKING_PLANT: 'FEED_ATTACKING_PLANT'

  , TRAIT_SHY: 'TRAIT_SHY'
  , TRAIT_INK_CLOUD: 'TRAIT_INK_CLOUD'
  , TRAIT_ANGLERFISH: 'TRAIT_ANGLERFISH'
  , TRAIT_HOMEOTHERMY: 'TRAIT_HOMEOTHERMY'

  , OPTIONAL_DEFENCE_OFF: 'OPTIONAL_DEFENCE_OFF'

  , PARALYZE: 'PARALYZE'
  , AMBUSH: 'AMBUSH'
  , PLANT_ATTACK: 'PLANT_ATTACK'
  , PLANT_COUNTERATTACK: 'PLANT_COUNTERATTACK'
};