import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopListComponent } from './top-list/top-list.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopListComponent,
    PlantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
