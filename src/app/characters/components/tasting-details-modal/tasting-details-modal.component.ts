import { Component, computed, inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Asset } from '../../interfaces/asset.interface';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-tasting-details-modal',
  standalone: true,
  imports: [],
  templateUrl: './tasting-details-modal.component.html',
  styleUrl: './tasting-details-modal.component.css'
})
export default class TastingDetailsModalComponent implements OnInit, OnDestroy {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private projectsService = inject(ProjectsService);
  private platformId = inject(PLATFORM_ID);

  isLoading = signal(true);
  allAssets = signal<Asset[]>([]);
  error = signal<string>('');

  // El id actual se actualiza cada vez que cambia el parametro de la URL
  currentId = signal<string>(this.route.snapshot.params['id']);

  // Indice del asset actual, se recalcula automaticamente
  currentIndex = computed(() =>
    this.allAssets().findIndex(a => a.id === this.currentId())
  );

  // El asset que se debe mostrar en este momento
  currentAsset = computed(() => {
    const index = this.currentIndex();
    return index >= 0 ? this.allAssets()[index] : null;
  });

  ngOnInit(): void {
    this.loadAllAssets();
    console.log(this.currentAsset());


    // IMPORTANTE: Angular reutiliza el componente al cambiar solo el :id
    // por eso escuchamos paramMap en lugar de leer snapshot una sola vez
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) this.currentId.set(id);
    });

        // Bloquea el scroll del fondo mientras el modal esta abierto
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }

  }

  ngOnDestroy(): void {
        // Restaura el scroll al cerrar el modal (navegar fuera de esta ruta)
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  async loadAllAssets() {
    this.isLoading.set(true);
    this.error.set('');

    try {
      // Misma logica que tasting.component: todos los assets de todos los proyectos
      const projects = await this.projectsService.getAllProjects();
      this.allAssets.set(projects.flatMap(p => p.assets));
    } catch (error: any) {
      this.error.set(error.message);
    } finally {
      this.isLoading.set(false);
    }
  }

  goNext(): void {
    const assets = this.allAssets();
    const index = this.currentIndex();
    if (index === -1 || assets.length === 0) return;

    const nextAsset = assets[(index + 1) % assets.length]; // hace loop al llegar al final
    this.router.navigate(['/tasting-menu', nextAsset.id]);
  }

  goPrev(): void {
    const assets = this.allAssets();
    const index = this.currentIndex();
    if (index === -1 || assets.length === 0) return;

    const prevAsset = assets[(index - 1 + assets.length) % assets.length];
    this.router.navigate(['/tasting-menu', prevAsset.id]);
  }

  closeModal(): void {
    this.router.navigate(['/tasting-menu']);
  }
}
