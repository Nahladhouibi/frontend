import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { MidicalHistoryService } from 'src/app/shared/services/medicalHistory.service';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css']
})
export class MyProfilComponent  {

    patientForm: FormGroup;
  avatarUrl: string = "assets/images/patient.png";
  selectedCountry: any;
  selectedLanguage: any;
history:any
  
  networkList = [
      {
          name: 'Facebook',
          icon: 'facebook',
          avatarColor: '#4267b1',
          avatarBg: 'rgba(66, 103, 177, 0.1)',
          status: true,
          link: 'https://facebook.com'
      },
      {
          name: 'Instagram',
          icon: 'instagram',
          avatarColor: '#fff',
          avatarBg: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
          status: false,
          link: 'https://instagram.com'
      },
      {
          name: 'Twitter',
          icon: 'twitter',
          avatarColor: '#1ca1f2',
          avatarBg: 'rgba(28, 161, 242, 0.1)',
          status: true,
          link: 'https://twitter.com'
      },
      {
          name: 'Dribbble',
          icon: 'dribbble',
          avatarColor: '#d8487e',
          avatarBg: 'rgba(216, 72, 126, 0.1)',
          status: false,
          link: 'https://dribbble.com'
      },
      {
          name: 'Github',
          icon: 'github',
          avatarColor: '#323131',
          avatarBg: 'rgba(50, 49, 49, 0.1)',
          status: true,
          link: 'https://github.com'
      },
      {
          name: 'Linkedin',
          icon: 'linkedin',
          avatarColor: '#0174af',
          avatarBg: 'rgba(1, 116, 175, 0.1)',
          status: true,
          link: 'https://linkedin.com'
      },
      {
          name: 'Dropbox',
          icon: 'dropbox',
          avatarColor: '#005ef7',
          avatarBg: 'rgba(0, 94, 247, 0.1)',
          status: false,
          link: 'https://dropbox.com'
      }
  ];
  
  notificationConfigList = [
      {
          title: "Everyone can look me up",
          desc: "Allow people found on your public.",
          icon: "user",
          color: "ant-avatar-blue",
          status: true
      },
      {
          title: "Everyone can contact me",
          desc: "Allow any peole to contact.",
          icon: "mobile",
          color: "ant-avatar-cyan",
          status: true
      },
      {
          title: "Show my location",
          desc: "Turning on Location lets you explore what's around you.",
          icon: "environment",
          color: "ant-avatar-gold",
          status: false
      },
      {
          title: "Email Notifications",
          desc: "Receive daily email notifications.",
          icon: "mail",
          color: "ant-avatar-purple",
          status: true
      },
      {
          title: "Unknow Source ",
          desc: "Allow all downloads from unknow source.",
          icon: "question",
          color: "ant-avatar-red",
          status: false
      },
      {
          title: "Data Synchronization",
          desc: "Allow data synchronize with cloud server",
          icon: "swap",
          color: "ant-avatar-green",
          status: true
      },
      {
          title: "Groups Invitation",
          desc: "Allow any groups invitation",
          icon: "usergroup-add",
          color: "ant-avatar-orange",
          status: true
      },
  ]
  
  constructor(
    private medicalHistoryService :MidicalHistoryService,
    private patientService:PatientService,
    private fb: FormBuilder, private modalService: NzModalService, private message: NzMessageService) {
  }
  
  ngOnInit(): void {
    this.patientForm = this.fb.group({
        username: [ null, [ Validators.required ] ],
        email: [ null, [ Validators.required ] ],
        phone: [ null, [ Validators.required ] ],
        sexe: [ null, [ Validators.required ] ],
        address: [ null, [ Validators.required ] ],
  
    });
    this.getMyHistory()
    this.patientService.getCoonectedPatientDetails().subscribe((res:any)=>{
        this.patientForm.setValue({
            username:res.firstName + " "+ res.lastName,
            email:res.email,
            phone:res.phone,
            sexe:res.sexe,
            address:res.address,
        })
        

    })
     
  }
  
  showConfirm(): void {
      this.modalService.confirm({
          nzTitle  : '<i>Do you want to change your password?</i>',
          nzOnOk   : () => this.message.success('Password Change Successfully')
      });
  }
  

  getMyHistory() {
    this.medicalHistoryService.getMyMedicalHistory().subscribe(res => {
        this.history = res
    })
}
  
  private getBase64(img: File, callback: (img: {}) => void): void {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(img);
  }
  
  handleChange(info: { file: NzUploadFile }): void {
      this.getBase64(info.file.originFileObj, (img: string) => {
          this.avatarUrl = img;
      });
  }
  }    