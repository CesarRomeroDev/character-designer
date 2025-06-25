import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AboutComponent implements OnInit{

  private title = inject(Title);
  private meta = inject(Meta);
  ngOnInit(): void {
        this.title.setTitle('About');
        this.meta.updateTag( { name: 'description', content: 'Esté es mi Trabajo' } );
        this.meta.updateTag( { name: 'og:title', content: 'About' } );
        this.meta.updateTag( { name: 'keywords', content: 'Julio Arceo Juarez: illustrator & character designer' } );
    }

}
