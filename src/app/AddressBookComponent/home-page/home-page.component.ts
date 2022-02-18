import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookServiceService } from 'src/app/Sevice/address-book-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  addressBooks: any = [];

  constructor(private router: Router, private service: AddressBookServiceService) { }

  ngOnInit(): void {
    this.service.getAllCall().subscribe(addressBooksData => {
      this.addressBooks = addressBooksData;
    })
  }

  onClick() {
    this.router.navigate(['Add']);
  }

  delete(id: number) {
    this.service.deleteCall(id).subscribe((result) => window.location.reload());
  }

  update(id: number) {
    this.router.navigate(['Update', id]);
  }
}
