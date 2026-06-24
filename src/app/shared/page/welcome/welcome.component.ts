import {
  ChangeDetectionStrategy, Component,
  inject, OnInit, PLATFORM_ID, signal, AfterViewInit
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../../../services/flowbite.service';
import { ProjectsService } from '../../../characters/services/projects.service';
import { Character } from '../../../characters/interfaces/character.interface';
import { AssetMapper } from '../../../characters/mapper/character.mapper';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WelcomeComponent implements OnInit, AfterViewInit {

  private platformId = inject(PLATFORM_ID);
  private projectsService = inject(ProjectsService);

  welcomeCharacter = signal<Character[]>([]);

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    // Carga los datos del backend
    this.projectsService.getAllProjects().subscribe({
      next: (projects) => {
        const allAssets = projects.flatMap(p => p.assets);
        this.welcomeCharacter.set(AssetMapper.toCharacterArrayFull(allAssets));
      },
      error: (err) => {
        console.error('Error cargando proyectos:', err);
      }
    });
  }

  ngAfterViewInit(): void {
    // Flowbite se inicializa DESPUÉS de que el DOM esté completamente listo
    // AfterViewInit garantiza que todos los elementos del carousel existen
    if (isPlatformBrowser(this.platformId)) {
      this.flowbiteService.loadFlowbite(() => {
        setTimeout(() => {
          initFlowbite();
        }, 200);
      });
    }
  }
}
