import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RegisterFormPopUpService } from '../../service/register-form-pop-up.service';
import { FormBuilder, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  
  constructor(private rs: RegisterFormPopUpService, private fb:FormBuilder) { 
    
  }

  userRegister:FormGroup;
  ngOnInit(): void {
    this.userRegister = this.fb.group({
            
            fname:[],
            lastname:[],
            email:[],
            contact:[],
            age:[],
            state:[],
            country:[],
            Address:[],
            tags:[],
            imageBase64:[]
    })
  }
 
  selectedImage: File | null = null;
  imageBase64: string | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedImage = file;

    // Convert the selected image to base64
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageBase64 = e.target.result;
      this.userRegister.controls['imageBase64'].setValue(this.imageBase64);
    };

    reader.readAsDataURL(file);
  }

  closeRegisterForm() {
    this.rs.closeDialog();
  }

  @ViewChild('fileInput') fileInput: ElementRef;

  selectImage() {
    this.fileInput.nativeElement.click();
  }

  onSubmit() {
    // Assuming saveData returns an observable, subscribe to it.
    this.rs.saveData(this.userRegister.value).subscribe(
      data => {
        // Handle success, if needed
        
        console.log('Data saved successfully', data);
        this.closeRegisterForm();
        alert("Data Inserted successfully.")
       
      },
      error => {
        // Handle error, if needed
        console.error('Error saving data', error);
      }
    );
  }
}