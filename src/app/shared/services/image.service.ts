import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
    IMAGES = [
    { id: 1, url: '1.jpg', category: 'cats' },
    { id: 2, url: '2.jpg', category: 'cats' },
    { id: 3, url: '3.jpg', category: 'cats' },
    { id: 4, url: '4.jpg', category: 'cats' },
    { id: 5, url: '5.jpg', category: 'dogs' },
    { id: 6, url: '6.jpg', category: 'dogs' },
  ];

  constructor() { }

  getImages() {
    return this.IMAGES.slice(0);
  }

  getImage(id: Number) {
    return this.IMAGES.slice(0).find(i => i.id == id);
  }

  getCategories() {
      return ['all', 'cats', 'dogs'];
  }
}
