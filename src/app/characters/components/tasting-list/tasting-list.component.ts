import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-tasting-list',
  standalone: true,
  imports: [],
  templateUrl: './tasting-list.component.html',
  styleUrl: './tasting-list.component.css'
})
export class TastingListComponent {

  tastingList = input.required<Character[][]>();

}
