import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FlowbiteService } from '../../../../services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { ProjectsService } from '../../services/projects.service';
import { Character } from '../../interfaces/character.interface';
import { AssetMapper } from '../../mapper/character.mapper';
import { SkeletonLoaderComponent } from '../../../shared/components/ui/skeleton-loader/skeleton-loader.component';
import { WorkListComponent } from "../../components/work-list/work-list.component";
import { WorkCard } from '../../interfaces/work-card.interface';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [SkeletonLoaderComponent, WorkListComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
  /* host: {ngSkipHydration: 'true'}, */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WorkComponent implements OnInit, OnDestroy{


  private projectsService = inject(ProjectsService);

  title = inject(Title);
  meta = inject(Meta);

  workCharacter = signal<WorkCard[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string>('');

  constructor(
    private flowbiteService: FlowbiteService
  ){}

  ngOnInit(): void {
    this.getProjectsWork();
    this.flowbiteService.loadFlowbite(flowbite => {
      flowbite = initFlowbite();
      this.title.setTitle('Project');
      this.meta.updateTag( { name: 'description', content: 'Esté es mi Trabajo' } );
      this.meta.updateTag( { name: 'og:title', content: 'Project' } );
      this.meta.updateTag( { name: 'keywords', content: 'Julio Arceo Juarez: illustrator & character designer' } );
    });
  }

  ngOnDestroy(): void {
    this.getProjectsWork();
  }

  async getProjectsWork() {
    this.isLoading.set(true);
    this.workCharacter.set([]);
    this.error.set('');
    try {
      const projectsWork = await this.projectsService.getAllProjects();
      const projectsWorkMap: WorkCard[] = projectsWork.map( work => {
        const coverAsset = work.assets.find(a => a.orderIndex === 0);

        //Si el proyecto no tiene assets, lo omitimos
        if (!coverAsset) return null;

        return {
          slug: work.slug,
          character: AssetMapper.toCharacter(coverAsset)
        };

       })
       .filter((item): item is WorkCard => item !== null);
      this.workCharacter.set(projectsWorkMap)


      /* const projectsWorkMap = projectsWork.map( work => { return work.assets.find( a => a.orderIndex === 0), work.slug })
            .filter( assets => assets); */
      /* this.workCharacter.set(AssetMapper.toCharacterArray(projectsWorkMap)); */
    } catch (error: any) {
      this.error.set(error);
    } finally{
      this.isLoading.set(false);
    }
  }

}
