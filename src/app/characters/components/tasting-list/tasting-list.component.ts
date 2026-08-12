import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { SkeletonLoaderComponent } from '../../../shared/components/ui/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-tasting-list',
  standalone: true,
  imports: [SkeletonLoaderComponent],
  templateUrl: './tasting-list.component.html',
  styleUrl: './tasting-list.component.css'
})
export class TastingListComponent {

  tastingList = input.required<Character[][]>();

}
