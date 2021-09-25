import { MemberFile } from "./file";
import { Kinship } from "./kinship";
import { StatusGeneric } from "./status-generic";
import { Address } from "./address";

export class Member{
  firstName: string = "";
  lastName: string = "";
  profession: string = "";
  document: string = "";
  email: string = "";
  phone: string = "";
  phonePrefix: string = "";
  phoneDDD: string = "";
  id: string = null;
  gender: string = "M";
  birthDate : Date = new Date();
  birthPlace: string = "";
  marriageDate: Date = new Date();
  marriagePlace: string = "";
  spouseName: string = "";
  spouseBirthPlace: string = "";
  deathDate: Date = new Date();
  deathPlace: string = "";
  lineage: string = "";
  lineageId: string = "";
  address: Address = new Address();
  maritalStatus: StatusGeneric [] = new Array<StatusGeneric>()
  maritalStatusId: Number = null;
  kinship: Kinship [] = new Array<Kinship>();
  files: MemberFile [] = new Array<MemberFile>();
  applicant: boolean = false;
  ancestor: boolean = false;
  note: string = "";
  familyId: string = "";
}