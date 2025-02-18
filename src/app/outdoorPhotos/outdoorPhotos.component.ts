import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'outdoor-photos',
  templateUrl: './outdoorPhotos.component.html',
  styleUrl: './outdoorPhotos.component.css',
  imports: [CommonModule]
})
export class OutdoorPhotosComponent {
  title = 'monticello-vacation-rental';

  // List of all image filenames
  images: string[] = [
    'FrontDoorFall.jpg',
    'Monticello 002.jpg',
    'Monticello 004.jpg',
    'BackDeckTable.jpg',
    'back_exterior_2006.jpg',
    'sideGrill.jpg',
    'Monticello 010.jpg',
    'grillFall.jpg',
    'VolleyBallFall.jpg'
    
  ];

  // Base path to images
  imagePath = 'assets/outdoor_images/';

}