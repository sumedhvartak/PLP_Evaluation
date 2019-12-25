import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewsidebarComponent } from './viewsidebar/viewsidebar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { AdminHotelListComponent } from './admin-hotel-list/admin-hotel-list.component';
import { AdminRoomListComponent } from './admin-room-list/admin-room-list.component';
import { AuthGuard } from './auth.guard';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'viewsidebar', component: ViewsidebarComponent },
  { path: 'addEmployee', component: AddEmployeeComponent, canActivate: [AuthGuard], data: { expectedRole: ['admin'] } },
  { path: 'addHotel', component: AddHotelComponent },
  { path: 'addRoom', component: AddRoomComponent },
  { path: 'hotelList', component: AdminHotelListComponent },
  { path: 'adminRoomList', component: AdminRoomListComponent },
  { path: 'payment', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
