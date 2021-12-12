export class RegisterDTO {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export class ServiceDTO {
  type: string;
  title: string;
  description: string;
  price: number;
  included: string[] = [];
  excluded: string[] = [];
}

export class AddressDTO {
  flat: string;
  street: string;
  city: string;
  state: string;
  pinCode: string;
}

export class RegisterAsProfessionalDTO {
  register: RegisterDTO;
  address: AddressDTO;
  service: ServiceDTO;

  constructor() {
    this.register = new RegisterDTO();
    this.address = new AddressDTO();
    this.service = new ServiceDTO();
  }
}
