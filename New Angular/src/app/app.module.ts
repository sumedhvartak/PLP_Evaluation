import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewsidebarComponent } from './viewsidebar/viewsidebar.component';
import { EmployeeViewHoteldetailsComponent } from './employee-view-hoteldetails/employee-view-hoteldetails.component';
import { FooterComponent } from './footer/footer.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AdminHotelListComponent } from './admin-hotel-list/admin-hotel-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminRoomListComponent } from './admin-room-list/admin-room-list.component';
import { EmployeeRoomListComponent } from './employee-room-list/employee-room-list.component';
import { EmployeeRoomBookingComponent } from './employee-room-booking/employee-room-booking.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserHotelListComponent } from './user-hotel-list/user-hotel-list.component';
import { UserRoomListComponent } from './user-room-list/user-room-list.component';
import { UserRoomBookingComponent } from './user-room-booking/user-room-booking.component';

// import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

// import { MatTabsModule } from '@angular/material/tabs';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ViewsidebarComponent,
    EmployeeViewHoteldetailsComponent,
    FooterComponent,
    AddEmployeeComponent,
    AddHotelComponent,
    AddRoomComponent,
    EmployeeListComponent,
    AdminHotelListComponent,
    ProfileComponent,
    AdminRoomListComponent,
    EmployeeRoomListComponent,
    EmployeeRoomBookingComponent,
    PageNotFoundComponent,
    UserHotelListComponent,
    UserRoomListComponent,
    UserRoomBookingComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    // MatTabsModule,
    // RouterModule,
    // LayoutModule,
    // BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
