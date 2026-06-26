import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CharactersListComponent } from "../../components/characters-list/characters-list.component";
import { SkeletonLoaderComponent } from '../../../shared/components/ui/skeleton-loader/skeleton-loader.component';
import { Character } from '../../interfaces/character.interface';
import { FlowbiteService } from '../../../../services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { ProjectsService } from '../../services/projects.service';
import { AssetMapper } from '../../mapper/character.mapper';

@Component({
  selector: 'app-tasting',
  standalone: true,
  imports: [SkeletonLoaderComponent],
  templateUrl: './tasting.component.html',
  styleUrl: './tasting.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TastingComponent implements OnInit{


  public isLoading = signal(true);
  public tastingImgs = signal<Character[]>([]);
  public scrollDivRef = viewChild<ElementRef<HTMLDListElement>>('groupDiv');
  public startSlice = signal(0);
  private title = inject(Title);
  private meta = inject(Meta);
  private projectsServices = inject(ProjectsService);

  constructor(
    private flowbiteService: FlowbiteService
  ){}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      flowbite = initFlowbite();
      this.title.setTitle('tasting-menu');
      this.meta.updateTag( { name: 'description', content: 'Esté es mi Trabajo' } );
      this.meta.updateTag( { name: 'og:title', content: 'tasting-menu' } );
      this.meta.updateTag( { name: 'keywords', content: 'Julio Arceo Juarez: illustrator & character designer' } );
      this.getTesting();
      this.tastingImgsOrder();
    });
  }

  // Peticion al backend para obtener todos los proyectos
  getTesting(){
        this.projectsServices.getAllProjects().subscribe({
        next: (projects) => {
          // Aplana todos los assets de todos los proyectos en una sola lista
          const allAssets = projects.flatMap(p => p.assets);
          // Convierte Asset[] a Character[] usando el mapper
          this.tastingImgs.set(AssetMapper.toCharacterArray(allAssets));

          setTimeout(() => {
            this.isLoading.set(false);
          },200);
        },
        error: (err) => {
        console.error('Error cargando proyectos:', err);
        this.isLoading.set(false);
        }
      });
  }

  tastingImgsOrder = computed<Character [][]>( () => {
    const order = [];
    for (let i = 0; i < this.tastingImgs().length; i += 3) {
      order.push(this.tastingImgs().slice(i, i + 3))
    }
    return order;
  })

/*   onScroll( event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if( !scrollDiv ) return;

    const scrollTop = scrollDiv.scrollTop; //scroll de inicio en pantalla.
    const clientHeight = scrollDiv.clientHeight; //Tamaño del height.
    const scrollHeight = scrollDiv.scrollHeight; //maximo total del scroll
    //console.log( scrollTop + clientHeight, scrollHeight);

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

    console.log(isAtBottom);
  } */

}
