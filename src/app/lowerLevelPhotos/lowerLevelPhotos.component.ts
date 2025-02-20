import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lower-level-photos',
  templateUrl: '../util/photos.component.html',
  styleUrl: './lowerLevelPhotos.component.css',
  imports: [CommonModule]
})
export class LowerLevelPhotosComponent {
  title = 'Lower Level';

  // List of all image filenames
  images: { filename: string; description: string }[] = [
    { filename: 'BedroomQueenBed.jpg', description: 'Queen Size Bed.' },
    { filename: 'BasementBedroom_2025.jpg', description: 'Full and Queen size beds' },
    { filename: 'JackAndJillBath.jpg', description: 'Shared Bathroom' },
    { filename: 'JackandJillShower.jpg', description: 'Shower in shared bathroom' },
    { filename: 'bar.jpg', description: 'Bar and pool table' },
    { filename: 'BathroomByHotTub.jpg', description: 'Bathroom across from hot tub' },
  ];

  // Base path to images
  imagePath = 'assets/lower_level_images/';

}