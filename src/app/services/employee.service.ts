import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  public getAllEmployees(): Observable<any> {
    return this.http.get('${this.apiServerUrl}/employee');

  }


  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/employee/${id}`);
  }


  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${id}`);
  }

  public editPhoto(fileImage: File, id: number): Observable<any> {
    const data: FormData = new FormData();
    data.append('id', id.toString());
    data.append('image', fileImage);
    return this.http.put(`${this.apiServerUrl}/photo?id=${id}`, data);
  }

  public updateEmployee(employee: any): Observable<any> {
    const data: FormData = new FormData();
    data.append('user', JSON.stringify(employee));
    return this.http.put(`${this.apiServerUrl}/employee/update
    `, data);
  }

  public addEmployee(employee: any): Observable<any> {
    const data: FormData = new FormData();
    data.append('user', JSON.stringify(employee));
   
    return this.http.post(`${this.apiServerUrl}/createEmployee`, data);
  }
}
