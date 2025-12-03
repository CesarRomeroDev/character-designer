import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { CharactersListItemsComponent } from "./characters-list-items/characters-list-items.component";
import { SkeletonLoaderComponent } from "../../../shared/components/ui/skeleton-loader/skeleton-loader.component";
import { Character } from '../../interfaces/character.interface';
import { FlowbiteService } from '../../../services/flowbite.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'characters-list',
  standalone: true,
  imports: [CharactersListItemsComponent, SkeletonLoaderComponent],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css',
  /* host: {ngSkipHydration: 'true'} */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersListComponent implements OnInit{

  isLoading = signal(true);
  characterList = input.required<Character[]>();

  constructor(
    private flowbiteService: FlowbiteService
  ){}

  ngOnInit(): void {

    this.flowbiteService.loadFlowbite(flowbite => {

      setTimeout(() => {
        this.isLoading.set(false);
      },1000);

      flowbite = initFlowbite();
    });


  }
}
