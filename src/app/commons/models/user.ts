export class User {
  id: number;
  type_user: string;
  name: string;
  username: string;
  lastname: string;
  firstname: string;
  password: string;
  phone: string;
  email: string;
  photo: string;
  country: string;
  city: string;
  address: string;
  postal_code: string;
  birthdate: Date;
  place_birth: string;
  country_birth: string;
  identification_number: string;
  date_expiration_identity: Date;
  passport_image: string;
  authentication: string;

  construct() {
    this.id = 0;
    this.type_user = "";
    this.username = "";
    this.firstname = "";
    this.lastname = "";
    this.password = "";
    this.phone = "";
    this.email = "";
    this.photo = "";
    this.country = "";
    this.city = "";
    this.address = "";
    this.postal_code = "";
    this.birthdate = new Date();
    this.place_birth = "";
    this.country_birth = "";
    this.identification_number = "";
    this.date_expiration_identity = new Date();
    this.passport_image = "";
    this.authentication = "";
  }
}
