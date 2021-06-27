import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Family } from '../models/families';
import { Person } from '../models/person';


@Injectable({
  providedIn: 'root'
})
export class MatarazzoService {

  protected apiUrl: string = 'https://matarazzoapi.azurewebsites.net/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getFamily(): Observable<Family[]> {
    return this.httpClient
    .get<Family[]>(this.apiUrl + 'families');
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

  public getPersonByFamilyId(familyId): Observable<Person[]> {
    return this.httpClient
    .get<Person[]>(this.apiUrl + 'families/' + familyId + '/people');
  }

  public postPerson(person : Person): Observable<Person> {
    return this.httpClient
    .post<Person>(this.apiUrl + 'people', person);
  }

  public putPerson(person : Person): Observable<Person> {
    return this.httpClient
    .put<Person>(`${this.apiUrl}people/${person.id} `, person);
  }

  public deletePerson(id : string): Observable<Person> {
    return this.httpClient
    .delete<Person>( `${this.apiUrl}people/${id} `);
  }

  public getGender() {
    return [
      { value: 'F', desc: 'Feminino' },
      { value: 'M', desc: 'Masculino' }
    ]
  }
}
