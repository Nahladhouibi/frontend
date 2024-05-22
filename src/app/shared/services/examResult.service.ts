import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EXAMRESULT_URL } from '../config/url.config';

@Injectable()
export class ExamResultService {
     
    constructor(private http: HttpClient) {
    }
    create(data){
        return this.http.post(`${EXAMRESULT_URL}/`,data)
    }
    getExamResultPatient(id){
      return this.http.get(`${EXAMRESULT_URL}/getExamResultPatient/${id}`)
  }

  

}