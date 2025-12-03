import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'shared-skeleton-loader',
  standalone: true,
  imports: [],
  templateUrl: './skeleton-loader.component.html',
  styleUrl: './skeleton-loader.component.css'
})
export class SkeletonLoaderComponent {

  widthImg = input.required<string>();
  heightImg = input.required<string>();
  unitImg = input.required<string>();

    // Clases dinámicas para la imagen
  imageClasses = computed(() => {
    const baseClasses = `flex items-center justify-center h-${this.heightImg()} w-full max-w-xxl bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700`;
    return baseClasses;
  });
}
