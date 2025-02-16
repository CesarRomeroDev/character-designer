import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite'
import { routes } from '../../../characters/characters.routes';
import { ThemeBlackDirective } from '../../directives/theme-black.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ThemeBlackDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit{

  ngOnInit(): void {
    initFlowbite();
  }

  public menuItems = routes
    .map( route => route.children ?? [])
    .flat()
    .filter( route => !route.path?.includes('**') )

}
