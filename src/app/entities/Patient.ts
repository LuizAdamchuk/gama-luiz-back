export class Patient {
  public id: number;
  public name: string;
  public email: string;
  public document_register: string;
  public gender: string;
  public birthday: string;
  public created_at: string;
  public updated_at: string;

  constructor(props: Patient) {
    Object.assign(this, props);
  }
}
