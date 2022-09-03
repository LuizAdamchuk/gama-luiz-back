export interface IUpdateProfessionalRequestDTO {
  id?: number;
  name: string;
  email: string;
  password: string;
  crp: string;
  phoneNumber: string;
  created_at?: string;
  updated_at?: Date;
}
export interface IUpdateProfessionalResponseDTO {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  crp?: string;
  phoneNumber?: string;
  created_at?: string;
  updated_at?: string;
}
