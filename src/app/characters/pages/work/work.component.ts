import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WorkComponent implements OnInit{

  private title = inject(Title);
    private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Project');
    this.meta.updateTag( { name: 'description', content: 'Esté es mi Trabajo' } );
    this.meta.updateTag( { name: 'og:title', content: 'Project' } );
    this.meta.updateTag( { name: 'keywords', content: 'Julio Arceo Juarez: illustrator & character designer' } );
  }

}
