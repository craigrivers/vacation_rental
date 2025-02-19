import { Routes } from '@angular/router';

import { AvailabilityComponent } from './availability/availability.component';
import { HomeComponent } from './home/home.component';
import { OutdoorPhotosComponent } from './outdoorPhotos/outdoorPhotos.component';
import { HouseDetailsComponent } from './houseDetails/houseDetails.component';
import { PricingTermsComponent } from './pricingTerms/pricingTerms.component';
import { LocalResourcesComponent } from './localResources/localResources.component';
import { LocationComponent } from './location/location.component';
import { LowerLevelPhotosComponent } from './lowerLevelPhotos/lowerLevelPhotos.component';
import { MainLevelPhotosComponent } from './mainLevelPhotos/mainLevelPhotos.component';

export const routes: Routes = [
  /*  
  {  path: '', redirectTo: '/home', pathMatch: 'full' },
  */
    { path: 'home', component: HomeComponent },
    { path: 'availability', component: AvailabilityComponent },
    { path: 'house-details', component: HouseDetailsComponent },
    { path: 'pricing-terms', component: PricingTermsComponent },
    { path: 'local-resources', component: LocalResourcesComponent },
    { path: 'location', component: LocationComponent },
    { path: 'outdoor-photos', component: OutdoorPhotosComponent },
    { path: 'lower-level-photos', component: LowerLevelPhotosComponent },
    { path: 'main-level-photos', component: MainLevelPhotosComponent }
  ];
