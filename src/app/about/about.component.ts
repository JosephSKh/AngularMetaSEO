import { Component } from '@angular/core';
import { MetaService } from '../mets.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private metaService: MetaService) {
    this.metaService.addMetaTag('og:title', 'About Page');
    this.metaService.addMetaTag('og:description', 'This is the About Page');
  }
}
