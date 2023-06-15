import { Component, OnInit, Input } from '@angular/core';

import { ImageService } from '../shared'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    title = "Photos";

    images: Array<any> = [];
    categories: Array<any> = [];
    @Input() filterBy?: string = 'all';

    constructor(private imageService: ImageService) {
        this.imageService = imageService;

        this.images = this.imageService.getImages();
        this.categories = imageService.getCategories();
    }

    ngOnInit() {}

    ngOnChanges() {
        this.images = this.imageService.getImages();
    }
}
