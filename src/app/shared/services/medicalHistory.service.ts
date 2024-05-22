import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MIDICALHISTORY_URL } from '../config/url.config';

@Injectable()
export class MidicalHistoryService {
     
    constructor(private http: HttpClient) {
    }
    create(data){
        return this.http.post(`${MIDICALHISTORY_URL}/`,data)
    }
    getMedicalHistoryPatient(id){
      return this.http.get(`${MIDICALHISTORY_URL}/getMedicalHistoryPatient/${id}`)
  }

  getMyMedicalHistory(){
    return this.http.get(`${MIDICALHISTORY_URL}/getMyMedicalHistory`)
}

  

}