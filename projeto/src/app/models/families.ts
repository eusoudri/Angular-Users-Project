import { StatusGeneric } from "./status-generic";
export class Family{ 
  name: string = "";
  id: string = null;
  antenato: string = "";
  isActive: boolean = true;
  status: StatusGeneric = new StatusGeneric();
  statusId: Number = null;
}