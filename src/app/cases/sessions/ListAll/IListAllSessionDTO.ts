export interface IListAllSessionResponseDTO {
  id: number;
  sessionType: string;
  schedulingDate: string;
  schedulingType: string;
  status: string;
  subject: string;
  duration: number;
  created_at: string;
  updated_at: string;
  sessionIdProfessional: number;
  sessionIdPatient: number;
}
