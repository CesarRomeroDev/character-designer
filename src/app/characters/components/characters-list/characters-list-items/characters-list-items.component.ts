import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'characters-list-items',
  standalone: true,
  imports: [],
  templateUrl: './characters-list-items.component.html',
  styleUrl: './characters-list-items.component.css'
})
export class CharactersListItemsComponent {

  characterListItems = input.required<string>();
  characterListItemsHeight = input.required<string>();


  //clase height para imagen
    imageClassesHeight = computed(() => {
      const baseClasses = `h-${this.characterListItemsHeight()} w-full object-cover rounded-lg`;
      return baseClasses;
    });


}
