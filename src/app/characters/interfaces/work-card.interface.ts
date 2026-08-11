import { Character } from './character.interface';

export interface WorkCard {
  slug: string;
  character: Character;
  height?: string;
}
