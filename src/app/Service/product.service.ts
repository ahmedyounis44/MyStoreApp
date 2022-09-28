import { HttpClient } from '@angular/common/http';
import { Injectable,Pipe, PipeTransform  } from '@angular/core';
import { catchError, filter, map, Observable, of } from 'rxjs';
import { Product } from '../Model/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://localhost:4200/assets/data.json';


    constructor(private http: HttpClient) {

     }

     getProduct(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);
    }




   }

