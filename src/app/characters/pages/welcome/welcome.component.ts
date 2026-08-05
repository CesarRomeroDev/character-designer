import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component,
  inject, OnInit, PLATFORM_ID, signal
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Character } from '../../interfaces/character.interface';
import { AssetMapper } from '../../mapper/character.mapper';
import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule, CardComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WelcomeComponent implements OnInit{

  private projectsService = inject(ProjectsService);
  private cdr = inject(ChangeDetectorRef);
  private platformId = inject(PLATFORM_ID);

  welcomeCharacter = signal<Character[]>([]);
  isLoading = signal<boolean>(false);
  error = signal<string>('');

  ngOnInit(): void {
    this.getWelcome();
  }

  async getWelcome() {
    this.isLoading.set(true);
    this.welcomeCharacter.set([]);
    this.error.set('');

    try {
      const charaterWelcome = await this.projectsService.getAllProjects();
      const mapWelcome = charaterWelcome.flatMap( character => character.assets );
      this.welcomeCharacter.set(AssetMapper.toCharacterArrayFull(mapWelcome));

      // Fuerza deteccion de cambios para que Angular pinte el @for
      this.cdr.detectChanges();
      // Inicializa Flowbite DESPUES de que Angular pinto los data-carousel-item
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          initFlowbite();
        }, 500);
      }

    } catch (error: any) {
      this.error.set(error);
      this.cdr.detectChanges();
    }finally{
      this.isLoading.set(false);
      this.cdr.detectChanges();
    }
  }

}
