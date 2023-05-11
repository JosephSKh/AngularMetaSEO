import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../mets.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  product!: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private tstate: TransferState,
    private metaService: MetaService,
    ) {
      this.route.params.subscribe(
        (params: any) => {
          this.productService.getProductDetails(params.id).subscribe(
            product => {
              let keyState = makeStateKey<any>(`product${product.id}details`);
              this.tstate.set(keyState, product);
              this.product = product;
              this.metaService.addMetaTag('og:title', product.title);
              this.metaService.addMetaTag('og:description', product.description);
            }
          )
        }
      )
  }
}
