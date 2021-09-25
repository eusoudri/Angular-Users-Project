import { Member } from "./member";
import { StatusGeneric } from "./status-generic";

export class KinshipRelationship{
 
  kin: StatusGeneric = new StatusGeneric();
  member: Member = new Member();
}