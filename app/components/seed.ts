import { v4 as uuidv4 } from 'uuid';

export interface EventInput {
  id:string
  title: string;
  content?: string;
  date?: string;
  location?: string;
  image: string;
}
export interface Races {
  id:string
  race: string;
  content?: string;
  image: string;
}

export const events: EventInput[] = [
  {
    id:generateRandomId(),
    title: 'What If Iron Man Never Built the Iron Suit',
    date: '2008',
    location: 'New York',
    content:
      'In a world where Tony Stark never becomes Iron Man, the MCU takes a different turn as he never builds the iconic suit that shaped the Avengers.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694427814/Tony_Stark_-_What_If_-_Kilmonger_and_Iron_Man_g1dap4.webp',
  },
  {
    id:generateRandomId(),
    title: 'What If the X-Men Existed in Avengers',
    date: '1960',
    location: 'Texas',
    content:
      'The arrival of the X-Men in the Avengers universe introduces a new team of mutants, creating exciting possibilities for crossovers and alliances.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694427659/download_8_xskvxl.png',
  },
  {
    id:generateRandomId(),
    title: 'What If Captain America Stayed in the Past?',
    date: '1945',
    location: 'New York',
    content:
      'After returning the Infinity Stones, Steve Rogers chooses to stay in the past, altering the course of history and leading to new adventures.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694427660/download_pnrncm.png',
  },
  {
    id:generateRandomId(),
    title: 'What If Bruce Banner Never Became the Hulk?',
    date: '2003',
    location: 'New York',
    content:
      "Without the Hulk's destructive power, Bruce Banner's life takes a different path, but can he still make a difference in the MCU?",
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694427659/download_9_ehuubu.png',
  },

  {
    id:generateRandomId(),
    title: 'What If Ultron Helped Fight Against Thanos',
    date: '2012',
    location: 'New York',
    content:
      'Ultron, originally a villain, joins the Avengers in their battle against Thanos, raising questions about redemption and the greater good.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694427659/download_2_b7q5y7.png',
  },
  {
    id:generateRandomId(),
    title: 'What If Loki Helped Fight Against Thanos',
    date: '2018',
    location: 'Space',
    content:
      'Loki, known for mischief and deception, teams up with the Avengers to take on Thanos, forming an unlikely alliance with Earth’s mightiest heroes.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694427660/download_6_spxtif.png',
  },
];

export const Races:Races[] = [
  {
    id:generateRandomId(),
    race: 'Dragonborn',
    content:
      'The Dragonborn race are descendants of dragons and to which, they share many of their traits and racial features.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694594638/795bef1f-dragonborn-icon_vwpc8r.jpg',
  },
  {
    id:generateRandomId(),
    race: 'Dwarf',
    content:
      'Dwarves survived a long fall from grace, surrendering many of their ancient kingdoms in wars with goblins and Orcs',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694594638/9087b426-dwarf-icon_zdqjyv.jpg',
  },
  {
    id:generateRandomId(),
    race: 'Human',
    content:
      'The most common face to see in Faerün, humans are known for their tenacity, creativity, and endless capacity for growth.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694594638/21fe7f63-human-icon_tmthjz.jpg',
  },
  {
    id:generateRandomId(),
    race: 'Githyanki',
    content:
      'Githyanki are peerless warriors from the Astral Plane, known for their legendary silver blades and red dragon mounts',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694594638/f61a073a-githyanki-icon_n1a1a5.jpg',
  },
  {
    id:generateRandomId(),
    race: 'Drow',
    content:
      'In the world of Faerûn, the Drow presents a dark elven race with a history of conflict between the two Elven deities',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694594638/3afabe33-drow-icon_rkihbw.jpg',
  },
  {
    id:generateRandomId(),
    race: 'Gnome',
    content:
      'Legends say dwarven blood gave stronghearts their hardiness. Resistant to poison and wellsprings of endurance, these Gnomes easily hold their own.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694594638/c9b00976-gnome-icon_afxs3z.jpg',
  },
  {
    id:generateRandomId(),
    race: 'Orc',
    content:
      'Creatures of intense emotion, Orcs are more inclined to act than contemplate. From rage to love',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694594638/2d3b502f-half-orc-icon_pehltr.jpg',
  },
  {
    id:generateRandomId(),
    race: 'Tiefling',
    content:
      'Descended from devils of the Nine Hells, tieflings face constant suspicion in Faerun. Thankfully, their arcane abilities make them natural survivors',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694594638/3b2cb8b3-tiefling-icon_jcrmyp.jpg',
  },
  {
    id:generateRandomId(),
    race: 'Elves',
    content:
      'Heirs of the mystical Feywild, high elves value magic in all its forms, and even those who do not study spellcraft can manipulate the Weave.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694595500/Group_2173_trntj7.png',
  },
]
export const Classes:Races[] = [
  {
    id:generateRandomId(),
    race: 'Paladin',
    content:
      'Fuelled by the Oaths you swore to uphold justice and righteousness, you are a beacon of hope in dark times',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694595923/paladin_class_bg3_wiki_guide75px_xe4kxn.png',
  },
  {
    id:generateRandomId(),
    race: 'Wizzard',
    content:
      'Wizards master the arcane by specialising in individual schools of magic, combining ancient spells with modern research',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694596327/wizard_class_icon_baldursgate3_wiki_guide_75px_lc4xu4.webp',
  },
  {
    id:generateRandomId(),
    race: 'Bard',
    content:
      'You know music is more than a fancy - it is power. Through study and adventure, you have mastered song, speech, and the magic within',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694595926/bard_icon_class_bg3_wiki_guide_yktgby.png',
  },
  {
    id:generateRandomId(),
    race: 'Barbarian',
    content:
      'The strong embrace the wild that hides inside - keen instincts, primal physicality, and most of all, an unbridled, unquenchable rage',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694595927/barbarian_class_icon_alt_kxocsa.png',
  },
  {
    id:generateRandomId(),
    race: 'Ranger',
    content:
      'Rangers are unrivalled scouts and trackers, honing a deep connection with nature in order to hunt their favoured prey',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694595923/ranger_class_icon_baldursgate3_wiki_guide_75px_srk46a.webp',
  },
  {
    id:generateRandomId(),
    race: 'Fighter',
    content:
      'Fighters have mastered the art of combat, wielding weapons with unmatched skill and wearing armour like a second skin',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694595924/fighter_class_icon_baldursgate3_wiki_guide_75px_uyxybv.png',
  },
  {
    id:generateRandomId(),
    race: 'Monk',
    content:
      'Channel your cosmic enlightenment by deftly dodging and efficiently disassembling your foes through stunning strikes and a whirlwind of martial art attacks',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694595923/monk_class_icon_baldursgate3_wiki_guide_75px_xp20vo.png',
  },
  {
    id:generateRandomId(),
    race: 'Druid',
    content:
      'Druids channel the elemental forces of nature and share a deep kinship with animals. Mastery of Wild Shape allows them to transform into beasts from all over the Realms',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694595925/druid_class_icon_1_baldursgate3_wiki_guide_75px_u8r85h.png',
  },
  {
    id:generateRandomId(),
    race: 'Cleric',
    content:
      'Clerics are representatives of the gods they worship, wielding potent divine magic for good or ill.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694595926/cleric_class_icon_baldursgate3_wiki_guide_75px_eya6tl.png',
  },
]
function generateRandomId() {
  return uuidv4();
}