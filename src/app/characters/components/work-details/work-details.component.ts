import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../interfaces/character.interface';
import { ProjectsService } from '../../services/projects.service';
import { AssetMapper } from '../../mapper/character.mapper';
import { SkeletonLoaderComponent } from '../../../shared/components/ui/skeleton-loader/skeleton-loader.component';
import { WorkDetailsListComponent } from "./work-details-list/work-details-list.component";

@Component({
  selector: 'app-work-details',
  standalone: true,
  imports: [SkeletonLoaderComponent, WorkDetailsListComponent],
  templateUrl: './work-details.component.html',
  styleUrl: './work-details.component.css'
})
export default class WorkDetailsComponent implements OnInit{

  ngOnInit(): void {
    this.getWorkSlug();
  }

  private projectService = inject(ProjectsService);
  workSlug = inject(ActivatedRoute).snapshot.params['slug'];

  isLoading = signal(true);
  itemBySlug = signal<Character[]>([]);
  error = signal<string>('');
  botton = signal<boolean>(false);


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

  isBotton(is: boolean){
    console.log(this.botton.set(is))
    return this.botton.set(is);
  }

}
