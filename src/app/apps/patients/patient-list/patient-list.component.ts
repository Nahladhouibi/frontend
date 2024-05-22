import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PatientService } from 'src/app/shared/services/patient.service';
import { ThemeConstantService } from 'src/app/shared/services/theme-constant.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
 
patients:any
   

  constructor( private patientService:PatientService,private message: NzMessageService) {}

  ngOnInit(): void {
     
    this.patientService.getAllPatient().subscribe(res=>{
        this.patients=res
    })
  }
   
  productsList = [
      {
          name: 'Gray Sofa',
          avatar: 'assets/images/others/thumb-9.jpg',
          earn: 1912,
          sales: 81,
          stock: 82,
      },
      {
          name: 'Beat Headphone',
          avatar: 'assets/images/others/thumb-10.jpg',
          earn: 1377,
          sales: 26,
          stock: 61
      },
      {
          name: 'Wooden Rhino',
          avatar: 'assets/images/others/thumb-11.jpg',
          earn: 9212,
          sales: 71,
          stock: 23,
      },
      {
          name: 'Red Chair',
          avatar: 'assets/images/others/thumb-12.jpg',
          earn: 1298,
          sales: 79,
          stock: 54,
      },
      {
          name: 'Wristband',
          avatar: 'assets/images/others/thumb-13.jpg',
          earn: 7376,
          sales: 60,
          stock: 76,
      }
  ]    

}  
