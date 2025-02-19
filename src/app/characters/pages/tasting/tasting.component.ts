import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tasting',
  standalone: true,
  imports: [],
  templateUrl: './tasting.component.html',
  styleUrl: './tasting.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TastingComponent implements OnInit{

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('tasting-menu');
    this.meta.updateTag( { name: 'description', content: 'Esté es mi Trabajo' } );
    this.meta.updateTag( { name: 'og:title', content: 'tasting-menu' } );
    this.meta.updateTag( { name: 'keywords', content: 'Julio Arceo Juarez: illustrator & character designer' } );
  }

}
