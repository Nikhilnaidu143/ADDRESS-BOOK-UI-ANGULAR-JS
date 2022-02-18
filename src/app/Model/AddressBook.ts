export class AddressBook {
    full_name: string;
    address: string;
    phone_number: string;
    city: string;
    state: string;
    zip_code: string;
    email: string;

    constructor(full_name: string, address: string, phone_number: string, city: string, state: string, zip_code: string, email: string) {
        this.full_name = full_name;
        this.address = address;
        this.phone_number = phone_number;
        this.city = city;
        this.state = state;
        this.zip_code = zip_code;
        this.email = email;
    }
}