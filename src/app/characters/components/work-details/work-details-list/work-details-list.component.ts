import { Component, ElementRef, input, output, viewChild } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';
import { SkeletonLoaderComponent } from '../../../../shared/components/ui/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-work-details-list',
  standalone: true,
  imports: [SkeletonLoaderComponent],
  templateUrl: './work-details-list.component.html',
  styleUrl: './work-details-list.component.css'
})
export class WorkDetailsListComponent {

  itemBySlugList = input.required<Character[]>();
/*   onIsBottom = output<boolean>()
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop; //El scroll que recorremos de arriba a bajo
    const clientHeight = scrollDiv.clientHeight; //El tamaño de pantalla que tiene el cliente (s, m, grande)
    const scrollHeight = scrollDiv.scrollHeight; //El posible scroll que hacemos
    //console.log({scrollTotal: scrollTop + clientHeight, scrollHeight});

    const isAtBottom = scrollTop + clientHeight + 1800 >= scrollHeight;
    console.log(isAtBottom);
    this.onIsBottom.emit(isAtBottom);



  } */
}
