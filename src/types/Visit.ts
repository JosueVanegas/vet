type Visit = {
  id?: number;
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
  attendedBy: string;
  createdAt?: Date;
  employee?: Employee;
};

export default Visit;
