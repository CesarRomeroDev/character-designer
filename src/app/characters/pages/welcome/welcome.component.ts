import {
  ChangeDetectionStrategy, Component,
  inject, OnInit, PLATFORM_ID, signal
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../../../../services/flowbite.service';
import { ProjectsService } from '../../services/projects.service';
import { Character } from '../../interfaces/character.interface';
import { AssetMapper } from '../../mapper/character.mapper';
import { SkeletonLoaderComponent } from '../../../shared/components/ui/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule, SkeletonLoaderComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WelcomeComponent implements OnInit {

  public isLoading = signal(true);
  private platformId = inject(PLATFORM_ID);
  private projectsService = inject(ProjectsService);

  welcomeCharacter = signal<Character[]>([]);

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.isLoading.set(true);
    this.projectsService.getAllProjects().subscribe({
      next: (projects) => {
        const allAssets = projects.flatMap(p => p.assets);
        this.welcomeCharacter.set(AssetMapper.toCharacterArrayFull(allAssets));
        this.isLoading.set(false);

        // Inicializa Flowbite SOLO despues de que los datos llegaron
        // y el DOM ya tiene los data-carousel-item renderizados
        if (isPlatformBrowser(this.platformId)) {
          this.flowbiteService.loadFlowbite(() => {
            // Pequeño delay para asegurar que Angular ya pinto el @for en el DOM
            setTimeout(() => {
              initFlowbite();
            }, 50);
          });
        }
      },
      error: (err) => {
        console.error('Error cargando proyectos:', err);
        this.isLoading.set(false);
      }
    });
  }
}
