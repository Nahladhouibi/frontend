import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_URL, DEMANDE_URL } from '../config/url.config';

@Injectable()
export class PatientService {
     
    constructor(private http: HttpClient) {
    }

    getAllPatient(){
        return this.http.get(`${AUTH_URL}/security/api/patient/getAllPatient`)
    }
    getPatientDetails(id){
      return this.http.get(`${AUTH_URL}/security/api/patient/${id}`)
  }

  getCoonectedPatientDetails(){
    return this.http.get(`${AUTH_URL}/security/api/patient/getCoonectedPatientDetails`)
}
  

}