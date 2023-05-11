import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular SEO';

  products!: any[];

  constructor(private productService: ProductService,
    @Inject(PLATFORM_ID) platformId: Object,
    private tstate: TransferState) {
      if (isPlatformBrowser(platformId)) {
        this.productService.getProducts().subscribe(
          products => {
            let keyState = makeStateKey<any>(`products`);
            this.tstate.set(keyState, products);
            this.products = products.products;
          }
        );
      }
  }
}
