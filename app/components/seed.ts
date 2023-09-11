import { v4 as uuidv4 } from 'uuid';

export interface EventInput {
  id:string
  title: string;
  content?: string;
  date?: string;
  location?: string;
  image: string;
}

export const events: EventInput[] = [
  {
    id:generateRandomId(),
    title: 'What If Iron Man Never Built the Iron Suit',
    date: '1945',
    location: 'Texas',
    content:
      'In a world where Tony Stark never becomes Iron Man, the MCU takes a different turn as he never builds the iconic suit that shaped the Avengers.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694427814/Tony_Stark_-_What_If_-_Kilmonger_and_Iron_Man_g1dap4.webp',
  },
  {
    id:generateRandomId(),
    title: 'What If Captain America Stayed in the Past?',
    date: '1945',
    location: 'Texas',
    content:
      'After returning the Infinity Stones, Steve Rogers chooses to stay in the past, altering the course of history and leading to new adventures.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694427660/download_pnrncm.png',
  },
  {
    id:generateRandomId(),
    title: 'What If Bruce Banner Never Became the Hulk?',
    date: '1945',
    location: 'Texas',
    content:
      "Without the Hulk's destructive power, Bruce Banner's life takes a different path, but can he still make a difference in the MCU?",
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694427659/download_9_ehuubu.png',
  },
  {
    id:generateRandomId(),
    title: 'What If the X-Men Existed in Avengers',
    date: '1945',
    location: 'Texas',
    content:
      'The arrival of the X-Men in the Avengers universe introduces a new team of mutants, creating exciting possibilities for crossovers and alliances.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694427659/download_8_xskvxl.png',
  },
  {
    id:generateRandomId(),
    title: 'What If Ultron Helped Fight Against Thanos',
    date: '1945',
    location: 'Texas',
    content:
      'Ultron, originally a villain, joins the Avengers in their battle against Thanos, raising questions about redemption and the greater good.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694427659/download_2_b7q5y7.png',
  },
  {
    id:generateRandomId(),
    title: 'What If Loki Helped Fight Against Thanos',
    date: '1945',
    location: 'Texas',
    content:
      'Loki, known for mischief and deception, teams up with the Avengers to take on Thanos, forming an unlikely alliance with Earth’s mightiest heroes.',
    image:
      'https://res.cloudinary.com/dwz4buven/image/upload/v1694427660/download_6_spxtif.png',
  },
];

function generateRandomId() {
  return uuidv4();
}