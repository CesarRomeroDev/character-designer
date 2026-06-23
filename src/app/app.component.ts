import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { initFlowbite } from 'flowbite'
import { FlowbiteService } from './services/flowbite.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolioDesigner';
  private platformId = inject(PLATFORM_ID);
  private flowbiteService = inject(FlowbiteService);


  ngOnInit(): void {
       // Solo inicializa Flowbite en el navegador, nunca en el servidor (SSR)
    // Esto evita el error del carousel buscando elementos que no existen
    if (isPlatformBrowser(this.platformId)) {
      this.flowbiteService.loadFlowbite(() => {});
    }
  }

}
