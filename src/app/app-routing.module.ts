import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAddressBookComponent } from './AddressBookComponent/add-address-book/add-address-book.component';
import { HomePageComponent } from './AddressBookComponent/home-page/home-page.component';


const routes: Routes = [
  { path: 'Add', component: AddAddressBookComponent },
  { path: 'Home', component: HomePageComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Update/:id', component: AddAddressBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
