import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { WorkCard } from '../../interfaces/work-card.interface';
import { RouterLink } from "@angular/router";
import { SkeletonLoaderComponent } from '../../../shared/components/ui/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-work-list',
  standalone: true,
  imports: [RouterLink, SkeletonLoaderComponent],
  templateUrl: './work-list.component.html',
  styleUrl: './work-list.component.css'
})
export class WorkListComponent {

  workList = input.required<WorkCard[]>();

}
