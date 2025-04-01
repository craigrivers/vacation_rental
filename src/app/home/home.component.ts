import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  images = [
    { src: 'assets/outdoor_images/back_exterior.jpg', alt: 'Exterior' },
    { src: 'assets/outdoor_images/FrontDoorFall.jpg', alt: 'Front View' },
    { src: 'assets/outdoor_images/sideGrill.jpg', alt: 'Side View' },
    { src: 'assets/main_level_images/kitchen.jpg', alt: 'Spacious kitchen with modern appliances.' },
    { src: 'assets/main_level_images/kitchenIsland.jpg', alt: 'Six burner cooktop and large refrigerator.' },
    { src: 'assets/main_level_images/BathroomOffKitchen.jpg', alt: '1/2 Bath off of kitchen.' },
    { src: 'assets/main_level_images/Den.jpg', alt: 'Cozy den area with pullout couch.' },
    { src: 'assets/main_level_images/FamilyRmFacingTV.JPG', alt: 'Large family room with comfortable seating.' },
    { src: 'assets/main_level_images/FirstFloorBedroomHallway.jpg', alt: 'Hallway bedroom with queen size bed.' },
    { src: 'assets/main_level_images/HallwayBathroom.jpg', alt: 'Hallway Bathroom.' },
    { src: 'assets/main_level_images/BackBedroom_2025.jpg', alt: 'Owners suite with an ensuite bathroom.' },
    { src: 'assets/main_level_images/backbathroomshower.jpg', alt: 'Shower in ensuite bathroom' },
    { src: 'assets/main_level_images/FirstFloorBedroomOwnerSuite.jpg', alt: 'Owners suite with an ensuite bathroom.' },
    { src: 'assets/main_level_images/ownersSuiteShower.jpg', alt: 'Shower in in ensuite bathroom.' },
    { src: 'assets/main_level_images/DeckOffKitchen.jpg', alt: 'Beautiful deck right off the kitchen.' }
  ];

  visibleThumbnails: any[] = [];
  private slideInterval: any;
  private readonly SLIDESHOW_DELAY = 5000; // 5 seconds
  private readonly RESUME_DELAY = 3000;    // 3 seconds pause after interaction
  private readonly VISIBLE_THUMBNAILS = 5; // Changed back to 5

  ngOnInit() {
    this.updateVisibleThumbnails();
    this.startSlideshow();
  }

  ngOnDestroy() {
    this.stopSlideshow();
  }

  startSlideshow() {
    this.stopSlideshow(); // Clear any existing interval first
    this.slideInterval = setInterval(() => {
      this.currentSlide = this.currentSlide === this.images.length - 1 
        ? 0 
        : this.currentSlide + 1;
      this.updateVisibleThumbnails();
    }, this.SLIDESHOW_DELAY);
  }

  stopSlideshow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  selectSlide(index: number) {
    this.currentSlide = index;
  }

  previousSlide() {
    this.stopSlideshow();
    this.currentSlide = this.currentSlide === 0 
      ? this.images.length - 1 
      : this.currentSlide - 1;
    this.resumeSlideshowWithDelay();
  }

  nextSlide() {
    this.stopSlideshow();
    this.currentSlide = this.currentSlide === this.images.length - 1 
      ? 0 
      : this.currentSlide + 1;
    this.resumeSlideshowWithDelay();
  }

  private resumeSlideshowWithDelay() {
    setTimeout(() => {
      this.startSlideshow();
    }, this.RESUME_DELAY);
  }

  updateVisibleThumbnails() {
    const start = Math.max(0, this.currentSlide - Math.floor(this.VISIBLE_THUMBNAILS / 2));
    const end = Math.min(start + this.VISIBLE_THUMBNAILS, this.images.length);
    
    // Adjust start if we're near the end
    const adjustedStart = end === this.images.length 
      ? Math.max(0, this.images.length - this.VISIBLE_THUMBNAILS) 
      : start;
    
    this.visibleThumbnails = this.images.slice(adjustedStart, end);
  }

  getActualIndex(visibleIndex: number): number {
    const start = Math.max(0, this.currentSlide - Math.floor(this.VISIBLE_THUMBNAILS / 2));
    return Math.min(start + visibleIndex, this.images.length - 1);
  }
}
