import { AfterViewInit, Directive } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';
import { initFlowbite } from 'flowbite';

@Directive({
  selector: '[ThemeBlackDirective]',
  standalone: true,
})
export class ThemeBlackDirective implements AfterViewInit{

  constructor(
    private flowbiteService: FlowbiteService,
  ){}

  ngAfterViewInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      this.themeBlack();
      flowbite = initFlowbite();
    });
  }

  themeBlack(){
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleBtn = document.getElementById('theme-toggle');

        // Change the icons inside the button based on previous settings
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          themeToggleLightIcon!.classList.remove('hidden');
      } else {
          themeToggleDarkIcon!.classList.remove('hidden');
      }



      themeToggleBtn!.addEventListener('click', function() {

          // toggle icons inside button
          themeToggleDarkIcon!.classList.toggle('hidden');
          themeToggleLightIcon!.classList.toggle('hidden');

          // if set via local storage previously
          if (localStorage.getItem('color-theme')) {
              if (localStorage.getItem('color-theme') === 'light') {
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('color-theme', 'dark');
              } else {
                  document.documentElement.classList.remove('dark');
                  localStorage.setItem('color-theme', 'light');
              }

          // if NOT set via local storage previously
          } else {
              if (document.documentElement.classList.contains('dark')) {
                  document.documentElement.classList.remove('dark');
                  localStorage.setItem('color-theme', 'light');
              } else {
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('color-theme', 'dark');
              }
          }

      });
  }
 }
