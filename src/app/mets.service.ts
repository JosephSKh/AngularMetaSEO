import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class MetaService {
    constructor(private meta: Meta) { }

    addMetaTag(key: string, value: string) {
        this.meta.removeTag(`name='${key}'`);
        this.meta.addTag({ name: key, content: value, property: key});
    }
}