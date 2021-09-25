import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Family } from '../models/families';
import { Member } from '../models/member';
import { StatusGeneric } from '../models/status-generic';


@Injectable({
  providedIn: 'root'
})
export class MatarazzoService {

  apiUrl: string = 'https://matarazzoapi.azurewebsites.net/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getFamily(): Observable<any> {
    return this.httpClient
    .get<any>(this.apiUrl + 'families').pipe(
      tap(res => {res.data.sort((a, b) => (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) ? 1 : -1)})
    );
  }

  public getFamilyById(familyid): Observable<Family> {
    return this.httpClient
    .get<Family>(`${this.apiUrl}families/${familyid} `);
  }

  public postFamily(family : Family): Observable<Family> {
    return this.httpClient
    .post<Family>(this.apiUrl + 'families', family);
  }

  public putFamily(family : Family): Observable<Family> {
    return this.httpClient
    .put<Family>(`${this.apiUrl}families/${family.id} `, family);
  }

  public deleteFamily(id : string): Observable<Family> {
    return this.httpClient
    .delete<Family>( `${this.apiUrl}families/${id} `);
  }
  public getFamiliesStatus(): Observable<StatusGeneric[]> {
    return this.httpClient
    .get<StatusGeneric[]>(this.apiUrl + 'familiesStatus');
  }

  public getMemberByFamilyId(familyId): Observable<Member[]> {
    return this.httpClient
    .get<Member[]>(this.apiUrl + 'families/' + familyId + '/members').pipe(
      tap(res => {res.sort((a, b) => (a.firstName.toLocaleLowerCase() > b.firstName.toLocaleLowerCase()) ? 1 : -1)})
    );
  }

  public getMember(memberId): Observable<Member> {
    return this.httpClient
    .get<Member>(`${this.apiUrl}members/${memberId }`)
  }

  public postMember(member : Member): Observable<Member> {
    return this.httpClient
    .post<Member>(this.apiUrl + 'members', member);
  }

  public putMember(member : Member): Observable<Member> {
    return this.httpClient
    .put<Member>(`${this.apiUrl}members/${member.id} `, member);
  }

  public deleteMember(id : string): Observable<Member> {
    return this.httpClient
    .delete<Member>( `${this.apiUrl}members/${id} `);
  }
  public getKin(): Observable<StatusGeneric[]> {
    return this.httpClient
    .get<StatusGeneric[]>(this.apiUrl + 'kins');
  }

  public deleteFiles(id : string): Observable<Member> {
    return this.httpClient
    .delete<Member>( `${this.apiUrl}members/files/${id} `);
  }

  public getMaritalStatus(): Observable<StatusGeneric[]> {
    return this.httpClient
    .get<StatusGeneric[]>(this.apiUrl + 'maritalstatus');
  }
  public uploadFile(formData : FormData, memberId: string): Observable<any> {
    return this.httpClient
    .post<any>(`${this.apiUrl}members/${memberId}/files `, formData);
  }
  public GenerateTree(familyId): Observable<Family> {
    return this.httpClient
    .get<Family>(`${this.apiUrl}families/${familyId}/generatetree`)
  }

  public getGender() {
    return [
      { value: 'F', desc: 'Feminino' },
      { value: 'M', desc: 'Masculino' }
    ]
  }
}
