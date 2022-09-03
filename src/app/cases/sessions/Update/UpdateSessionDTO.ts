export interface IUpdateSessionRequestDTO {
  id?: number;
  sessionType: string;
  schedulingDate: Date;
  schedulingType: string;
  status: string;
  subject: string;
  duration: number;
  created_at?: string;
  updated_at?: Date;
  sessionIdProfessional: number;
  sessionIdPatient: number;
}
export interface IUpdateSessionResponseDTO {
  id?: number;
  sessionType?: string;
  schedulingDate?: string;
  schedulingType?: string;
  status?: string;
  subject?: string;
  duration?: number;
  created_at?: string;
  updated_at?: string;
  sessionIdProfessional?: number;
  sessionIdPatient?: number;
}
