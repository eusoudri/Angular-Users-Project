export class MemberFile{
 
  id:string ="";
  fileName: string ="";
  note: string ="";
  type: fileType;
  description: string ="";
  url:string ="";
  memberId:string ="";
  createdDate:string ="";
  typeDescription:string ="";

}
export enum fileType {
  CertidaoNascimento = 1,
  CertidaoCasamento = 2,
  CertidaoObito = 3,
  Outros = 99
}




