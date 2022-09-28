import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee, IEmployee } from 'src/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addEmpURL:string;
  getEmpURL:string;
  updateEmpURL:string;
  deleteEmpURL:string;

  // http://localhost:3000/emp/deleteEmployeeById
  
  constructor(private http :HttpClient) { 
    this.addEmpURL="http://localhost:3000/empDetails";
    this.getEmpURL="http://localhost:3000/empDetails";
    this.updateEmpURL="http://localhost:3000/empDetails";
    this.deleteEmpURL="http://localhost:3000/empDetails";
  }

  // return this.http.post<IEmployee[]>(
  //   this.addEmpURL,emp);





addEmployee(endpoint:string, emp: Employee): Observable <IEmployee[]>  {
  console.log(emp);
   return this.http.post<IEmployee[]>(
     this.addEmpURL,emp);
 }

getAllEmployee(): Observable <IEmployee[]>  {
  return this.http.get<IEmployee[]>(
    // this.getEmpURL);
"http://localhost:3000/empDetails/");


}

updateEmployee(endpoint: string, emp: Employee): Observable <IEmployee[]>  {
  endpoint= this.updateEmpURL
  return this.http.put<IEmployee[]>(
    endpoint,emp );
    
}

deleteEmployee(emp: Employee): Observable <IEmployee[]>  {
  return this.http.delete<IEmployee[]>(
    this.deleteEmpURL+'/'+emp.id );
}






}


