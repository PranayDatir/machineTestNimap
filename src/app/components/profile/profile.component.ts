import { Component } from '@angular/core';
import { RegisterFormPopUpService } from '../../service/register-form-pop-up.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
users:any;
  constructor(private registerData:RegisterFormPopUpService)
  {
    registerData.getData().subscribe((data)=>{
      console.log(data)
      this.users=data;
    })
  }
}
