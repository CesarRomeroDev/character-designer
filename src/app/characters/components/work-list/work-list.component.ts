import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-work-list',
  standalone: true,
  imports: [],
  templateUrl: './work-list.component.html',
  styleUrl: './work-list.component.css'
})
export class WorkListComponent {

  workList = input.required<Character[]>();

}
