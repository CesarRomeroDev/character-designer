import { Character } from "../interfaces/character.interface";
import { ProjectsItem } from "../interfaces/characterPortfolio.interface";


export class CharacterTasting {
  static mapPortfolioToCharacter( item: ProjectsItem ): Character {
    return {
      url: item.images.url,
      width: item.images.width,
      height: item.images.height,
      unit: item.images.dimensions.unit
    };
  }

  static mapPortfolioToCharacterArray( item: ProjectsItem[] ): Character[] {
    return item.map(this.mapPortfolioToCharacter);
  }
}
