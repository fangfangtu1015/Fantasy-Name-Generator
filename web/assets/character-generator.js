// DnD 5e Character Card Generator
// Uses SRD (System Reference Document) data — OGL compliant, no copyright issues

const CharacterData = {
  races: {
    'Human': {
      asi: '+1 to all ability scores', speed: 30,
      traits: ['Extra language'], size: 'Medium',
      subraces: null
    },
    'Elf': {
      asi: '+2 DEX', speed: 30,
      traits: ['Darkvision 60ft', 'Keen Senses (Perception)', 'Fey Ancestry (advantage vs charm, immune to magic sleep)', 'Trance (4 hours)'],
      size: 'Medium',
      subraces: {
        'Wood Elf': { asi: '+1 WIS', traits: ['Fleet of Foot (35ft)', 'Mask of the Wild', 'Elf Weapon Training'] },
        'High Elf': { asi: '+1 INT', traits: ['Cantrip (wizard list)', 'Elf Weapon Training', 'Extra language'] },
        'Dark Elf (Drow)': { asi: '+1 CHA', traits: ['Superior Darkvision 120ft', 'Drow Magic (Dancing Lights, Faerie Fire, Darkness)', 'Drow Weapon Training'] }
      }
    },
    'Dwarf': {
      asi: '+2 CON', speed: 25,
      traits: ['Darkvision 60ft', 'Dwarven Resilience (poison advantage)', 'Dwarven Toughness (+1 HP/level)', 'Stonecunning'],
      size: 'Medium',
      subraces: {
        'Hill Dwarf': { asi: '+1 WIS', traits: ['Dwarven Toughness'] },
        'Mountain Dwarf': { asi: '+2 STR', traits: ['Dwarven Armor Training'] }
      }
    },
    'Halfling': {
      asi: '+2 DEX', speed: 25,
      traits: ['Lucky (reroll 1s)', 'Brave (advantage vs frighten)', 'Halfling Nimbleness'],
      size: 'Small',
      subraces: {
        'Lightfoot': { asi: '+1 CHA', traits: ['Naturally Stealthy'] },
        'Stout': { asi: '+1 CON', traits: ['Stout Resilience (poison advantage)'] }
      }
    },
    'Dragonborn': {
      asi: '+2 STR, +1 CHA', speed: 30,
      traits: ['Draconic Ancestry', 'Breath Weapon', 'Damage Resistance'],
      size: 'Medium', subraces: null
    },
    'Gnome': {
      asi: '+2 INT', speed: 25,
      traits: ['Darkvision 60ft', 'Gnome Cunning (advantage on INT/WIS/CHA saves vs magic)'],
      size: 'Small',
      subraces: {
        'Forest Gnome': { asi: '+1 DEX', traits: ['Minor Illusion cantrip', 'Speak with Small Beasts'] },
        'Rock Gnome': { asi: '+1 CON', traits: ['Artificer\'s Lore', 'Tinker'] }
      }
    },
    'Half-Elf': {
      asi: '+2 CHA, +1 to two others', speed: 30,
      traits: ['Darkvision 60ft', 'Fey Ancestry', 'Skill Versatility (2 extra skills)'],
      size: 'Medium', subraces: null
    },
    'Half-Orc': {
      asi: '+2 STR, +1 CON', speed: 30,
      traits: ['Darkvision 60ft', 'Menacing (Intimidation)', 'Relentless Endurance (1/long rest)', 'Savage Criticals'],
      size: 'Medium', subraces: null
    },
    'Tiefling': {
      asi: '+2 CHA, +1 INT', speed: 30,
      traits: ['Darkvision 60ft', 'Hellish Resistance (fire)', 'Infernal Legacy (Thaumaturgy, Hellish Rebuke, Darkness)'],
      size: 'Medium', subraces: null
    },
    'Kobold': {
      asi: '+2 DEX, -2 STR', speed: 30,
      traits: ['Darkvision 60ft', 'Pack Tactics (advantage on attack if ally within 5ft)', 'Sunlight Sensitivity (disadvantage in direct sunlight)', 'Grovel, Cower, and Beg (action to give advantage to allies)'],
      size: 'Small', subraces: null
    },
    'Lizardfolk': {
      asi: '+2 CON, +1 WIS', speed: 30,
      traits: ['Cunning Artisan (5 items)', 'Hold Breath (15 min)', 'Hunter\'s Lore (2 survival skills)', 'Lizardfolk Cunning (limited spellcasting)', 'Natural Armor (13 + DEX)'],
      size: 'Medium', subraces: null
    },
    'Aasimar': {
      asi: '+2 CHA, +1 to one other', speed: 30,
      traits: ['Darkvision 60ft', 'Celestial Resistance (necrotic & radiant)', 'Healing Hands (action to restore HP)', 'Light Bearer (knows Light cantrip)'],
      size: 'Medium',
      subraces: {
        'Protector': { asi: '+1 WIS', traits: ['Radiant Soul (flight & radiant damage)'] },
        'Scourge': { asi: '+1 CON', traits: ['Radiant Consumption (aura of radiant damage)'] },
        'Fallen': { asi: '+1 STR', traits: ['Necrotic Shroud (fear aura & necrotic damage)'] }
      }
    },
    'Firbolg': {
      asi: '+2 WIS, +1 STR', speed: 30,
      traits: ['Firbolg Magic (detect magic, speak with animals/plants)', 'Hidden Step (bonus action to turn invisible)', 'Powerful Build (count as Large for carrying)'],
      size: 'Medium', subraces: null
    },
    'Genasi': {
      asi: '+2 CON, +1 to one other', speed: 30,
      traits: ['Unending Breath (breathe underwater or in vacuum)'],
      size: 'Medium',
      subraces: {
        'Fire': { asi: '+1 INT', traits: ['Fire Resistance', 'Produce Flame cantrip'] },
        'Water': { asi: '+1 WIS', traits: ['Acid Resistance', 'Create or Destroy Water cantrip'] },
        'Earth': { asi: '+1 STR', traits: ['Earth Walk (move through difficult terrain)', 'Meld into Stone (1/long rest)'] },
        'Air': { asi: '+1 DEX', traits: ['Lightning Resistance', 'Unconscious (hold breath indefinitely)', 'Gust of Wind (1/long rest)'] }
      }
    },
    'Tabaxi': {
      asi: '+2 DEX, +1 CHA', speed: 30,
      traits: ['Darkvision 60ft', 'Feline Agility (double speed for 1 round)', 'Cat\'s Claws (climb 20ft, unarmed strike 1d4)', 'Cat\'s Talent (Perception & Stealth proficiency)'],
      size: 'Medium', subraces: null
    },
    'Goblin': {
      asi: '+2 DEX, +1 CON', speed: 30,
      traits: ['Darkvision 60ft', 'Fury of the Small (extra damage 1/short rest)', 'Nimble Escape (disengage or hide as bonus action)'],
      size: 'Small', subraces: null
    }
  },

  classes: {
    'Barbarian': { hitDie: 'd12', primary: ['STR'], saves: ['STR', 'CON'], features: ['Rage', 'Unarmored Defense', 'Reckless Attack', 'Danger Sense'], weapons: 'Simple, martial', armor: 'Light, medium, shields' },
    'Bard': { hitDie: 'd8', primary: ['CHA'], saves: ['DEX', 'CHA'], features: ['Spellcasting', 'Bardic Inspiration (d6)', 'Jack of All Trades', 'Song of Rest'], weapons: 'Simple', armor: 'Light' },
    'Cleric': { hitDie: 'd8', primary: ['WIS'], saves: ['WIS', 'CHA'], features: ['Spellcasting', 'Divine Domain', 'Channel Divinity'], weapons: 'Simple', armor: 'Light, medium, shields' },
    'Druid': { hitDie: 'd8', primary: ['WIS'], saves: ['INT', 'WIS'], features: ['Spellcasting', 'Druidic', 'Wild Shape', 'Druid Circle'], weapons: 'Simple', armor: 'Light, medium, shields (nonmetal)' },
    'Fighter': { hitDie: 'd10', primary: ['STR', 'DEX'], saves: ['STR', 'CON'], features: ['Fighting Style', 'Second Wind', 'Action Surge', 'Martial Archetype'], weapons: 'Simple, martial', armor: 'All, shields' },
    'Monk': { hitDie: 'd8', primary: ['DEX', 'WIS'], saves: ['STR', 'DEX'], features: ['Unarmored Defense', 'Martial Arts', 'Ki', 'Unarmored Movement'], weapons: 'Simple, shortsword', armor: 'None' },
    'Paladin': { hitDie: 'd10', primary: ['STR', 'CHA'], saves: ['WIS', 'CHA'], features: ['Divine Sense', 'Lay on Hands', 'Fighting Style', 'Spellcasting', 'Divine Smite'], weapons: 'Simple, martial', armor: 'All, shields' },
    'Ranger': { hitDie: 'd10', primary: ['DEX', 'WIS'], saves: ['STR', 'DEX'], features: ['Favored Enemy', 'Natural Explorer', 'Fighting Style', 'Spellcasting'], weapons: 'Simple, martial', armor: 'Light, medium, shields' },
    'Rogue': { hitDie: 'd8', primary: ['DEX'], saves: ['DEX', 'INT'], features: ['Expertise', 'Sneak Attack', 'Thieves\' Cant', 'Cunning Action'], weapons: 'Simple', armor: 'Light' },
    'Sorcerer': { hitDie: 'd6', primary: ['CHA'], saves: ['CON', 'CHA'], features: ['Spellcasting', 'Sorcerous Origin', 'Font of Magic'], weapons: 'Simple', armor: 'None' },
    'Warlock': { hitDie: 'd8', primary: ['CHA'], saves: ['WIS', 'CHA'], features: ['Otherworldly Patron', 'Pact Magic', 'Eldritch Invocations', 'Pact Boon'], weapons: 'Simple', armor: 'Light' },
    'Wizard': { hitDie: 'd6', primary: ['INT'], saves: ['INT', 'WIS'], features: ['Spellcasting', 'Arcane Recovery', 'Arcane Tradition'], weapons: 'Simple', armor: 'None' }
  },

  backgrounds: {
    'Acolyte': { skills: ['Insight', 'Religion'], languages: 2, feature: 'Shelter of the Faithful', personality: 'Deeply devoted to faith' },
    'Criminal': { skills: ['Deception', 'Stealth'], tools: 'Thieves\' tools', feature: 'Criminal Contact', personality: 'Experienced in illicit activities' },
    'Folk Hero': { skills: ['Animal Handling', 'Survival'], tools: 'Artisan\'s tools', feature: 'Rustic Hospitality', personality: 'Humble origins, extraordinary destiny' },
    'Noble': { skills: ['History', 'Persuasion'], languages: 1, feature: 'Position of Privilege', personality: 'Accustomed to wealth and authority' },
    'Sage': { skills: ['Arcana', 'History'], languages: 2, feature: 'Researcher', personality: 'Spent years in study and learning' },
    'Soldier': { skills: ['Athletics', 'Intimidation'], tools: 'Gaming set', feature: 'Military Rank', personality: 'Trained in warfare and combat' },
    'Outlander': { skills: ['Athletics', 'Survival'], tools: 'Musical instrument', feature: 'Wanderer', personality: 'Grew up in the wilds, far from civilization' },
    'Charlatan': { skills: ['Deception', 'Sleight of Hand'], tools: 'Disguise kit', feature: 'False Identity', personality: 'Comfortable with deception and trickery' },
    'Entertainer': { skills: ['Acrobatics', 'Performance'], tools: 'Disguise kit', feature: 'By Popular Demand', personality: 'Trained in performance and showmanship' },
    'Guild Artisan': { skills: ['Insight', 'Persuasion'], tools: 'Artisan\'s tools', feature: 'Guild Membership', personality: 'Skilled craftsperson with guild connections' }
  },

  alignments: ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'],

  personalityTraits: [
    "I'm driven by a wanderlust that led me away from home.",
    "I watch over my friends as if they were a litter of newborn pups.",
    "I once ran twenty-five miles without stopping to warn my clan of an approaching orc horde.",
    "I have a lesson for every occasion, drawn from observing nature and its creatures.",
    "I face problems head-on. A simple, direct solution is the best path to success.",
    "I hide scraps of food and trinkets away in my pockets in case I need them.",
    "I ask questions of everyone I meet, and I tend to assume the best in people.",
    "My eloquence and charm are legendary — I can talk my way out of almost anything.",
    "I am serene in the face of chaos, drawing on years of meditation and prayer.",
    "I enjoy being strong and like nothing better than breaking things to test their limits.",
    "I'm always picking up new skills, hobbies, and areas of knowledge.",
    "I am obsessively curious about the world, always cataloging and recording everything.",
    "I judge people by their actions, not their words, and I expect the same in return.",
    "I have a joke for every occasion, especially occasions where humor is inappropriate.",
    "I believe that anything worth doing is worth doing right. I'm a perfectionist.",
    "I am slow to trust, but I am even slower to betray that trust once given.",
    "I've been isolated for so long that I rarely speak, preferring gestures and grunts.",
    "I am unfailingly respectful of authority figures, recognizing the order they maintain.",
    "Nothing is more important than the other members of my family, guild, or order.",
    "I was, in fact, raised by wolves and find civilized customs bewildering."
  ],

  ideals: [
    "Greater Good: Our lot is to lay down our lives in defense of others.",
    "Responsibility: I do what I must and obey just authority.",
    "Independence: When people follow orders blindly, they embrace a tyranny.",
    "Free Thinking: Investigation and research are the keys to progress.",
    "Power: The root of life is power, and I intend to acquire as much as I can.",
    "Live and Let Live: Meddling in the affairs of others only causes trouble.",
    "Nature: The natural world is more important than all the constructs of civilization.",
    "Glory: I must earn glory in battle, for myself and for my clan.",
    "Nation: My city, country, or people is all that matters.",
    "Change: We must help bring about the changes the gods are constantly working in the world.",
    "Honor: I will never betray the trust placed in me, nor break my word.",
    "Aspiration: I work hard to be the best there is at my craft.",
    "Discovery: The unknown is the greatest adventure, and I seek to chart it.",
    "Faith: I trust that my deity will guide me, and I trust my own instincts.",
    "Charity: I always try to help those in need, no matter the personal cost."
  ],

  bonds: [
    "My family's ancestral weapon is my most prized possession.",
    "I will face any challenge to win the approval of my family.",
    "Everything I do is for the common people who cannot defend themselves.",
    "My mentor's teachings are the foundation of who I am today.",
    "I protect those who cannot protect themselves — it is my sacred duty.",
    "My homeland was destroyed, and I carry its memory wherever I go.",
    "I owe a debt that can never be repaid, and I have sworn to try.",
    "The gods saved me when I was near death, and now I serve their will.",
    "My tools are of the finest make, and I carry them as a badge of honor.",
    "I fight for those who cannot — the weak, the oppressed, the forgotten.",
    "A powerful person killed someone I love. I seek vengeance, however long it takes.",
    "I am the last of my order, and it falls to me to carry on their legacy.",
    "I am in love with the heir of a family my family despises.",
    "My guild betrayed me, and I will see them brought to justice.",
    "A monster destroyed my village. I will hunt it to the ends of the earth."
  ],

  flaws: [
    "I am too enamored of my own cleverness and underestimate my opponents.",
    "I have a weakness for the vices of the city, especially gambling and drink.",
    "Secretly, I believe that things would be better if I were a tyrant lording over the land.",
    "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
    "Despite my best efforts, I am unreliable when it comes to keeping my word.",
    "I turn tail and run when things look bad, survival instinct overriding all else.",
    "An innocent person is in prison for a crime that I committed. I'm okay with that.",
    "I will do anything to win fame and recognition, regardless of the cost.",
    "I am incredibly slow to trust those outside my family, guild, or order.",
    "My pride is my greatest weakness — I would rather die than admit I am wrong.",
    "I can't resist a pretty face, and it often clouds my judgment.",
    "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I can earn them.",
    "I am paranoid about my enemies, and I see threats in every shadow.",
    "Once I pick a goal, I become obsessed with it to the detriment of everything else.",
    "I would rather eat my armor than admit when I'm wrong about a matter of strategy."
  ],

  factionParts: {
    prefixes: ['Silver', 'Iron', 'Shadow', 'Storm', 'Crystal', 'Blood', 'Moon', 'Sun', 'Star', 'Night', 'Dawn', 'Dusk', 'Frost', 'Fire', 'Thunder', 'Golden', 'Obsidian', 'Emerald', 'Crimson', 'Azure'],
    cores: ['watch', 'guard', 'blade', 'shield', 'hammer', 'forge', 'order', 'circle', 'hand', 'eye', 'fang', 'claw', 'wing', 'crown', 'tower', 'keep', 'hall', 'vale', 'wood', 'stone'],
    suffixes: ['Sentinels', 'Wardens', 'Knights', 'Seekers', 'Hunters', 'Keepers', 'Sworn', 'Bound', 'Forged', 'Risen', 'Walkers', 'Bearers', 'Reavers', 'Watchers', 'Defenders']
  },

  backstoryTemplates: [
    "Born in {homeland}, {name} was {backgroundAdj} from an early age. After {event}, they took up the path of the {class}, driven by {motivation}. Now they seek {goal}, carrying the memory of {bond} wherever they go.",
    "{name} grew up {circumstance} in the {region}. When {crisis} struck, they discovered their talent for {ability}. Trained by {mentor}, they became a {class} of considerable skill. Their quest: {quest}.",
    "Once a {formerRole} in {place}, {name} was {transformed} by {catalyst}. They abandoned their old life to become a {class}, seeking {purpose}. The scar from {wound} never fully healed, but it reminds them why they fight.",
    "The {family} family had lived in {homeland} for generations. But when {disaster} came, young {name} was the only survivor. Raised by {guardian}, they trained as a {class} and swore to {oath}. Their journey begins now.",
    "{name} was never meant to be a {class}. A {origin} by trade, they were {forced} into adventuring after {incident}. Now they travel the land, searching for {search}, haunted by {haunt}."
  ],

  backstoryParts: {
    homelands: ['the elven forests of the western realms', 'the dwarven holds beneath the mountain peaks', 'the bustling port city of the Sword Coast', 'the remote village of the northern plains', 'the shadowed streets of the Underdark', 'the frozen tundra of the far north', 'the volcanic islands of the eastern seas', 'the ancient ruins of the elven empire', 'the trade city of the western shores', 'the frontier town of the borderlands'],
    backgroundAdjs: ['showing an unusual aptitude for magic', 'remarked for quiet determination', 'known for a fierce temper', 'noted for an insatiable curiosity', 'recognized for natural leadership', 'whispered about for strange visions', 'trained in the old ways'],
    events: ['the death of a beloved mentor', 'a devastating attack on their home', 'a vision from the gods', 'discovery of an ancient artifact', 'betrayal by a trusted ally', 'a chance encounter with a wandering hero', 'the return of an ancient evil'],
    motivations: ['a desire to protect the innocent', 'an unquenchable thirst for knowledge', 'the need to avenge a fallen loved one', 'a prophecy that marks them as special', 'a longing to restore their family\'s honor', 'the pursuit of legendary power'],
    goals: ['ancient artifacts of lost civilizations', 'the truth behind a world-spanning conspiracy', 'a cure for a magical affliction', 'revenge against a powerful enemy', 'the means to protect their homeland', 'knowledge forbidden to most mortals'],
    circumstances: ['in a family of renowned heroes', 'as an orphan on the streets', 'in a remote monastery', 'aboard a merchant vessel', 'in a traveling circus', 'under the tutelage of a hermit sage', 'in the court of a minor noble'],
    regions: ['Sword Coast', 'Moonsea', 'Western Heartlands', 'Northlands', 'Dragon Coast', 'Silver Marches', ' Savage Frontier'],
    crises: ['a dragon attack', 'an undead plague', 'a demonic incursion', 'a political coup', 'a natural disaster', 'a planar rift', 'a war between rival factions'],
    abilities: ['arcane magic', 'martial prowess', 'divine channeling', 'stealth and subterfuge', 'communion with nature', 'raw physical strength', 'silver-tongued diplomacy'],
    mentors: ['a retired adventurer', 'a temple priest', 'a mysterious stranger', 'their elder sibling', 'a guild master', 'a fey creature', 'an ancient spirit bound to a magical item'],
    quests: ['to find the legendary weapon of their ancestors', 'to unravel the mystery of a vanished civilization', 'to stop a ritual that could reshape the world', 'to clear their family name of a false accusation', 'to find a cure for a magical plague'],
    formerRoles: ['blacksmith\'s apprentice', 'temple acolyte', 'merchant\'s assistant', 'farmhand', 'scribe', 'fisherman', 'stable hand', 'street performer'],
    places: ['a quiet farming village', 'a sprawling trade city', 'a remote mountain monastery', 'a port town full of sailors and rogues', 'a frontier settlement on the edge of civilization'],
    transformed: ['radically changed', 'forcibly conscripted', 'mystically awakened', 'driven into exile', 'cursed and then blessed'],
    catalysts: ['a chance encounter with raw magical energy', 'the touch of an artifact from another plane', 'a near-death experience in a dungeon', 'a vision from their deity', 'an ancient prophecy coming to pass'],
    purpose: ['atoning for past sins', 'protecting the realm from an ancient evil', 'discovering the truth of their mysterious heritage', 'building a new life far from their troubled past', 'fulfilling a destiny they never wanted'],
    wounds: ['that battle', 'that betrayal', 'that loss', 'that curse', 'that failure', 'that sacrifice'],
    family: ['Moonwhisper', 'Ironforge', 'Stormrider', 'Shadowbane', 'Brightblade', 'Darkhollow', 'Thornwall', 'Fireheart'],
    disasters: ['a horde of undead swept through', 'a dragon claimed the land as its lair', 'a magical plague consumed the populace', 'warring factions tore the region apart', 'the earth itself opened and swallowed the town'],
    guardians: ['a kindly ranger', 'a stern temple matron', 'a grizzled mercenary captain', 'a mysterious fey patron', 'an elderly wizard seeking an apprentice'],
    oaths: ['to destroy the evil that took their family', 'to find the legendary artifact that can save their people', 'to become the greatest hero the realm has ever known', 'to uncover the truth behind the catastrophe'],
    origin: ['humble farmer', 'skilled artisan', 'bookish scholar', 'talented musician', 'athletic laborer'],
    forced: ['unexpectedly thrust', 'reluctantly drawn', 'desperately compelled', 'magically bound'],
    incidents: ['a mysterious stranger offered them a fortune', 'their village was attacked and they had no choice', 'they found an ancient map leading to unknown treasure', 'a dying friend passed on a sacred quest', 'they accidentally activated a portal to another plane'],
    search: ['the source of the magic that changed their life', 'a legendary weapon said to grant immense power', 'the truth about their mysterious parentage', 'a way to break an ancient curse'],
    haunt: ['the faces of those they left behind', 'a prophecy they cannot escape', 'a debt that grows with each passing day', 'a secret they dare not share']
  },

  portraitStyles: {
    'Classic Fantasy': { lighting: 'dramatic natural lighting', bg: 'enchanted forest clearing', style: 'oil painting style, rich warm tones' },
    'Dark Fantasy': { lighting: 'moody chiaroscuro lighting', bg: 'dark gothic cathedral ruins', style: 'dark fantasy art, muted desaturated tones, grim atmosphere' },
    'Heroic Portrait': { lighting: 'golden hour backlighting', bg: 'epic mountain vista at sunset', style: 'heroic fantasy illustration, vibrant saturated colors' },
    'D&D Book Art': { lighting: 'soft ambient lighting', bg: 'tavern interior with warm firelight', style: 'Dungeons & Dragons official art style, detailed character portrait' },
    'Ethereal': { lighting: 'mystical moonlight glow', bg: 'starlit ancient grove with floating particles', style: 'ethereal fantasy art, soft luminous atmosphere, dreamlike quality' },
    'Battle-Ready': { lighting: 'harsh directional lighting with smoke', bg: 'battlefield with distant fires', style: 'action fantasy portrait, gritty realistic style, dynamic composition' }
  },

  stylePresets: {
    'Tolkien-esque': {
      description: 'Flowing elvish and noble names inspired by The Lord of the Rings',
      phonetics: {
        prefixes: ['Ara', 'Cele', 'Elan', 'Galad', 'Ithil', 'Mith', 'Ril', 'Syl', 'Thal', 'Aer', 'Bel', 'Cal', 'Erev', 'Fael', 'Hal', 'Lor', 'Nim', 'Rin'],
        middles: ['an', 'ar', 'en', 'ion', 'or', 'las', 'rin', 'drin', 'nar', 'thar', 'quil', 'rion'],
        suffixes: ['dor', 'ion', 'mir', 'nel', 'ron', 'thin', 'wen', 'rian', 'las', 'ndil', 'phin', 'thiel'],
        vowels: 'high', harshness: 'low'
      }
    },
    'GRRM-esque': {
      description: 'Gritty, Norse-influenced names from A Song of Ice and Fire',
      phonetics: {
        prefixes: ['Bran', 'Robb', 'Sansa', 'Arya', 'Jon', 'Theo', 'Jor', 'Barr', 'Davo', 'Sand', 'Rams', 'Myr', 'Vic', 'Euron', 'Balon', 'Rodrik', 'Stannis', 'Renly', 'Marga', 'Cercei'],
        middles: ['an', 'ar', 'on', 'en', 'or', 'is', 'os', 'ia', 'ey', 'a'],
        suffixes: ['k', 'n', 'r', 's', 'a', 'on', 'en', 'ys', 'ane', 'ey'],
        vowels: 'medium', harshness: 'medium'
      }
    },
    'Elder Scrolls-esque': {
      description: 'Exotic racial names from Tamriel — Dunmer, Altmer, Bosmer, Argonian',
      phonetics: {
        prefixes: ['Val', 'Dra', 'Fen', 'Mira', 'Ser', 'Tyr', 'Ulfr', 'Lyra', 'Sav', 'Kyr', 'Nary', 'Del', 'Eris', 'Gal', 'Irin', 'J\'zara', 'M\'raa', 'S\'rath'],
        middles: ['an', 'ar', 'eth', 'ira', 'or', 'yn', 'ath', 'el', 'in', 'os', 'aa', 'za'],
        suffixes: ['th', 'is', 'ar', 'en', 'ir', 'on', 'eth', 'yx', 'aal', 'do', 'vas', 'ri'],
        vowels: 'medium', harshness: 'medium'
      }
    },
    'WoW-esque': {
      description: 'Bold, heroic fantasy names from World of Warcraft',
      phonetics: {
        prefixes: ['Thr', 'Var', 'Syl', 'Jai', 'Rex', 'Kael', 'Malf', 'Tyr', 'Andu', 'Sylv', 'Vol\'', 'Zul\'', 'Grom', 'Cair', 'Medi', 'Rhon'],
        middles: ['all', 'ar', 'an', 'in', 'or', 'eth', 'ash', 'ira', 'ok', 'un', 'al', 'gor'],
        suffixes: ['gor', 'din', 'kas', 'mar', 'thas', 'nak', 'dal', 'run', 'zar', 'mak', 'doom', 'fell'],
        vowels: 'low', harshness: 'high'
      }
    },
    'Dark Souls-esque': {
      description: 'Somber, archaic names from the worlds of Dark Souls and Elden Ring',
      phonetics: {
        prefixes: ['Ald', 'Gwyn', 'Vel', 'Mor', 'Nito', 'Seath', 'Orn', 'Yhorm', 'Ash', 'Iudex', 'Lud', 'Pont', 'Abyss', 'Dar', 'Eur', 'Farr'],
        middles: ['rich', 'don', 'ka', 'nis', 'eth', 'an', 'orn', 'ash', 'yr', 'ius', 'ach', 'oth'],
        suffixes: ['ian', 'us', 'oth', 'eon', 'ach', 'is', 'yn', 'orn', 'ael', 'und', 'ire', 'yx'],
        vowels: 'low', harshness: 'high'
      }
    }
  }
};

// ========== UTILITY FUNCTIONS ==========

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ========== STYLE-BASED NAME GENERATION ==========

function generateStyledName(race, gender, style) {
  const preset = CharacterData.stylePresets[style];
  if (!preset) return generateNames(race, gender, 1)[0];

  const phon = preset.phonetics;
  let name = capitalize(pick(phon.prefixes) + pick(phon.middles) + pick(phon.suffixes));

  let surname = '';
  if (race === 'drow' || race === 'dark-elf') {
    const houses = ['Baenre', 'Do\'Urden', 'Xorlarrin', 'Mezzro', 'Despina', 'Agrach Dyrr', 'Zauvirr', 'Tlabbar'];
    surname = pick(houses);
  } else if (race === 'dwarf') {
    const clanPre = pick(['Iron', 'Stone', 'Steel', 'Gold', 'Deep', 'Mountain', 'Forge', 'Thunder', 'Storm', 'Granite']);
    const clanSuf = pick(['forge', 'hammer', 'axe', 'shield', 'heart', 'born', 'breaker', 'delver', 'kin', 'fist']);
    surname = clanPre + clanSuf;
  } else if (['elf', 'wood-elf', 'high-elf'].includes(race)) {
    const surPre = pick(['Moon', 'Star', 'Sun', 'Forest', 'Night', 'Silver', 'Crystal', 'Shadow', 'Wind', 'Dawn']);
    const surSuf = pick(['whisper', 'walker', 'weaver', 'born', 'song', 'blade', 'leaf', 'bloom', 'vale', 'haven']);
    surname = surPre + surSuf;
  }

  return {
    name: surname ? `${name} ${surname}` : name,
    meaning: generateEtymology(name, race, style)
  };
}

// ========== ETYMOLOGY BREAKDOWN ==========

function generateEtymology(name, race, style) {
  const lower = name.toLowerCase();
  const morphemes = {
    elf: { 'ael': 'star', 'cel': 'moon', 'thal': 'tree', 'galad': 'light', 'rin': 'keeper', 'dor': 'born', 'wen': 'maiden', 'iel': 'daughter', 'mir': 'jewel', 'ion': 'noble', 'syl': 'forest', 'phel': 'bloom' },
    dwarf: { 'thor': 'thunder', 'dur': 'stone', 'grim': 'fierce', 'bal': 'bold', 'gar': 'spear', 'in': 'son of', 'li': 'keeper', 'mir': 'hammer' },
    'dark-elf': { 'adr': 'shadow', 'bel': 'noble', 'cael': 'veil', 'drav': 'twilight', 'ereb': 'void', 'faen': 'dusk', 'gorth': 'gloom', 'hel': 'hidden', 'ith': 'eclipse', 'jhael': 'moon', 'kael': 'night', 'lor': 'obsidian', 'mort': 'dark', 'nyth': 'raven', 'ory': 'star', 'phaen': 'twilight', 'ryth': 'whisper', 'sylv': 'shade', 'thal': 'deep', 'vor': 'venom', 'ven': 'walker', 'thor': 'blade', 'rim': 'strike', 'bus': 'hunter', 'zar': 'shadow', 'vek': 'fang', 'ron': 'ward', 'dal': 'edge', 'gar': 'gloom', 'mor': 'night', 'nak': 'shadow' },
    drow: { 'driz': 'dark', 'val': 'spider', 'zar': 'shadow', 'quar': 'noble', 'vi': 'blade', 'ra': 'priestess', 'lyn': 'house' },
    orc: { 'gru': 'blood', 'krag': 'rock', 'thok': 'bone', 'drog': 'war', 'bag': 'skull', 'ag': 'breaker' },
    dragon: { 'ign': 'fire', 'vyr': 'sky', 'syl': 'silence', 'krax': 'crystal', 'or': 'ancient', 'oth': 'breath' },
    tiefling: { 'az': 'dark', 'mor': 'shadow', 'ves': 'evening', 'nyx': 'night', 'jez': 'flame', 'bel': 'lord' },
    aasimar: { 'cel': 'celestial', 'sol': 'sun', 'lum': 'light', 'aur': 'radiance', 'ser': 'divine', 'val': 'worthy' },
    firbolg: { 'grun': 'earth', 'narch': 'ancient', 'moss': 'forest', 'stone': 'endurance', 'root': 'deep', 'bark': 'guardian' },
    halfling: { 'pip': 'small', 'bram': 'berry', 'cot': 'cottage', 'wen': 'friendly', 'mar': 'warm', 'gold': 'prosperous' },
    gnome: { 'bim': 'tinker', 'clock': 'mechanism', 'fern': 'nature', 'whis': 'clever', 'nim': 'quick', 'bol': 'bold' },
    goblin: { 'gri': 'cunning', 'nak': 'sharp', 'copper': 'treasure', 'steal': 'sly', 'grik': 'sneak', 'griz': 'gritty' },
    kobold: { 'red': 'devoted', 'scale': 'dragon', 'grik': 'small', 'dig': 'burrow', 'vek': 'sharp', 'rik': 'servant' },
    lizardfolk: { 'sset': 'patient', 'hk': 'strike', 'thiss': 'ancient', 'scale': 'armor', 'cold': 'calm', 'marsh': 'wetland' },
    tabaxi: { 'cloud': 'swift', 'shad': 'stealth', 'mir': 'curious', 'paw': 'graceful', 'whis': 'agile', 'star': 'bright' },
    genasi: { 'ig': 'fire', 'nir': 'flame', 'zeph': 'wind', 'ter': 'earth', 'aqua': 'water', 'storm': 'tempest' }
  };

  const raceKey = race === 'wood-elf' || race === 'high-elf' ? 'elf' : race;
  const dict = morphemes[raceKey] || morphemes.elf;

  let parts = [];
  let remaining = lower;
  while (remaining.length > 2) {
    let matched = false;
    for (const [morph, meaning] of Object.entries(dict)) {
      if (remaining.startsWith(morph)) {
        parts.push(`${morph} (${meaning})`);
        remaining = remaining.slice(morph.length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      remaining = remaining.slice(1);
    }
  }

  if (parts.length === 0) {
    const pre = lower.slice(0, Math.ceil(lower.length / 2));
    const suf = lower.slice(Math.ceil(lower.length / 2));
    parts = [`${pre} (root)`, `${suf} (suffix)`];
  }

  return parts.join(' + ');
}

// ========== CHARACTER CARD GENERATION ==========

function generateCharacterCard(options = {}) {
  const race = options.race || pick(Object.keys(CharacterData.races));
  const className = options.class || pick(Object.keys(CharacterData.classes));
  const background = options.background || pick(Object.keys(CharacterData.backgrounds));
  const alignment = options.alignment || pick(CharacterData.alignments);
  const gender = options.gender || pick(['male', 'female']);
  const style = options.style || 'Tolkien-esque';
  const level = options.level || Math.floor(Math.random() * 5) + 1;

  const raceData = CharacterData.races[race];
  const classData = CharacterData.classes[className];
  const bgData = CharacterData.backgrounds[background];

  let subrace = null;
  if (raceData.subraces) {
    const subraceKeys = Object.keys(raceData.subraces);
    if (race === 'Elf') {
      subrace = options.subrace || pick(subraceKeys);
    } else {
      subrace = pick(subraceKeys);
    }
  }

  const fullName = generateStyledName(race.toLowerCase().replace(/\s+/g, '-'), gender, style);

  const personality = pick(CharacterData.personalityTraits);
  const ideal = pick(CharacterData.ideals);
  const bond = pick(CharacterData.bonds);
  const flaw = pick(CharacterData.flaws);

  const faction = pick(CharacterData.factionParts.prefixes) +
                  pick(CharacterData.factionParts.cores) + ' ' +
                  pick(CharacterData.factionParts.suffixes);

  const backstory = generateBackstory(fullName.name, race, className, background, alignment);

  return {
    name: fullName.name,
    etymology: fullName.meaning,
    race: subrace || race,
    class: className,
    level: level,
    alignment: alignment,
    background: background,
    faction: faction,
    asi: subrace && raceData.subraces[subrace] ? raceData.subraces[subrace].asi : raceData.asi,
    speed: raceData.speed,
    size: raceData.size,
    racialTraits: subrace && raceData.subraces[subrace] ?
      [...raceData.traits, ...raceData.subraces[subrace].traits] : raceData.traits,
    hitDie: classData.hitDie,
    primaryAbilities: classData.primary,
    savingThrows: classData.saves,
    classFeatures: classData.features.slice(0, Math.min(level + 1, classData.features.length)),
    personality: personality,
    ideal: ideal,
    bond: bond,
    flaw: flaw,
    backstory: backstory,
    voice: generateVoiceHint(race, className, alignment)
  };
}

function generateBackstory(name, race, className, background, alignment) {
  const template = pick(CharacterData.backstoryTemplates);
  const parts = CharacterData.backstoryParts;

  const replacements = {
    '{name}': name.split(' ')[0],
    '{race}': race,
    '{class}': className.toLowerCase(),
    '{background}': background.toLowerCase(),
    '{alignment}': alignment.toLowerCase(),
    '{homeland}': pick(parts.homelands),
    '{backgroundAdj}': pick(parts.backgroundAdjs),
    '{event}': pick(parts.events),
    '{motivation}': pick(parts.motivations),
    '{goal}': pick(parts.goals),
    '{bond}': pick(parts.backstoryParts ? parts.bonds || ['their past', 'a lost companion', 'an unfulfilled promise'] : ['their past']),
    '{circumstance}': pick(parts.circumstances),
    '{region}': pick(parts.regions),
    '{crisis}': pick(parts.crises),
    '{ability}': pick(parts.abilities),
    '{mentor}': pick(parts.mentors),
    '{quest}': pick(parts.quests),
    '{formerRole}': pick(parts.formerRoles),
    '{place}': pick(parts.places),
    '{transformed}': pick(parts.transformed),
    '{catalyst}': pick(parts.catalysts),
    '{purpose}': pick(parts.purpose),
    '{wound}': pick(parts.wounds),
    '{family}': pick(parts.family),
    '{disaster}': pick(parts.disasters),
    '{guardian}': pick(parts.guardians),
    '{oath}': pick(parts.oaths),
    '{origin}': pick(parts.origin),
    '{forced}': pick(parts.forced),
    '{incident}': pick(parts.incidents),
    '{search}': pick(parts.search),
    '{haunt}': pick(parts.haunt)
  };

  let result = template;
  for (const [key, value] of Object.entries(replacements)) {
    result = result.replace(key, value);
  }
  return result;
}

function generateVoiceHint(race, className, alignment) {
  const voices = {
    'Elf': ['Soft-spoken, uses elven phrases when emotional', 'Melodic and measured, never raises their voice', 'Speaks in riddles and nature metaphors'],
    'Dwarf': ['Gruff and direct, uses dwarven oaths like "Moradin\'s beard!"', 'Booming voice with a thick accent, laughs heartily', 'Terse and practical, wastes no words'],
    'Halfling': ['Cheerful and upbeat, hums between sentences', 'Warm and inviting, always offers food to strangers', 'Nervous energy, speaks quickly when scared'],
    'Dragonborn': ['Deep, rumbling voice with occasional smoke wisps', 'Proud and formal, speaks as if addressing a court', 'Blunt and commanding, expects obedience'],
    'Tiefling': ['Smooth and cultured, with an unsettling undertone', 'Wry and sardonic, uses humor as a shield', 'Quiet intensity, chooses every word carefully'],
    'Half-Orc': ['Low, guttural voice that carries authority', 'Speaks simply but with surprising wisdom', 'Gruff exterior hides a thoughtful mind'],
    'Gnome': ['Rapid-fire speech, jumps between topics excitedly', 'High-pitched and enthusiastic, gestures wildly', 'Whispery and conspiratorial, loves secrets'],
    'Half-Elf': ['Adapts speech to whoever they\'re talking to', 'Warm and diplomatic, natural mediator', 'Elegant phrasing with a hint of melancholy'],
    'Human': ['Clear and confident, natural leader\'s voice', 'Adaptable speech, picks up local dialects easily', 'Earnest and straightforward, says what they mean']
  };

  const classVoices = {
    'Wizard': 'Quotes academic texts and uses precise terminology',
    'Cleric': 'Speaks with quiet authority, references their deity',
    'Rogue': 'Low and careful, never reveals more than necessary',
    'Fighter': 'Military cadence, concise and commanding',
    'Bard': 'Theatrical and charming, every sentence is a performance',
    'Barbarian': 'Loud and emotional, speaks in visceral terms',
    'Druid': 'Slow and deliberate, uses nature metaphors naturally',
    'Paladin': 'Formal and oath-bound, speaks with conviction',
    'Ranger': 'Terse and observant, notices details others miss',
    'Sorcerer': 'Confident and instinctive, power crackles in their words',
    'Warlock': 'Measured and cryptic, hints at their patron\'s influence',
    'Monk': 'Calm and centered, speaks with deliberate mindfulness'
  };

  const raceVoice = voices[race] || voices['Human'];
  const classVoice = classVoices[className] || '';

  return pick(raceVoice) + (classVoice ? `. ${classVoice}` : '');
}

// ========== PORTRAIT PROMPT GENERATION ==========

function generatePortraitPrompt(character, artStyle) {
  artStyle = artStyle || 'Classic Fantasy';
  const style = CharacterData.portraitStyles[artStyle] || CharacterData.portraitStyles['Classic Fantasy'];

  const raceDesc = {
    'Elf': 'pointed ears, elegant features, ageless appearance',
    'Wood Elf': 'pointed ears, sun-kissed skin, wild auburn hair, forest-themed attire',
    'High Elf': 'pointed ears, pale luminous skin, silver or golden hair, ornate robes',
    'Dark Elf (Drow)': 'pointed ears, dark obsidian skin, white silver hair, red eyes, Underdark attire',
    'Dwarf': 'stocky build, braided beard, weathered face, heavy armor',
    'Hill Dwarf': 'stocky build, ruddy complexion, braided auburn beard, chain mail',
    'Mountain Dwarf': 'muscular build, pale skin, dark braided beard, plate armor',
    'Halfling': 'small stature, round friendly face, curly brown hair, simple clothes',
    'Dragonborn': 'draconic humanoid, scales, snout, tall and imposing, armored',
    'Gnome': 'very small stature, large expressive eyes, wild hair, eccentric clothing',
    'Half-Elf': 'slightly pointed ears, balanced human-elven features, graceful',
    'Half-Orc': 'greenish-gray skin, prominent lower canines, muscular build, fierce eyes',
    'Tiefling': 'reddish or dusky skin, small horns on forehead, pointed tail, striking eyes',
    'Human': 'average human features, diverse appearance'
  };

  const classDesc = {
    'Barbarian': 'wearing battle-worn furs and leather, wielding a massive greataxe, scars visible',
    'Bard': 'wearing colorful performing clothes, holding a lute or instrument, charismatic smile',
    'Cleric': 'wearing holy vestments and armor, holding a sacred symbol, divine aura',
    'Druid': 'wearing natural materials and leaves, staff with living wood, nature aura',
    'Fighter': 'wearing full plate armor, wielding sword and shield, battle-ready stance',
    'Monk': 'wearing simple wrapped clothing, martial arts stance, focused expression',
    'Paladin': 'wearing gleaming plate armor with holy symbols, wielding a blessed weapon',
    'Ranger': 'wearing forest-green cloak and leather armor, carrying a longbow, wilderness gear',
    'Rogue': 'wearing dark leather armor with hidden pockets, dual daggers, shadowy presence',
    'Sorcerer': 'wearing robes with arcane patterns, magical energy crackling around hands',
    'Warlock': 'wearing dark robes with eldritch symbols, glowing pact mark, otherworldly aura',
    'Wizard': 'wearing scholarly robes, holding a spellbook or staff, arcane focus'
  };

  const appearance = raceDesc[character.race] || raceDesc['Human'];
  const equipment = classDesc[character.class] || classDesc['Fighter'];
  const name = character.name;

  const prompt = `Portrait of ${name}, ${character.race.toLowerCase()} ${character.class.toLowerCase()}, ${appearance}, ${equipment}, ${style.bg}, ${style.lighting}, ${style.style}, highly detailed character portrait, fantasy art, --ar 2:3 --v 6`;

  return prompt;
}

// ========== BATCH GENERATION ==========

function generateBatch(options = {}) {
  const count = options.count || 5;
  const style = options.style || 'Tolkien-esque';
  const results = [];

  for (let i = 0; i < count; i++) {
    const char = generateCharacterCard({ ...options, style });
    const portraitPrompt = generatePortraitPrompt(char, options.artStyle || 'Classic Fantasy');
    results.push({ ...char, portraitPrompt });
  }

  return results;
}

// ========== EXPORT FUNCTIONS ==========

function exportAsText(characterOrArray) {
  const chars = Array.isArray(characterOrArray) ? characterOrArray : [characterOrArray];
  const sections = chars.map(character => {
    const c = character.char || character;
    return [
      `═══════════════════════════════════════`,
      `  CHARACTER CARD — ${c.name}`,
      `═══════════════════════════════════════`,
      ``,
      `Name:        ${c.name}`,
      `Race:        ${c.race}`,
      `Class:       ${c.class} (Level ${c.level})`,
      `Alignment:   ${c.alignment}`,
      `Background:  ${c.background}`,
      `Faction:     ${c.faction}`,
      ``,
      `── Ability Scores ──`,
      `ASI: ${c.asi}  |  Speed: ${c.speed}ft  |  Size: ${c.size}`,
      `Hit Die: ${c.hitDie}  |  Saves: ${c.savingThrows.join(', ')}`,
      ``,
      `── Racial Traits ──`,
      c.racialTraits.map(t => `  • ${t}`).join('\n'),
      ``,
      `── Class Features ──`,
      c.classFeatures.map(f => `  • ${f}`).join('\n'),
      ``,
      `── Personality ──`,
      `Personality: "${c.personality}"`,
      `Ideal:       ${c.ideal}`,
      `Bond:        ${c.bond}`,
      `Flaw:        ${c.flaw}`,
      `Voice:       ${c.voice}`,
      ``,
      `── Backstory ──`,
      c.backstory,
      ``,
      `── Etymology ──`,
      `${c.name}: ${c.etymology}`,
      ``,
      `── Portrait Prompt (Midjourney/SD) ──`,
      generatePortraitPrompt(c),
      ``,
      `═══════════════════════════════════════`,
      `Generated by Fantasy Name Generator — D&D 5e SRD Compliant`,
      `═══════════════════════════════════════`
    ].join('\n');
  });

  return sections.join('\n\n');
}

function exportAsJSON(characterOrArray) {
  const chars = Array.isArray(characterOrArray) ? characterOrArray : [characterOrArray];
  const cleaned = chars.map(c => c.char || c);
  return JSON.stringify(cleaned.length === 1 ? cleaned[0] : cleaned, null, 2);
}

// ========== WINDOW EXPORTS ==========

if (typeof window !== 'undefined') {
  window.generateCharacterCard = generateCharacterCard;
  window.generatePortraitPrompt = generatePortraitPrompt;
  window.generateBatch = generateBatch;
  window.generateStyledName = generateStyledName;
  window.generateEtymology = generateEtymology;
  window.exportAsText = exportAsText;
  window.exportAsJSON = exportAsJSON;
  window.CharacterData = CharacterData;

  // Global convenience wrappers for template pages (used by race-page-components.js)
  window.generateCharacter = function(race, gender, className, style, level, background, artStyle) {
    if (typeof RacePageComponents !== 'undefined') {
      return RacePageComponents.generateCharacter(race, {
        class: className,
        style: style || 'Tolkien-esque',
        level: level || 3,
        background: background,
        gender: gender === 'random' ? (Math.random() > 0.5 ? 'male' : 'female') : gender,
        artStyle: artStyle || 'Classic Fantasy'
      });
    }
    return null;
  };

  window.generateBatchChars = function(race, count, className, style, level, background, artStyle) {
    if (typeof RacePageComponents !== 'undefined') {
      return RacePageComponents.generateBatchChars(race, count, {
        class: className,
        style: style || 'Tolkien-esque',
        level: level || 3,
        background: background,
        artStyle: artStyle || 'Classic Fantasy'
      });
    }
    return [];
  };

  window.renderCharCard = function(result) {
    if (typeof RacePageComponents !== 'undefined') {
      return RacePageComponents.renderCharCard(result.char, result.portraitPrompt);
    }
    return '';
  };

  window.copyText = function(text) {
    if (typeof RacePageComponents !== 'undefined') {
      RacePageComponents.copyText(text);
    }
  };

  window.showToast = function(msg, dur) {
    if (typeof RacePageComponents !== 'undefined') {
      RacePageComponents.showToast(msg, dur);
    }
  };
}
