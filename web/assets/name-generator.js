// Fantasy Name Generator Engine
// Based on D&D and fantasy literature naming conventions

const NameGenerator = {
  // Elf names - flowing vowels, soft consonants, elegant and ancient
  elf: {
    male: {
      prefixes: ['Ara', 'Cele', 'Elan', 'Galad', 'Ithil', 'Leolas', 'Mith', 'Ril', 'Syl', 'Thal', 'Aer', 'Bel', 'Cal', 'Dael', 'Erev', 'Fael', 'Gael', 'Hal', 'Iael', 'Jael'],
      middles: ['an', 'ar', 'en', 'ion', 'or', 'thi', 'las', 'rin', 'wan', 'drin', 'nar', 'quil', 'rion', 'thar', 'vin'],
      suffixes: ['dor', 'ion', 'mir', 'nel', 'ron', 'thin', 'wen', 'thas', 'rian', 'las', 'ndil', 'phin', 'thiel', 'weaver'],
      meanings: ['Star-born', 'Forest walker', 'Moon-touched', 'Light-bringer', 'Wind-runner', 'Tree-keeper', 'Dawn-singer', 'Shield-bearer', 'Wisdom-keeper', 'Sky-watcher']
    },
    female: {
      prefixes: ['Ael', 'Bri', 'Cel', 'Dra', 'El', 'Fael', 'Gal', 'Hel', 'Ith', 'Jael', 'Lil', 'Mir', 'Nim', 'Sar', 'Thi', 'Ar', 'Bel', 'Cal', 'Dael', 'Elen'],
      middles: ['ara', 'iel', 'wen', 'thi', 'lae', 'rie', 'nai', 'li', 'va', 'ni', 'dra', 'phel', 'qui', 'ri', 'sha'],
      suffixes: ['iel', 'wen', 'thi', 'dis', 'ra', 'lia', 'riel', 'phel', 'tria', 'nella', 'thiel', 'wyn', 'dra', 'sien', 'lith'],
      meanings: ['Moon-daughter', 'Star-light', 'Forest-bloom', 'Dawn-mist', 'Silver-voice', 'Night-song', 'Crystal-heart', 'Wind-dancer', 'Flame-keeper', 'Dream-weaver']
    },
    surnames: {
      prefixes: ['Amakiir', 'Amastacia', 'Galanodel', 'Holimion', 'Ilphelkiir', 'Liadon', 'Meliamne', 'Naïlo', 'Siannodel', 'Xiloscient', 'Moon', 'Star', 'Sun', 'Forest', 'Night', 'Silver', 'Crystal', 'Shadow', 'Wind', 'Dawn'],
      suffixes: ['whisper', 'walker', 'weaver', 'born', 'song', 'blade', 'bow', 'leaf', 'bloom', 'fall', 'stream', 'glen', 'wood', 'vale', 'haven', 'light', 'shade', 'wind', 'rain', 'dew']
    }
  },

  // Wood Elf - nature-inspired, earthy, forest-themed
  woodElf: {
    male: {
      prefixes: ['Aer', 'Bram', 'Ced', 'Dor', 'Elm', 'Fern', 'Glen', 'Haw', 'Ivy', 'Jun', 'Kest', 'Lark', 'Moss', 'Nett', 'Oak', 'Pine', 'Reed', 'Sage', 'Thorn', 'Wren'],
      middles: ['den', 'ric', 'wyn', 'ley', 'ton', 'ford', 'dale', 'moor', 'field', 'grove', 'hollow', 'brook', 'stone', 'wood', 'hill'],
      suffixes: ['wood', 'thorn', 'leaf', 'root', 'bark', 'moss', 'fern', 'oak', 'pine', 'cedar', 'elm', 'ash', 'birch', 'willow', 'yew'],
      meanings: ['Oak-warden', 'Forest-runner', 'Moss-walker', 'Thorn-guard', 'Leaf-dancer', 'Root-keeper', 'Bark-shield', 'Glen-hunter', 'Brook-fisher', 'Wind-tracker']
    },
    female: {
      prefixes: ['Bri', 'Dew', 'Elm', 'Fern', 'Hazel', 'Ivy', 'Jas', 'Lil', 'Moss', 'Nett', 'Oli', 'Pri', 'Ros', 'Sage', 'Thi', 'Vio', 'Wil', 'Yew', 'Zin', 'Ash'],
      middles: ['lia', 'wyn', 'bella', 'dell', 'flower', 'leaf', 'bloom', 'berry', 'petal', 'vine', 'root', 'seed', 'branch', 'bower', 'nest'],
      suffixes: ['wood', 'thorn', 'leaf', 'bloom', 'petal', 'vine', 'berry', 'flower', 'blossom', 'meadow', 'grove', 'dell', 'bower', 'nest', 'branch'],
      meanings: ['Briar-maid', 'Dew-drop', 'Fern-weaver', 'Hazel-eye', 'Ivy-climb', 'Lily-bloom', 'Rose-thorn', 'Sage-wisdom', 'Violet-dream', 'Willow-song']
    }
  },

  // High Elf - noble, celestial, magical
  highElf: {
    male: {
      prefixes: ['Aur', 'Bel', 'Cele', 'Dor', 'Eon', 'Fael', 'Gal', 'Hel', 'Ith', 'Jor', 'Kor', 'Lor', 'Mith', 'Nob', 'Ori', 'Pal', 'Quor', 'Ril', 'Sol', 'Thor'],
      middles: ['an', 'ar', 'eon', 'ion', 'or', 'ath', 'el', 'in', 'on', 'us', 'ax', 'en', 'ir', 'os', 'um'],
      suffixes: ['ius', 'eon', 'ath', 'orin', 'andel', 'imar', 'onath', 'arius', 'elius', 'enthil', 'ador', 'imar', 'ion', 'axus', 'enor'],
      meanings: ['Sun-forged', 'Moon-blessed', 'Star-touched', 'Light-bringer', 'Arcane-keeper', 'Spell-weaver', 'Magic-lord', 'Wisdom-sage', 'Noble-heart', 'Celestial-born']
    },
    female: {
      prefixes: ['Aur', 'Bel', 'Cel', 'Dra', 'Elen', 'Fae', 'Gal', 'Hel', 'Ith', 'Jor', 'Lun', 'Mir', 'Nob', 'Ori', 'Pal', 'Quel', 'Ril', 'Sol', 'Thal', 'Ves'],
      middles: ['ara', 'iel', 'wen', 'thi', 'lae', 'rie', 'nai', 'lia', 'va', 'ni', 'dra', 'phel', 'qui', 'ri', 'sha'],
      suffixes: ['iel', 'wen', 'thi', 'dis', 'ra', 'lia', 'riel', 'phel', 'tria', 'nella', 'thiel', 'wyn', 'dra', 'sien', 'lith'],
      meanings: ['Dawn-light', 'Star-shine', 'Moon-glow', 'Sun-ray', 'Arcane-mist', 'Magic-bloom', 'Noble-grace', 'Celestial-song', 'Light-bringer', 'Wisdom-keeper']
    }
  },

  // Dark Elf - shadow-themed, elegant but dangerous, twilight imagery
  // Distinct from drow: no heavy apostrophe usage, more melodic, surface-themed surnames
  darkElf: {
    male: {
      prefixes: ['Adrim', 'Belvor', 'Caelthor', 'Draven', 'Erebus', 'Faenor', 'Gorthor', 'Helvor', 'Ithvor', 'Jhael', 'Kaelthor', 'Lorthal', 'Morthal', 'Nythor', 'Oryth', 'Phaenor', 'Rythel', 'Sylvor', 'Thalvor', 'Voreth'],
      middles: ['ven', 'drak', 'thar', 'zon', 'ryth', 'vor', 'thal', 'nor', 'zar', 'vek', 'ron', 'dal', 'gar', 'mor', 'nak'],
      suffixes: ['or', 'ven', 'thor', 'rim', 'bus', 'nor', 'zar', 'vek', 'ron', 'dal', 'gar', 'mor', 'nak', 'thar', 'zon'],
      meanings: ['Shadow-walker', 'Twilight-blade', 'Night-whisper', 'Dusk-strider', 'Veil-dancer', 'Gloom-hunter', 'Eclipse-born', 'Void-touched', 'Moon-shadow', 'Star-veil']
    },
    female: {
      prefixes: ['Adrianna', 'Belvora', 'Caelthia', 'Dravenna', 'Erebia', 'Faenora', 'Helvia', 'Ithvia', 'Jhaelra', 'Kaelthia', 'Lorthala', 'Morthala', 'Nythala', 'Orytha', 'Phaenora', 'Rythela', 'Sylvora', 'Thalvora', 'Voretha', 'Zarvora'],
      middles: ['na', 'ra', 'via', 'ora', 'anna', 'enna', 'iel', 'wen', 'thi', 'lae', 'rie', 'nai', 'lia', 'va', 'ni'],
      suffixes: ['na', 'ra', 'via', 'ora', 'anna', 'enna', 'iel', 'wen', 'thi', 'lae', 'rie', 'nai', 'lia', 'va', 'ni'],
      meanings: ['Moon-daughter', 'Twilight-weaver', 'Night-singer', 'Dawn-dancer', 'Veil-mistress', 'Gloom-weaver', 'Eclipse-born', 'Void-touched', 'Moon-shadow', 'Star-veil']
    },
    surnames: {
      prefixes: ['Shadow', 'Night', 'Dusk', 'Twilight', 'Gloom', 'Void', 'Eclipse', 'Moon', 'Star', 'Veil', 'Obsidian', 'Onyx', 'Raven', 'Thorn', 'Venom', 'Blade', 'Dagger', 'Fang'],
      suffixes: ['whisper', 'walker', 'weaver', 'born', 'song', 'blade', 'bow', 'leaf', 'bloom', 'fall', 'stream', 'glen', 'wood', 'vale', 'haven', 'light', 'shade', 'wind', 'rain', 'dew', 'strike', 'mend', 'runner', 'strider', 'crest', 'heart']
    }
  },

  // Dark Elf / Drow - harsh sounds, X/Z/V, Underdark themed
  drow: {
    male: {
      prefixes: ['Driz', 'Jarl', 'Kyr', 'Nal', 'Ryzen', 'Szord', 'Vala', 'Zar', 'Bael', 'Ghor', 'Ilph', 'Jaan', 'Kred', 'Lol', 'Myr', 'Nym', 'Phyr', 'Qil', 'Ril', 'Syl'],
      middles: ['zak', 'von', 'rax', 'zek', 'vir', 'nal', 'quor', 'szth', 'driz', 'ghaun', 'ilth', 'jhael', 'kryl', 'lloth', 'myr', 'nyth'],
      suffixes: ['tarr', 'vek', 'zrin', 'vorn', 'quil', 'shaar', 'meer', 'doom', 'bane', 'fang', 'sting', 'shade', 'night', 'dark', 'venom'],
      meanings: ['Spider-bane', 'Shadow-walker', 'Dark-blade', 'Night-hunter', 'Venom-fang', 'Underdark-lord', 'Web-weaver', 'Doom-bringer', 'Shade-killer', 'Void-walker']
    },
    female: {
      prefixes: ['Ardul', 'Briza', 'Char', 'Eclav', 'Faeryl', 'Ghaun', 'Halaf', 'Ilmara', 'Jalyn', 'Lilith', 'Malice', 'Nathrae', 'Quarra', 'Ryl', 'Shi\'n', 'Ti', 'Ulvi', 'Vicon', 'Waer', 'Zesst'],
      middles: ['ara', 'iel', 'wen', 'thi', 'lae', 'rie', 'nai', 'lia', 'va', 'ni', 'dra', 'phel', 'qui', 'ri', 'sha'],
      suffixes: ['ae', 'ra', 'ni', 'vi', 'ss', 'th', 'lyn', 'dra', 'ice', 'yx', 'arae', 'iel', 'wyn', 'thrae', 'zira'],
      meanings: ['Spider-queen', 'Shadow-mistress', 'Dark-matron', 'Night-weaver', 'Venom-touch', 'Underdark-dame', 'Web-dancer', 'Doom-singer', 'Shade-lady', 'Void-witch']
    },
    houses: ['Baenre', 'D\'Urden', 'Faen Tlabbar', 'Godeep', 'H\'cath', 'Jaelre', 'K\'yorl', 'Oblodra', 'R\'yrr', 'Szord', 'Tej\'ren', 'Uloavaara', 'V\'lorn', 'Xorlarrin', 'Zauvirr']
  },

  // Dwarf - harsh, guttural, strong consonants, Norse/Germanic inspired
  dwarf: {
    male: {
      prefixes: ['Bom', 'Dor', 'Gim', 'Thor', 'Bal', 'Dwa', 'Grun', 'Kor', 'Mor', 'Nor', 'Rok', 'Tha', 'Ulf', 'Vig', 'Bor', 'Dur', 'Gar', 'Krag', 'Mag', 'Stor'],
      middles: ['in', 'dur', 'gar', 'li', 'mir', 'nar', 'rin', 'thor', 'vin', 'bek', 'dak', 'gak', 'kag', 'mak', 'nak'],
      suffixes: ['li', 'in', 'dur', 'gar', 'mir', 'nar', 'rin', 'thor', 'vin', 'bek', 'dak', 'gak', 'kag', 'mak', 'nak'],
      meanings: ['Iron-axe', 'Stone-hammer', 'Forge-master', 'Gold-keeper', 'Mountain-son', 'Deep-miner', 'Steel-forger', 'Rock-breaker', 'Earth-shaker', 'Fire-beard']
    },
    female: {
      prefixes: ['Bri', 'Dor', 'Ger', 'Hil', 'Inz', 'Kri', 'Mor', 'Nor', 'Ris', 'Tha', 'Urs', 'Vig', 'Brun', 'Dag', 'Grim', 'Hel', 'Ing', 'Kot', 'Min', 'Nor'],
      middles: ['da', 'ga', 'hild', 'in', 'ka', 'la', 'ma', 'na', 'ra', 'sa', 'ta', 'va', 'dis', 'grid', 'hild'],
      suffixes: ['da', 'dis', 'ga', 'hild', 'in', 'ka', 'la', 'ma', 'na', 'ra', 'sa', 'ta', 'va', 'grid', 'hild'],
      meanings: ['Iron-maid', 'Stone-guard', 'Forge-keeper', 'Gold-weaver', 'Mountain-daughter', 'Deep-delver', 'Steel-shield', 'Rock-heart', 'Earth-mother', 'Fire-keeper']
    },
    surnames: {
      prefixes: ['Iron', 'Stone', 'Steel', 'Gold', 'Silver', 'Copper', 'Bronze', 'Deep', 'Mountain', 'Rock', 'Forge', 'Hammer', 'Axe', 'Shield', 'Battle', 'Fire', 'Earth', 'Thunder', 'Storm', 'Granite'],
      suffixes: ['foot', 'beard', 'hammer', 'axe', 'shield', 'forge', 'heart', 'born', 'breaker', 'delver', 'miner', 'smith', 'ward', 'guard', 'kin', 'son', 'daughter', 'bane', 'fist', 'hand']
    }
  },

  // Dragon - majestic, powerful, sibilant sounds
  dragon: {
    prefixes: ['Aur', 'Bal', 'Crys', 'Drac', 'Ember', 'Fyr', 'Glor', 'Hydra', 'Ignis', 'Jade', 'Kron', 'Luna', 'Myth', 'Nova', 'Onyx', 'Pyra', 'Quarz', 'Ruby', 'Saph', 'Titan'],
    middles: ['ax', 'or', 'ion', 'ith', 'ar', 'en', 'os', 'yr', 'al', 'on', 'ex', 'ix', 'ox', 'ux', 'ax'],
    suffixes: ['ion', 'ath', 'orax', 'endral', 'imoth', 'onar', 'ius', 'anth', 'orath', 'endril', 'imox', 'onar', 'ius', 'anth', 'orath'],
    titles: ['the Ancient', 'the Wise', 'the Terrible', 'the Mighty', 'the Eternal', 'the Fierce', 'the Noble', 'the Dread', 'the Glorious', 'the Undying', 'the Magnificent', 'the Wrathful']
  },

  // Orc - harsh, guttural, short, aggressive sounds
  orc: {
    male: {
      prefixes: ['Agr', 'Bag', 'Crug', 'Drog', 'Gor', 'Krag', 'Lug', 'Mog', 'Narg', 'Ogr', 'Rug', 'Snag', 'Thog', 'Ugr', 'Vrog', 'Zug', 'Brog', 'Gru', 'Krug', 'Thar'],
      middles: ['uk', 'ag', 'or', 'um', 'ash', 'ek', 'ig', 'ok', 'ug', 'ak', 'og', 'ar', 'ob', 'uth'],
      suffixes: ['ash', 'uk', 'ag', 'or', 'um', 'ek', 'ig', 'ok', 'ug', 'ak', 'og', 'ar', 'ob', 'uth', 'ar'],
      meanings: ['Bone-crusher', 'Skull-smasher', 'Blood-fang', 'Iron-fist', 'War-bringer', 'Death-dealer', 'Flesh-ripper', 'Storm-call', 'Fire-brand', 'Doom-bringer']
    },
    female: {
      prefixes: ['Bag', 'Crug', 'Dra', 'Gor', 'Kra', 'Lug', 'Mog', 'Nar', 'Ogr', 'Rug', 'Sna', 'Tha', 'Ug', 'Vra', 'Za', 'Bru', 'Gra', 'Kru', 'Thru', 'Za'],
      middles: ['ka', 'ga', 'sha', 'za', 'na', 'la', 'ma', 'ra', 'tha', 'gra', 'kra', 'bra', 'dra', 'zha'],
      suffixes: ['ka', 'ga', 'sha', 'za', 'na', 'la', 'ma', 'ra', 'tha', 'gra', 'kra', 'bra', 'dra', 'zha', 'la'],
      meanings: ['War-mother', 'Blood-sister', 'Iron-claw', 'Death-bringer', 'Storm-wife', 'Fire-maid', 'Fang-mother', 'Skull-keeper', 'Battle-dame', 'Doom-sayer']
    },
    clans: ['Blackrock', 'Bloodfist', 'Bonesnapper', 'Darkblade', 'Deathfang', 'Doomhammer', 'Dragonmaw', 'Frostwolf', 'Ironforge', 'Shadowmoon', 'Skullcrusher', 'Stonefist', 'Thunderlord', 'Warsong', 'Blacktooth']
  },

  // Tiefling - infernal, exotic, virtue names
  tiefling: {
    infernal: {
      male: {
        prefixes: ['Ari', 'Bael', 'Cor', 'Dam', 'Erev', 'Fen', 'Ghor', 'Iados', 'Jhael', 'Kael', 'Lor', 'Mord', 'Nym', 'Ori', 'Phar', 'Raz', 'Syl', 'Ther', 'Uri', 'Ves'],
        middles: ['mon', 'rak', 'zel', 'vor', 'nex', 'phal', 'shar', 'tor', 'vex', 'zar', 'kal', 'mor', 'nar', 'rex', 'xal'],
        suffixes: ['ius', 'ax', 'on', 'or', 'ex', 'ix', 'ox', 'ux', 'az', 'ez', 'iz', 'oz', 'uz', 'ax', 'ex'],
        meanings: ['Flame-born', 'Shadow-walker', 'Dark-fire', 'Hell-spawn', 'Demon-blood', 'Infernal-heart', 'Abyss-touched', 'Void-walker', 'Night-flame', 'Doom-bringer']
      },
      female: {
        prefixes: ['Ari', 'Bel', 'Cel', 'Dam', 'Ere', 'Fae', 'Ghul', 'Ia', 'Jez', 'Kali', 'Lil', 'Mor', 'Nyx', 'Ori', 'Phar', 'Rav', 'Sel', 'Thal', 'Uri', 'Ves'],
        middles: ['ith', 'ara', 'iel', 'wen', 'yx', 'ra', 'ni', 'va', 'li', 'na', 'ma', 'sa', 'ta', 'za'],
        suffixes: ['ith', 'ara', 'iel', 'wen', 'yx', 'ra', 'ni', 'va', 'li', 'na', 'ma', 'sa', 'ta', 'za', 'na'],
        meanings: ['Hell-fire', 'Dark-lady', 'Shadow-mist', 'Demon-heart', 'Infernal-grace', 'Abyss-witch', 'Void-dancer', 'Night-shade', 'Flame-singer', 'Doom-maid']
      }
    },
    virtues: ['Ambition', 'Art', 'Bastion', 'Belief', 'Bliss', 'Bold', 'Brave', 'Care', 'Chance', 'Chant', 'Charity', 'Chastity', 'Courage', 'Creed', 'Death', 'Deceit', 'Despair', 'Desire', 'Destiny', 'Dignity', 'Diligence', 'Dominion', 'Doubt', 'Dream', 'Duty', 'Excellence', 'Faith', 'Fame', 'Fancy', 'Fear', 'Fortitude', 'Freedom', 'Friendship', 'Generosity', 'Glory', 'Grace', 'Greed', 'Grief', 'Hope', 'Honor', 'Humility', 'Ideal', 'Justice', 'Kindness', 'Knowledge', 'Love', 'Loyalty', 'Mercy', 'Mirth', 'Noble', 'Pain', 'Passion', 'Patience', 'Peace', 'Pleasure', 'Power', 'Pride', 'Promise', 'Quest', 'Reason', 'Redemption', 'Regret', 'Resolve', 'Revenge', 'Ruin', 'Sorrow', 'Soul', 'Spirit', 'Strength', 'Strife', 'Success', 'Temperance', 'Terror', 'Torment', 'Tragedy', 'Triumph', 'Trust', 'Truth', 'Vengeance', 'Victory', 'Vigor', 'Virtue', 'Vision', 'War', 'Wisdom', 'Wit', 'Wonder', 'Wrath', 'Zeal']
  },

  // Dragonborn - draconic ancestry, clan-based naming, three-part names
  dragonborn: {
    male: {
      prefixes: ['Bala', 'Dra', 'Ghe', 'Rhar', 'Ves', 'Kor', 'Sha', 'Zor', 'Thr', 'Bal', 'Dar', 'Ghi', 'Rho', 'Tar', 'Vas', 'Kri', 'Shaar', 'Zha', 'Thri', 'Bha'],
      middles: ['rak', 'don', 'ghar', 'mir', 'nav', 'kesh', 'lax', 'tor', 'vyn', 'dar', 'rhan', 'mok', 'sal', 'thar', 'zek'],
      suffixes: ['ion', 'ar', 'ak', 'in', 'or', 'ax', 'os', 'en', 'ir', 'uk', 'ath', 'ek', 'on', 'yr', 'az'],
      meanings: ['Flame-tongue', 'Storm-scale', 'Iron-claw', 'Frost-breath', 'Shadow-wing', 'Dawn-striker', 'Thunder-voice', 'Ember-heart', 'Steel-fang', 'Sky-rending']
    },
    female: {
      prefixes: ['Ara', 'Syl', 'Mir', 'Val', 'Keth', 'Zar', 'Phe', 'Nym', 'Tha', 'Bri', 'Dra', 'Ghi', 'Rha', 'Sar', 'Ves', 'Kor', 'Zha', 'Nym', 'Thri', 'Ari'],
      middles: ['ael', 'wen', 'ith', 'ra', 'lyn', 'va', 'ni', 'shi', 'dra', 'la', 'ri', 'na', 'thi', 'sa', 'ma'],
      suffixes: ['iel', 'wen', 'ith', 'ra', 'lyn', 'va', 'ni', 'shi', 'dra', 'la', 'ri', 'na', 'thi', 'sa', 'ia'],
      meanings: ['Flame-singer', 'Storm-dancer', 'Crystal-voice', 'Dawn-bringer', 'Shadow-weaver', 'Frost-maiden', 'Thunder-song', 'Ember-glow', 'Steel-wing', 'Sky-dancer']
    },
    clans: {
      red: { name: 'Verthisathurgiesh', meaning: 'the Red Flame', epithets: ['Flamecaller', 'the Burning', 'Ashbringer', 'Emberlord', 'the Inferno'] },
      blue: { name: 'Myastan', meaning: 'the Storm Wing', epithets: ['Thundercaller', 'the Lightning', 'Stormbringer', 'Skyrend', 'the Tempest'] },
      green: { name: 'Linxakasendalor', meaning: 'the Venom Fang', epithets: ['Venomcaller', 'the Toxic', 'Blightbringer', 'Miasma', 'the Corrosive'] },
      black: { name: 'Kerrhylon', meaning: 'the Acid Maw', epithets: ['Acidcaller', 'the Corrosive', 'Meltmaw', 'the Dissolver', 'Blighttongue'] },
      white: { name: 'Shestendeliath', meaning: 'the Frost Breath', epithets: ['Frostcaller', 'the Freezing', 'Wintermaw', 'Icevein', 'the Glacial'] },
      brass: { name: 'Clethtinthiallor', meaning: 'the Sun Scale', epithets: ['Sunspeaker', 'the Blazing', 'Heatwave', 'the Desert Wind', 'Sandscorch'] },
      bronze: { name: 'Daardendrian', meaning: 'the Wave Rider', epithets: ['Wavecaller', 'the Tidal', 'Stormrider', 'the Coastal', 'Surgeborn'] },
      copper: { name: 'Dadalan', meaning: 'the Earth Walker', epithets: ['Earthshaper', 'the Grounded', 'Stonevoice', 'the Steady', 'Terraformer'] },
      gold: { name: 'Ankhalab', meaning: 'the Radiant Flame', epithets: ['Radiantcaller', 'the Holy', 'Sunfire', 'the Divine', 'Lightbringer'] },
      silver: { name: 'Kythaelan', meaning: 'the Moon Scale', epithets: ['Mooncaller', 'the Silver', 'Starfire', 'the Celestial', 'Moonveil'] }
    },
    epithets: ['the Ancient', 'the Wise', 'the Fierce', 'the Noble', 'the Relentless', 'the Unyielding', 'the Resplendent', 'the Dread', 'the Honorable', 'the Sworn']
  },

  // Aasimar - celestial heritage, dual naming (mortal + celestial), divine calling
  aasimar: {
    mortal: {
      male: {
        prefixes: ['Aur', 'Cel', 'Dam', 'Eli', 'Gal', 'Hel', 'Ith', 'Jor', 'Lum', 'Mir', 'Nob', 'Ori', 'Sol', 'Thal', 'Val', 'Zeph', 'Ari', 'Bel', 'Cael', 'Dor'],
        middles: ['an', 'ar', 'el', 'ion', 'or', 'ath', 'en', 'iel', 'on', 'us', 'as', 'ir', 'os', 'al', 'em'],
        suffixes: ['ius', 'iel', 'on', 'ar', 'eth', 'an', 'or', 'us', 'en', 'ath', 'ion', 'el', 'as', 'ir', 'os'],
        meanings: ['Light-blessed', 'Dawn-touched', 'Heaven-sent', 'Star-guided', 'Grace-filled', 'Divine-marked', 'Radiant-souled', 'Blessed-by-angels', 'Celestial-kin', 'Holy-destined']
      },
      female: {
        prefixes: ['Aur', 'Cel', 'Dam', 'Eli', 'Gal', 'Hel', 'Ith', 'Lum', 'Mir', 'Nym', 'Ori', 'Ser', 'Sol', 'Thal', 'Val', 'Zeph', 'Ari', 'Bel', 'Cae', 'Dor'],
        middles: ['ara', 'iel', 'wen', 'ith', 'lae', 'rie', 'nai', 'lia', 'va', 'ni', 'dra', 'phel', 'qui', 'ri', 'sha'],
        suffixes: ['iel', 'wen', 'ith', 'ra', 'lia', 'riel', 'phel', 'tria', 'nella', 'thiel', 'wyn', 'dra', 'sien', 'lith', 'ara'],
        meanings: ['Light-daughter', 'Dawn-bringer', 'Heaven-blessed', 'Star-singer', 'Grace-keeper', 'Divine-voice', 'Radiant-heart', 'Angel-touched', 'Celestial-maid', 'Holy-light']
      }
    },
    celestial: {
      prefixes: ['Az', 'Bah', 'Cae', 'Dum', 'Elo', 'Gab', 'Haz', 'Ith', 'Joph', 'Kas', 'Lum', 'Met', 'Nem', 'Oph', 'Pah', 'Raz', 'San', 'Tzad', 'Uri', 'Zad'],
      middles: ['kiel', 'raph', 'riel', 'noth', 'zadi', 'phal', 'thon', 'vael', 'shar', 'meth', 'nak', 'zel', 'quor', 'bath', 'lith'],
      suffixes: ['kiel', 'iel', 'on', 'ael', 'oth', 'ath', 'zar', 'phar', 'thos', 'ven', 'dex', 'rak', 'lum', 'shai', 'zar'],
      meanings: ['Voice of the Seven Heavens', 'Flame of the Eternal Dawn', 'Shield of the Celestial Court', 'Sword of the Divine Will', 'Light of the Morning Star', 'Warden of the Silver Gate', 'Herald of the Astral Sea', 'Keeper of the Holy Flame', 'Messenger of the Upper Planes', 'Sentinel of the Radiant Throne']
    },
    types: {
      protector: { title: 'Protector', traits: ['Radiant', 'Guardian', 'Watcher', 'Sentinel', 'Shield-bearer'] },
      scourge: { title: 'Scourge', traits: ['Burning', 'Wrathful', 'Flaming', 'Blazing', 'Purifying'] },
      fallen: { title: 'Fallen', traits: ['Shadow-touched', 'Broken-light', 'Twilight', 'Diminished', 'Fallen-grace'] }
    },
    trueNames: ['Aethyel', 'Brillumoth', 'Caedriel', 'Duskarion', 'Elyndor', 'Faelithar', 'Glimthos', 'Haelzeph', 'Ithradun', 'Jorvathiel', 'Kaelmora', 'Lumithar', 'Mythrael', 'Nethzadki', 'Ophaniel', 'Phaethonir', 'Quorivael', 'Razielith', 'Sephariel', 'Tzadkiel']
  },

  // Firbolg - giant heritage meets forest guardian, dual naming traditions
  firbolg: {
    giant: {
      male: {
        prefixes: ['Bor', 'Grun', 'Thul', 'Drom', 'Kor', 'Hild', 'Morn', 'Yar', 'Fen', 'Stor', 'Bram', 'Grom', 'Thun', 'Dur', 'Kol', 'Horn', 'Murg', 'Yarv', 'Fenr', 'Sten'],
        middles: ['dak', 'nar', 'gar', 'mok', 'dal', 'run', 'bek', 'thor', 'mund', 'lak', 'grim', 'bold', 'dur', 'fang', 'horn'],
        suffixes: ['dak', 'nar', 'gar', 'mok', 'dal', 'run', 'bek', 'dor', 'mund', 'lak', 'grim', 'bold', 'dur', 'fang', 'horn'],
        meanings: ['Earth-shaker', 'Stone-walker', 'Tree-bender', 'River-strider', 'Mountain-voice', 'Forest-steward', 'Giant-blood', 'Moss-keeper', 'Root-tender', 'Glen-guardian']
      },
      female: {
        prefixes: ['Bri', 'Gru', 'Tha', 'Dro', 'Kor', 'Hil', 'Mor', 'Yar', 'Fen', 'Sto', 'Bra', 'Gro', 'Thu', 'Dra', 'Kol', 'Hir', 'Mur', 'Yarv', 'Fenr', 'Ster'],
        middles: ['da', 'na', 'ga', 'ma', 'la', 'ra', 'ba', 'tha', 'nda', 'ka', 'gra', 'bra', 'dra', 'sta', 'kla'],
        suffixes: ['da', 'na', 'ga', 'ma', 'la', 'ra', 'ba', 'tha', 'nda', 'ka', 'gra', 'bra', 'dra', 'sta', 'wen'],
        meanings: ['Earth-mother', 'Stone-singer', 'Tree-whisper', 'River-keeper', 'Mountain-daughter', 'Forest-heart', 'Giant-kin', 'Moss-weaver', 'Root-nurse', 'Glen-guardian']
      }
    },
    forest: {
      male: {
        prefixes: ['Ash', 'Bir', 'Ced', 'Elm', 'Fer', 'Glen', 'Haw', 'Ivy', 'Jun', 'Moss', 'Oak', 'Reed', 'Sage', 'Thorn', 'Wil', 'Yew', 'Bri', 'Ced', 'Elm', 'Fer'],
        middles: ['den', 'ric', 'wyn', 'ley', 'ton', 'ford', 'dale', 'moor', 'field', 'grove', 'hollow', 'brook', 'stone', 'wood', 'hill'],
        suffixes: ['wood', 'thorn', 'leaf', 'root', 'bark', 'moss', 'fern', 'oak', 'pine', 'elm', 'ash', 'birch', 'willow', 'yew', 'cedar'],
        meanings: ['Oak-warden', 'Forest-walker', 'Moss-tender', 'Thorn-guard', 'Leaf-speaker', 'Root-keeper', 'Bark-shield', 'Glen-hunter', 'Brook-fisher', 'Wind-tracker']
      },
      female: {
        prefixes: ['Bri', 'Dew', 'Elm', 'Fern', 'Haz', 'Ivy', 'Jas', 'Lil', 'Moss', 'Nett', 'Oli', 'Pri', 'Ros', 'Sage', 'Thi', 'Vio', 'Wil', 'Yew', 'Ash', 'Bir'],
        middles: ['lia', 'wyn', 'bella', 'dell', 'flower', 'leaf', 'bloom', 'berry', 'petal', 'vine', 'root', 'seed', 'branch', 'bower', 'nest'],
        suffixes: ['wood', 'thorn', 'leaf', 'bloom', 'petal', 'vine', 'berry', 'flower', 'blossom', 'grove', 'dell', 'bower', 'nest', 'branch', 'meadow'],
        meanings: ['Briar-maid', 'Dew-drop', 'Fern-weaver', 'Hazel-eye', 'Ivy-climb', 'Lily-song', 'Rose-thorn', 'Sage-wisdom', 'Violet-dream', 'Willow-heart']
      }
    },
    clans: ['the Elder Grove', 'Moss-heart Hollow', 'Thunderpine Forest', 'the Standing Stones', 'Silverstream Glen', 'the Deep Root', 'Oakshield Glade', 'the Misty Vale', 'Stonecreek Hold', 'the Ancient Canopy', 'Fernwalk Meadow', 'the Giant\'s Footprint'],
    seasons: {
      spring: ['Bloomwalker', 'Seedling-keeper', 'Raincaller', 'Dawngrow', 'Springleaf'],
      summer: ['Sunstride', 'Highgrowth', 'Warmstone', 'Longday', 'Brightcanopy'],
      autumn: ['Leaf-faller', 'Harvest-keeper', 'Amberstride', 'Coolroot', 'Fadinggreen'],
      winter: ['Snowtreader', 'Frostroot', 'Stillgrowth', 'Deeprest', 'Barebranch']
    }
  }
};

// Utility functions
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Name generation functions
function generateElfName(gender = 'male', type = 'elf') {
  const data = type === 'woodElf' ? NameGenerator.woodElf : 
               type === 'highElf' ? NameGenerator.highElf : 
               NameGenerator.elf;
  const genderData = gender === 'female' ? data.female : data.male;
  
  const firstName = capitalize(randomChoice(genderData.prefixes) + 
                               randomChoice(genderData.middles || genderData.prefixes) + 
                               randomChoice(genderData.suffixes));
  const meaning = randomChoice(genderData.meanings);
  
  let surname = '';
  if (data.surname) {
    surname = randomChoice(data.surname.prefixes) + randomChoice(data.surname.suffixes);
  } else if (data.woodElf || data.highElf) {
    surname = randomChoice(genderData.suffixes);
  }
  
  return {
    name: surname ? `${firstName} ${surname}` : firstName,
    meaning: meaning
  };
}

function generateDrowName(gender = 'male') {
  const genderData = gender === 'female' ? NameGenerator.drow.female : NameGenerator.drow.male;

  const firstName = capitalize(randomChoice(genderData.prefixes) +
                               randomChoice(genderData.middles) +
                               randomChoice(genderData.suffixes));
  const houseName = randomChoice(NameGenerator.drow.houses);
  const meaning = randomChoice(genderData.meanings);

  return {
    name: `${firstName} ${houseName}`,
    meaning: meaning
  };
}

function generateDarkElfName(gender = 'male') {
  const genderData = gender === 'female' ? NameGenerator.darkElf.female : NameGenerator.darkElf.male;

  const firstName = capitalize(randomChoice(genderData.prefixes) +
                               randomChoice(genderData.middles) +
                               randomChoice(genderData.suffixes));
  const surname = capitalize(randomChoice(NameGenerator.darkElf.surnames.prefixes) +
                            randomChoice(NameGenerator.darkElf.surnames.suffixes));
  const meaning = randomChoice(genderData.meanings);

  return {
    name: `${firstName} ${surname}`,
    meaning: meaning
  };
}

function generateDwarfName(gender = 'male') {
  const genderData = gender === 'female' ? NameGenerator.dwarf.female : NameGenerator.dwarf.male;
  
  const firstName = capitalize(randomChoice(genderData.prefixes) + 
                               randomChoice(genderData.middles) + 
                               randomChoice(genderData.suffixes));
  const surname = capitalize(randomChoice(NameGenerator.dwarf.surname.prefixes) + 
                            randomChoice(NameGenerator.dwarf.surname.suffixes));
  const meaning = randomChoice(genderData.meanings);
  
  return {
    name: `${firstName} ${surname}`,
    meaning: meaning
  };
}

function generateDragonName() {
  const name = capitalize(randomChoice(NameGenerator.dragon.prefixes) + 
                         randomChoice(NameGenerator.dragon.middles) + 
                         randomChoice(NameGenerator.dragon.suffixes));
  const title = randomChoice(NameGenerator.dragon.titles);
  
  return {
    name: `${name} ${title}`,
    meaning: 'Ancient dragon of immense power'
  };
}

function generateOrcName(gender = 'male') {
  const genderData = gender === 'female' ? NameGenerator.orc.female : NameGenerator.orc.male;
  
  const firstName = capitalize(randomChoice(genderData.prefixes) + 
                               randomChoice(genderData.middles) + 
                               randomChoice(genderData.suffixes));
  const clanName = randomChoice(NameGenerator.orc.clans);
  const meaning = randomChoice(genderData.meanings);
  
  return {
    name: `${firstName} of ${clanName}`,
    meaning: meaning
  };
}

function generateTieflingName(gender = 'male', style = 'infernal') {
  if (style === 'virtue') {
    return {
      name: randomChoice(NameGenerator.tiefling.virtues),
      meaning: 'A virtue name, chosen to transcend infernal heritage'
    };
  }
  
  const genderData = gender === 'female' ? NameGenerator.tiefling.infernal.female : NameGenerator.tiefling.infernal.male;
  
  const firstName = capitalize(randomChoice(genderData.prefixes) + 
                               randomChoice(genderData.middles) + 
                               randomChoice(genderData.suffixes));
  const meaning = randomChoice(genderData.meanings);
  
  return {
    name: firstName,
    meaning: meaning
  };
}

function generateDragonbornName(gender = 'male') {
  const genderData = gender === 'female' ? NameGenerator.dragonborn.female : NameGenerator.dragonborn.male;
  
  const personalName = capitalize(randomChoice(genderData.prefixes) + 
                               randomChoice(genderData.middles) + 
                               randomChoice(genderData.suffixes));
  const clanKeys = Object.keys(NameGenerator.dragonborn.clans);
  const clanKey = randomChoice(clanKeys);
  const clan = NameGenerator.dragonborn.clans[clanKey];
  const epithet = randomChoice([...clan.epithets, ...NameGenerator.dragonborn.epithets]);
  const meaning = randomChoice(genderData.meanings);
  
  return {
    name: `${personalName} ${clan.name} ${epithet}`,
    meaning: `${meaning} of ${clan.meaning} clan`
  };
}

function generateAasimarName(gender = 'male', type = 'protector') {
  const mortalData = gender === 'female' ? NameGenerator.aasimar.mortal.female : NameGenerator.aasimar.mortal.male;
  
  const mortalName = capitalize(randomChoice(mortalData.prefixes) + 
                               randomChoice(mortalData.middles) + 
                               randomChoice(mortalData.suffixes));
  const celestialData = NameGenerator.aasimar.celestial;
  const celestialName = capitalize(randomChoice(celestialData.prefixes) + 
                                  randomChoice(celestialData.middles) + 
                                  randomChoice(celestialData.suffixes));
  const typeData = NameGenerator.aasimar.types[type] || NameGenerator.aasimar.types.protector;
  const trait = randomChoice(typeData.traits);
  const meaning = randomChoice(mortalData.meanings);
  
  return {
    name: `${mortalName} (Celestial: ${celestialName}, the ${trait})`,
    meaning: `${meaning} — called by the ${typeData.title} path`
  };
}

function generateFirbolgName(gender = 'male', style = 'forest') {
  const isGiant = style === 'giant';
  const tradition = isGiant ? NameGenerator.firbolg.giant : NameGenerator.firbolg.forest;
  const genderData = gender === 'female' ? tradition.female : tradition.male;
  
  const firstName = capitalize(randomChoice(genderData.prefixes) + 
                               randomChoice(genderData.middles) + 
                               randomChoice(genderData.suffixes));
  const clanName = randomChoice(NameGenerator.firbolg.clans);
  const seasonKeys = Object.keys(NameGenerator.firbolg.seasons);
  const seasonKey = randomChoice(seasonKeys);
  const seasonName = randomChoice(NameGenerator.firbolg.seasons[seasonKey]);
  const meaning = randomChoice(genderData.meanings);
  
  return {
    name: `${firstName} ${clanName}, ${seasonName}`,
    meaning: `${meaning} — born in ${seasonKey}`
  };
}

// Main generation function
function generateNames(race, gender, count, options = {}) {
  const names = [];
  
  for (let i = 0; i < count; i++) {
    let result;
    
    switch(race) {
      case 'elf':
        result = generateElfName(gender, 'elf');
        break;
      case 'wood-elf':
        result = generateElfName(gender, 'woodElf');
        break;
      case 'high-elf':
        result = generateElfName(gender, 'highElf');
        break;
      case 'dark-elf':
        result = generateDarkElfName(gender);
        break;
      case 'drow':
        result = generateDrowName(gender);
        break;
      case 'dwarf':
        result = generateDwarfName(gender);
        break;
      case 'dragon':
        result = generateDragonName();
        break;
      case 'orc':
        result = generateOrcName(gender);
        break;
      case 'tiefling':
        result = generateTieflingName(gender, options.style || 'infernal');
        break;
      case 'dragonborn':
        result = generateDragonbornName(gender);
        break;
      case 'aasimar':
        result = generateAasimarName(gender, options.type || 'protector');
        break;
      case 'firbolg':
        result = generateFirbolgName(gender, options.style || 'forest');
        break;
      default:
        result = generateElfName(gender, 'elf');
    }
    
    names.push(result);
  }
  
  return names;
}

// Export for use in HTML
if (typeof window !== 'undefined') {
  window.generateNames = generateNames;
  window.NameGenerator = NameGenerator;
}
