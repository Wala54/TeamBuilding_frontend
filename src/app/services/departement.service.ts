import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private apiServerUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  public getDepartementList(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/departement`);
  }

  public getDepartementById(id: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/departement/${id}`);
  }

  public addDepartement(departement:any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/departement`, departement);
  }

  public updateDepartement(departement: any): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/departement/update`, departement);
  }

  public deleteDepartement(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/departement/${id}`);
  }
}
