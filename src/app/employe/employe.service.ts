import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { EmployeModule } from './employe.module';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  constructor(private http: HttpClient) {}
  apiurl = 'http://localhost:3000/employe';

  getAll(): Observable<EmployeModule[]> {
    return this.http.get<EmployeModule[]>(this.apiurl);
  }

  create(employe: any) {
    return this.http.post(this.apiurl, employe);
  }

  find(id: any): Observable<EmployeModule> {
    return this.http.get<EmployeModule>(this.apiurl + '/' + id);
  }

  update(id: any, employe: any) {
    return this.http.put(this.apiurl + '/' + id, employe);
  }

  delete(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }



}
