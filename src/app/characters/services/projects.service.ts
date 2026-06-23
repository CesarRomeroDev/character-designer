import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  //Injeccion del cliente http
  private http = inject(HttpClient);

  //URL base del Backend leida desde el archivo de entorno
  private apiUrl = `${enviroment.apiUrl}/projects`;

  // Obtiene todos los proyectos con sus assets
  getAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.apiUrl);
  }

  // Obtiene un proyecto especifico por su slug con sus assets
  getBySlug(slug: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${slug}`);
  }
}
