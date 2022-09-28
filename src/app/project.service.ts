import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Project,IProject } from 'src/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  addPjURL:string;
  getPjURL:string;
  deletePjURL:string;

  constructor(
    private http: HttpClient
  ) 
  {
    this.addPjURL="http://localhost:3000/addProject";
    this.getPjURL="http://localhost:3000/addProject";
    this.deletePjURL="http://localhost:3000/addProject";
   }




   addProject(endpoint:string, pj: Project): Observable <IProject[]> {
    console.log(pj);
     return this.http.post<IProject[]>(
       this.addPjURL,pj);
   }

   getAllProjects(): Observable <IProject[]>  {
    return this.http.get<IProject[]>(
      // this.getpjURL);
  "http://localhost:3000/addProject/");
   }


   deleteProject(pj:Project): Observable <IProject[]>  {
    return this.http.delete<IProject[]>(
      this.deletePjURL+'/'+pj.id );
  }

}


