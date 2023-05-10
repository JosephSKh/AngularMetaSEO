import { Component } from '@angular/core';
import { MetaService } from '../mets.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private metaService: MetaService) {
    this.metaService.addMetaTag('og:title', 'Contact Page');
    this.metaService.addMetaTag('og:description', 'This is the Contact Page');
  }
}
