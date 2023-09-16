import { v4 as uuidv4 } from 'uuid';


export interface Events {
  id:string
  title: string;
  content?: string;
  image: string;
}

export const Events:Events[] = [
  {
    id:generateRandomId(),
    title: 'You Are A Detective',
    content:
      'You Are Investigating A Muder And Interrogating A Suspect',
    image:
      'https://res.cloudinary.com/dwz4buven/video/upload/v1694677709/pexels-cottonbro-8369879_2160p_st7wae.mp4',
  },
  {
    id:generateRandomId(),
    title: 'Investigate Crime Scene',
    content:
      'Investigate Crime Scene And Find Clues To Help You Find Who Did It',
    image:
      'https://res.cloudinary.com/dwz4buven/video/upload/v1694677320/crime_qtkro0.mp4',
  },
  {
    id:generateRandomId(),
    title: 'Place Them Under Arrest',
    content:
      'Once You have Found Enough Clues Put Her Behind Bars',
    image:
      'https://res.cloudinary.com/dwz4buven/video/upload/v1694677298/Find_z4caau.mp4',
  },
]

function generateRandomId() {
  return uuidv4();
}