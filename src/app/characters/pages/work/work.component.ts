import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CharactersListComponent } from "../../components/characters-list/characters-list.component";
import { FlowbiteService } from '../../../services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { ProjectsService } from '../../services/projects.service';
import { Character } from '../../interfaces/character.interface';
import { AssetMapper } from '../../mapper/character.mapper';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CharactersListComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
  /* host: {ngSkipHydration: 'true'}, */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WorkComponent implements OnInit{

  private title = inject(Title);
  private meta = inject(Meta);
  private projectsService = inject(ProjectsService);

  // Lista de imagenes del proyecto transformadas listas para mostrar
  workCharacter = signal<Character[]>([]);

  constructor(
    private flowbiteService: FlowbiteService
  ){}

  ngOnInit(): void {


    this.flowbiteService.loadFlowbite(flowbite => {
      flowbite = initFlowbite();
      this.title.setTitle('Project');
      this.meta.updateTag( { name: 'description', content: 'Esté es mi Trabajo' } );
      this.meta.updateTag( { name: 'og:title', content: 'Project' } );
      this.meta.updateTag( { name: 'keywords', content: 'Julio Arceo Juarez: illustrator & character designer' } );
      this.getProjects();
    });

  }
    // Obtiene todos los proyectos y aplana todos sus assets
    // Work muestra todas las imagenes de todos los proyectos
  getProjects(){
        this.projectsService.getAllProjects().subscribe({
      next: (projects) => {
        const coverAssets = projects
        .map(p => p.assets.find(a => a.orderIndex === 0))
        .filter(asset => asset !== undefined);

        // Convierte Asset[] a Character[] usando el mapper
        this.workCharacter.set(AssetMapper.toCharacterArray(coverAssets));
      },
      error: (err) => {
        console.error('Error cargando proyectos:', err);
      }
    });
  }

}
