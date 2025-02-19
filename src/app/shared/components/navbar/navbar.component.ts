import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite'
import { routes } from '../../../characters/characters.routes';
import { ThemeBlackDirective } from '../../directives/theme-black.directive';
import { FlowbiteService } from '../../../services/flowbite.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ThemeBlackDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit{

  constructor(
    private flowbiteService: FlowbiteService,
  ){}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      this.menuItems;
      flowbite = initFlowbite();
    });
  }

  public menuItems = routes
    .map( route => route.children ?? [])
    .flat()
    .filter( route => !route.path?.includes('**') )
}
