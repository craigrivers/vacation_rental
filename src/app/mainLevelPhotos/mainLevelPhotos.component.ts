import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main-level-photos',
  templateUrl: '../util/photos.component.html',
  styleUrl: './mainLevelPhotos.component.css',
  imports: [CommonModule]
})
export class MainLevelPhotosComponent {
  title = 'monticello-vacation-rental';

  // List of all image filenames
  images: { filename: string; description: string }[] = [
    { filename: 'kitchen.jpg', description: 'Spacious kitchen with modern appliances.' },
    { filename: 'kitchenIsland.jpg', description: 'Six burner cooktop and large refrigerator.' },
    { filename: 'BathroomOffKitchen.jpg', description: '1/2 Bath off of kitchen.' },
    { filename: 'Den.jpg', description: 'Cozy den area with pullout couch.' },
    { filename: 'familyRoom.jpg', description: 'Large family room with comfortable seating.' },
    { filename: 'FirstFloorBedroomHallway.jpg', description: 'Hallway bedroom with queen size bed.' },
    { filename: 'HallwayBathroom.jpg', description: 'Hallway Bathroom.' },
    { filename: 'FirstFloorBackBedRoom.jpg', description: 'Owner’s suite with an ensuite bathroom.' },
    { filename: 'backbathroomshower.jpg', description: 'Shower in ensuite bathroom' },
    { filename: 'FirstFloorBedroomOwnerSuite.jpg', description: 'Owner’s suite with an ensuite bathroom.' },
    { filename: 'ownersSuiteShower.jpg', description: 'Shower in in ensuite bathroom.' },
    { filename: 'DeckOffKitchen.jpg', description: 'Beautiful deck right off the kitchen.' },
  ];

  // Base path to images
  imagePath = 'assets/main_level_images/';
}
