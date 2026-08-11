import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { firstValueFrom, Observable } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  //Injeccion del cliente http
  private http = inject(HttpClient);

  //URL base del Backend leida desde el archivo de entorno
  private apiUrl = `${environment.apiUrl}/projects`;

  // Obtiene todos los proyectos con sus assets
  async getAllProjects(): Promise<Project[]>{
    return await firstValueFrom( this.http.get<Project[]>(this.apiUrl) )
  }
 /*  getAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.apiUrl);
  } */

  // Obtiene un proyecto especifico por su slug con sus assets
  async getBySlug(slug: string): Promise<Project> {
    return await firstValueFrom( this.http.get<Project>(`${this.apiUrl}/${slug}`));
  }
}
