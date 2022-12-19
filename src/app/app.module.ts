import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopListComponent } from './top-list/top-list.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { MessagingComponent } from './messaging/messaging/messaging.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TopListComponent,
    PlantDetailsComponent,
    MessagingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService,
      { dataEncapsulation: false } )
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
