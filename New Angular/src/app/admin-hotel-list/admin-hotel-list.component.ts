import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-admin-hotel-list',
  templateUrl: './admin-hotel-list.component.html',
  styleUrls: ['./admin-hotel-list.component.css']
})
export class AdminHotelListComponent implements OnInit {

  hotels = [];
  constructor(private hotelService: HotelService) {
    this.hotelService.getHotelList().subscribe(data => {
      console.log(data.hotelList);
      this.hotels = data.hotelList;
    }, err => {
      console.log(err);
    });
   }

  deleteHotels(hotel) {
    this.hotelService.delHotel(hotel).subscribe(data => {
      console.log(data);
      this.hotels.splice(this.hotels.indexOf(this.deleteHotels), 1);
    }, err => {
      console.log(err);
    });
   }
 

  ngOnInit() {
  }

}
