export interface IUpdatePatientRequestDTO {
  id?: number;
  name: string;
  email: string;
  document_register: string;
  gender: string;
  birthday?: Date;
  created_at?: string;
  updated_at?: Date;
}
export interface IUpdatePatientResponseDTO {
  id?: number;
  name?: string;
  email?: string;
  document_register?: string;
  gender?: string;
  birthday?: string;
  created_at?: string;
  updated_at?: string;
}
