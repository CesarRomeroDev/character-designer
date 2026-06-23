import { Asset } from "../interfaces/asset.interface";
import { Character } from "../interfaces/character.interface";


export class AssetMapper {
  // Para galería y tasting-menu — usa url_thumb (imagen ligera 800px)
  static toCharacter(asset: Asset): Character {
    return {
      url: asset.urlThumb ?? asset.urlFull, // si existe thumb la usa, si no usa full
      height: '64',
    };
  }
  // Array para galería — usa thumbs
  static toCharacterArray(assets: Asset[]): Character[] {
    return assets.map(asset => this.toCharacter(asset));
  }


    // Para vista detalle del proyecto — usa url_full (imagen completa 1200px)
  static toCharacterFull(asset: Asset): Character {
    return {
      url: asset.urlFull,
      height: '64',
    };
  }
    // Array para detalle — usa full
  static toCharacterArrayFull(assets: Asset[]): Character[] {
    return assets.map(asset => this.toCharacterFull(asset));
  }

}
