import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Car {
  id: number;
  engine: string;
  body: string;
  year: number;
  price: number;
  mileage: number;
  fuel_type: string;
  transmission: string;
  image: string;
  status: string;
  brand: number;
  name: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://47414b78d8bf.ngrok-free.app/api/cars/';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl, {withCredentials: true});
  }

}
