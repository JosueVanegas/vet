import User from "./User";

type Visit = {
  id?: number;
  reason: string;
  observations?: string;
  status: Boolean;
  color: string;
  clientDni?: string;
  clientName: string;
  clientPhone: string;
  clientAddress?: string;
  petName: string;
  petSpecies: string;
  petBreed?: string;
  appointmentDate?: Date;
  attendedBy: number;
  user?: User;
  createdAt?: Date;
};

export default Visit;
