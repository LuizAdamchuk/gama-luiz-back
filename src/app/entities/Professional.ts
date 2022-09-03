export class Professional {
  public id: number;
  public name: string;
  public email: string;
  public password: string;
  public crp: string;
  public phoneNumber: string;
  public created_at: string;
  public updated_at: string;

  constructor(props: Professional) {
    Object.assign(this, props);
  }
}
