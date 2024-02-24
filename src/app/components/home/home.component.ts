import { Component, ElementRef, ViewChild } from '@angular/core';
import { RegisterFormPopUpService } from '../../service/register-form-pop-up.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private rs:RegisterFormPopUpService){  }

  @ViewChild('regBtn')
  property:ElementRef;

  openRegisterForm(){
    this.rs.openDialog();
  }
}