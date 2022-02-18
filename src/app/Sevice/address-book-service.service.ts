import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressBook } from '../Model/AddressBook';

@Injectable({
  providedIn: 'root'
})
export class AddressBookServiceService {

  constructor(private httpClient: HttpClient) { }

  /** posting data into database */
  postCall(addressBook : any){
    return this.httpClient.post(`http://localhost:8080/addressbook/create`, addressBook, { responseType: "text" as "json" });
  }

  /** Retrive all data from database. */
  getAllCall() {
    return this.httpClient.get(`http://localhost:8080/addressbook/getAll`);
  }

  /** Deleting address book details by id. */
  deleteCall(id: number) {
    return this.httpClient.delete(`http://localhost:8080/addressbook/delete/${id}`);
  }

  /** Updating existing contact by id. */
  updateCall(id: number , addressBook : any) {
    return this.httpClient.put(`http://localhost:8080/addressbook/update/${id}`, addressBook , { responseType: "text" as "json" });
  }

  /** Retrive address book data by id. */
  getById(id: number) {
    return this.httpClient.get(`http://localhost:8080/addressbook/get/${id}`);
  }
}
