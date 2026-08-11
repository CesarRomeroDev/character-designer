import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../interfaces/character.interface';
import { ProjectsService } from '../../services/projects.service';
import { AssetMapper } from '../../mapper/character.mapper';
import { SkeletonLoaderComponent } from '../../../shared/components/ui/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-work-details',
  standalone: true,
  imports: [SkeletonLoaderComponent],
  templateUrl: './work-details.component.html',
  styleUrl: './work-details.component.css'
})
export default class WorkDetailsComponent implements OnInit{

  ngOnInit(): void {
    this.getWorkSlug();
  }

  private projectService = inject(ProjectsService);
  workSlug = inject(ActivatedRoute).snapshot.params['slug'];

  isLoading = signal(false);
  itemBySlug = signal<Character[]>([]);
  error = signal<string>('');


  async getWorkSlug(){
    this.isLoading.set(true);
    this.itemBySlug.set([]);
    this.error.set('');

    try {
      const project = await this.projectService.getBySlug(this.workSlug);
      this.itemBySlug.set(AssetMapper.toCharacterArrayFull(project.assets));
    } catch (error:any) {
      this.error.set(error.message);
    }finally{
      this.isLoading.set(false);
    }
  }

}
