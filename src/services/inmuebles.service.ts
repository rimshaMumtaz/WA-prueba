import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  constructor(private http: HttpClient) {}

  getInmuebles(page: number): Observable<any> {
    const apiUrl = `https://laravelint.alisedainmobiliaria.com/api/new-search?tipo=10&page=${page}`;
    return this.http.get(apiUrl);
  }

  getDetalleInmueble(id: number): Observable<any> {
    const apiUrl = `https://laravelint.alisedainmobiliaria.com/api/get-property/${id}`;
    return this.http.get(apiUrl);
  }
}
