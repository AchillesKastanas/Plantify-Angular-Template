import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopListComponent } from './top-list/top-list.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'plants', component: TopListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: PlantDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
