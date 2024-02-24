import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../components/registration/registration.component';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class RegisterFormPopUpService {

  constructor(private dialog:MatDialog ,private http:HttpClient) { }

  openDialog() {
    this.dialog.open(RegistrationComponent, {
      width: '60%',
      position: { left: '20%' , right:'20%'},
      panelClass: 'custom-dialog-container'
    });
  }
  closeDialog(){
    this.dialog.closeAll();
  }

  saveData(user:User){
    return this.http.post('http://localhost:3000/forms',user)
  }

  getData(){
    return this.http.get('http://localhost:3000/forms');
  }


}
