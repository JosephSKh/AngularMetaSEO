import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataStateService } from './data.service';

@Injectable({providedIn: 'root'})
export class ProductService {
    constructor(
        private httpClient: HttpClient,
        private dataSevrvice: DataStateService    
    ) { }

    getProducts(): Observable<any> {
        return this.dataSevrvice.checkAndGetData('products', this.httpClient.get(`https://dummyjson.com/products`));
    }

    getProductDetails(id: number): Observable<any> {
        return this.dataSevrvice.checkAndGetData(`product${id}details`, this.httpClient.get(`https://dummyjson.com/products/${id}`));
    }
}