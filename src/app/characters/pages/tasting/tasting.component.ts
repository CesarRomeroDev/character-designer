import { ChangeDetectionStrategy, Component, computed, inject, OnDestroy, OnInit, signal,  } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SkeletonLoaderComponent } from '../../../shared/components/ui/skeleton-loader/skeleton-loader.component';
import { Character } from '../../interfaces/character.interface';
import { FlowbiteService } from '../../../../services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { ProjectsService } from '../../services/projects.service';
import { AssetMapper } from '../../mapper/character.mapper';
import { TastingListComponent } from "../../components/tasting-list/tasting-list.component";
@Component({
  selector: 'app-tasting',
  standalone: true,
  imports: [SkeletonLoaderComponent, TastingListComponent],
  templateUrl: './tasting.component.html',
  styleUrl: './tasting.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TastingComponent implements OnInit, OnDestroy{

  private projectsServices = inject(ProjectsService);

  isLoading = signal(true);
  tastingImgs = signal<Character[]>([]);
  error = signal<string>('');
  title = inject(Title);
  meta = inject(Meta);

  constructor(
    private flowbiteService: FlowbiteService,
  ){}


  ngOnInit(): void {
    this.getTesting();

    this.flowbiteService.loadFlowbite(flowbite => {
      flowbite = initFlowbite();
      this.title.setTitle('tasting-menu');
      this.meta.updateTag( { name: 'description', content: 'Esté es mi Trabajo' } );
      this.meta.updateTag( { name: 'og:title', content: 'tasting-menu' } );
      this.meta.updateTag( { name: 'keywords', content: 'Julio Arceo Juarez: illustrator & character designer' } );
    });
  }

  ngOnDestroy(): void {
    this.getTesting();
  }


  async getTesting() {

    this.isLoading.set(true);
    this.tastingImgs.set([]);
    this.error.set('');

    try{

      const tasting = await this.projectsServices.getAllProjects();
      const filte = tasting.flatMap( p => p.assets )
      this.tastingImgs.set(AssetMapper.toCharacterArray(filte));

    }catch(error:any){

      this.error.set(error.message);

    }finally{

      this.isLoading.set(false);

    }
  }

  tastingImgsOrder = computed<Character [][]>( () => {
    const order = [];
    for (let i = 0; i < this.tastingImgs().length; i += 3) {
      order.push(this.tastingImgs().slice(i, i + 3));
    }
    return order;
  });

}
