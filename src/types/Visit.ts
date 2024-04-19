import User from "./User";

type Visit = {
  id: number;
  reason: string;
  observations: string;
  status?: boolean;
  color: string;
  clientDni?: string;
  clientName: string;
  clientPhone: string;
  clientAddress?: string;
  petName: string;
  petSpecies: string;
  petBreed?: string;
  appointmentDate: Date;
  attendedBy: number;
  createdAt?: Date;
};

export default Visit;
