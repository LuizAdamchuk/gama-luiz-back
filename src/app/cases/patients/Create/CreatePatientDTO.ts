export interface ICreatePatientRequestDTO {
  id: number;
  name: string;
  email: string;
  document_register: string;
  gender: string;
  birthday: Date;
  created_at: string;
  updated_at: string;
}
