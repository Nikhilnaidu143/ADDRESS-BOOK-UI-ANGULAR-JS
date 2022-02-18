import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBook } from 'src/app/Model/AddressBook';
import { AddressBookServiceService } from 'src/app/Sevice/address-book-service.service';

@Component({
  selector: 'app-add-address-book',
  templateUrl: './add-address-book.component.html',
  styleUrls: ['./add-address-book.component.scss']
})
export class AddAddressBookComponent implements OnInit {
  nameError: string;
  phoneError: string;
  emailError: string;
  zipCodeError: string;
  id: number;

  addressBook: AddressBook = new AddressBook("", "", null, "", "", null, "");

  constructor(private router: Router, private service: AddressBookServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id != undefined) {
      this.service.getById(this.id).subscribe(empData => {
        let result: any = empData;
        this.addressBook = result.data;
        console.log("address book :- ", this.addressBook);
      })
    }
  }

  /** on click on cancel symbol redirect to home. */
  onClick() {
    this.router.navigate(['Home']);
  }

  /** Saving for update and add new contact. */
  save() {
    // this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id == undefined) {
      console.log("address book data :- ", this.addressBook);
      this.service.postCall(this.addressBook).subscribe((result) => this.router.navigate(["Home"]));
    }
    else {
      console.log("updated book data :- " , this.addressBook);
      this.service.updateCall(this.id , this.addressBook).subscribe((result) => this.router.navigate(["Home"]));
    }
  }

  /** Name validation. */
  onInput() {
    const nameRegex = /^[A-Z]{1}[A-Za-z\s]{2,}$/;
    if (this.addressBook.full_name === "") {
      return this.nameError = " ";
    }
    else if (nameRegex.test(this.addressBook.full_name)) {
      return this.nameError = " ";
    }
    else {
      return this.nameError = "Invalid name...!";
    }
  }

  /** Phone number validation. */
  phoneInput(){
    const phoneRegex = /^[0-9]{10}$/;
    if(this.addressBook.phone_number === ""){
      return this.phoneError = " ";
    }
    else if(phoneRegex.test(this.addressBook.phone_number)) {
      return this.phoneError = " ";
    }
    else {
      return this.phoneError = "Invalid phone number.";
    }
  }

  /** Zip code validation. */
  zipInput() {
    const zipRegex = /^[0-9]{6}$/;
    if(this.addressBook.zip_code === ""){
      return this.zipCodeError = " ";
    }
    else if(zipRegex.test(this.addressBook.zip_code)) {
      return this.zipCodeError = " ";
    }
    else {
      return this.zipCodeError = "Invalid zip code.";
    }
  }
}
