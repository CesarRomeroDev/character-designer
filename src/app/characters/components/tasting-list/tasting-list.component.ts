import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { SkeletonLoaderComponent } from '../../../shared/components/ui/skeleton-loader/skeleton-loader.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-tasting-list',
  standalone: true,
  imports: [SkeletonLoaderComponent, RouterLink],
  templateUrl: './tasting-list.component.html',
  styleUrl: './tasting-list.component.css'
})
export class TastingListComponent {

  tastingList = input.required<Character[][]>();

}
