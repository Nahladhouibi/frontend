import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-header-s',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
role:string
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.authService.roleSubject.subscribe(res=>{
      console.log(res);
     this.role=res 
    })
  }

}
