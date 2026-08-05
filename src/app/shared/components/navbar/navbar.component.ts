import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite'
import { routes } from '../../../app.routes';
import { ThemeBlackDirective } from '../../directives/theme-black.directive';
import { FlowbiteService } from '../../../../services/flowbite.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ThemeBlackDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit{

  @ViewChild('menuToggle') menuToggle?: ElementRef<HTMLButtonElement>

  constructor(
    private flowbiteService: FlowbiteService,
  ){}

  ngOnInit(): void {
    this.menuItems;
    this.flowbiteService.loadFlowbite(flowbite => {
      flowbite = initFlowbite();
    });

  }

  public menuItems = routes
    .map( (route) => { return route.children ?? []})
    .flat()
    .filter( route => !route.path?.includes('**') );

    //Metodo para cerrar el menu
     public closeMenu(): void {
      const isExpanded = this.menuToggle?.nativeElement.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        this.menuToggle?.nativeElement.click();
      }
     }
}
