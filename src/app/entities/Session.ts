export class Session {
  public id: number;
  public sessionType: string;
  public schedulingDate: string;
  public schedulingType: string;
  public status: string;
  public subject: string;
  public duration: number;
  public created_at: string;
  public updated_at: string;
  public sessionIdProfessional: number;
  public sessionIdPatient: number;

  constructor(props: Session) {
    Object.assign(this, props);
  }
}
